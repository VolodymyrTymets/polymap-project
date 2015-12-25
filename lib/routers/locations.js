//function tile2long(x,z) {
//    return (x/Math.pow(2,z)*360-180);
//}
//function tile2lat(y,z) {
//    var n=Math.PI-2*Math.PI*y/Math.pow(2,z);
//    return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
//}
//function long2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }
//function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }

Router.route( "locations/:x/:y/:z", function() {
    //console.log('x - >',this.params.x);
    //console.log('y - >',this.params.y);
    //console.log('z - >',this.params.z);
    //console.log('tile2long - >',tile2long(this.params.x, this.params.z));
    //console.log('tile2lat - >', tile2lat(this.params.y, this.params.z));
    var z = this.params.z;
    var x = this.params.x;
    var y = this.params.y;
    this.response.statusCode = 200;
    var data = {
        type: "FeatureCollection",
        features:[]
    }
    Locations.find({
       $where: 'if(this.LatLng){'
           +'     function long2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }'
           +'     function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }'
           +'    var lon = parseFloat(this.LatLng.split(",")[1]);'
           +'    var lat = parseFloat(this.LatLng.split(",")[0]);'
           +'    var long2 = long2tile(lon, '+z+');'
           +'    var lat2  = lat2tile(lat,'+z+');'

           +'    return (long2 == '+x+' && lat2 == '+y+')'
           +'}'
           +'else{'
           +'    return false'
           +'}'

   }).forEach(function(location){
        if(location.LatLng) {
            data.features.push({
                id:location._id,
                geometry: {
                    coordinates: _.map(location.LatLng.split(',').reverse(), parseFloat),
                    type: "Point"
                },
                LocationName:location.LocationName,
                Frequency:location.Frequency,
            })
        }
    });
   // console.log('count - >',count)
    //Locations.find({},{sort: {Frequency: -1}, limit:100}).forEach(function(location){
    //    if(location.LatLng) {
    //        data.features.push({
    //            id:location._id,
    //            geometry: {
    //                coordinates: _.map(location.LatLng.split(',').reverse(), parseFloat),
    //                type: "Point"
    //            },
    //            LocationName:location.LocationName,
    //            Frequency:location.Frequency,
    //        })
    //    }
    //});
    this.response.end(EJSON.stringify(data));
}, { where: "server" });