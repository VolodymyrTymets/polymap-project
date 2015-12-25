// This methods  recalculate  difference between XYZ and TMS tiles
// code from http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames

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
    var z = this.params.z;
    var x = this.params.x;
    var y = this.params.y;

    var data = {
        type: "FeatureCollection",
        features:[]
    }
    // Find only those data that included in the zoom square
    Locations.find({
       $where: 'if(this.LatLng){'
           +'    function long2tile(lon,zoom) { return (Math.floor((lon+180)/360*Math.pow(2,zoom))); }'
           +'    function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }'
           +'    var lon = parseFloat(this.LatLng.split(",")[1]);'
           +'    var lat = parseFloat(this.LatLng.split(",")[0]);'
           +'    var long2 = long2tile(lon, '+z+');'
           +'    var lat2  = lat2tile(lat,'+z+');'
           +'    return (long2 == '+x+' && lat2 == '+y+')'
           +'}'
           +'else{'
           +'    return false'
           +'}'
   // Return data in specific format for polymap js
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
    this.response.statusCode = 200;
    this.response.end(EJSON.stringify(data));
}, { where: "server" });