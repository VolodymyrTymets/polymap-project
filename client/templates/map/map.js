Template.Map.onRendered(function () {

    var po = org.polymaps;

    // Init map
    var map = po.map()
        .container(document.getElementById("map").appendChild(po.svg("svg")))
        .center({lat: 37.787, lon: -122.228})
        .zoom(2)
        .add(po.interact());

    // Get map from http://www.openstreetmap.org
    map.add(po.image()
        .url(po.url("http://{S}tile.openstreetmap.org"
        + "/{Z}/{X}/{Y}.png")
            .hosts(["a.", "b.", "c.", ""])));

    // Load Data from server (lib/routes/locations.js)
    map.add(po.geoJson()
        .url("locations/{X}/{Y}/{Z}") // load from server
        .on("load", load));


    // callback when data loaded
    // (data will be reload if user change map zoom)
    function load(e) {
        for (var i = 0; i < e.features.length; i++) {
          // Create new circle for each new data
          var circle = new Circle({
              $element:$(e.features[i].element),
              data: e.features[i].data,
              zoom:e.tile.zoom
          });
          circle.init();
        }
    }
});