//var _load = function (e,data) {
//    debugger
//    var cluster = e.tile.cluster || (e.tile.cluster = Template.Map._kmeans()
//            .iterations(16)
//            .size(64));
//    Locations.find().forEach(function(location){
//        if(location.LatLng) cluster.add(location.LatLng.split(','));
//    })
//
//    var tile = e.tile, g = tile.element;
//    while (g.lastChild) g.removeChild(g.lastChild);
//
//    var means = cluster.means();
//    means.sort(function(a, b) { return b.size - a.size; });
//    for (var i = 0; i < means.length; i++) {
//        var mean = means[i], point = g.appendChild(Template.Map._Po.svg("circle"));
//        point.setAttribute("cx", mean.x);
//        point.setAttribute("cy", mean.y);
//        point.setAttribute("r", Math.pow(2, tile.zoom - 11) * Math.sqrt(mean.size));
//    }
//}

Template.Map.onRendered(function () {
    // save poly maps
    Template.Map._Po = org.polymaps;
    var po = org.polymaps;

    // Init map
    var map = po.map()
        .container(document.getElementById("map").appendChild(po.svg("svg")))
        .center({lat: 37.787, lon: -122.228})
        .zoom(2)
        .add(po.interact());

    map.add(po.image()
        .url(po.url("http://{S}tile.openstreetmap.org"
        + "/{Z}/{X}/{Y}.png")
            .hosts(["a.", "b.", "c.", ""])));

    //var data = [];
    //Locations.find({},{sort: {Frequency: -1}, limit:100}).forEach(function(location){
    //    if(location.LatLng) {
    //        data.push({
    //            geometry: {
    //                coordinates: location.LatLng.split(',').reverse(),
    //                type: "Point"
    //            }
    //        })
    //    }
    //});

    map.add(po.geoJson()
        .url("locations/{X}/{Y}/{Z}") // load from server
       // .features(data)
        .on("load", load));

    //map.add(po.compass()
    //    .pan("none"));

    function load(e) {
        var r = 20 * Math.pow(2, e.tile.zoom - 12);
        for (var i = 0; i < e.features.length; i++) {
          var c = $(e.features[i].element);
          c.attr('r',r * e.features[i].data.Frequency);
          c.attr("opacity", .5);
          //var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          //var text =   document.createElementNS('http://www.w3.org/2000/svg', 'text');
          //$(text).text( e.features[i].data.LocationName);
          //$(text).attr('transform', c.attr('transform'))
          //c.parent().add("svg:g", c);
          c.parent().append(c);
          //$(g).attr('transform', c.attr('transform'))
          //$(g).append(c);
          //$(g).append(text);

        }
    }
})