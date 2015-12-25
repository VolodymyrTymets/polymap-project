Locations = new Mongo.Collection('locations');

if(Meteor.isServer){
    if(!Locations.findOne()){
        var locations = [
            {
                "LocationName": "India",
                "Frequency": 803,
                "LatLng": "20.593684,78.96288"
            },
            {
                "LocationName": "San Francisco, CA",
                "Frequency": 472,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "Bangalore, India",
                "Frequency": 457,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "London, United Kingdom",
                "Frequency": 390,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "United States",
                "Frequency": 390,
                "LatLng": "37.09024,-95.712891"
            },
            {
                "LocationName": "Germany",
                "Frequency": 316,
                "LatLng": "51.165691,10.451526"
            },
            {
                "LocationName": "Israel",
                "Frequency": 266,
                "LatLng": "31.046051,34.851612"
            },
            {
                "LocationName": "New York, NY",
                "Frequency": 245,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "France",
                "Frequency": 236,
                "LatLng": "46.227638,2.213749"
            },
            {
                "LocationName": "Paris, France",
                "Frequency": 229,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "Pune, India",
                "Frequency": 225,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "New York, United States",
                "Frequency": 222,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "United Kingdom",
                "Frequency": 214,
                "LatLng": "55.378051,-3.435973"
            },
            {
                "LocationName": "Berlin, Germany",
                "Frequency": 182,
                "LatLng": "52.5200066,13.404954"
            },
            {
                "LocationName": "California",
                "Frequency": 180,
                "LatLng": "36.778261,-119.4179324"
            },
            {
                "LocationName": "Sweden",
                "Frequency": 180,
                "LatLng": "60.128161,18.643501"
            },
            {
                "LocationName": "Chennai, India",
                "Frequency": 174,
                "LatLng": "13.0826802,80.2707184"
            },
            {
                "LocationName": "Los Angeles, CA",
                "Frequency": 165,
                "LatLng": "34.0522342,-118.2436849"
            },
            {
                "LocationName": "Russia",
                "Frequency": 163,
                "LatLng": "61.52401,105.318756"
            },
            {
                "LocationName": "Chicago, IL",
                "Frequency": 160,
                "LatLng": "41.8781136,-87.6297982"
            },
            {
                "LocationName": "Italy",
                "Frequency": 160,
                "LatLng": "41.87194,12.56738"
            },
            {
                "LocationName": "Melbourne, Australia",
                "Frequency": 156,
                "LatLng": "-37.814107,144.96328"
            },
            {
                "LocationName": "Toronto, Canada",
                "Frequency": 152,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Seattle, WA",
                "Frequency": 148,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "Boston, MA",
                "Frequency": 147,
                "LatLng": "42.3600825,-71.0588801"
            },
            {
                "LocationName": "Mumbai, India",
                "Frequency": 147,
                "LatLng": "19.0759837,72.8776559"
            },
            {
                "LocationName": "Australia",
                "Frequency": 146,
                "LatLng": "-25.274398,133.775136"
            },
            {
                "LocationName": "Bangalore",
                "Frequency": 139,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Singapore",
                "Frequency": 133,
                "LatLng": "1.352083,103.819836"
            },
            {
                "LocationName": "Bengaluru, India",
                "Frequency": 131,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Sydney, Australia",
                "Frequency": 129,
                "LatLng": "-33.8674869,151.2069902"
            },
            {
                "LocationName": "Hyderabad",
                "Frequency": 128,
                "LatLng": "17.385044,78.486671"
            },
            {
                "LocationName": "Canada",
                "Frequency": 126,
                "LatLng": "56.130366,-106.346771"
            },
            {
                "LocationName": "Delhi, India",
                "Frequency": 122,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "Brazil",
                "Frequency": 121,
                "LatLng": "-14.235004,-51.92528"
            },
            {
                "LocationName": "Ukraine",
                "Frequency": 119,
                "LatLng": "48.379433,31.16558"
            },
            {
                "LocationName": "Vancouver, Canada",
                "Frequency": 119,
                "LatLng": "49.2827291,-123.1207375"
            },
            {
                "LocationName": "London",
                "Frequency": 113,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "China",
                "Frequency": 108,
                "LatLng": "35.86166,104.195397"
            },
            {
                "LocationName": "Beijing, China",
                "Frequency": 106,
                "LatLng": "39.904211,116.407395"
            },
            {
                "LocationName": "Belgium",
                "Frequency": 105,
                "LatLng": "50.503887,4.469936"
            },
            {
                "LocationName": "Moscow, Russia",
                "Frequency": 104,
                "LatLng": "55.755826,37.6173"
            },
            {
                "LocationName": "Hyderabad, India",
                "Frequency": 102,
                "LatLng": "17.385044,78.486671"
            },
            {
                "LocationName": "Spain",
                "Frequency": 102,
                "LatLng": "40.463667,-3.74922"
            },
            {
                "LocationName": "Denmark",
                "Frequency": 99,
                "LatLng": "56.26392,9.501785"
            },
            {
                "LocationName": "Netherlands",
                "Frequency": 97,
                "LatLng": "52.132633,5.291266"
            },
            {
                "LocationName": "New York",
                "Frequency": 91,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Istanbul, Turkey",
                "Frequency": 88,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "Switzerland",
                "Frequency": 88,
                "LatLng": "46.818188,8.227512"
            },
            {
                "LocationName": "Austin, TX",
                "Frequency": 86,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Montreal, Canada",
                "Frequency": 84,
                "LatLng": "45.5016889,-73.567256"
            },
            {
                "LocationName": "Stockholm, Sweden",
                "Frequency": 84,
                "LatLng": "59.3293235,18.0685808"
            },
            {
                "LocationName": "Madrid, Spain",
                "Frequency": 82,
                "LatLng": "40.4167754,-3.7037902"
            },
            {
                "LocationName": "Shanghai, China",
                "Frequency": 82,
                "LatLng": "31.230416,121.473701"
            },
            {
                "LocationName": "Turkey",
                "Frequency": 79,
                "LatLng": "38.963745,35.243322"
            },
            {
                "LocationName": "UK",
                "Frequency": 77,
                "LatLng": "55.378051,-3.435973"
            },
            {
                "LocationName": "Atlanta, GA",
                "Frequency": 76,
                "LatLng": "33.7489954,-84.3879824"
            },
            {
                "LocationName": "San Diego, CA",
                "Frequency": 75,
                "LatLng": "32.715738,-117.1610838"
            },
            {
                "LocationName": "Poland",
                "Frequency": 74,
                "LatLng": "51.919438,19.145136"
            },
            {
                "LocationName": "Delhi",
                "Frequency": 73,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "New Delhi",
                "Frequency": 70,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "Brooklyn, NY",
                "Frequency": 68,
                "LatLng": "40.6781784,-73.9441579"
            },
            {
                "LocationName": "San Jose, CA",
                "Frequency": 66,
                "LatLng": "37.3382082,-121.8863286"
            },
            {
                "LocationName": "Ireland",
                "Frequency": 65,
                "LatLng": "53.41291,-8.24389"
            },
            {
                "LocationName": "Gurgaon, India",
                "Frequency": 64,
                "LatLng": "28.4594965,77.0266383"
            },
            {
                "LocationName": "Hong Kong",
                "Frequency": 62,
                "LatLng": "22.396428,114.109497"
            },
            {
                "LocationName": "Portland, OR",
                "Frequency": 62,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Pune",
                "Frequency": 62,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Barcelona, Spain",
                "Frequency": 60,
                "LatLng": "41.3850639,2.1734035"
            },
            {
                "LocationName": "Dallas, TX",
                "Frequency": 58,
                "LatLng": "32.7766642,-96.7969879"
            },
            {
                "LocationName": "Romania",
                "Frequency": 58,
                "LatLng": "45.943161,24.96676"
            },
            {
                "LocationName": "Europe",
                "Frequency": 56,
                "LatLng": "54.5259614,15.2551187"
            },
            {
                "LocationName": "Kochi, India",
                "Frequency": 56,
                "LatLng": "9.9312328,76.2673041"
            },
            {
                "LocationName": "Manchester, United Kingdom",
                "Frequency": 56,
                "LatLng": "53.4807593,-2.2426305"
            },
            {
                "LocationName": "Minneapolis, MN",
                "Frequency": 56,
                "LatLng": "44.977753,-93.2650108"
            },
            {
                "LocationName": "Paris",
                "Frequency": 56,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "South Africa",
                "Frequency": 56,
                "LatLng": "-30.559482,22.937506"
            },
            {
                "LocationName": "Milan, Italy",
                "Frequency": 55,
                "LatLng": "45.4654219,9.1859243"
            },
            {
                "LocationName": "Norway",
                "Frequency": 55,
                "LatLng": "60.472024,8.468946"
            },
            {
                "LocationName": "Philadelphia, PA",
                "Frequency": 55,
                "LatLng": "39.9525839,-75.1652215"
            },
            {
                "LocationName": "Argentina",
                "Frequency": 53,
                "LatLng": "-38.416097,-63.616672"
            },
            {
                "LocationName": "Dhaka, Bangladesh",
                "Frequency": 52,
                "LatLng": "23.810332,90.4125181"
            },
            {
                "LocationName": "india",
                "Frequency": 52,
                "LatLng": "20.593684,78.96288"
            },
            {
                "LocationName": "London, UK",
                "Frequency": 52,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "Maryland",
                "Frequency": 52,
                "LatLng": "39.0457549,-76.6412712"
            },
            {
                "LocationName": "NYC",
                "Frequency": 52,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Vienna, Austria",
                "Frequency": 52,
                "LatLng": "48.2081743,16.3738189"
            },
            {
                "LocationName": "Amsterdam, Netherlands",
                "Frequency": 51,
                "LatLng": "52.3702157,4.8951679"
            },
            {
                "LocationName": "Tehran, Iran",
                "Frequency": 51,
                "LatLng": "35.6891975,51.3889736"
            },
            {
                "LocationName": "Zurich, Switzerland",
                "Frequency": 51,
                "LatLng": "47.3768866,8.541694"
            },
            {
                "LocationName": "Dublin, Ireland",
                "Frequency": 50,
                "LatLng": "53.3498053,-6.2603097"
            },
            {
                "LocationName": "Boston",
                "Frequency": 49,
                "LatLng": "42.3600825,-71.0588801"
            },
            {
                "LocationName": "Lyon, France",
                "Frequency": 49,
                "LatLng": "45.764043,4.835659"
            },
            {
                "LocationName": "New Jersey",
                "Frequency": 49,
                "LatLng": "40.0583238,-74.4056612"
            },
            {
                "LocationName": "Pakistan",
                "Frequency": 49,
                "LatLng": "30.375321,69.345116"
            },
            {
                "LocationName": "Brisbane, Australia",
                "Frequency": 48,
                "LatLng": "-27.4710107,153.0234489"
            },
            {
                "LocationName": "Sao Paulo, Brazil",
                "Frequency": 48,
                "LatLng": "-23.5505199,-46.6333094"
            },
            {
                "LocationName": "Asia",
                "Frequency": 47,
                "LatLng": "34.047863,100.6196553"
            },
            {
                "LocationName": "Munich, Germany",
                "Frequency": 47,
                "LatLng": "48.1351253,11.5819806"
            },
            {
                "LocationName": "Denver, CO",
                "Frequency": 46,
                "LatLng": "39.7392358,-104.990251"
            },
            {
                "LocationName": "Hamburg, Germany",
                "Frequency": 46,
                "LatLng": "53.5510846,9.9936818"
            },
            {
                "LocationName": "New Delhi, India",
                "Frequency": 46,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "Sacramento, CA",
                "Frequency": 46,
                "LatLng": "38.5815719,-121.4943996"
            },
            {
                "LocationName": "Kolkata, India",
                "Frequency": 43,
                "LatLng": "22.572646,88.363895"
            },
            {
                "LocationName": "Tel Aviv, Israel",
                "Frequency": 43,
                "LatLng": "32.0852999,34.7817676"
            },
            {
                "LocationName": "England",
                "Frequency": 42,
                "LatLng": "52.3555177,-1.1743197"
            },
            {
                "LocationName": "Philippines",
                "Frequency": 41,
                "LatLng": "12.879721,121.774017"
            },
            {
                "LocationName": "Finland",
                "Frequency": 40,
                "LatLng": "61.92411,25.748151"
            },
            {
                "LocationName": "Oslo, Norway",
                "Frequency": 40,
                "LatLng": "59.9138688,10.7522454"
            },
            {
                "LocationName": "Texas",
                "Frequency": 40,
                "LatLng": "31.9685988,-99.9018131"
            },
            {
                "LocationName": "Washington, DC",
                "Frequency": 40,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Lahore, Pakistan",
                "Frequency": 39,
                "LatLng": "31.5546061,74.3571581"
            },
            {
                "LocationName": "San Francisco Bay Area",
                "Frequency": 39,
                "LatLng": "37.9994669,-122.174605"
            },
            {
                "LocationName": "Buenos Aires, Argentina",
                "Frequency": 38,
                "LatLng": "-34.6036844,-58.3815591"
            },
            {
                "LocationName": "Iran",
                "Frequency": 38,
                "LatLng": "32.427908,53.688046"
            },
            {
                "LocationName": "Massachusetts",
                "Frequency": 36,
                "LatLng": "42.4072107,-71.3824374"
            },
            {
                "LocationName": "Ottawa, Canada",
                "Frequency": 36,
                "LatLng": "45.4215296,-75.6971931"
            },
            {
                "LocationName": "Barcelona",
                "Frequency": 35,
                "LatLng": "41.3850639,2.1734035"
            },
            {
                "LocationName": "Cape Town, South Africa",
                "Frequency": 35,
                "LatLng": "-33.9248685,18.4240553"
            },
            {
                "LocationName": "Prague, Czech Republic",
                "Frequency": 35,
                "LatLng": "50.0755381,14.4378005"
            },
            {
                "LocationName": "Anywhere, USA",
                "Frequency": 34,
                "LatLng": "43.2269882,-70.9073724"
            },
            {
                "LocationName": "Auckland, New Zealand",
                "Frequency": 34,
                "LatLng": "-36.8484597,174.7633315"
            },
            {
                "LocationName": "Rome, Italy",
                "Frequency": 34,
                "LatLng": "41.9027835,12.4963655"
            },
            {
                "LocationName": "Sofia, Bulgaria",
                "Frequency": 34,
                "LatLng": "42.6977082,23.3218675"
            },
            {
                "LocationName": "Gainesville, FL",
                "Frequency": 33,
                "LatLng": "29.6516344,-82.3248262"
            },
            {
                "LocationName": "San Francisco",
                "Frequency": 33,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "Seoul, South Korea",
                "Frequency": 33,
                "LatLng": "37.566535,126.9779692"
            },
            {
                "LocationName": "Vietnam",
                "Frequency": 33,
                "LatLng": "14.058324,108.277199"
            },
            {
                "LocationName": "Wiltshire, United Kingdom",
                "Frequency": 33,
                "LatLng": "51.3491996,-1.9927105"
            },
            {
                "LocationName": "Beijing,China",
                "Frequency": 32,
                "LatLng": "39.904211,116.407395"
            },
            {
                "LocationName": "Bucharest, Romania",
                "Frequency": 32,
                "LatLng": "44.4267674,26.1025384"
            },
            {
                "LocationName": "Los Altos, CA",
                "Frequency": 32,
                "LatLng": "37.3852183,-122.1141298"
            },
            {
                "LocationName": "Portugal",
                "Frequency": 32,
                "LatLng": "39.399872,-8.224454"
            },
            {
                "LocationName": "Raleigh, NC",
                "Frequency": 32,
                "LatLng": "35.7795897,-78.6381787"
            },
            {
                "LocationName": "Cambridge, MA",
                "Frequency": 31,
                "LatLng": "42.3736158,-71.1097335"
            },
            {
                "LocationName": "Kiev, Ukraine",
                "Frequency": 31,
                "LatLng": "50.4501,30.5234"
            },
            {
                "LocationName": "Phoenix, AZ",
                "Frequency": 31,
                "LatLng": "33.4483771,-112.0740373"
            },
            {
                "LocationName": "Brooklyn",
                "Frequency": 30,
                "LatLng": "40.6781784,-73.9441579"
            },
            {
                "LocationName": "Colombia",
                "Frequency": 30,
                "LatLng": "4.570868,-74.297333"
            },
            {
                "LocationName": "Colombo, Sri Lanka",
                "Frequency": 30,
                "LatLng": "6.9270786,79.861243"
            },
            {
                "LocationName": "Houston, TX",
                "Frequency": 30,
                "LatLng": "29.7604267,-95.3698028"
            },
            {
                "LocationName": "Malaysia",
                "Frequency": 30,
                "LatLng": "4.210484,101.975766"
            },
            {
                "LocationName": "Mexico",
                "Frequency": 30,
                "LatLng": "23.634501,-102.552784"
            },
            {
                "LocationName": "Singapore, Singapore",
                "Frequency": 30,
                "LatLng": "1.3553794,103.8677444"
            },
            {
                "LocationName": "Sri Lanka",
                "Frequency": 30,
                "LatLng": "7.873054,80.771797"
            },
            {
                "LocationName": "Florida",
                "Frequency": 29,
                "LatLng": "27.6648274,-81.5157535"
            },
            {
                "LocationName": "Johannesburg, South Africa",
                "Frequency": 29,
                "LatLng": "-26.2041028,28.0473051"
            },
            {
                "LocationName": "Munich",
                "Frequency": 29,
                "LatLng": "48.1351253,11.5819806"
            },
            {
                "LocationName": "USA",
                "Frequency": 29,
                "LatLng": "37.09024,-95.712891"
            },
            {
                "LocationName": "Lisbon, Portugal",
                "Frequency": 28,
                "LatLng": "38.7222524,-9.1393366"
            },
            {
                "LocationName": "Warsaw, Poland",
                "Frequency": 28,
                "LatLng": "52.2296756,21.0122287"
            },
            {
                "LocationName": "Ahmadabad, India",
                "Frequency": 27,
                "LatLng": "23.022505,72.5713621"
            },
            {
                "LocationName": "Boulder, CO",
                "Frequency": 27,
                "LatLng": "40.0149856,-105.2705456"
            },
            {
                "LocationName": "Geneva, Switzerland",
                "Frequency": 27,
                "LatLng": "46.2043907,6.1431577"
            },
            {
                "LocationName": "Japan",
                "Frequency": 27,
                "LatLng": "36.204824,138.252924"
            },
            {
                "LocationName": "Kansas City, MO",
                "Frequency": 27,
                "LatLng": "39.0997265,-94.5785667"
            },
            {
                "LocationName": "Mountain View, CA",
                "Frequency": 27,
                "LatLng": "37.3860517,-122.0838511"
            },
            {
                "LocationName": "Austria",
                "Frequency": 26,
                "LatLng": "47.516231,14.550072"
            },
            {
                "LocationName": "Baltimore, MD",
                "Frequency": 26,
                "LatLng": "39.2903848,-76.6121893"
            },
            {
                "LocationName": "Berkeley, CA",
                "Frequency": 26,
                "LatLng": "37.8715926,-122.272747"
            },
            {
                "LocationName": "Camberley, United Kingdom",
                "Frequency": 26,
                "LatLng": "51.3353899,-0.742856"
            },
            {
                "LocationName": "Copenhagen, Denmark",
                "Frequency": 26,
                "LatLng": "55.6760968,12.5683371"
            },
            {
                "LocationName": "Egypt",
                "Frequency": 26,
                "LatLng": "26.820553,30.802498"
            },
            {
                "LocationName": "Iasi",
                "Frequency": 26,
                "LatLng": "47.1584549,27.6014418"
            },
            {
                "LocationName": "Oakland, CA",
                "Frequency": 26,
                "LatLng": "37.8043637,-122.2711137"
            },
            {
                "LocationName": "Palo Alto, CA",
                "Frequency": 26,
                "LatLng": "37.4418834,-122.1430195"
            },
            {
                "LocationName": "Tokyo, Japan",
                "Frequency": 26,
                "LatLng": "35.7090259,139.7319925"
            },
            {
                "LocationName": "Venice, CA",
                "Frequency": 26,
                "LatLng": "33.9850469,-118.4694832"
            },
            {
                "LocationName": "Chandigarh, India",
                "Frequency": 25,
                "LatLng": "30.7333148,76.7794179"
            },
            {
                "LocationName": "Greece",
                "Frequency": 25,
                "LatLng": "39.074208,21.824312"
            },
            {
                "LocationName": "Jakarta, Indonesia",
                "Frequency": 25,
                "LatLng": "-6.2087634,106.845599"
            },
            {
                "LocationName": "Minsk, Belarus",
                "Frequency": 25,
                "LatLng": "53.9045398,27.5615244"
            },
            {
                "LocationName": "Noida, India",
                "Frequency": 25,
                "LatLng": "28.5355161,77.3910265"
            },
            {
                "LocationName": "Puebla, México",
                "Frequency": 25,
                "LatLng": "19.0412967,-98.2061996"
            },
            {
                "LocationName": "St. Petersburg, Russia",
                "Frequency": 25,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "Sydney",
                "Frequency": 25,
                "LatLng": "-33.8674869,151.2069902"
            },
            {
                "LocationName": "Belarus",
                "Frequency": 24,
                "LatLng": "53.709807,27.953389"
            },
            {
                "LocationName": "Chennai",
                "Frequency": 24,
                "LatLng": "13.0826802,80.2707184"
            },
            {
                "LocationName": "Cologne, Germany",
                "Frequency": 24,
                "LatLng": "50.937531,6.9602786"
            },
            {
                "LocationName": "Earth",
                "Frequency": 24,
                "LatLng": "34.2331373,-102.4107493"
            },
            {
                "LocationName": "Istanbul",
                "Frequency": 24,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "New Zealand",
                "Frequency": 24,
                "LatLng": "-40.900557,174.885971"
            },
            {
                "LocationName": "The Netherlands",
                "Frequency": 24,
                "LatLng": "52.132633,5.291266"
            },
            {
                "LocationName": "Tunis, Tunisia",
                "Frequency": 24,
                "LatLng": "36.8064948,10.1815316"
            },
            {
                "LocationName": "Bangladesh",
                "Frequency": 23,
                "LatLng": "23.684994,90.356331"
            },
            {
                "LocationName": "Berlin",
                "Frequency": 23,
                "LatLng": "52.5200066,13.404954"
            },
            {
                "LocationName": "Bulgaria",
                "Frequency": 23,
                "LatLng": "42.733883,25.48583"
            },
            {
                "LocationName": "Columbus, OH",
                "Frequency": 23,
                "LatLng": "39.9611755,-82.9987942"
            },
            {
                "LocationName": "Taipei City, Taiwan",
                "Frequency": 23,
                "LatLng": "25.0329694,121.5654177"
            },
            {
                "LocationName": "Wisconsin",
                "Frequency": 23,
                "LatLng": "43.7844397,-88.7878678"
            },
            {
                "LocationName": "Bordeaux, France",
                "Frequency": 22,
                "LatLng": "44.837789,-0.57918"
            },
            {
                "LocationName": "Cambridge, United Kingdom",
                "Frequency": 22,
                "LatLng": "52.205337,0.121817"
            },
            {
                "LocationName": "England, United Kingdom",
                "Frequency": 22,
                "LatLng": "52.3555177,-1.1743197"
            },
            {
                "LocationName": "Moscow",
                "Frequency": 22,
                "LatLng": "55.755826,37.6173"
            },
            {
                "LocationName": "Patiala, India",
                "Frequency": 22,
                "LatLng": "30.3397809,76.3868797"
            },
            {
                "LocationName": "Utah",
                "Frequency": 22,
                "LatLng": "39.3209801,-111.0937311"
            },
            {
                "LocationName": "Venezuela",
                "Frequency": 22,
                "LatLng": "6.42375,-66.58973"
            },
            {
                "LocationName": "Capitola, CA",
                "Frequency": 21,
                "LatLng": "36.9752283,-121.953293"
            },
            {
                "LocationName": "Czech Republic",
                "Frequency": 21,
                "LatLng": "49.817492,15.472962"
            },
            {
                "LocationName": "Easter Island",
                "Frequency": 21,
                "LatLng": "-27.11299,-109.3495806"
            },
            {
                "LocationName": "El Salvador",
                "Frequency": 21,
                "LatLng": "13.794185,-88.89653"
            },
            {
                "LocationName": "Kathmandu, Nepal",
                "Frequency": 21,
                "LatLng": "27.7172453,85.3239605"
            },
            {
                "LocationName": "Mumbai",
                "Frequency": 21,
                "LatLng": "19.0759837,72.8776559"
            },
            {
                "LocationName": "Nantes, France",
                "Frequency": 21,
                "LatLng": "47.218371,-1.553621"
            },
            {
                "LocationName": "Virginia",
                "Frequency": 21,
                "LatLng": "37.4315734,-78.6568942"
            },
            {
                "LocationName": "Ahmedabad",
                "Frequency": 20,
                "LatLng": "23.022505,72.5713621"
            },
            {
                "LocationName": "Badajoz, Spain",
                "Frequency": 20,
                "LatLng": "38.8794495,-6.9706535"
            },
            {
                "LocationName": "Herndon, VA",
                "Frequency": 20,
                "LatLng": "38.9695545,-77.3860976"
            },
            {
                "LocationName": "Indonesia",
                "Frequency": 20,
                "LatLng": "-0.789275,113.921327"
            },
            {
                "LocationName": "Jerusalem, Israel",
                "Frequency": 20,
                "LatLng": "31.768319,35.21371"
            },
            {
                "LocationName": "Los Angeles",
                "Frequency": 20,
                "LatLng": "34.0522342,-118.2436849"
            },
            {
                "LocationName": "Nepal",
                "Frequency": 20,
                "LatLng": "28.394857,84.124008"
            },
            {
                "LocationName": "New York City",
                "Frequency": 20,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Seattle",
                "Frequency": 20,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "Waterloo, Canada",
                "Frequency": 20,
                "LatLng": "43.4642578,-80.5204096"
            },
            {
                "LocationName": "Zagreb, Croatia",
                "Frequency": 20,
                "LatLng": "45.8150108,15.981919"
            },
            {
                "LocationName": "Ahmedabad, India",
                "Frequency": 19,
                "LatLng": "23.022505,72.5713621"
            },
            {
                "LocationName": "Columbia, MO",
                "Frequency": 19,
                "LatLng": "38.9517053,-92.3340724"
            },
            {
                "LocationName": "Estonia",
                "Frequency": 19,
                "LatLng": "58.595272,25.013607"
            },
            {
                "LocationName": "Ho Chi Minh City, Vietnam",
                "Frequency": 19,
                "LatLng": "10.8230989,106.6296638"
            },
            {
                "LocationName": "Karlsruhe, Germany",
                "Frequency": 19,
                "LatLng": "49.0068901,8.4036527"
            },
            {
                "LocationName": "Minnesota",
                "Frequency": 19,
                "LatLng": "46.729553,-94.6858998"
            },
            {
                "LocationName": "Slovakia",
                "Frequency": 19,
                "LatLng": "48.669026,19.699024"
            },
            {
                "LocationName": "World",
                "Frequency": 19,
                "LatLng": "28.3609986,-81.5641778"
            },
            {
                "LocationName": "Almaty, Kazakhstan",
                "Frequency": 18,
                "LatLng": "43.2220146,76.8512485"
            },
            {
                "LocationName": "Ankara, Turkey",
                "Frequency": 18,
                "LatLng": "39.9333635,32.8597419"
            },
            {
                "LocationName": "Coimbatore, India",
                "Frequency": 18,
                "LatLng": "11.0168445,76.9558321"
            },
            {
                "LocationName": "Jaipur, India",
                "Frequency": 18,
                "LatLng": "26.9124336,75.7872709"
            },
            {
                "LocationName": "Monterey, California",
                "Frequency": 18,
                "LatLng": "36.6002378,-121.8946761"
            },
            {
                "LocationName": "Nashville, TN",
                "Frequency": 18,
                "LatLng": "36.1626638,-86.7816016"
            },
            {
                "LocationName": "Rio de Janeiro, Brazil",
                "Frequency": 18,
                "LatLng": "-22.9068467,-43.1728965"
            },
            {
                "LocationName": "Tbilisi, Georgia",
                "Frequency": 18,
                "LatLng": "41.7151377,44.827096"
            },
            {
                "LocationName": "Brasil",
                "Frequency": 17,
                "LatLng": "-14.235004,-51.92528"
            },
            {
                "LocationName": "Costa Rica",
                "Frequency": 17,
                "LatLng": "9.748917,-83.753428"
            },
            {
                "LocationName": "Gothenburg",
                "Frequency": 17,
                "LatLng": "57.70887,11.97456"
            },
            {
                "LocationName": "Krakow, Poland",
                "Frequency": 17,
                "LatLng": "50.0646501,19.9449799"
            },
            {
                "LocationName": "Miami, FL",
                "Frequency": 17,
                "LatLng": "25.7616798,-80.1917902"
            },
            {
                "LocationName": "Porto, Portugal",
                "Frequency": 17,
                "LatLng": "41.1579438,-8.6291053"
            },
            {
                "LocationName": "Reading, United Kingdom",
                "Frequency": 17,
                "LatLng": "51.4542645,-0.9781303"
            },
            {
                "LocationName": "Rhode Island",
                "Frequency": 17,
                "LatLng": "41.5800945,-71.4774291"
            },
            {
                "LocationName": "Santiago, Chile",
                "Frequency": 17,
                "LatLng": "-33.4488897,-70.6692655"
            },
            {
                "LocationName": "Seoul, Korea",
                "Frequency": 17,
                "LatLng": "37.566535,126.9779692"
            },
            {
                "LocationName": "Taiwan",
                "Frequency": 17,
                "LatLng": "23.69781,120.960515"
            },
            {
                "LocationName": "Athens, Greece",
                "Frequency": 16,
                "LatLng": "37.983917,23.7293599"
            },
            {
                "LocationName": "Chicago",
                "Frequency": 16,
                "LatLng": "41.8781136,-87.6297982"
            },
            {
                "LocationName": "Chile",
                "Frequency": 16,
                "LatLng": "-35.675147,-71.542969"
            },
            {
                "LocationName": "Cleveland, OH",
                "Frequency": 16,
                "LatLng": "41.49932,-81.6943605"
            },
            {
                "LocationName": "Indore",
                "Frequency": 16,
                "LatLng": "22.7195687,75.8577258"
            },
            {
                "LocationName": "Irvine, CA",
                "Frequency": 16,
                "LatLng": "33.6839473,-117.7946942"
            },
            {
                "LocationName": "Kyiv, Ukraine",
                "Frequency": 16,
                "LatLng": "50.4501,30.5234"
            },
            {
                "LocationName": "Persian Gulf",
                "Frequency": 16,
                "LatLng": "26.7505337,51.6834275"
            },
            {
                "LocationName": "Pittsburgh, PA",
                "Frequency": 16,
                "LatLng": "40.4406248,-79.9958864"
            },
            {
                "LocationName": "Quebec City, Canada",
                "Frequency": 16,
                "LatLng": "46.8138783,-71.2079809"
            },
            {
                "LocationName": "Darmstadt, Germany",
                "Frequency": 15,
                "LatLng": "49.8728253,8.6511929"
            },
            {
                "LocationName": "Gothenburg, Sweden",
                "Frequency": 15,
                "LatLng": "57.70887,11.97456"
            },
            {
                "LocationName": "Karachi, Pakistan",
                "Frequency": 15,
                "LatLng": "24.8614622,67.0099388"
            },
            {
                "LocationName": "Ohio",
                "Frequency": 15,
                "LatLng": "40.4172871,-82.907123"
            },
            {
                "LocationName": "Oregon",
                "Frequency": 15,
                "LatLng": "43.8041334,-120.5542012"
            },
            {
                "LocationName": "Quebec, Canada",
                "Frequency": 15,
                "LatLng": "52.9399159,-73.5491361"
            },
            {
                "LocationName": "Rochester, MN",
                "Frequency": 15,
                "LatLng": "44.0121221,-92.4801989"
            },
            {
                "LocationName": "San Francisco / New York City",
                "Frequency": 15,
                "LatLng": "14.2491625,120.9009946"
            },
            {
                "LocationName": "South Africa / Taiwan",
                "Frequency": 15,
                "LatLng": "-29.8921134,31.021182"
            },
            {
                "LocationName": "Tampa, FL",
                "Frequency": 15,
                "LatLng": "27.950575,-82.4571776"
            },
            {
                "LocationName": "Addis Ababa, Ethiopia",
                "Frequency": 14,
                "LatLng": "8.9806034,38.7577605"
            },
            {
                "LocationName": "Algeria",
                "Frequency": 14,
                "LatLng": "28.033886,1.659626"
            },
            {
                "LocationName": "Biella, Italy",
                "Frequency": 14,
                "LatLng": "45.5628842,8.0583397"
            },
            {
                "LocationName": "Brussels, Belgium",
                "Frequency": 14,
                "LatLng": "50.8503396,4.3517103"
            },
            {
                "LocationName": "Canberra, Australia",
                "Frequency": 14,
                "LatLng": "-35.2819998,149.1286843"
            },
            {
                "LocationName": "Colorado",
                "Frequency": 14,
                "LatLng": "39.5500507,-105.7820674"
            },
            {
                "LocationName": "Edinburgh, United Kingdom",
                "Frequency": 14,
                "LatLng": "55.953252,-3.188267"
            },
            {
                "LocationName": "Georgia",
                "Frequency": 14,
                "LatLng": "32.1656221,-82.9000751"
            },
            {
                "LocationName": "Hungary",
                "Frequency": 14,
                "LatLng": "47.162494,19.503304"
            },
            {
                "LocationName": "Islamabad, Pakistan",
                "Frequency": 14,
                "LatLng": "33.7293882,73.0931461"
            },
            {
                "LocationName": "Leeds, United Kingdom",
                "Frequency": 14,
                "LatLng": "53.8007554,-1.5490774"
            },
            {
                "LocationName": "Mashhad, Iran",
                "Frequency": 14,
                "LatLng": "36.2604623,59.6167549"
            },
            {
                "LocationName": "Orlando, FL",
                "Frequency": 14,
                "LatLng": "28.5383355,-81.3792365"
            },
            {
                "LocationName": "Salt Lake City, UT",
                "Frequency": 14,
                "LatLng": "40.7607793,-111.8910474"
            },
            {
                "LocationName": "Salt Lake City, Utah",
                "Frequency": 14,
                "LatLng": "40.7607793,-111.8910474"
            },
            {
                "LocationName": "Slovenia",
                "Frequency": 14,
                "LatLng": "46.151241,14.995463"
            },
            {
                "LocationName": "US",
                "Frequency": 14,
                "LatLng": "37.09024,-95.712891"
            },
            {
                "LocationName": "Zaragoza, Spain",
                "Frequency": 14,
                "LatLng": "41.6488226,-0.8890853"
            },
            {
                "LocationName": "Belgrade, Serbia",
                "Frequency": 13,
                "LatLng": "44.786568,20.4489216"
            },
            {
                "LocationName": "Bogota, Colombia",
                "Frequency": 13,
                "LatLng": "4.7109886,-74.072092"
            },
            {
                "LocationName": "Boise, ID",
                "Frequency": 13,
                "LatLng": "43.6187102,-116.2146068"
            },
            {
                "LocationName": "Brighton, United Kingdom",
                "Frequency": 13,
                "LatLng": "50.82253,-0.137163"
            },
            {
                "LocationName": "Bristol, United Kingdom",
                "Frequency": 13,
                "LatLng": "51.454513,-2.58791"
            },
            {
                "LocationName": "Budapest",
                "Frequency": 13,
                "LatLng": "47.497912,19.040235"
            },
            {
                "LocationName": "Budapest, Hungary",
                "Frequency": 13,
                "LatLng": "47.497912,19.040235"
            },
            {
                "LocationName": "Calgary, Canada",
                "Frequency": 13,
                "LatLng": "51.0486151,-114.0708459"
            },
            {
                "LocationName": "Cincinnati, OH",
                "Frequency": 13,
                "LatLng": "39.1031182,-84.5120196"
            },
            {
                "LocationName": "District of Columbia",
                "Frequency": 13,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Halifax, Canada",
                "Frequency": 13,
                "LatLng": "44.6488625,-63.5753196"
            },
            {
                "LocationName": "hyderabad",
                "Frequency": 13,
                "LatLng": "17.385044,78.486671"
            },
            {
                "LocationName": "Maharashtra",
                "Frequency": 13,
                "LatLng": "19.7514798,75.7138884"
            },
            {
                "LocationName": "Michigan",
                "Frequency": 13,
                "LatLng": "44.3148443,-85.6023643"
            },
            {
                "LocationName": "Phnom Penh, Cambodia",
                "Frequency": 13,
                "LatLng": "11.5448729,104.8921668"
            },
            {
                "LocationName": "Sheffield, United Kingdom",
                "Frequency": 13,
                "LatLng": "53.381129,-1.470085"
            },
            {
                "LocationName": "SouthWest, FL",
                "Frequency": 13,
                "LatLng": "26.6686127,-80.0618743"
            },
            {
                "LocationName": "Sunnyvale, CA",
                "Frequency": 13,
                "LatLng": "37.36883,-122.0363496"
            },
            {
                "LocationName": "Toulouse, France",
                "Frequency": 13,
                "LatLng": "43.604652,1.444209"
            },
            {
                "LocationName": "Vancouver",
                "Frequency": 13,
                "LatLng": "45.6387281,-122.6614861"
            },
            {
                "LocationName": "Yerevan, Armenia",
                "Frequency": 13,
                "LatLng": "40.1791857,44.4991029"
            },
            {
                "LocationName": "2000 WR106",
                "Frequency": 12
            },
            {
                "LocationName": "Ahmedabad, Gujarat, India",
                "Frequency": 12,
                "LatLng": "23.022505,72.5713621"
            },
            {
                "LocationName": "Beirut, Lebanon",
                "Frequency": 12,
                "LatLng": "33.8886289,35.4954794"
            },
            {
                "LocationName": "Belarus, Minsk",
                "Frequency": 12,
                "LatLng": "53.9045398,27.5615244"
            },
            {
                "LocationName": "CA",
                "Frequency": 12,
                "LatLng": "36.778261,-119.4179324"
            },
            {
                "LocationName": "Campinas, Sao Paulo",
                "Frequency": 12,
                "LatLng": "-22.9099384,-47.0626332"
            },
            {
                "LocationName": "Cluj-Napoca, Romania",
                "Frequency": 12,
                "LatLng": "46.7712101,23.6236353"
            },
            {
                "LocationName": "Croatia",
                "Frequency": 12,
                "LatLng": "45.1,15.2"
            },
            {
                "LocationName": "Javascript Island",
                "Frequency": 12
            },
            {
                "LocationName": "Jordan",
                "Frequency": 12,
                "LatLng": "30.585164,36.238414"
            },
            {
                "LocationName": "Kuala Lumpur, Malaysia",
                "Frequency": 12,
                "LatLng": "3.139003,101.686855"
            },
            {
                "LocationName": "Las Vegas, NV / Israel",
                "Frequency": 12,
                "LatLng": "36.1699412,-115.1398296"
            },
            {
                "LocationName": "Madison, WI",
                "Frequency": 12,
                "LatLng": "43.0730517,-89.4012302"
            },
            {
                "LocationName": "Madurai, India",
                "Frequency": 12,
                "LatLng": "9.9252007,78.1197754"
            },
            {
                "LocationName": "New Haven, CT",
                "Frequency": 12,
                "LatLng": "41.308274,-72.9278835"
            },
            {
                "LocationName": "NY",
                "Frequency": 12,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Provo, UT",
                "Frequency": 12,
                "LatLng": "40.2338438,-111.6585337"
            },
            {
                "LocationName": "Québec",
                "Frequency": 12,
                "LatLng": "52.9399159,-73.5491361"
            },
            {
                "LocationName": "São Paulo, Brazil",
                "Frequency": 12,
                "LatLng": "-23.5505199,-46.6333094"
            },
            {
                "LocationName": "Surat, India",
                "Frequency": 12,
                "LatLng": "21.1702401,72.8310607"
            },
            {
                "LocationName": "Thailand",
                "Frequency": 12,
                "LatLng": "15.870032,100.992541"
            },
            {
                "LocationName": "Worcester, MA",
                "Frequency": 12,
                "LatLng": "42.2625932,-71.8022934"
            },
            {
                "LocationName": "Armenia",
                "Frequency": 11,
                "LatLng": "40.069099,45.038189"
            },
            {
                "LocationName": "bangalore",
                "Frequency": 11,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Bangkok, Thailand",
                "Frequency": 11,
                "LatLng": "13.7563309,100.5017651"
            },
            {
                "LocationName": "Düsseldorf, Germany",
                "Frequency": 11,
                "LatLng": "51.2277411,6.7734556"
            },
            {
                "LocationName": "Edmonton, Canada",
                "Frequency": 11,
                "LatLng": "53.544389,-113.4909267"
            },
            {
                "LocationName": "Glasgow, United Kingdom",
                "Frequency": 11,
                "LatLng": "55.864237,-4.251806"
            },
            {
                "LocationName": "Indianapolis, IN",
                "Frequency": 11,
                "LatLng": "39.768403,-86.158068"
            },
            {
                "LocationName": "Missouri",
                "Frequency": 11,
                "LatLng": "37.9642529,-91.8318334"
            },
            {
                "LocationName": "Moon",
                "Frequency": 11,
                "LatLng": "40.5169767,-80.2213477"
            },
            {
                "LocationName": "North Carolina",
                "Frequency": 11,
                "LatLng": "35.7595731,-79.0192997"
            },
            {
                "LocationName": "Novosibirsk, Russia",
                "Frequency": 11,
                "LatLng": "55.0083526,82.9357327"
            },
            {
                "LocationName": "San Francisco, United States",
                "Frequency": 11,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "Scotland",
                "Frequency": 11,
                "LatLng": "56.4906712,-4.2026458"
            },
            {
                "LocationName": "Shanghai",
                "Frequency": 11,
                "LatLng": "31.230416,121.473701"
            },
            {
                "LocationName": "Silicon Valley",
                "Frequency": 11,
                "LatLng": "37.387474,-122.0575434"
            },
            {
                "LocationName": "South Korea",
                "Frequency": 11,
                "LatLng": "35.907757,127.766922"
            },
            {
                "LocationName": "Stockholm",
                "Frequency": 11,
                "LatLng": "59.3293235,18.0685808"
            },
            {
                "LocationName": "Thiruvananthapuram, India",
                "Frequency": 11,
                "LatLng": "8.5241391,76.9366376"
            },
            {
                "LocationName": "Toronto",
                "Frequency": 11,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Vadodara, India",
                "Frequency": 11,
                "LatLng": "22.3071588,73.1812187"
            },
            {
                "LocationName": "Brno, Czech Republic",
                "Frequency": 10,
                "LatLng": "49.1950602,16.6068371"
            },
            {
                "LocationName": "Charlotte, NC",
                "Frequency": 10,
                "LatLng": "35.2270869,-80.8431267"
            },
            {
                "LocationName": "Chisinau, Moldova",
                "Frequency": 10,
                "LatLng": "47.0104529,28.8638103"
            },
            {
                "LocationName": "Cordoba, Argentina",
                "Frequency": 10,
                "LatLng": "-31.4200833,-64.1887761"
            },
            {
                "LocationName": "Fairfax, VA",
                "Frequency": 10,
                "LatLng": "38.8462236,-77.3063733"
            },
            {
                "LocationName": "Fort Collins, CO",
                "Frequency": 10,
                "LatLng": "40.5852602,-105.084423"
            },
            {
                "LocationName": "Grenoble, France",
                "Frequency": 10,
                "LatLng": "45.188529,5.724524"
            },
            {
                "LocationName": "Hangzhou, China",
                "Frequency": 10,
                "LatLng": "30.274085,120.15507"
            },
            {
                "LocationName": "Hà Nội, Vietnam",
                "Frequency": 10,
                "LatLng": "21.0031177,105.8201408"
            },
            {
                "LocationName": "Helsinki, Finland",
                "Frequency": 10,
                "LatLng": "60.1733244,24.9410248"
            },
            {
                "LocationName": "Houston ,TX",
                "Frequency": 10,
                "LatLng": "29.7604267,-95.3698028"
            },
            {
                "LocationName": "Kerala, India",
                "Frequency": 10,
                "LatLng": "10.8505159,76.2710833"
            },
            {
                "LocationName": "Las Vegas, NV",
                "Frequency": 10,
                "LatLng": "36.1699412,-115.1398296"
            },
            {
                "LocationName": "Leyte",
                "Frequency": 10,
                "LatLng": "11.3496551,124.4641848"
            },
            {
                "LocationName": "Macedonia",
                "Frequency": 10,
                "LatLng": "41.608635,21.745275"
            },
            {
                "LocationName": "New Mexico",
                "Frequency": 10,
                "LatLng": "34.5199402,-105.8700901"
            },
            {
                "LocationName": "North Rhine-Westphalia, Germany",
                "Frequency": 10,
                "LatLng": "51.4332367,7.6615938"
            },
            {
                "LocationName": "Padua",
                "Frequency": 10,
                "LatLng": "45.4064349,11.8767611"
            },
            {
                "LocationName": "Porto Alegre, Brazil",
                "Frequency": 10,
                "LatLng": "-30.0346471,-51.2176584"
            },
            {
                "LocationName": "Richmond, VA",
                "Frequency": 10,
                "LatLng": "37.5407246,-77.4360481"
            },
            {
                "LocationName": "Tallinn, Estonia",
                "Frequency": 10,
                "LatLng": "59.4369608,24.7535746"
            },
            {
                "LocationName": "Tucson, AZ",
                "Frequency": 10,
                "LatLng": "32.2217429,-110.926479"
            },
            {
                "LocationName": "United States of America.",
                "Frequency": 10,
                "LatLng": "37.09024,-95.712891"
            },
            {
                "LocationName": "Winnipeg, Canada",
                "Frequency": 10,
                "LatLng": "49.8997541,-97.1374937"
            },
            {
                "LocationName": "Yekaterinburg, Russia",
                "Frequency": 10,
                "LatLng": "56.8389261,60.6057025"
            },
            {
                "LocationName": "127.0.0.1",
                "Frequency": 9,
                "LatLng": "44.3652648,24.0712672"
            },
            {
                "LocationName": "Amman",
                "Frequency": 9,
                "LatLng": "31.9565783,35.9456951"
            },
            {
                "LocationName": "Amsterdam",
                "Frequency": 9,
                "LatLng": "52.3702157,4.8951679"
            },
            {
                "LocationName": "Baton Rouge, LA",
                "Frequency": 9,
                "LatLng": "30.4582829,-91.1403196"
            },
            {
                "LocationName": "Birmingham, United Kingdom",
                "Frequency": 9,
                "LatLng": "52.486243,-1.890401"
            },
            {
                "LocationName": "Charleston, SC",
                "Frequency": 9,
                "LatLng": "32.7764749,-79.9310512"
            },
            {
                "LocationName": "Dubai, United Arab Emirates",
                "Frequency": 9,
                "LatLng": "25.2048493,55.2707828"
            },
            {
                "LocationName": "Kerala",
                "Frequency": 9,
                "LatLng": "10.8505159,76.2710833"
            },
            {
                "LocationName": "Lancaster",
                "Frequency": 9,
                "LatLng": "40.0378755,-76.3055144"
            },
            {
                "LocationName": "Manchester",
                "Frequency": 9,
                "LatLng": "53.4807593,-2.2426305"
            },
            {
                "LocationName": "Mexico City, Mexico",
                "Frequency": 9,
                "LatLng": "19.4326077,-99.133208"
            },
            {
                "LocationName": "Montevideo, Uruguay",
                "Frequency": 9,
                "LatLng": "-34.9011127,-56.1645314"
            },
            {
                "LocationName": "Natal, Brazil",
                "Frequency": 9,
                "LatLng": "-5.7792569,-35.200916"
            },
            {
                "LocationName": "Noida",
                "Frequency": 9,
                "LatLng": "28.5355161,77.3910265"
            },
            {
                "LocationName": "Rochester, NY",
                "Frequency": 9,
                "LatLng": "43.16103,-77.6109219"
            },
            {
                "LocationName": "Salerno, Italy",
                "Frequency": 9,
                "LatLng": "40.6824408,14.7680961"
            },
            {
                "LocationName": "Salzburg, Austria",
                "Frequency": 9,
                "LatLng": "47.80949,13.05501"
            },
            {
                "LocationName": "Santa Monica, CA",
                "Frequency": 9,
                "LatLng": "34.0194543,-118.4911912"
            },
            {
                "LocationName": "Seville, Spain",
                "Frequency": 9,
                "LatLng": "37.3890924,-5.9844589"
            },
            {
                "LocationName": "Silicon Valley, CA",
                "Frequency": 9,
                "LatLng": "37.387474,-122.0575434"
            },
            {
                "LocationName": "Strasbourg, France",
                "Frequency": 9,
                "LatLng": "48.5734053,7.7521113"
            },
            {
                "LocationName": "Surat , India",
                "Frequency": 9,
                "LatLng": "21.1702401,72.8310607"
            },
            {
                "LocationName": "Tempe, AZ",
                "Frequency": 9,
                "LatLng": "33.4255104,-111.9400054"
            },
            {
                "LocationName": "The Moon",
                "Frequency": 9,
                "LatLng": "40.5169767,-80.2213477"
            },
            {
                "LocationName": "Thessaloniki, Greece",
                "Frequency": 9,
                "LatLng": "40.6400629,22.9444191"
            },
            {
                "LocationName": "Vancouver, BC",
                "Frequency": 9,
                "LatLng": "49.2827291,-123.1207375"
            },
            {
                "LocationName": "Western India",
                "Frequency": 9,
                "LatLng": "28.16527,83.9320806"
            },
            {
                "LocationName": ".at",
                "Frequency": 8,
                "LatLng": "47.516231,14.550072"
            },
            {
                "LocationName": "Atlanta",
                "Frequency": 8,
                "LatLng": "33.7489954,-84.3879824"
            },
            {
                "LocationName": "At World's End",
                "Frequency": 8,
                "LatLng": "39.9522353,-74.153891"
            },
            {
                "LocationName": "banglore",
                "Frequency": 8,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Belo Horizonte, Brazil",
                "Frequency": 8,
                "LatLng": "-19.9166813,-43.9344931"
            },
            {
                "LocationName": "Bogota",
                "Frequency": 8,
                "LatLng": "4.7109886,-74.072092"
            },
            {
                "LocationName": "Brasov, Romania",
                "Frequency": 8,
                "LatLng": "45.6579755,25.6011977"
            },
            {
                "LocationName": "Burnaby, Canada",
                "Frequency": 8,
                "LatLng": "49.2488091,-122.9805104"
            },
            {
                "LocationName": "Cardiff, United Kingdom",
                "Frequency": 8,
                "LatLng": "51.481581,-3.17909"
            },
            {
                "LocationName": "Connecticut",
                "Frequency": 8,
                "LatLng": "41.6032207,-73.087749"
            },
            {
                "LocationName": "Cyberspace",
                "Frequency": 8
            },
            {
                "LocationName": "Davis, CA",
                "Frequency": 8,
                "LatLng": "38.5449065,-121.7405167"
            },
            {
                "LocationName": "Delaware",
                "Frequency": 8,
                "LatLng": "38.9108325,-75.5276699"
            },
            {
                "LocationName": "Dominican Republic",
                "Frequency": 8,
                "LatLng": "18.735693,-70.162651"
            },
            {
                "LocationName": "Faisalabad, Pakistan",
                "Frequency": 8,
                "LatLng": "31.4187142,73.0791073"
            },
            {
                "LocationName": "Gandhinagar, India",
                "Frequency": 8,
                "LatLng": "23.2156354,72.6369415"
            },
            {
                "LocationName": "Grand Rapids, MI",
                "Frequency": 8,
                "LatLng": "42.9633599,-85.6680863"
            },
            {
                "LocationName": "Gurgaon",
                "Frequency": 8,
                "LatLng": "28.4594965,77.0266383"
            },
            {
                "LocationName": "Gurgaon Haryana",
                "Frequency": 8,
                "LatLng": "28.4594965,77.0266383"
            },
            {
                "LocationName": "Hamilton, Ontario",
                "Frequency": 8,
                "LatLng": "43.2500208,-79.8660914"
            },
            {
                "LocationName": "Hanoi, Vietnam",
                "Frequency": 8,
                "LatLng": "21.0277644,105.8341598"
            },
            {
                "LocationName": "Illinois",
                "Frequency": 8,
                "LatLng": "40.6331249,-89.3985283"
            },
            {
                "LocationName": "KS",
                "Frequency": 8,
                "LatLng": "39.011902,-98.4842465"
            },
            {
                "LocationName": "Ljubljana, Slovenia",
                "Frequency": 8,
                "LatLng": "46.0569465,14.5057515"
            },
            {
                "LocationName": "Malta",
                "Frequency": 8,
                "LatLng": "35.937496,14.375416"
            },
            {
                "LocationName": "Mars",
                "Frequency": 8,
                "LatLng": "49.2836803,16.3597539"
            },
            {
                "LocationName": "Nairobi, Kenya",
                "Frequency": 8,
                "LatLng": "-1.2920659,36.8219462"
            },
            {
                "LocationName": "Needham, MA",
                "Frequency": 8,
                "LatLng": "42.2809285,-71.2377548"
            },
            {
                "LocationName": "Neubrandenburg, Germany",
                "Frequency": 8,
                "LatLng": "53.5678292,13.2779269"
            },
            {
                "LocationName": "North East",
                "Frequency": 8,
                "LatLng": "-20.9030555,27.4556388"
            },
            {
                "LocationName": "NY, NY",
                "Frequency": 8,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Omaha, NE",
                "Frequency": 8,
                "LatLng": "41.2523634,-95.9979883"
            },
            {
                "LocationName": "Ontario, Canada",
                "Frequency": 8,
                "LatLng": "51.253775,-85.3232139"
            },
            {
                "LocationName": "palakkad",
                "Frequency": 8,
                "LatLng": "10.7867303,76.6547932"
            },
            {
                "LocationName": "Riegel am Kaiserstuhl, Germany",
                "Frequency": 8,
                "LatLng": "48.1559072,7.7474463"
            },
            {
                "LocationName": "Sarasota, Florida",
                "Frequency": 8,
                "LatLng": "27.3364347,-82.5306527"
            },
            {
                "LocationName": "Stanford, CA",
                "Frequency": 8,
                "LatLng": "37.424106,-122.1660756"
            },
            {
                "LocationName": "St. Louis, MO",
                "Frequency": 8,
                "LatLng": "38.6270025,-90.1994042"
            },
            {
                "LocationName": "St Paul, MN",
                "Frequency": 8,
                "LatLng": "44.9537029,-93.0899578"
            },
            {
                "LocationName": "Stuttgart, Germany",
                "Frequency": 8,
                "LatLng": "48.7758459,9.1829321"
            },
            {
                "LocationName": "Treves, Germany",
                "Frequency": 8,
                "LatLng": "49.749992,6.6371433"
            },
            {
                "LocationName": "Tunisia",
                "Frequency": 8,
                "LatLng": "33.886917,9.537499"
            },
            {
                "LocationName": "Valencia, Spain",
                "Frequency": 8,
                "LatLng": "39.4699075,-0.3762881"
            },
            {
                "LocationName": "Viet Nam",
                "Frequency": 8,
                "LatLng": "14.058324,108.277199"
            },
            {
                "LocationName": "Vitoria, Spain",
                "Frequency": 8,
                "LatLng": "42.8591656,-2.6817918"
            },
            {
                "LocationName": "Warangal, India",
                "Frequency": 8,
                "LatLng": "17.9689008,79.5940544"
            },
            {
                "LocationName": "Washington, United States",
                "Frequency": 8,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Wuhan, China",
                "Frequency": 8,
                "LatLng": "30.593099,114.305393"
            },
            {
                "LocationName": "Aarhus, Denmark",
                "Frequency": 7,
                "LatLng": "56.162939,10.203921"
            },
            {
                "LocationName": "Amsterdam, The Netherlands",
                "Frequency": 7,
                "LatLng": "52.3702157,4.8951679"
            },
            {
                "LocationName": "Ancona, Italy",
                "Frequency": 7,
                "LatLng": "43.6158299,13.518915"
            },
            {
                "LocationName": "Ann Arbor, MI",
                "Frequency": 7,
                "LatLng": "42.2808256,-83.7430378"
            },
            {
                "LocationName": "Antwerp, Belgium",
                "Frequency": 7,
                "LatLng": "51.2194475,4.4024643"
            },
            {
                "LocationName": "Baku, Azerbaijan",
                "Frequency": 7,
                "LatLng": "40.4092617,49.8670924"
            },
            {
                "LocationName": "Białystok",
                "Frequency": 7,
                "LatLng": "53.1324886,23.1688403"
            },
            {
                "LocationName": "Buffalo, NY",
                "Frequency": 7,
                "LatLng": "42.8864468,-78.8783689"
            },
            {
                "LocationName": "Cairo, Egypt",
                "Frequency": 7,
                "LatLng": "30.0444196,31.2357116"
            },
            {
                "LocationName": "Caracas, Venezuela",
                "Frequency": 7,
                "LatLng": "10.4805937,-66.9036063"
            },
            {
                "LocationName": "Dayton, OH",
                "Frequency": 7,
                "LatLng": "39.7589478,-84.1916069"
            },
            {
                "LocationName": "Draper, UT",
                "Frequency": 7,
                "LatLng": "40.5246711,-111.8638226"
            },
            {
                "LocationName": "Frankfurt, Germany",
                "Frequency": 7,
                "LatLng": "50.1109221,8.6821267"
            },
            {
                "LocationName": "Funchal, Portugal",
                "Frequency": 7,
                "LatLng": "32.6669328,-16.9240554"
            },
            {
                "LocationName": "Gandhinagar",
                "Frequency": 7,
                "LatLng": "23.2156354,72.6369415"
            },
            {
                "LocationName": "Genoa, Italy",
                "Frequency": 7,
                "LatLng": "44.4056499,8.946256"
            },
            {
                "LocationName": "Germany, Tübingen",
                "Frequency": 7,
                "LatLng": "48.5216364,9.0576448"
            },
            {
                "LocationName": "Hamburg",
                "Frequency": 7,
                "LatLng": "53.5510846,9.9936818"
            },
            {
                "LocationName": "Heidelberg, Germany",
                "Frequency": 7,
                "LatLng": "49.3987524,8.6724335"
            },
            {
                "LocationName": "Hydrabad",
                "Frequency": 7,
                "LatLng": "17.385044,78.486671"
            },
            {
                "LocationName": "India, Kerala",
                "Frequency": 7,
                "LatLng": "10.8505159,76.2710833"
            },
            {
                "LocationName": "İstanbul",
                "Frequency": 7,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "Jakarta, Republik Indonesia",
                "Frequency": 7,
                "LatLng": "-6.2087634,106.845599"
            },
            {
                "LocationName": "Kenya",
                "Frequency": 7,
                "LatLng": "-0.023559,37.906193"
            },
            {
                "LocationName": "Kharkov, Ukriane",
                "Frequency": 7,
                "LatLng": "49.9935,36.230383"
            },
            {
                "LocationName": "Korea",
                "Frequency": 7,
                "LatLng": "37.6639976,127.9784585"
            },
            {
                "LocationName": "Leipzig, Germany",
                "Frequency": 7,
                "LatLng": "51.3396955,12.3730747"
            },
            {
                "LocationName": "Lille, France",
                "Frequency": 7,
                "LatLng": "50.62925,3.057256"
            },
            {
                "LocationName": "Lithuania",
                "Frequency": 7,
                "LatLng": "55.169438,23.881275"
            },
            {
                "LocationName": "London, Canada",
                "Frequency": 7,
                "LatLng": "42.9869502,-81.243177"
            },
            {
                "LocationName": "L'viv, Ukraine",
                "Frequency": 7,
                "LatLng": "49.839683,24.029717"
            },
            {
                "LocationName": "Malang, East Java, Indonesia",
                "Frequency": 7,
                "LatLng": "-7.9666204,112.6326321"
            },
            {
                "LocationName": "Mason, OH",
                "Frequency": 7,
                "LatLng": "39.3600586,-84.309939"
            },
            {
                "LocationName": "Milwaukee, WI",
                "Frequency": 7,
                "LatLng": "43.0389025,-87.9064736"
            },
            {
                "LocationName": "Montpellier, France",
                "Frequency": 7,
                "LatLng": "43.610769,3.876716"
            },
            {
                "LocationName": "Nariño Colombia",
                "Frequency": 7,
                "LatLng": "1.2889987,-77.3575662"
            },
            {
                "LocationName": "NYC 301 Moved Permanently",
                "Frequency": 7,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "NYC Baby",
                "Frequency": 7,
                "LatLng": "40.6845539,-73.7922529"
            },
            {
                "LocationName": "Ontario",
                "Frequency": 7,
                "LatLng": "34.0633443,-117.6508876"
            },
            {
                "LocationName": "Oxford, United Kingdom",
                "Frequency": 7,
                "LatLng": "51.7520209,-1.2577263"
            },
            {
                "LocationName": "Poznan, Poland",
                "Frequency": 7,
                "LatLng": "52.406374,16.9251681"
            },
            {
                "LocationName": "Rennes, France",
                "Frequency": 7,
                "LatLng": "48.117266,-1.6777926"
            },
            {
                "LocationName": "Riga, Latvia",
                "Frequency": 7,
                "LatLng": "56.9496487,24.1051864"
            },
            {
                "LocationName": "RI,USA",
                "Frequency": 7,
                "LatLng": "41.5800945,-71.4774291"
            },
            {
                "LocationName": "Rotterdam, Netherlands",
                "Frequency": 7,
                "LatLng": "51.9244201,4.4777325"
            },
            {
                "LocationName": "Russia, Moscow",
                "Frequency": 7,
                "LatLng": "55.755826,37.6173"
            },
            {
                "LocationName": "St Louis, MO",
                "Frequency": 7,
                "LatLng": "38.6270025,-90.1994042"
            },
            {
                "LocationName": "Swansea, United Kingdom",
                "Frequency": 7,
                "LatLng": "51.62144,-3.943646"
            },
            {
                "LocationName": "Tennessee",
                "Frequency": 7,
                "LatLng": "35.5174913,-86.5804473"
            },
            {
                "LocationName": "Trondheim",
                "Frequency": 7,
                "LatLng": "63.4305149,10.3950528"
            },
            {
                "LocationName": "Virginia Beach, VA",
                "Frequency": 7,
                "LatLng": "36.8529263,-75.977985"
            },
            {
                "LocationName": "Warsaw",
                "Frequency": 7,
                "LatLng": "52.2296756,21.0122287"
            },
            {
                "LocationName": "Washing DC Metro Area",
                "Frequency": 7
            },
            {
                "LocationName": "West New York, NJ",
                "Frequency": 7,
                "LatLng": "40.7878788,-74.0143064"
            },
            {
                "LocationName": "West Virginia",
                "Frequency": 7,
                "LatLng": "38.5976262,-80.4549026"
            },
            {
                "LocationName": "Wroclaw, Poland",
                "Frequency": 7,
                "LatLng": "51.1078852,17.0385376"
            },
            {
                "LocationName": "Yangon, Myanmar",
                "Frequency": 7,
                "LatLng": "16.8660694,96.195132"
            },
            {
                "LocationName": "Andria, Italy",
                "Frequency": 6,
                "LatLng": "41.2272519,16.2966406"
            },
            {
                "LocationName": "Aylesbury, United Kingdom",
                "Frequency": 6,
                "LatLng": "51.815606,-0.8084"
            },
            {
                "LocationName": "Birmingham, AL",
                "Frequency": 6,
                "LatLng": "33.5206608,-86.80249"
            },
            {
                "LocationName": "Bridgeton, NJ",
                "Frequency": 6,
                "LatLng": "39.427337,-75.2340768"
            },
            {
                "LocationName": "Cork, Ireland",
                "Frequency": 6,
                "LatLng": "51.8968917,-8.4863157"
            },
            {
                "LocationName": "Czech republic",
                "Frequency": 6,
                "LatLng": "49.817492,15.472962"
            },
            {
                "LocationName": "Des Moines, IA",
                "Frequency": 6,
                "LatLng": "41.6005448,-93.6091064"
            },
            {
                "LocationName": "Dhaka",
                "Frequency": 6,
                "LatLng": "23.810332,90.4125181"
            },
            {
                "LocationName": "Doha, Qatar",
                "Frequency": 6,
                "LatLng": "25.2854473,51.5310398"
            },
            {
                "LocationName": "Earth, TX",
                "Frequency": 6,
                "LatLng": "34.2331373,-102.4107493"
            },
            {
                "LocationName": "Espoo, Finland",
                "Frequency": 6,
                "LatLng": "60.2054911,24.6559001"
            },
            {
                "LocationName": "Farmington, CT",
                "Frequency": 6,
                "LatLng": "41.7360305,-72.795027"
            },
            {
                "LocationName": "Georgia, United States",
                "Frequency": 6,
                "LatLng": "32.1656221,-82.9000751"
            },
            {
                "LocationName": "Guangzhou, China",
                "Frequency": 6,
                "LatLng": "23.12911,113.264385"
            },
            {
                "LocationName": "Hixson, TN",
                "Frequency": 6,
                "LatLng": "35.137265,-85.2368219"
            },
            {
                "LocationName": "Iceland",
                "Frequency": 6,
                "LatLng": "64.963051,-19.020835"
            },
            {
                "LocationName": "Internet",
                "Frequency": 6,
                "LatLng": "15.1219947,105.8021808"
            },
            {
                "LocationName": "istanbul",
                "Frequency": 6,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "Jacksonville Beach, FL",
                "Frequency": 6,
                "LatLng": "30.2841224,-81.3961338"
            },
            {
                "LocationName": "Jamaica",
                "Frequency": 6,
                "LatLng": "18.109581,-77.297508"
            },
            {
                "LocationName": "Joinville, Brazil",
                "Frequency": 6,
                "LatLng": "-26.3044084,-48.8463832"
            },
            {
                "LocationName": "Kozhikode, India",
                "Frequency": 6,
                "LatLng": "11.2587531,75.78041"
            },
            {
                "LocationName": "Latvia",
                "Frequency": 6,
                "LatLng": "56.879635,24.603189"
            },
            {
                "LocationName": "Lausanne, Switzerland",
                "Frequency": 6,
                "LatLng": "46.5196535,6.6322734"
            },
            {
                "LocationName": "london",
                "Frequency": 6,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "Louisville, KY",
                "Frequency": 6,
                "LatLng": "38.2526647,-85.7584557"
            },
            {
                "LocationName": "Madrid",
                "Frequency": 6,
                "LatLng": "40.4167754,-3.7037902"
            },
            {
                "LocationName": "Manhattan, NY",
                "Frequency": 6,
                "LatLng": "40.7830603,-73.9712488"
            },
            {
                "LocationName": "Manila, Philippines",
                "Frequency": 6,
                "LatLng": "14.5995124,120.9842195"
            },
            {
                "LocationName": "Milford, MA",
                "Frequency": 6,
                "LatLng": "42.1398577,-71.5163049"
            },
            {
                "LocationName": "Monterrey, Mexico",
                "Frequency": 6,
                "LatLng": "25.6866142,-100.3161126"
            },
            {
                "LocationName": "Montreal",
                "Frequency": 6,
                "LatLng": "45.5016889,-73.567256"
            },
            {
                "LocationName": "Morocco",
                "Frequency": 6,
                "LatLng": "31.791702,-7.09262"
            },
            {
                "LocationName": "Nanjing, China",
                "Frequency": 6,
                "LatLng": "32.060255,118.796877"
            },
            {
                "LocationName": "Newcastle upon Tyne, United Kingdom",
                "Frequency": 6,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "Nice, France",
                "Frequency": 6,
                "LatLng": "43.7101728,7.2619532"
            },
            {
                "LocationName": "Nuremberg, Germany",
                "Frequency": 6,
                "LatLng": "49.45203,11.07675"
            },
            {
                "LocationName": "Oklahoma City, OK",
                "Frequency": 6,
                "LatLng": "35.4675602,-97.5164276"
            },
            {
                "LocationName": "paris",
                "Frequency": 6,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "Perth, Australia",
                "Frequency": 6,
                "LatLng": "-31.9535132,115.8570471"
            },
            {
                "LocationName": "Portland, Or",
                "Frequency": 6,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Rajkot",
                "Frequency": 6,
                "LatLng": "22.3038945,70.8021599"
            },
            {
                "LocationName": "Redmond, WA",
                "Frequency": 6,
                "LatLng": "47.6739881,-122.121512"
            },
            {
                "LocationName": "Royal Oak, MI",
                "Frequency": 6,
                "LatLng": "42.4894801,-83.1446485"
            },
            {
                "LocationName": "São Paulo",
                "Frequency": 6,
                "LatLng": "-23.5505199,-46.6333094"
            },
            {
                "LocationName": "Scotland, United Kingdom",
                "Frequency": 6,
                "LatLng": "56.4906712,-4.2026458"
            },
            {
                "LocationName": "Scottsdale, AZ",
                "Frequency": 6,
                "LatLng": "33.4941704,-111.9260519"
            },
            {
                "LocationName": "Skopje, Macedonia",
                "Frequency": 6,
                "LatLng": "41.9973462,21.4279956"
            },
            {
                "LocationName": "Southern California",
                "Frequency": 6,
                "LatLng": "34.9592083,-116.419389"
            },
            {
                "LocationName": "Trier, Germany",
                "Frequency": 6,
                "LatLng": "49.749992,6.6371433"
            },
            {
                "LocationName": "Turin, Italy",
                "Frequency": 6,
                "LatLng": "45.070312,7.6868565"
            },
            {
                "LocationName": "U.K.",
                "Frequency": 6,
                "LatLng": "44.9007008,-92.6293711"
            },
            {
                "LocationName": "Vellore",
                "Frequency": 6,
                "LatLng": "12.9165167,79.1324986"
            },
            {
                "LocationName": "V.V.Nagar",
                "Frequency": 6,
                "LatLng": "22.5476561,72.9251379"
            },
            {
                "LocationName": "Warwick, United Kingdom",
                "Frequency": 6,
                "LatLng": "52.282316,-1.584927"
            },
            {
                "LocationName": "Waterford, Ireland",
                "Frequency": 6,
                "LatLng": "52.2593197,-7.1100703"
            },
            {
                "LocationName": "York, United Kingdom",
                "Frequency": 6,
                "LatLng": "53.9599651,-1.0872979"
            },
            {
                "LocationName": "Alpha Centauri",
                "Frequency": 5,
                "LatLng": "-60.8352777,39.8995833"
            },
            {
                "LocationName": "Arizona",
                "Frequency": 5,
                "LatLng": "34.0489281,-111.0937311"
            },
            {
                "LocationName": "Arlington, VA",
                "Frequency": 5,
                "LatLng": "38.8799697,-77.1067698"
            },
            {
                "LocationName": ".au",
                "Frequency": 5,
                "LatLng": "-25.274398,133.775136"
            },
            {
                "LocationName": "Bandung, Indonesia",
                "Frequency": 5,
                "LatLng": "-6.9174639,107.6191228"
            },
            {
                "LocationName": "Beijing",
                "Frequency": 5,
                "LatLng": "39.904211,116.407395"
            },
            {
                "LocationName": "Bengaluru",
                "Frequency": 5,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Bergen, Norway",
                "Frequency": 5,
                "LatLng": "60.3912628,5.3220544"
            },
            {
                "LocationName": "Beverly Hills, CA",
                "Frequency": 5,
                "LatLng": "34.0736204,-118.4003563"
            },
            {
                "LocationName": "Bhubaneswar, India",
                "Frequency": 5,
                "LatLng": "20.2960587,85.8245398"
            },
            {
                "LocationName": "Birmingham, UK",
                "Frequency": 5,
                "LatLng": "52.486243,-1.890401"
            },
            {
                "LocationName": "Boston, United States",
                "Frequency": 5,
                "LatLng": "42.3600825,-71.0588801"
            },
            {
                "LocationName": "Brasilia, Brazil",
                "Frequency": 5,
                "LatLng": "-15.7942287,-47.8821658"
            },
            {
                "LocationName": "Bristol",
                "Frequency": 5,
                "LatLng": "51.454513,-2.58791"
            },
            {
                "LocationName": "Brussels",
                "Frequency": 5,
                "LatLng": "50.8503396,4.3517103"
            },
            {
                "LocationName": "Chapel Hill, NC",
                "Frequency": 5,
                "LatLng": "35.9131996,-79.0558445"
            },
            {
                "LocationName": "Christchurch, New Zealand",
                "Frequency": 5,
                "LatLng": "-43.5320544,172.6362254"
            },
            {
                "LocationName": "Clearwater, FL",
                "Frequency": 5,
                "LatLng": "27.9658533,-82.8001026"
            },
            {
                "LocationName": "Columbia, SC",
                "Frequency": 5,
                "LatLng": "34.0007104,-81.0348144"
            },
            {
                "LocationName": "Denver",
                "Frequency": 5,
                "LatLng": "39.7392358,-104.990251"
            },
            {
                "LocationName": "Durham, NC",
                "Frequency": 5,
                "LatLng": "35.9940329,-78.898619"
            },
            {
                "LocationName": "Dusseldorf, Germany",
                "Frequency": 5,
                "LatLng": "51.2277411,6.7734556"
            },
            {
                "LocationName": "Folsom, CA",
                "Frequency": 5,
                "LatLng": "38.6779591,-121.1760583"
            },
            {
                "LocationName": "Fort Walton Beach, FL, USA",
                "Frequency": 5,
                "LatLng": "30.4200708,-86.6170308"
            },
            {
                "LocationName": "France, Paris",
                "Frequency": 5,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "Gibraltar",
                "Frequency": 5,
                "LatLng": "36.140751,-5.353585"
            },
            {
                "LocationName": "Green Bay, WI",
                "Frequency": 5,
                "LatLng": "44.519159,-88.019826"
            },
            {
                "LocationName": "Hellas",
                "Frequency": 5,
                "LatLng": "39.074208,21.824312"
            },
            {
                "LocationName": "Hialeah, FL, United States",
                "Frequency": 5,
                "LatLng": "25.8575963,-80.2781057"
            },
            {
                "LocationName": "Hong Kong, Hong Kong",
                "Frequency": 5,
                "LatLng": "22.396428,114.109497"
            },
            {
                "LocationName": "Houston",
                "Frequency": 5,
                "LatLng": "29.7604267,-95.3698028"
            },
            {
                "LocationName": "http://telcoin.org",
                "Frequency": 5
            },
            {
                "LocationName": "Iasi, Romania",
                "Frequency": 5,
                "LatLng": "47.1584549,27.6014418"
            },
            {
                "LocationName": "Indore, India",
                "Frequency": 5,
                "LatLng": "22.7195687,75.8577258"
            },
            {
                "LocationName": "Jacksonville, FL",
                "Frequency": 5,
                "LatLng": "30.3321838,-81.655651"
            },
            {
                "LocationName": "Jaffna, Sri Lanka",
                "Frequency": 5,
                "LatLng": "9.6614981,80.0255465"
            },
            {
                "LocationName": "Kuwait",
                "Frequency": 5,
                "LatLng": "29.31166,47.481766"
            },
            {
                "LocationName": "Kyrgyzstan",
                "Frequency": 5,
                "LatLng": "41.20438,74.766098"
            },
            {
                "LocationName": "Lehi, UT",
                "Frequency": 5,
                "LatLng": "40.3916172,-111.8507662"
            },
            {
                "LocationName": "Lima, Peru",
                "Frequency": 5,
                "LatLng": "-12.046374,-77.0427934"
            },
            {
                "LocationName": "Liverpool",
                "Frequency": 5,
                "LatLng": "53.4083714,-2.9915726"
            },
            {
                "LocationName": "Los Gatos, CA",
                "Frequency": 5,
                "LatLng": "37.2358078,-121.9623751"
            },
            {
                "LocationName": "Manresa",
                "Frequency": 5,
                "LatLng": "41.7292826,1.8225154"
            },
            {
                "LocationName": "Melboure Australia",
                "Frequency": 5,
                "LatLng": "-37.814107,144.96328"
            },
            {
                "LocationName": "Mendoza, Argentina",
                "Frequency": 5,
                "LatLng": "-32.8894587,-68.8458386"
            },
            {
                "LocationName": "Mid West",
                "Frequency": 5,
                "LatLng": "14.3499851,121.0105229"
            },
            {
                "LocationName": "Mobile, AL",
                "Frequency": 5,
                "LatLng": "30.6953657,-88.0398912"
            },
            {
                "LocationName": "Murcia, Spain",
                "Frequency": 5,
                "LatLng": "37.9922399,-1.1306544"
            },
            {
                "LocationName": "Nairobi",
                "Frequency": 5,
                "LatLng": "-1.2920659,36.8219462"
            },
            {
                "LocationName": "Nantes (44)",
                "Frequency": 5,
                "LatLng": "47.218371,-1.553621"
            },
            {
                "LocationName": "Navi Mumbai, India",
                "Frequency": 5,
                "LatLng": "19.0330488,73.0296625"
            },
            {
                "LocationName": "Near Baltimore, MD",
                "Frequency": 5,
                "LatLng": "39.2903848,-76.6121893"
            },
            {
                "LocationName": "Nicosia, Cyprus",
                "Frequency": 5,
                "LatLng": "35.0400155,33.1239049"
            },
            {
                "LocationName": "Nigeria",
                "Frequency": 5,
                "LatLng": "9.081999,8.675277"
            },
            {
                "LocationName": "Norman, OK",
                "Frequency": 5,
                "LatLng": "35.2225668,-97.4394777"
            },
            {
                "LocationName": "North Vancouver, Canada",
                "Frequency": 5,
                "LatLng": "49.3269904,-123.0732801"
            },
            {
                "LocationName": "Novi Sad, Serbia",
                "Frequency": 5,
                "LatLng": "45.2671352,19.8335496"
            },
            {
                "LocationName": "Oakville, Canada",
                "Frequency": 5,
                "LatLng": "43.467517,-79.6876659"
            },
            {
                "LocationName": "Olympia, WA",
                "Frequency": 5,
                "LatLng": "47.0378741,-122.9006951"
            },
            {
                "LocationName": "Örebro, Sweden",
                "Frequency": 5,
                "LatLng": "59.2752626,15.2134105"
            },
            {
                "LocationName": "Palmyra, IL",
                "Frequency": 5,
                "LatLng": "39.4347699,-89.9959401"
            },
            {
                "LocationName": "Pego, Spain",
                "Frequency": 5,
                "LatLng": "38.8429394,-0.1156439"
            },
            {
                "LocationName": "Poznan",
                "Frequency": 5,
                "LatLng": "52.406374,16.9251681"
            },
            {
                "LocationName": "pune",
                "Frequency": 5,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Qingdao, China",
                "Frequency": 5,
                "LatLng": "36.067117,120.382612"
            },
            {
                "LocationName": "Quebec",
                "Frequency": 5,
                "LatLng": "52.9399159,-73.5491361"
            },
            {
                "LocationName": "Queenstown, New Zealand",
                "Frequency": 5,
                "LatLng": "-45.0311622,168.6626435"
            },
            {
                "LocationName": "Queretaro, Mexico",
                "Frequency": 5,
                "LatLng": "20.5887932,-100.3898881"
            },
            {
                "LocationName": "Recife, Brazil",
                "Frequency": 5,
                "LatLng": "-8.0578381,-34.8828969"
            },
            {
                "LocationName": "Richboro, PA",
                "Frequency": 5,
                "LatLng": "40.2151086,-75.0107245"
            },
            {
                "LocationName": "Roma",
                "Frequency": 5,
                "LatLng": "41.9027835,12.4963655"
            },
            {
                "LocationName": "Rotterdam",
                "Frequency": 5,
                "LatLng": "51.9244201,4.4777325"
            },
            {
                "LocationName": "Royersford",
                "Frequency": 5,
                "LatLng": "40.1842688,-75.5379639"
            },
            {
                "LocationName": "Russia, Saint-Petersberg",
                "Frequency": 5,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "San francisco",
                "Frequency": 5,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Francisco, California",
                "Frequency": 5,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Francisco, CA, United States",
                "Frequency": 5,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Jose",
                "Frequency": 5,
                "LatLng": "37.3382082,-121.8863286"
            },
            {
                "LocationName": "San Luis Obispo, CA",
                "Frequency": 5,
                "LatLng": "35.2827524,-120.6596156"
            },
            {
                "LocationName": "Santa Clara, CA",
                "Frequency": 5,
                "LatLng": "37.3541079,-121.9552356"
            },
            {
                "LocationName": "Seoul, S.Korea",
                "Frequency": 5,
                "LatLng": "37.566535,126.9779692"
            },
            {
                "LocationName": "Serbia",
                "Frequency": 5,
                "LatLng": "44.016521,21.005859"
            },
            {
                "LocationName": "SF",
                "Frequency": 5,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "Sirohi, India/Jaipur India",
                "Frequency": 5,
                "LatLng": "27.2364575,75.9172904"
            },
            {
                "LocationName": "Southampton, United Kingdom",
                "Frequency": 5,
                "LatLng": "50.9097004,-1.4043509"
            },
            {
                "LocationName": "Starnberg, Germany",
                "Frequency": 5,
                "LatLng": "47.9999615,11.3390089"
            },
            {
                "LocationName": "St-Petersburg",
                "Frequency": 5,
                "LatLng": "27.7518284,-82.6267345"
            },
            {
                "LocationName": "Strasbourg",
                "Frequency": 5,
                "LatLng": "48.5734053,7.7521113"
            },
            {
                "LocationName": "Szczecin, Poland",
                "Frequency": 5,
                "LatLng": "53.4285438,14.5528116"
            },
            {
                "LocationName": "Tilburg, Netherlands",
                "Frequency": 5,
                "LatLng": "51.560596,5.0919143"
            },
            {
                "LocationName": "Toronto, ON, Canada",
                "Frequency": 5,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Turin",
                "Frequency": 5,
                "LatLng": "45.070312,7.6868565"
            },
            {
                "LocationName": "Ukraine, Cherkassy",
                "Frequency": 5,
                "LatLng": "49.444433,32.059767"
            },
            {
                "LocationName": "Utrecht, Netherlands",
                "Frequency": 5,
                "LatLng": "52.0907374,5.1214201"
            },
            {
                "LocationName": "Valledupar, Colombia",
                "Frequency": 5,
                "LatLng": "10.4742449,-73.2436335"
            },
            {
                "LocationName": "Vienna",
                "Frequency": 5,
                "LatLng": "48.2081743,16.3738189"
            },
            {
                "LocationName": "Vigo, Spain",
                "Frequency": 5,
                "LatLng": "42.2405989,-8.7207268"
            },
            {
                "LocationName": "Visakhapatnam, India",
                "Frequency": 5,
                "LatLng": "17.6868159,83.2184815"
            },
            {
                "LocationName": "Vladivostok, Russia",
                "Frequency": 5,
                "LatLng": "43.1737387,132.0064506"
            },
            {
                "LocationName": "Washington DC, United States",
                "Frequency": 5,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Winter Haven, FL",
                "Frequency": 5,
                "LatLng": "28.0222435,-81.7328567"
            },
            {
                "LocationName": "Wolverhampton, United Kingdom",
                "Frequency": 5,
                "LatLng": "52.586973,-2.12882"
            },
            {
                "LocationName": "திருநெல்வேலி/Tirunelveli, இந்தியா/India",
                "Frequency": 5,
                "LatLng": "8.7139126,77.7566523"
            },
            {
                "LocationName": "Aachen, Germany",
                "Frequency": 4,
                "LatLng": "50.7753455,6.0838868"
            },
            {
                "LocationName": "Accra, Ghana",
                "Frequency": 4,
                "LatLng": "5.6037168,-0.1869644"
            },
            {
                "LocationName": "Alicante, Spain",
                "Frequency": 4,
                "LatLng": "38.3459963,-0.4906855"
            },
            {
                "LocationName": "Allahabad, India",
                "Frequency": 4,
                "LatLng": "25.4358011,81.846311"
            },
            {
                "LocationName": "Amherst, MA",
                "Frequency": 4,
                "LatLng": "42.3732216,-72.5198537"
            },
            {
                "LocationName": "Andrews, SC",
                "Frequency": 4,
                "LatLng": "33.451278,-79.5608971"
            },
            {
                "LocationName": "Athens, GA",
                "Frequency": 4,
                "LatLng": "33.9519347,-83.357567"
            },
            {
                "LocationName": "Auckland",
                "Frequency": 4,
                "LatLng": "-36.8484597,174.7633315"
            },
            {
                "LocationName": "Austin",
                "Frequency": 4,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Bangalore,India",
                "Frequency": 4,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Belfast, United Kingdom",
                "Frequency": 4,
                "LatLng": "54.597285,-5.93012"
            },
            {
                "LocationName": "Beverly, MA",
                "Frequency": 4,
                "LatLng": "42.5584283,-70.880049"
            },
            {
                "LocationName": "Bialystok, Poland",
                "Frequency": 4,
                "LatLng": "53.1324886,23.1688403"
            },
            {
                "LocationName": "BKK",
                "Frequency": 4,
                "LatLng": "35.3638951,-99.5232846"
            },
            {
                "LocationName": "Blekinge, Sweden",
                "Frequency": 4,
                "LatLng": "56.2783837,15.0180058"
            },
            {
                "LocationName": "Boca Raton, FL",
                "Frequency": 4,
                "LatLng": "26.3683064,-80.1289321"
            },
            {
                "LocationName": "Bolzano, Italy",
                "Frequency": 4,
                "LatLng": "46.4982953,11.3547582"
            },
            {
                "LocationName": "Brampton, Canada",
                "Frequency": 4,
                "LatLng": "43.7315479,-79.7624177"
            },
            {
                "LocationName": "Bucharest",
                "Frequency": 4,
                "LatLng": "44.4267674,26.1025384"
            },
            {
                "LocationName": "Burlingame, CA",
                "Frequency": 4,
                "LatLng": "37.5778696,-122.34809"
            },
            {
                "LocationName": "Busto Arsizio, Italy",
                "Frequency": 4,
                "LatLng": "45.611892,8.8531265"
            },
            {
                "LocationName": "BW / Germany",
                "Frequency": 4,
                "LatLng": "48.6616037,9.3501336"
            },
            {
                "LocationName": "Cambridge, ID",
                "Frequency": 4,
                "LatLng": "44.5726619,-116.6759919"
            },
            {
                "LocationName": "Campinas, Brazil",
                "Frequency": 4,
                "LatLng": "-22.9099384,-47.0626332"
            },
            {
                "LocationName": "Chester, United Kingdom",
                "Frequency": 4,
                "LatLng": "53.193392,-2.893075"
            },
            {
                "LocationName": "Chinese",
                "Frequency": 4,
                "LatLng": "9.6485789,123.8555664"
            },
            {
                "LocationName": "columbia",
                "Frequency": 4,
                "LatLng": "4.570868,-74.297333"
            },
            {
                "LocationName": "Columbia, MD",
                "Frequency": 4,
                "LatLng": "39.2037144,-76.8610462"
            },
            {
                "LocationName": "Como, Italy",
                "Frequency": 4,
                "LatLng": "45.8080597,9.0851765"
            },
            {
                "LocationName": "Cookeville, TN",
                "Frequency": 4,
                "LatLng": "36.162839,-85.5016423"
            },
            {
                "LocationName": "Crystal Lake, IL",
                "Frequency": 4,
                "LatLng": "42.2411344,-88.3161965"
            },
            {
                "LocationName": "Cupertino, CA",
                "Frequency": 4,
                "LatLng": "37.3229978,-122.0321823"
            },
            {
                "LocationName": "Devonport",
                "Frequency": 4,
                "LatLng": "-41.1783532,146.3609534"
            },
            {
                "LocationName": "Dresden",
                "Frequency": 4,
                "LatLng": "51.0504088,13.7372621"
            },
            {
                "LocationName": "Duluth, MN",
                "Frequency": 4,
                "LatLng": "46.7866719,-92.1004852"
            },
            {
                "LocationName": "Ede",
                "Frequency": 4,
                "LatLng": "52.0401675,5.6648594"
            },
            {
                "LocationName": "Eigenbrake, Belgium",
                "Frequency": 4,
                "LatLng": "50.6853626,4.3779197"
            },
            {
                "LocationName": "Eindhoven, Netherlands",
                "Frequency": 4,
                "LatLng": "51.441642,5.4697225"
            },
            {
                "LocationName": "Florianopolis, Brazil",
                "Frequency": 4,
                "LatLng": "-27.5953778,-48.5480499"
            },
            {
                "LocationName": "Forgotten Realms",
                "Frequency": 4
            },
            {
                "LocationName": "Fort Lauderdale, FL",
                "Frequency": 4,
                "LatLng": "26.1224386,-80.1373174"
            },
            {
                "LocationName": "Freiburg, Germany",
                "Frequency": 4,
                "LatLng": "47.9990077,7.8421043"
            },
            {
                "LocationName": "Galway, Ireland",
                "Frequency": 4,
                "LatLng": "53.270668,-9.0567905"
            },
            {
                "LocationName": "Gdansk, Poland",
                "Frequency": 4,
                "LatLng": "54.3520252,18.6466384"
            },
            {
                "LocationName": "Gorgonzola, Italy",
                "Frequency": 4,
                "LatLng": "45.5307573,9.4054483"
            },
            {
                "LocationName": "Guadalajara, México",
                "Frequency": 4,
                "LatLng": "20.6596988,-103.3496092"
            },
            {
                "LocationName": "Guangzhou.China",
                "Frequency": 4,
                "LatLng": "23.12911,113.264385"
            },
            {
                "LocationName": "Guatemala",
                "Frequency": 4,
                "LatLng": "15.783471,-90.230759"
            },
            {
                "LocationName": "Guwahati, India",
                "Frequency": 4,
                "LatLng": "26.1445169,91.7362365"
            },
            {
                "LocationName": "Hayward, CA",
                "Frequency": 4,
                "LatLng": "37.6688205,-122.0807964"
            },
            {
                "LocationName": "Hefei, China",
                "Frequency": 4,
                "LatLng": "31.820587,117.227239"
            },
            {
                "LocationName": "Helsingborg, Sweden",
                "Frequency": 4,
                "LatLng": "56.0464674,12.6945121"
            },
            {
                "LocationName": "Ho Chi Minh, Vietnam",
                "Frequency": 4,
                "LatLng": "10.8230989,106.6296638"
            },
            {
                "LocationName": "Imperial College London",
                "Frequency": 4,
                "LatLng": "51.5177367,-0.1731784"
            },
            {
                "LocationName": "Iowa",
                "Frequency": 4,
                "LatLng": "41.8780025,-93.097702"
            },
            {
                "LocationName": "Israel, north",
                "Frequency": 4,
                "LatLng": "32.8972246,35.3027226"
            },
            {
                "LocationName": "Jaipur",
                "Frequency": 4,
                "LatLng": "26.9124336,75.7872709"
            },
            {
                "LocationName": "Jakarta",
                "Frequency": 4,
                "LatLng": "-6.2087634,106.845599"
            },
            {
                "LocationName": "Jersey City, NJ",
                "Frequency": 4,
                "LatLng": "40.7281575,-74.0776417"
            },
            {
                "LocationName": "Kaiserslautern, Deutschland",
                "Frequency": 4,
                "LatLng": "49.4400657,7.7491265"
            },
            {
                "LocationName": "Kamuthi,Ramanathapuram",
                "Frequency": 4,
                "LatLng": "9.4012598,78.3557775"
            },
            {
                "LocationName": "Kansas",
                "Frequency": 4,
                "LatLng": "39.011902,-98.4842465"
            },
            {
                "LocationName": "Kansas City",
                "Frequency": 4,
                "LatLng": "39.0997265,-94.5785667"
            },
            {
                "LocationName": "Kharkiv, Ukraine",
                "Frequency": 4,
                "LatLng": "49.9935,36.230383"
            },
            {
                "LocationName": "Kyoto, Japan",
                "Frequency": 4,
                "LatLng": "35.0116363,135.7680294"
            },
            {
                "LocationName": "Lagos, Nigeria",
                "Frequency": 4,
                "LatLng": "6.5243793,3.3792057"
            },
            {
                "LocationName": "Lahore",
                "Frequency": 4,
                "LatLng": "31.5546061,74.3571581"
            },
            {
                "LocationName": "Larne, United Kingdom",
                "Frequency": 4,
                "LatLng": "54.8578003,-5.8236224"
            },
            {
                "LocationName": "Laval, France",
                "Frequency": 4,
                "LatLng": "48.0785146,-0.7669906"
            },
            {
                "LocationName": "Leeds",
                "Frequency": 4,
                "LatLng": "53.8007554,-1.5490774"
            },
            {
                "LocationName": "Leicester, United Kingdom",
                "Frequency": 4,
                "LatLng": "52.6368778,-1.1397592"
            },
            {
                "LocationName": "Lisbon",
                "Frequency": 4,
                "LatLng": "38.7222524,-9.1393366"
            },
            {
                "LocationName": "London, England",
                "Frequency": 4,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "London, San Francisco",
                "Frequency": 4,
                "LatLng": "37.721209,-122.436385"
            },
            {
                "LocationName": "Long Beach, CA",
                "Frequency": 4,
                "LatLng": "33.7700504,-118.1937395"
            },
            {
                "LocationName": "Ludhiana, India",
                "Frequency": 4,
                "LatLng": "30.900965,75.8572758"
            },
            {
                "LocationName": "Manhattan Beach, CA",
                "Frequency": 4,
                "LatLng": "33.8847361,-118.4109089"
            },
            {
                "LocationName": "Mars, Germany",
                "Frequency": 4,
                "LatLng": "48.1455907,11.5509794"
            },
            {
                "LocationName": "Medellin, Colombia",
                "Frequency": 4,
                "LatLng": "6.2530408,-75.5645737"
            },
            {
                "LocationName": "Milan",
                "Frequency": 4,
                "LatLng": "45.4654219,9.1859243"
            },
            {
                "LocationName": "Mohali, India",
                "Frequency": 4,
                "LatLng": "30.7046486,76.7178726"
            },
            {
                "LocationName": "Mongolia",
                "Frequency": 4,
                "LatLng": "46.862496,103.846656"
            },
            {
                "LocationName": "Montana",
                "Frequency": 4,
                "LatLng": "46.8796822,-110.3625658"
            },
            {
                "LocationName": "Montana, Bulgaria",
                "Frequency": 4,
                "LatLng": "43.4085161,23.2257292"
            },
            {
                "LocationName": "Naperville, IL",
                "Frequency": 4,
                "LatLng": "41.7508391,-88.1535352"
            },
            {
                "LocationName": "New Taipei City, Taiwan",
                "Frequency": 4,
                "LatLng": "25.0169826,121.4627868"
            },
            {
                "LocationName": "NJ, USA",
                "Frequency": 4,
                "LatLng": "40.0583238,-74.4056612"
            },
            {
                "LocationName": "NL",
                "Frequency": 4,
                "LatLng": "52.132633,5.291266"
            },
            {
                "LocationName": "Norfolk, VA",
                "Frequency": 4,
                "LatLng": "36.8507689,-76.2858726"
            },
            {
                "LocationName": "Northern California",
                "Frequency": 4,
                "LatLng": "38.8375215,-120.8958242"
            },
            {
                "LocationName": "Nottingham, UK",
                "Frequency": 4,
                "LatLng": "52.9547832,-1.1581086"
            },
            {
                "LocationName": "Novi, MI",
                "Frequency": 4,
                "LatLng": "42.48059,-83.4754913"
            },
            {
                "LocationName": "Nutley, NJ",
                "Frequency": 4,
                "LatLng": "40.8223168,-74.1598725"
            },
            {
                "LocationName": "Olathe, KS",
                "Frequency": 4,
                "LatLng": "38.8813958,-94.8191285"
            },
            {
                "LocationName": "Oshawa, Canada",
                "Frequency": 4,
                "LatLng": "43.8970929,-78.8657912"
            },
            {
                "LocationName": "Pacifica, CA",
                "Frequency": 4,
                "LatLng": "37.6138253,-122.4869194"
            },
            {
                "LocationName": "Pakistan, Islamabad",
                "Frequency": 4,
                "LatLng": "33.7293882,73.0931461"
            },
            {
                "LocationName": "Palo Alto",
                "Frequency": 4,
                "LatLng": "37.4418834,-122.1430195"
            },
            {
                "LocationName": "Party's Republic of China",
                "Frequency": 4,
                "LatLng": "25.0320066,121.5578278"
            },
            {
                "LocationName": "Pennsylvania",
                "Frequency": 4,
                "LatLng": "41.2033216,-77.1945247"
            },
            {
                "LocationName": "Penzance, United Kingdom",
                "Frequency": 4,
                "LatLng": "50.118798,-5.537592"
            },
            {
                "LocationName": "Peru",
                "Frequency": 4,
                "LatLng": "-9.189967,-75.015152"
            },
            {
                "LocationName": "Portland, Oregon",
                "Frequency": 4,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Praia Grande - Brazil",
                "Frequency": 4,
                "LatLng": "-24.0088727,-46.4125034"
            },
            {
                "LocationName": "Puerto Rico",
                "Frequency": 4,
                "LatLng": "18.220833,-66.590149"
            },
            {
                "LocationName": "Queens, NY",
                "Frequency": 4,
                "LatLng": "40.7282239,-73.7948516"
            },
            {
                "LocationName": "Ranchi, India",
                "Frequency": 4,
                "LatLng": "23.3440997,85.309562"
            },
            {
                "LocationName": "Reno, NV",
                "Frequency": 4,
                "LatLng": "39.5296329,-119.8138027"
            },
            {
                "LocationName": "Romania, Targu Mures",
                "Frequency": 4,
                "LatLng": "46.5385862,24.5514392"
            },
            {
                "LocationName": "Russia, Kazan",
                "Frequency": 4,
                "LatLng": "55.8304307,49.0660806"
            },
            {
                "LocationName": "Russia, Saint-Petersburg",
                "Frequency": 4,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "Salvador - BA - Brazil",
                "Frequency": 4,
                "LatLng": "-12.9730401,-38.502304"
            },
            {
                "LocationName": "San Antonio, TX",
                "Frequency": 4,
                "LatLng": "29.4241219,-98.4936282"
            },
            {
                "LocationName": "San Diego",
                "Frequency": 4,
                "LatLng": "32.715738,-117.1610838"
            },
            {
                "LocationName": "San Jose, California",
                "Frequency": 4,
                "LatLng": "37.3382082,-121.8863286"
            },
            {
                "LocationName": "Sao Jose dos Campos, Brazil",
                "Frequency": 4,
                "LatLng": "-23.223701,-45.9009074"
            },
            {
                "LocationName": "Shenzhen, China",
                "Frequency": 4,
                "LatLng": "22.543099,114.057868"
            },
            {
                "LocationName": "Somerville, MA",
                "Frequency": 4,
                "LatLng": "42.3875968,-71.0994968"
            },
            {
                "LocationName": "Somewhere on Earth",
                "Frequency": 4
            },
            {
                "LocationName": "Tallahassee, FL",
                "Frequency": 4,
                "LatLng": "30.4382559,-84.2807329"
            },
            {
                "LocationName": "Tampere, Finland",
                "Frequency": 4,
                "LatLng": "61.4981508,23.7610254"
            },
            {
                "LocationName": "tehran",
                "Frequency": 4,
                "LatLng": "35.6891975,51.3889736"
            },
            {
                "LocationName": "Terre Haute, IN",
                "Frequency": 4,
                "LatLng": "39.4667034,-87.4139092"
            },
            {
                "LocationName": "Toronto, ON CANADA",
                "Frequency": 4,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Toronto, Ontario",
                "Frequency": 4,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Typeoville",
                "Frequency": 4
            },
            {
                "LocationName": "University Of Moratuwa",
                "Frequency": 4,
                "LatLng": "6.7959931,79.8970038"
            },
            {
                "LocationName": "Vashon, WA",
                "Frequency": 4,
                "LatLng": "47.4473204,-122.4598502"
            },
            {
                "LocationName": "Venezuelan in Chile",
                "Frequency": 4,
                "LatLng": "-33.4781125,-70.5718228"
            },
            {
                "LocationName": "Victoria, Canada",
                "Frequency": 4,
                "LatLng": "48.4284207,-123.3656444"
            },
            {
                "LocationName": "Vilnius, Lithuania",
                "Frequency": 4,
                "LatLng": "54.6871555,25.2796514"
            },
            {
                "LocationName": "Volgograd, Russia",
                "Frequency": 4,
                "LatLng": "48.708048,44.5133034"
            },
            {
                "LocationName": "WA",
                "Frequency": 4,
                "LatLng": "47.7510741,-120.7401386"
            },
            {
                "LocationName": "Washington",
                "Frequency": 4,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Wellesley, MA",
                "Frequency": 4,
                "LatLng": "42.296797,-71.2923877"
            },
            {
                "LocationName": "Wellington, New Zealand",
                "Frequency": 4,
                "LatLng": "-41.2864603,174.776236"
            },
            {
                "LocationName": "97229",
                "Frequency": 3,
                "LatLng": "45.5593978,-122.807445"
            },
            {
                "LocationName": "Abu Dhabi, United Arab Emirates",
                "Frequency": 3,
                "LatLng": "24.2991738,54.6972774"
            },
            {
                "LocationName": "Addis Ababa",
                "Frequency": 3,
                "LatLng": "8.9806034,38.7577605"
            },
            {
                "LocationName": "Adelaide, Australia",
                "Frequency": 3,
                "LatLng": "-34.9286212,138.5999594"
            },
            {
                "LocationName": "Ajaccio, France",
                "Frequency": 3,
                "LatLng": "41.919229,8.738635"
            },
            {
                "LocationName": "Albuquerque, NM",
                "Frequency": 3,
                "LatLng": "35.0853336,-106.6055534"
            },
            {
                "LocationName": "Almere, Netherlands",
                "Frequency": 3,
                "LatLng": "52.3507849,5.2647016"
            },
            {
                "LocationName": "Ankara/TURKEY",
                "Frequency": 3,
                "LatLng": "39.9333635,32.8597419"
            },
            {
                "LocationName": "Ann Arbor",
                "Frequency": 3,
                "LatLng": "42.2808256,-83.7430378"
            },
            {
                "LocationName": "Antibes, France",
                "Frequency": 3,
                "LatLng": "43.580418,7.125102"
            },
            {
                "LocationName": "Area 51",
                "Frequency": 3,
                "LatLng": "29.0876259,48.0513675"
            },
            {
                "LocationName": "Astana, Kazakhstan",
                "Frequency": 3,
                "LatLng": "51.1605227,71.4703558"
            },
            {
                "LocationName": "Aurora, CO",
                "Frequency": 3,
                "LatLng": "39.7294319,-104.8319195"
            },
            {
                "LocationName": "Austin, Texas",
                "Frequency": 3,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Austin TX",
                "Frequency": 3,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Bamberg, Germany",
                "Frequency": 3,
                "LatLng": "49.8988135,10.9027636"
            },
            {
                "LocationName": "Bangalore, Kottayam",
                "Frequency": 3,
                "LatLng": "9.5915668,76.5221531"
            },
            {
                "LocationName": "Baoding, China",
                "Frequency": 3,
                "LatLng": "38.873891,115.464806"
            },
            {
                "LocationName": "Bapatla, India",
                "Frequency": 3,
                "LatLng": "15.9058966,80.4715866"
            },
            {
                "LocationName": "Bay Area",
                "Frequency": 3,
                "LatLng": "37.9994669,-122.174605"
            },
            {
                "LocationName": "Beijing China",
                "Frequency": 3,
                "LatLng": "39.904211,116.407395"
            },
            {
                "LocationName": "Belfast",
                "Frequency": 3,
                "LatLng": "54.597285,-5.93012"
            },
            {
                "LocationName": "Bellevue, WA",
                "Frequency": 3,
                "LatLng": "47.610377,-122.2006786"
            },
            {
                "LocationName": "Belmont, CA",
                "Frequency": 3,
                "LatLng": "37.5202145,-122.2758008"
            },
            {
                "LocationName": "Berlin, Earth",
                "Frequency": 3,
                "LatLng": "45,-71.810833"
            },
            {
                "LocationName": "Bilbao",
                "Frequency": 3,
                "LatLng": "43.2630126,-2.9349852"
            },
            {
                "LocationName": "bochum",
                "Frequency": 3,
                "LatLng": "51.4818445,7.2162363"
            },
            {
                "LocationName": "Bolivia",
                "Frequency": 3,
                "LatLng": "-16.290154,-63.588653"
            },
            {
                "LocationName": "Bologna, Italy",
                "Frequency": 3,
                "LatLng": "44.494887,11.3426163"
            },
            {
                "LocationName": "Bonn, Germany",
                "Frequency": 3,
                "LatLng": "50.73743,7.0982068"
            },
            {
                "LocationName": "Brentwood, TN",
                "Frequency": 3,
                "LatLng": "36.0331164,-86.7827772"
            },
            {
                "LocationName": "Brest, France",
                "Frequency": 3,
                "LatLng": "48.390394,-4.486076"
            },
            {
                "LocationName": "Bristol, UK",
                "Frequency": 3,
                "LatLng": "51.454513,-2.58791"
            },
            {
                "LocationName": "Broomfield, Colorado",
                "Frequency": 3,
                "LatLng": "39.9205411,-105.0866504"
            },
            {
                "LocationName": "Brunswick, Germany",
                "Frequency": 3,
                "LatLng": "52.2688736,10.5267696"
            },
            {
                "LocationName": "Cambridge, UK",
                "Frequency": 3,
                "LatLng": "52.205337,0.121817"
            },
            {
                "LocationName": "Cayman Islands",
                "Frequency": 3,
                "LatLng": "19.3133,-81.2546"
            },
            {
                "LocationName": "Ceará",
                "Frequency": 3,
                "LatLng": "-5.4983977,-39.3206241"
            },
            {
                "LocationName": "Charlottesville, VA",
                "Frequency": 3,
                "LatLng": "38.0293059,-78.4766781"
            },
            {
                "LocationName": "Chattanooga, TN",
                "Frequency": 3,
                "LatLng": "35.0456297,-85.3096801"
            },
            {
                "LocationName": "chennai",
                "Frequency": 3,
                "LatLng": "13.0826802,80.2707184"
            },
            {
                "LocationName": "Chicnwad, Pune",
                "Frequency": 3,
                "LatLng": "18.6297811,73.7997094"
            },
            {
                "LocationName": "cimahi",
                "Frequency": 3,
                "LatLng": "-6.8840816,107.5413039"
            },
            {
                "LocationName": "Coimbra, Portugal",
                "Frequency": 3,
                "LatLng": "40.2033145,-8.4102573"
            },
            {
                "LocationName": "Cologne",
                "Frequency": 3,
                "LatLng": "50.937531,6.9602786"
            },
            {
                "LocationName": "Córdoba, Spain",
                "Frequency": 3,
                "LatLng": "37.8881751,-4.7793835"
            },
            {
                "LocationName": "Cornwall, England",
                "Frequency": 3,
                "LatLng": "50.2660471,-5.0527125"
            },
            {
                "LocationName": "Cracow, Poland",
                "Frequency": 3,
                "LatLng": "50.0646501,19.9449799"
            },
            {
                "LocationName": "Cranston, RI",
                "Frequency": 3,
                "LatLng": "41.7798226,-71.4372796"
            },
            {
                "LocationName": "Culver City, CA",
                "Frequency": 3,
                "LatLng": "34.0211224,-118.3964665"
            },
            {
                "LocationName": "Cyberjaya, Malaysia",
                "Frequency": 3,
                "LatLng": "2.921318,101.6559349"
            },
            {
                "LocationName": "Dayton, Ohio",
                "Frequency": 3,
                "LatLng": "39.7589478,-84.1916069"
            },
            {
                "LocationName": "Deggendorf, Germany",
                "Frequency": 3,
                "LatLng": "48.8408515,12.9574787"
            },
            {
                "LocationName": "Delhi , India",
                "Frequency": 3,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "Delhi,India",
                "Frequency": 3,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "Dubai",
                "Frequency": 3,
                "LatLng": "25.2048493,55.2707828"
            },
            {
                "LocationName": "Dubai, UAE",
                "Frequency": 3,
                "LatLng": "25.2048493,55.2707828"
            },
            {
                "LocationName": "Encinitas, CA",
                "Frequency": 3,
                "LatLng": "33.0369867,-117.2919818"
            },
            {
                "LocationName": "Erlangen, Germany",
                "Frequency": 3,
                "LatLng": "49.5896744,11.0119611"
            },
            {
                "LocationName": "Eugene, OR",
                "Frequency": 3,
                "LatLng": "44.0520691,-123.0867536"
            },
            {
                "LocationName": "Everywhere",
                "Frequency": 3,
                "LatLng": "37.6658757,-91.8479332"
            },
            {
                "LocationName": "Faridabad, India",
                "Frequency": 3,
                "LatLng": "28.4089123,77.3177894"
            },
            {
                "LocationName": "Farnborough, United Kingdom",
                "Frequency": 3,
                "LatLng": "51.2868939,-0.752615"
            },
            {
                "LocationName": "Fort Myers, FL",
                "Frequency": 3,
                "LatLng": "26.640628,-81.8723084"
            },
            {
                "LocationName": "Frederick, MD",
                "Frequency": 3,
                "LatLng": "39.4142688,-77.4105409"
            },
            {
                "LocationName": "Gilbert, AZ",
                "Frequency": 3,
                "LatLng": "33.3528264,-111.789027"
            },
            {
                "LocationName": "Glasgow",
                "Frequency": 3,
                "LatLng": "55.864237,-4.251806"
            },
            {
                "LocationName": "Glendale, AZ",
                "Frequency": 3,
                "LatLng": "33.5386523,-112.1859866"
            },
            {
                "LocationName": "Goa India",
                "Frequency": 3,
                "LatLng": "15.2993265,74.123996"
            },
            {
                "LocationName": "Goodyear, AZ",
                "Frequency": 3,
                "LatLng": "33.4353394,-112.3576567"
            },
            {
                "LocationName": "Greenville, SC",
                "Frequency": 3,
                "LatLng": "34.8526176,-82.3940104"
            },
            {
                "LocationName": "Guam/Philippines",
                "Frequency": 3,
                "LatLng": "14.4824614,121.032485"
            },
            {
                "LocationName": "Hanoi",
                "Frequency": 3,
                "LatLng": "21.0277644,105.8341598"
            },
            {
                "LocationName": "Hermosillo, Mexico",
                "Frequency": 3,
                "LatLng": "29.0729673,-110.9559192"
            },
            {
                "LocationName": "Highway to Hell",
                "Frequency": 3,
                "LatLng": "25.7534543,-80.1485118"
            },
            {
                "LocationName": "Hoboken, NJ",
                "Frequency": 3,
                "LatLng": "40.7439905,-74.0323626"
            },
            {
                "LocationName": "Hod HaSharon, Israel",
                "Frequency": 3,
                "LatLng": "32.149961,34.8838788"
            },
            {
                "LocationName": "Hoover, AL",
                "Frequency": 3,
                "LatLng": "33.4053867,-86.8113781"
            },
            {
                "LocationName": "Houston, Texas",
                "Frequency": 3,
                "LatLng": "29.7604267,-95.3698028"
            },
            {
                "LocationName": "iligan city",
                "Frequency": 3,
                "LatLng": "8.2280209,124.2452422"
            },
            {
                "LocationName": "Indiana",
                "Frequency": 3,
                "LatLng": "40.2671941,-86.1349019"
            },
            {
                "LocationName": "iowa city ia",
                "Frequency": 3,
                "LatLng": "41.6611277,-91.5301683"
            },
            {
                "LocationName": "IRI",
                "Frequency": 3,
                "LatLng": "35.9482858,126.9575991"
            },
            {
                "LocationName": "Islambad, Pakistan",
                "Frequency": 3,
                "LatLng": "33.7293882,73.0931461"
            },
            {
                "LocationName": "Ituverava, Brazil",
                "Frequency": 3,
                "LatLng": "-20.3345205,-47.7921348"
            },
            {
                "LocationName": "Izmir",
                "Frequency": 3,
                "LatLng": "38.423734,27.142826"
            },
            {
                "LocationName": "İzmir",
                "Frequency": 3,
                "LatLng": "38.423734,27.142826"
            },
            {
                "LocationName": "Izmir, Turkey",
                "Frequency": 3,
                "LatLng": "38.423734,27.142826"
            },
            {
                "LocationName": "Japan, Tokyo",
                "Frequency": 3,
                "LatLng": "35.7090259,139.7319925"
            },
            {
                "LocationName": "Java Virtual Machine",
                "Frequency": 3
            },
            {
                "LocationName": "Jersey, Channel Islands",
                "Frequency": 3
            },
            {
                "LocationName": "Johannesburg",
                "Frequency": 3,
                "LatLng": "-26.2041028,28.0473051"
            },
            {
                "LocationName": "Juiz de Fora, Brazil",
                "Frequency": 3,
                "LatLng": "-21.7624237,-43.3433999"
            },
            {
                "LocationName": "Kabul, Afghanistan",
                "Frequency": 3,
                "LatLng": "34.5553494,69.207486"
            },
            {
                "LocationName": "Kandy, Sri Lanka",
                "Frequency": 3,
                "LatLng": "7.2905715,80.6337262"
            },
            {
                "LocationName": "Kaunas, Republic of Lithuania",
                "Frequency": 3,
                "LatLng": "54.8985207,23.9035965"
            },
            {
                "LocationName": "Kingston, Jamaica",
                "Frequency": 3,
                "LatLng": "18.0178743,-76.8099041"
            },
            {
                "LocationName": "Klagenfurt, Austria",
                "Frequency": 3,
                "LatLng": "46.6364598,14.3122246"
            },
            {
                "LocationName": "Knoxville, TN",
                "Frequency": 3,
                "LatLng": "35.9606384,-83.9207392"
            },
            {
                "LocationName": "Konstanz, Germany",
                "Frequency": 3,
                "LatLng": "47.6779496,9.1732384"
            },
            {
                "LocationName": "Krasnoyarsk, Russia",
                "Frequency": 3,
                "LatLng": "56.0152834,92.8932476"
            },
            {
                "LocationName": "Leeds, AL",
                "Frequency": 3,
                "LatLng": "33.5481597,-86.5444288"
            },
            {
                "LocationName": "Lexington, KY",
                "Frequency": 3,
                "LatLng": "38.0405837,-84.5037164"
            },
            {
                "LocationName": "Linux Mint",
                "Frequency": 3
            },
            {
                "LocationName": "Los Angeles, California, USA",
                "Frequency": 3,
                "LatLng": "34.0522342,-118.2436849"
            },
            {
                "LocationName": "Lucknow, India",
                "Frequency": 3,
                "LatLng": "26.8466937,80.946166"
            },
            {
                "LocationName": "Ludwigshafen am Rhein, Germany",
                "Frequency": 3,
                "LatLng": "49.47741,8.44518"
            },
            {
                "LocationName": "Luxem",
                "Frequency": 3,
                "LatLng": "50.3188481,7.1082459"
            },
            {
                "LocationName": "Luxembourg",
                "Frequency": 3,
                "LatLng": "49.815273,6.129583"
            },
            {
                "LocationName": "Luxemburg",
                "Frequency": 3,
                "LatLng": "49.815273,6.129583"
            },
            {
                "LocationName": "Madikeri, India",
                "Frequency": 3,
                "LatLng": "12.4244205,75.7381856"
            },
            {
                "LocationName": "Madison, MS",
                "Frequency": 3,
                "LatLng": "32.4618086,-90.1153638"
            },
            {
                "LocationName": "Madrid (Spain)",
                "Frequency": 3,
                "LatLng": "40.4167754,-3.7037902"
            },
            {
                "LocationName": "Maine",
                "Frequency": 3,
                "LatLng": "45.253783,-69.4454689"
            },
            {
                "LocationName": "Malmö, Sweden",
                "Frequency": 3,
                "LatLng": "55.604981,13.003822"
            },
            {
                "LocationName": "Masterton, New Zealand",
                "Frequency": 3,
                "LatLng": "-40.9511118,175.6573502"
            },
            {
                "LocationName": "Matawan, NJ",
                "Frequency": 3,
                "LatLng": "40.41483,-74.2295891"
            },
            {
                "LocationName": "Melbourne",
                "Frequency": 3,
                "LatLng": "28.0836269,-80.6081089"
            },
            {
                "LocationName": "Mesa, AZ",
                "Frequency": 3,
                "LatLng": "33.4151843,-111.8314724"
            },
            {
                "LocationName": "Metro Detroit Michigan",
                "Frequency": 3,
                "LatLng": "42.2271794,-83.3464022"
            },
            {
                "LocationName": "Milton, GA",
                "Frequency": 3,
                "LatLng": "34.1321631,-84.300666"
            },
            {
                "LocationName": "Montclair, NJ",
                "Frequency": 3,
                "LatLng": "40.8259007,-74.2090053"
            },
            {
                "LocationName": "Montes Claros, Brazil",
                "Frequency": 3,
                "LatLng": "-16.7286406,-43.8582139"
            },
            {
                "LocationName": "Mountain View, AR",
                "Frequency": 3,
                "LatLng": "35.8684075,-92.1176521"
            },
            {
                "LocationName": "na",
                "Frequency": 3,
                "LatLng": "40.901975,14.332644"
            },
            {
                "LocationName": "N/A",
                "Frequency": 3,
                "LatLng": "30.711904,-112.1609835"
            },
            {
                "LocationName": "Nagpur, India",
                "Frequency": 3,
                "LatLng": "21.1458004,79.0881546"
            },
            {
                "LocationName": "Nashik",
                "Frequency": 3,
                "LatLng": "19.9974533,73.7898023"
            },
            {
                "LocationName": "Nevada City, CA",
                "Frequency": 3,
                "LatLng": "39.2615606,-121.0160594"
            },
            {
                "LocationName": "Neviano, Italy",
                "Frequency": 3,
                "LatLng": "40.1068634,18.1163916"
            },
            {
                "LocationName": "Newcastle, United Kingdom",
                "Frequency": 3,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "New York, NY, United States",
                "Frequency": 3,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "NJ",
                "Frequency": 3,
                "LatLng": "40.0583238,-74.4056612"
            },
            {
                "LocationName": "/* no comments */",
                "Frequency": 3
            },
            {
                "LocationName": "Oceanside, CA",
                "Frequency": 3,
                "LatLng": "33.1958696,-117.3794834"
            },
            {
                "LocationName": "Odesa, Ukraine",
                "Frequency": 3,
                "LatLng": "46.482526,30.7233095"
            },
            {
                "LocationName": "Odessa, Ukraine",
                "Frequency": 3,
                "LatLng": "46.482526,30.7233095"
            },
            {
                "LocationName": "Okemos, MI",
                "Frequency": 3,
                "LatLng": "42.722257,-84.4274744"
            },
            {
                "LocationName": "Oklahoma",
                "Frequency": 3,
                "LatLng": "35.4675602,-97.5164276"
            },
            {
                "LocationName": "Orange County",
                "Frequency": 3,
                "LatLng": "33.7174708,-117.8311428"
            },
            {
                "LocationName": "Osaka, Japan",
                "Frequency": 3,
                "LatLng": "34.6937378,135.5021651"
            },
            {
                "LocationName": "ozamiz",
                "Frequency": 3,
                "LatLng": "8.162411,123.7741195"
            },
            {
                "LocationName": "Panevezys, Lithuania",
                "Frequency": 3,
                "LatLng": "55.7347915,24.3574773"
            },
            {
                "LocationName": "Pasadena, CA",
                "Frequency": 3,
                "LatLng": "34.1477849,-118.1445155"
            },
            {
                "LocationName": "Pembrokeshire & Staines",
                "Frequency": 3,
                "LatLng": "51.674078,-4.9088785"
            },
            {
                "LocationName": "Plano, TX",
                "Frequency": 3,
                "LatLng": "33.0198431,-96.6988856"
            },
            {
                "LocationName": "Poland,  Warsaw",
                "Frequency": 3,
                "LatLng": "52.2296756,21.0122287"
            },
            {
                "LocationName": "Porsgrunn, Norway",
                "Frequency": 3,
                "LatLng": "59.1385567,9.6555147"
            },
            {
                "LocationName": "Portland OR",
                "Frequency": 3,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Porto Alegre",
                "Frequency": 3,
                "LatLng": "-30.0346471,-51.2176584"
            },
            {
                "LocationName": "Prague",
                "Frequency": 3,
                "LatLng": "50.0755381,14.4378005"
            },
            {
                "LocationName": "Presidente Prudente, Brazil",
                "Frequency": 3,
                "LatLng": "-22.121126,-51.393006"
            },
            {
                "LocationName": "Puerto Vallarta, Mexico",
                "Frequency": 3,
                "LatLng": "20.653407,-105.2253316"
            },
            {
                "LocationName": "Pulaski, GA",
                "Frequency": 3,
                "LatLng": "32.3901752,-81.9567837"
            },
            {
                "LocationName": "Pune India",
                "Frequency": 3,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Pune,India",
                "Frequency": 3,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Pune, Inida",
                "Frequency": 3,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Punjab, India",
                "Frequency": 3,
                "LatLng": "31.1471305,75.3412179"
            },
            {
                "LocationName": "Quito, Ecuador",
                "Frequency": 3,
                "LatLng": "-0.1806532,-78.4678382"
            },
            {
                "LocationName": "Remote",
                "Frequency": 3,
                "LatLng": "43.0059455,-123.8925908"
            },
            {
                "LocationName": "Rexburg, ID",
                "Frequency": 3,
                "LatLng": "43.8231096,-111.7924237"
            },
            {
                "LocationName": "Reykjavík",
                "Frequency": 3,
                "LatLng": "64.1265206,-21.8174393"
            },
            {
                "LocationName": "Roanoke, VA",
                "Frequency": 3,
                "LatLng": "37.2709704,-79.9414266"
            },
            {
                "LocationName": "Rossville, IN",
                "Frequency": 3,
                "LatLng": "40.4169804,-86.5947239"
            },
            {
                "LocationName": "Saltaire",
                "Frequency": 3,
                "LatLng": "53.836607,-1.785755"
            },
            {
                "LocationName": "San Jose, Costa Rica",
                "Frequency": 3,
                "LatLng": "9.9280694,-84.0907246"
            },
            {
                "LocationName": "Sant Cugat Del Vallès, Spain",
                "Frequency": 3,
                "LatLng": "41.4720702,2.0865154"
            },
            {
                "LocationName": "Savannah, GA",
                "Frequency": 3,
                "LatLng": "32.0835407,-81.0998342"
            },
            {
                "LocationName": "Scottsdale, AZ USA",
                "Frequency": 3,
                "LatLng": "33.4941704,-111.9260519"
            },
            {
                "LocationName": "Scranton, PA",
                "Frequency": 3,
                "LatLng": "41.408969,-75.6624122"
            },
            {
                "LocationName": "Seattle, USA",
                "Frequency": 3,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "SF Bay Area",
                "Frequency": 3,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "Sisteron, France",
                "Frequency": 3,
                "LatLng": "44.194713,5.943191"
            },
            {
                "LocationName": "SLC, UT",
                "Frequency": 3,
                "LatLng": "40.7607793,-111.8910474"
            },
            {
                "LocationName": "Solo",
                "Frequency": 3,
                "LatLng": "-7.5754887,110.8243272"
            },
            {
                "LocationName": "Somewhere in the universe",
                "Frequency": 3
            },
            {
                "LocationName": "Spokane, WA",
                "Frequency": 3,
                "LatLng": "47.6587802,-117.4260466"
            },
            {
                "LocationName": "Surat",
                "Frequency": 3,
                "LatLng": "21.1702401,72.8310607"
            },
            {
                "LocationName": "Tamil Nadu",
                "Frequency": 3,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "taranto,italy",
                "Frequency": 3,
                "LatLng": "40.4643606,17.2470303"
            },
            {
                "LocationName": "Tel Aviv",
                "Frequency": 3,
                "LatLng": "32.0852999,34.7817676"
            },
            {
                "LocationName": "Telford",
                "Frequency": 3,
                "LatLng": "52.678419,-2.445258"
            },
            {
                "LocationName": "Thrissur, India",
                "Frequency": 3,
                "LatLng": "10.5276416,76.2144349"
            },
            {
                "LocationName": "Tokyo",
                "Frequency": 3,
                "LatLng": "35.6894875,139.6917064"
            },
            {
                "LocationName": "Toronto, Canada / Verona, Italy",
                "Frequency": 3,
                "LatLng": "45.4383842,10.9916215"
            },
            {
                "LocationName": "TR",
                "Frequency": 3,
                "LatLng": "38.963745,35.243322"
            },
            {
                "LocationName": "Trichur",
                "Frequency": 3,
                "LatLng": "10.5276416,76.2144349"
            },
            {
                "LocationName": "Trondheim, Norway",
                "Frequency": 3,
                "LatLng": "63.4305149,10.3950528"
            },
            {
                "LocationName": "Troy, NY",
                "Frequency": 3,
                "LatLng": "42.7284117,-73.6917851"
            },
            {
                "LocationName": "United States (but travelling)",
                "Frequency": 3
            },
            {
                "LocationName": "University of Missouri Kansas City, MO",
                "Frequency": 3,
                "LatLng": "39.0823074,-94.5730545"
            },
            {
                "LocationName": "Uranus",
                "Frequency": 3,
                "LatLng": "57.5788751,-152.2318614"
            },
            {
                "LocationName": "Vadodara",
                "Frequency": 3,
                "LatLng": "22.3071588,73.1812187"
            },
            {
                "LocationName": "Valladolid, Spain",
                "Frequency": 3,
                "LatLng": "41.652251,-4.7245321"
            },
            {
                "LocationName": "Veracruz, Mexico",
                "Frequency": 3,
                "LatLng": "19.173773,-96.1342241"
            },
            {
                "LocationName": "Villa Clara, Cuba",
                "Frequency": 3,
                "LatLng": "22.4937204,-79.9192702"
            },
            {
                "LocationName": "Vilnius, Republic of Lithuania",
                "Frequency": 3,
                "LatLng": "54.6871555,25.2796514"
            },
            {
                "LocationName": "Volta Redonda, Brazil",
                "Frequency": 3,
                "LatLng": "-22.5077674,-44.0946129"
            },
            {
                "LocationName": "Washington DC",
                "Frequency": 3,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Weinheim, Germany",
                "Frequency": 3,
                "LatLng": "49.544964,8.6602703"
            },
            {
                "LocationName": "Yardley (Greater Philadelphia), PA 19067",
                "Frequency": 3,
                "LatLng": "40.2186572,-74.8507131"
            },
            {
                "LocationName": "Zarate, Argentina",
                "Frequency": 3,
                "LatLng": "-34.0957811,-59.0242302"
            },
            {
                "LocationName": "Abaran, Spain",
                "Frequency": 2,
                "LatLng": "38.2040853,-1.4012039"
            },
            {
                "LocationName": "Aberystwyth, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.415303,-4.08292"
            },
            {
                "LocationName": "ahmedabad",
                "Frequency": 2,
                "LatLng": "23.022505,72.5713621"
            },
            {
                "LocationName": "Ahmedabad  GJ IN",
                "Frequency": 2,
                "LatLng": "23.022505,72.5713621"
            },
            {
                "LocationName": "Aix-en-Provence, France",
                "Frequency": 2,
                "LatLng": "43.529742,5.447427"
            },
            {
                "LocationName": "Akron, OH",
                "Frequency": 2,
                "LatLng": "41.0814447,-81.5190053"
            },
            {
                "LocationName": "Albania",
                "Frequency": 2,
                "LatLng": "41.153332,20.168331"
            },
            {
                "LocationName": "Albany, NY",
                "Frequency": 2,
                "LatLng": "42.6525793,-73.7562317"
            },
            {
                "LocationName": "Alexandria",
                "Frequency": 2,
                "LatLng": "38.8048355,-77.0469214"
            },
            {
                "LocationName": "Alexandria, Egypt",
                "Frequency": 2,
                "LatLng": "31.2000924,29.9187387"
            },
            {
                "LocationName": "Alpharetta, GA",
                "Frequency": 2,
                "LatLng": "34.0753762,-84.2940899"
            },
            {
                "LocationName": "Amersfoort, Netherlands",
                "Frequency": 2,
                "LatLng": "52.1561113,5.3878266"
            },
            {
                "LocationName": "Amman, Jordan",
                "Frequency": 2,
                "LatLng": "31.9565783,35.9456951"
            },
            {
                "LocationName": "Amstelveen, The Netherlands",
                "Frequency": 2,
                "LatLng": "52.3114207,4.870087"
            },
            {
                "LocationName": "Anti-Biohazard Beings Bunker",
                "Frequency": 2
            },
            {
                "LocationName": "Anywhere",
                "Frequency": 2,
                "LatLng": "51.5136497,-0.1304505"
            },
            {
                "LocationName": "Arkansas",
                "Frequency": 2,
                "LatLng": "35.20105,-91.8318334"
            },
            {
                "LocationName": "Aruba",
                "Frequency": 2,
                "LatLng": "12.52111,-69.968338"
            },
            {
                "LocationName": "Ashburn, VA",
                "Frequency": 2,
                "LatLng": "39.0437567,-77.4874416"
            },
            {
                "LocationName": "Asheville, NC",
                "Frequency": 2,
                "LatLng": "35.5950581,-82.5514869"
            },
            {
                "LocationName": "Athens,Greece",
                "Frequency": 2,
                "LatLng": "37.983917,23.7293599"
            },
            {
                "LocationName": "Athlone, Ireland",
                "Frequency": 2,
                "LatLng": "53.4239331,-7.9406898"
            },
            {
                "LocationName": "Auburn, CA",
                "Frequency": 2,
                "LatLng": "38.8965654,-121.0768901"
            },
            {
                "LocationName": "Aurillac, France",
                "Frequency": 2,
                "LatLng": "44.930953,2.444997"
            },
            {
                "LocationName": "Austin, TX, United States",
                "Frequency": 2,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Back Alley",
                "Frequency": 2,
                "LatLng": "38.031472,-85.3463419"
            },
            {
                "LocationName": "Baguio City, Philippines",
                "Frequency": 2,
                "LatLng": "16.4023332,120.5960071"
            },
            {
                "LocationName": "Baku",
                "Frequency": 2,
                "LatLng": "40.4092617,49.8670924"
            },
            {
                "LocationName": "Bali",
                "Frequency": 2,
                "LatLng": "-8.4095178,115.188916"
            },
            {
                "LocationName": "Bandar Seri Begawan, Brunei",
                "Frequency": 2,
                "LatLng": "4.9030522,114.939821"
            },
            {
                "LocationName": "Bangalore/Mangalore",
                "Frequency": 2,
                "LatLng": "12.9997992,76.0932921"
            },
            {
                "LocationName": "Bansoa (behind the oldest living  Baobab Tree)",
                "Frequency": 2
            },
            {
                "LocationName": "Basingstoke, UK",
                "Frequency": 2,
                "LatLng": "51.26654,-1.0923964"
            },
            {
                "LocationName": "Bath, United Kingdom",
                "Frequency": 2,
                "LatLng": "51.375801,-2.3599039"
            },
            {
                "LocationName": "Battambang Province,Cambodia",
                "Frequency": 2,
                "LatLng": "13.0286971,102.989615"
            },
            {
                "LocationName": "Battaramulla, Sri Lanka",
                "Frequency": 2,
                "LatLng": "6.8979941,79.9222869"
            },
            {
                "LocationName": "Bedford, MA",
                "Frequency": 2,
                "LatLng": "42.4906231,-71.2760089"
            },
            {
                "LocationName": "Bei Jing",
                "Frequency": 2,
                "LatLng": "41.960251,120.043449"
            },
            {
                "LocationName": "Belgaum, India",
                "Frequency": 2,
                "LatLng": "15.8496953,74.4976741"
            },
            {
                "LocationName": "Bengaluru,India",
                "Frequency": 2,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "berkeley",
                "Frequency": 2,
                "LatLng": "37.8715926,-122.272747"
            },
            {
                "LocationName": "Berlin/Rotterdam",
                "Frequency": 2,
                "LatLng": "-33.9767174,18.6792115"
            },
            {
                "LocationName": "Berne, Switzerland",
                "Frequency": 2,
                "LatLng": "46.9479739,7.4474468"
            },
            {
                "LocationName": "Berrocales del Jarama",
                "Frequency": 2,
                "LatLng": "40.474763,-3.5125683"
            },
            {
                "LocationName": "Bhubaneshwar, India",
                "Frequency": 2,
                "LatLng": "20.2960587,85.8245398"
            },
            {
                "LocationName": "Bhubaneswar,India",
                "Frequency": 2,
                "LatLng": "20.2960587,85.8245398"
            },
            {
                "LocationName": "Bilbao, Spain",
                "Frequency": 2,
                "LatLng": "43.2630126,-2.9349852"
            },
            {
                "LocationName": "Binghamton, NY",
                "Frequency": 2,
                "LatLng": "42.0986867,-75.9179738"
            },
            {
                "LocationName": "Birmingham",
                "Frequency": 2,
                "LatLng": "33.5206608,-86.80249"
            },
            {
                "LocationName": "Bishkek, Kyrgyzstan",
                "Frequency": 2,
                "LatLng": "42.8746212,74.5697617"
            },
            {
                "LocationName": "Blacksburg, VA",
                "Frequency": 2,
                "LatLng": "37.2295733,-80.4139393"
            },
            {
                "LocationName": "blankville",
                "Frequency": 2
            },
            {
                "LocationName": "Blumenau, Brazil",
                "Frequency": 2,
                "LatLng": "-26.9165792,-49.0717331"
            },
            {
                "LocationName": "Bordeaux",
                "Frequency": 2,
                "LatLng": "44.837789,-0.57918"
            },
            {
                "LocationName": "Bournemouth, United Kingdom",
                "Frequency": 2,
                "LatLng": "50.719164,-1.880769"
            },
            {
                "LocationName": "Bracknell, United Kingdom",
                "Frequency": 2,
                "LatLng": "51.41604,-0.75398"
            },
            {
                "LocationName": "Bratislava, Slovakia",
                "Frequency": 2,
                "LatLng": "48.1458923,17.1071373"
            },
            {
                "LocationName": "BRAZIL / FRANCE",
                "Frequency": 2,
                "LatLng": "-23.1927528,-46.7288618"
            },
            {
                "LocationName": "Bremen, Germany",
                "Frequency": 2,
                "LatLng": "53.0792962,8.8016937"
            },
            {
                "LocationName": "Brighton",
                "Frequency": 2,
                "LatLng": "50.82253,-0.137163"
            },
            {
                "LocationName": "Brisbane",
                "Frequency": 2,
                "LatLng": "-27.4710107,153.0234489"
            },
            {
                "LocationName": "Brno",
                "Frequency": 2,
                "LatLng": "49.1950602,16.6068371"
            },
            {
                "LocationName": "Bronx, NY",
                "Frequency": 2,
                "LatLng": "40.8370495,-73.8654295"
            },
            {
                "LocationName": "Brooklyn, New York; Shillong, Meghalaya",
                "Frequency": 2,
                "LatLng": "40.6781784,-73.9441579"
            },
            {
                "LocationName": "Buenos Aires",
                "Frequency": 2,
                "LatLng": "-34.6036844,-58.3815591"
            },
            {
                "LocationName": "Bundang-gu, Seongnam-si, Gyeonggi-do 448-160, Republic of Korea",
                "Frequency": 2,
                "LatLng": "37.3310643,127.1231788"
            },
            {
                "LocationName": "Burbank",
                "Frequency": 2,
                "LatLng": "34.1808392,-118.3089661"
            },
            {
                "LocationName": "Burbank, CA, United States",
                "Frequency": 2,
                "LatLng": "34.1808392,-118.3089661"
            },
            {
                "LocationName": "Bydgoszcz",
                "Frequency": 2,
                "LatLng": "53.1234804,18.0084378"
            },
            {
                "LocationName": "Cairns, Australia",
                "Frequency": 2,
                "LatLng": "-16.9203338,145.7708595"
            },
            {
                "LocationName": "Cairo Egypt",
                "Frequency": 2,
                "LatLng": "30.0444196,31.2357116"
            },
            {
                "LocationName": "Cali, Colombia",
                "Frequency": 2,
                "LatLng": "3.4516467,-76.5319854"
            },
            {
                "LocationName": "Cambodia",
                "Frequency": 2,
                "LatLng": "12.565679,104.990963"
            },
            {
                "LocationName": "Cambridge, Massachusetts",
                "Frequency": 2,
                "LatLng": "42.3736158,-71.1097335"
            },
            {
                "LocationName": "Canterbury, United Kingdom",
                "Frequency": 2,
                "LatLng": "51.280233,1.0789089"
            },
            {
                "LocationName": "Capital Region, NY",
                "Frequency": 2,
                "LatLng": "45.2704667,-75.3044048"
            },
            {
                "LocationName": "Cardiff",
                "Frequency": 2,
                "LatLng": "51.481581,-3.17909"
            },
            {
                "LocationName": "Cavite City, Philippines",
                "Frequency": 2,
                "LatLng": "14.4791297,120.8969634"
            },
            {
                "LocationName": "Celje, Slovenia",
                "Frequency": 2,
                "LatLng": "46.2397495,15.2677063"
            },
            {
                "LocationName": "Central Coast, California",
                "Frequency": 2,
                "LatLng": "35.3610885,-119.1665982"
            },
            {
                "LocationName": "Central Florida",
                "Frequency": 2,
                "LatLng": "-25.3507556,-57.5038917"
            },
            {
                "LocationName": "Chandler, AZ",
                "Frequency": 2,
                "LatLng": "33.3061605,-111.8412502"
            },
            {
                "LocationName": "Changchun, China",
                "Frequency": 2,
                "LatLng": "43.817072,125.323544"
            },
            {
                "LocationName": "charleston sc",
                "Frequency": 2,
                "LatLng": "32.7764749,-79.9310512"
            },
            {
                "LocationName": "Chelyabinsk, Russia",
                "Frequency": 2,
                "LatLng": "55.1644419,61.4368431"
            },
            {
                "LocationName": "Chengdu, China",
                "Frequency": 2,
                "LatLng": "30.572269,104.066541"
            },
            {
                "LocationName": "chicago",
                "Frequency": 2,
                "LatLng": "41.8781136,-87.6297982"
            },
            {
                "LocationName": "Chico, CA",
                "Frequency": 2,
                "LatLng": "39.7284944,-121.8374777"
            },
            {
                "LocationName": "china",
                "Frequency": 2,
                "LatLng": "35.86166,104.195397"
            },
            {
                "LocationName": "Churchville, PA",
                "Frequency": 2,
                "LatLng": "40.2030643,-74.9968543"
            },
            {
                "LocationName": "Clackamas, OR",
                "Frequency": 2,
                "LatLng": "45.4076205,-122.5703692"
            },
            {
                "LocationName": "Cochin",
                "Frequency": 2,
                "LatLng": "9.9312328,76.2673041"
            },
            {
                "LocationName": "colombo, Sri Lanka",
                "Frequency": 2,
                "LatLng": "6.9270786,79.861243"
            },
            {
                "LocationName": "Copenhagen",
                "Frequency": 2,
                "LatLng": "55.6760968,12.5683371"
            },
            {
                "LocationName": "Corfu, Greece",
                "Frequency": 2,
                "LatLng": "39.6249838,19.9223461"
            },
            {
                "LocationName": "Coventry, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.406822,-1.519693"
            },
            {
                "LocationName": "Cracow",
                "Frequency": 2,
                "LatLng": "50.0646501,19.9449799"
            },
            {
                "LocationName": "Craiova, Romania",
                "Frequency": 2,
                "LatLng": "44.3301785,23.7948808"
            },
            {
                "LocationName": "Crownsville, MD",
                "Frequency": 2,
                "LatLng": "39.0284438,-76.6013536"
            },
            {
                "LocationName": "Cuba",
                "Frequency": 2,
                "LatLng": "21.521757,-77.781167"
            },
            {
                "LocationName": "Curitiba, Brazil",
                "Frequency": 2,
                "LatLng": "-25.4289541,-49.267137"
            },
            {
                "LocationName": "Cyprus",
                "Frequency": 2,
                "LatLng": "35.126413,33.429859"
            },
            {
                "LocationName": "Damascus, Syria",
                "Frequency": 2,
                "LatLng": "33.5138073,36.2765279"
            },
            {
                "LocationName": "Danville, CA",
                "Frequency": 2,
                "LatLng": "37.8215929,-121.9999606"
            },
            {
                "LocationName": "DC",
                "Frequency": 2,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "denmark",
                "Frequency": 2,
                "LatLng": "56.26392,9.501785"
            },
            {
                "LocationName": "Deutschland",
                "Frequency": 2,
                "LatLng": "51.165691,10.451526"
            },
            {
                "LocationName": "Dos Hermanas, Spain",
                "Frequency": 2,
                "LatLng": "37.2865803,-5.9242391"
            },
            {
                "LocationName": "Dresden,Germany",
                "Frequency": 2,
                "LatLng": "51.0504088,13.7372621"
            },
            {
                "LocationName": "Dresden, Germany",
                "Frequency": 2,
                "LatLng": "51.0504088,13.7372621"
            },
            {
                "LocationName": "Duisburg, Germany",
                "Frequency": 2,
                "LatLng": "51.4344079,6.7623293"
            },
            {
                "LocationName": "Düsseldorf",
                "Frequency": 2,
                "LatLng": "51.2277411,6.7734556"
            },
            {
                "LocationName": "East Coast",
                "Frequency": 2,
                "LatLng": "-41.698801,147.9145089"
            },
            {
                "LocationName": "Eden Prairie, MN",
                "Frequency": 2,
                "LatLng": "44.8546856,-93.470786"
            },
            {
                "LocationName": "Edinburgh",
                "Frequency": 2,
                "LatLng": "55.953252,-3.188267"
            },
            {
                "LocationName": "Eindhoven, The Netherlands",
                "Frequency": 2,
                "LatLng": "51.441642,5.4697225"
            },
            {
                "LocationName": "Erode, India",
                "Frequency": 2,
                "LatLng": "11.3410364,77.7171642"
            },
            {
                "LocationName": "Esbjerg, Denmark",
                "Frequency": 2,
                "LatLng": "55.476466,8.459405"
            },
            {
                "LocationName": "España",
                "Frequency": 2,
                "LatLng": "40.463667,-3.74922"
            },
            {
                "LocationName": "Essen, Germany",
                "Frequency": 2,
                "LatLng": "51.4556432,7.0115552"
            },
            {
                "LocationName": "Ethiopia",
                "Frequency": 2,
                "LatLng": "9.145,40.489673"
            },
            {
                "LocationName": "Evanston, IL",
                "Frequency": 2,
                "LatLng": "42.0450722,-87.6876969"
            },
            {
                "LocationName": "everywhere",
                "Frequency": 2,
                "LatLng": "37.6658757,-91.8479332"
            },
            {
                "LocationName": "Évreux, France",
                "Frequency": 2,
                "LatLng": "49.0270129,1.151361"
            },
            {
                "LocationName": "Farmington Hills, MI",
                "Frequency": 2,
                "LatLng": "42.4989936,-83.3677168"
            },
            {
                "LocationName": "France / Canada / Eire",
                "Frequency": 2,
                "LatLng": "42.6714004,-81.2130041"
            },
            {
                "LocationName": "Franklin, North Carolina",
                "Frequency": 2,
                "LatLng": "35.1823171,-83.3815429"
            },
            {
                "LocationName": "Fullerton, CA",
                "Frequency": 2,
                "LatLng": "33.8703596,-117.9242966"
            },
            {
                "LocationName": "Gaithersburg, MD. USA",
                "Frequency": 2,
                "LatLng": "39.1434406,-77.2013705"
            },
            {
                "LocationName": "Gdańsk",
                "Frequency": 2,
                "LatLng": "54.3520252,18.6466384"
            },
            {
                "LocationName": "Gdynia, Poland",
                "Frequency": 2,
                "LatLng": "54.5188898,18.5305409"
            },
            {
                "LocationName": "Glasgow, Scotland",
                "Frequency": 2,
                "LatLng": "55.864237,-4.251806"
            },
            {
                "LocationName": "Glenwood, IA",
                "Frequency": 2,
                "LatLng": "41.0469437,-95.7425056"
            },
            {
                "LocationName": "Goa, India",
                "Frequency": 2,
                "LatLng": "15.2993265,74.123996"
            },
            {
                "LocationName": "Göttingen, Germany",
                "Frequency": 2,
                "LatLng": "51.5412804,9.9158035"
            },
            {
                "LocationName": "Great Yarmouth, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.598233,1.728047"
            },
            {
                "LocationName": "Groningen, Netherlands",
                "Frequency": 2,
                "LatLng": "53.2193835,6.5665018"
            },
            {
                "LocationName": "Guruvayoor, India",
                "Frequency": 2,
                "LatLng": "10.5952496,76.0362579"
            },
            {
                "LocationName": "Haifa, Israel",
                "Frequency": 2,
                "LatLng": "32.7940463,34.989571"
            },
            {
                "LocationName": "Hamamatsu-shi, Japan",
                "Frequency": 2,
                "LatLng": "34.7108344,137.7261258"
            },
            {
                "LocationName": "Hamilton, Canada",
                "Frequency": 2,
                "LatLng": "43.2500208,-79.8660914"
            },
            {
                "LocationName": "Hamilton, New Zealand",
                "Frequency": 2,
                "LatLng": "-37.7870012,175.279253"
            },
            {
                "LocationName": "Hampshire, United Kingdom",
                "Frequency": 2,
                "LatLng": "51.0576948,-1.3080629"
            },
            {
                "LocationName": "Harbin, China",
                "Frequency": 2,
                "LatLng": "45.803775,126.534967"
            },
            {
                "LocationName": "Hartford, CT",
                "Frequency": 2,
                "LatLng": "41.7637111,-72.6850932"
            },
            {
                "LocationName": "Havana, Cuba",
                "Frequency": 2,
                "LatLng": "23.0540698,-82.345189"
            },
            {
                "LocationName": "Heesch, Netherlands",
                "Frequency": 2,
                "LatLng": "51.7317098,5.5278266"
            },
            {
                "LocationName": "Helston, United Kingdom",
                "Frequency": 2,
                "LatLng": "50.101593,-5.274996"
            },
            {
                "LocationName": "Here",
                "Frequency": 2,
                "LatLng": "43.552293,0.0007429"
            },
            {
                "LocationName": "Heredia, Costa Rica",
                "Frequency": 2,
                "LatLng": "10.473523,-84.0167423"
            },
            {
                "LocationName": "Hertfordshire, United Kingdom",
                "Frequency": 2,
                "LatLng": "51.8097823,-0.2376744"
            },
            {
                "LocationName": "Hilversum, Netherlands",
                "Frequency": 2,
                "LatLng": "52.2291696,5.1668974"
            },
            {
                "LocationName": "Holland, MI",
                "Frequency": 2,
                "LatLng": "42.7875235,-86.1089301"
            },
            {
                "LocationName": "Honduras",
                "Frequency": 2,
                "LatLng": "15.199999,-86.241905"
            },
            {
                "LocationName": "Honolulu, HI",
                "Frequency": 2,
                "LatLng": "21.3069444,-157.8583333"
            },
            {
                "LocationName": "Howrah, India",
                "Frequency": 2,
                "LatLng": "22.5957689,88.2636394"
            },
            {
                "LocationName": "Huntington Beach, Ca",
                "Frequency": 2,
                "LatLng": "33.660297,-117.9992265"
            },
            {
                "LocationName": "Hyderbad, India",
                "Frequency": 2,
                "LatLng": "17.385044,78.486671"
            },
            {
                "LocationName": "IN",
                "Frequency": 2,
                "LatLng": "40.2671941,-86.1349019"
            },
            {
                "LocationName": "In my own mind",
                "Frequency": 2
            },
            {
                "LocationName": "International",
                "Frequency": 2,
                "LatLng": "32.778184,35.010009"
            },
            {
                "LocationName": "Ipswich, UK",
                "Frequency": 2,
                "LatLng": "52.056736,1.14822"
            },
            {
                "LocationName": "iran tehran pasdaran",
                "Frequency": 2,
                "LatLng": "35.7781874,51.470343"
            },
            {
                "LocationName": "Islamabad Pakistan",
                "Frequency": 2,
                "LatLng": "33.7293882,73.0931461"
            },
            {
                "LocationName": "Ithaca, NY",
                "Frequency": 2,
                "LatLng": "42.4439614,-76.5018807"
            },
            {
                "LocationName": "Ivano-Frankivs'k, Ukraine",
                "Frequency": 2,
                "LatLng": "48.922633,24.711117"
            },
            {
                "LocationName": "Jackson Heights",
                "Frequency": 2,
                "LatLng": "40.7556818,-73.8830701"
            },
            {
                "LocationName": "Jalandhar, India",
                "Frequency": 2,
                "LatLng": "31.3260152,75.5761829"
            },
            {
                "LocationName": "Jalgaon",
                "Frequency": 2,
                "LatLng": "21.0076578,75.5626039"
            },
            {
                "LocationName": "Jenkintown, PA",
                "Frequency": 2,
                "LatLng": "40.0959438,-75.1251743"
            },
            {
                "LocationName": "Jumpy Goat",
                "Frequency": 2
            },
            {
                "LocationName": "Jupiter",
                "Frequency": 2,
                "LatLng": "26.9342246,-80.0942087"
            },
            {
                "LocationName": "Jyväskylä, Finland",
                "Frequency": 2,
                "LatLng": "62.244747,25.7472184"
            },
            {
                "LocationName": "Kaduwela, Sri Lanka",
                "Frequency": 2,
                "LatLng": "6.9308305,79.9842178"
            },
            {
                "LocationName": "Kamakura-shi, Japan",
                "Frequency": 2,
                "LatLng": "35.3192254,139.5466868"
            },
            {
                "LocationName": "Kanpur",
                "Frequency": 2,
                "LatLng": "26.449923,80.3318736"
            },
            {
                "LocationName": "Karlshamn, Sweden",
                "Frequency": 2,
                "LatLng": "56.170303,14.863073"
            },
            {
                "LocationName": "Kassel, Germany",
                "Frequency": 2,
                "LatLng": "51.3127114,9.4797461"
            },
            {
                "LocationName": "Kaunas, Lithuania",
                "Frequency": 2,
                "LatLng": "54.8985207,23.9035965"
            },
            {
                "LocationName": "Kensington, London, UK",
                "Frequency": 2,
                "LatLng": "51.5010095,-0.1932794"
            },
            {
                "LocationName": "Kensington, MD",
                "Frequency": 2,
                "LatLng": "39.0256651,-77.0763669"
            },
            {
                "LocationName": "Kentucky",
                "Frequency": 2,
                "LatLng": "37.8393332,-84.2700179"
            },
            {
                "LocationName": "Kharkov",
                "Frequency": 2,
                "LatLng": "49.9935,36.230383"
            },
            {
                "LocationName": "Kiel, Germany",
                "Frequency": 2,
                "LatLng": "54.3232927,10.1227652"
            },
            {
                "LocationName": "Kiev",
                "Frequency": 2,
                "LatLng": "50.4501,30.5234"
            },
            {
                "LocationName": "King of Prussia, PA",
                "Frequency": 2,
                "LatLng": "40.1012856,-75.3835525"
            },
            {
                "LocationName": "Kochi",
                "Frequency": 2,
                "LatLng": "9.9312328,76.2673041"
            },
            {
                "LocationName": "Kolkata",
                "Frequency": 2,
                "LatLng": "22.572646,88.363895"
            },
            {
                "LocationName": "Kolkata,India",
                "Frequency": 2,
                "LatLng": "22.572646,88.363895"
            },
            {
                "LocationName": "Koper, Slovenia",
                "Frequency": 2,
                "LatLng": "45.548059,13.7301877"
            },
            {
                "LocationName": "Kraków, Poland",
                "Frequency": 2,
                "LatLng": "50.0646501,19.9449799"
            },
            {
                "LocationName": "Kuching, Malaysia",
                "Frequency": 2,
                "LatLng": "1.6076812,110.3785438"
            },
            {
                "LocationName": "Lagos, Nigeria.",
                "Frequency": 2,
                "LatLng": "6.5243793,3.3792057"
            },
            {
                "LocationName": "La Jolla, CA",
                "Frequency": 2,
                "LatLng": "32.8328112,-117.2712717"
            },
            {
                "LocationName": "Lancaster, PA",
                "Frequency": 2,
                "LatLng": "40.0378755,-76.3055144"
            },
            {
                "LocationName": "Lansing, MI",
                "Frequency": 2,
                "LatLng": "42.732535,-84.5555347"
            },
            {
                "LocationName": "La Plata, Argentina",
                "Frequency": 2,
                "LatLng": "-34.9204948,-57.9535657"
            },
            {
                "LocationName": "Lausanne",
                "Frequency": 2,
                "LatLng": "46.5196535,6.6322734"
            },
            {
                "LocationName": "Lawn Gailend",
                "Frequency": 2,
                "LatLng": "38.862617,-76.981795"
            },
            {
                "LocationName": "Leatherhead, United Kingdom",
                "Frequency": 2,
                "LatLng": "51.296407,-0.33112"
            },
            {
                "LocationName": "Leeds, UK",
                "Frequency": 2,
                "LatLng": "53.8007554,-1.5490774"
            },
            {
                "LocationName": "Lincoln, NE",
                "Frequency": 2,
                "LatLng": "40.8257625,-96.6851982"
            },
            {
                "LocationName": "Linz, Austria",
                "Frequency": 2,
                "LatLng": "48.30694,14.28583"
            },
            {
                "LocationName": "Lititz, PA",
                "Frequency": 2,
                "LatLng": "40.1573169,-76.3069014"
            },
            {
                "LocationName": "Little Elm, TX",
                "Frequency": 2,
                "LatLng": "33.1626193,-96.9375051"
            },
            {
                "LocationName": "Long Beach CA",
                "Frequency": 2,
                "LatLng": "33.7700504,-118.1937395"
            },
            {
                "LocationName": "Long Island",
                "Frequency": 2,
                "LatLng": "40.789142,-73.134961"
            },
            {
                "LocationName": "Long Island, New York",
                "Frequency": 2,
                "LatLng": "40.789142,-73.134961"
            },
            {
                "LocationName": "los angeles",
                "Frequency": 2,
                "LatLng": "34.0522342,-118.2436849"
            },
            {
                "LocationName": "Los Angeles, USA",
                "Frequency": 2,
                "LatLng": "34.0522342,-118.2436849"
            },
            {
                "LocationName": "Loveland, CO",
                "Frequency": 2,
                "LatLng": "40.3977612,-105.0749801"
            },
            {
                "LocationName": "Luanda, Angola",
                "Frequency": 2,
                "LatLng": "-8.8399876,13.2894368"
            },
            {
                "LocationName": "Lucerne, Switzerland",
                "Frequency": 2,
                "LatLng": "47.0501682,8.3093072"
            },
            {
                "LocationName": "Luna de Sus, Romania",
                "Frequency": 2,
                "LatLng": "46.7441717,23.43052"
            },
            {
                "LocationName": "Lund, Sweden",
                "Frequency": 2,
                "LatLng": "55.7046601,13.1910073"
            },
            {
                "LocationName": "Lviv, Ukraine",
                "Frequency": 2,
                "LatLng": "49.839683,24.029717"
            },
            {
                "LocationName": "Lyon - FRANCE",
                "Frequency": 2,
                "LatLng": "45.764043,4.835659"
            },
            {
                "LocationName": "MA",
                "Frequency": 2,
                "LatLng": "42.4072107,-71.3824374"
            },
            {
                "LocationName": "Madurai",
                "Frequency": 2,
                "LatLng": "9.9252007,78.1197754"
            },
            {
                "LocationName": "Maharashtra, India",
                "Frequency": 2,
                "LatLng": "19.7514798,75.7138884"
            },
            {
                "LocationName": "Malaga, Spain",
                "Frequency": 2,
                "LatLng": "36.721261,-4.4212655"
            },
            {
                "LocationName": "Mallorca, Spain",
                "Frequency": 2,
                "LatLng": "39.6952629,3.0175712"
            },
            {
                "LocationName": "Malmö",
                "Frequency": 2,
                "LatLng": "55.604981,13.003822"
            },
            {
                "LocationName": "Manassas, VA",
                "Frequency": 2,
                "LatLng": "38.7509488,-77.4752667"
            },
            {
                "LocationName": "Manaus, Brazil",
                "Frequency": 2,
                "LatLng": "-3.1190275,-60.0217314"
            },
            {
                "LocationName": "Manhattan, KS",
                "Frequency": 2,
                "LatLng": "39.1836082,-96.5716694"
            },
            {
                "LocationName": "Manila",
                "Frequency": 2,
                "LatLng": "14.5995124,120.9842195"
            },
            {
                "LocationName": "Maputo, Mozambique",
                "Frequency": 2,
                "LatLng": "-25.891968,32.6051351"
            },
            {
                "LocationName": "Marin County, CA",
                "Frequency": 2,
                "LatLng": "38.083403,-122.7633036"
            },
            {
                "LocationName": "Marseille",
                "Frequency": 2,
                "LatLng": "43.296482,5.36978"
            },
            {
                "LocationName": "Marseille, France",
                "Frequency": 2,
                "LatLng": "43.296482,5.36978"
            },
            {
                "LocationName": "mashhad",
                "Frequency": 2,
                "LatLng": "36.2604623,59.6167549"
            },
            {
                "LocationName": "Memphis, TN",
                "Frequency": 2,
                "LatLng": "35.1495343,-90.0489801"
            },
            {
                "LocationName": "Mendoza",
                "Frequency": 2,
                "LatLng": "-32.8894587,-68.8458386"
            },
            {
                "LocationName": "Merced, CA",
                "Frequency": 2,
                "LatLng": "37.3021632,-120.4829677"
            },
            {
                "LocationName": "Mercer Island, WA",
                "Frequency": 2,
                "LatLng": "47.5706548,-122.2220673"
            },
            {
                "LocationName": "miami florida",
                "Frequency": 2,
                "LatLng": "25.7616798,-80.1917902"
            },
            {
                "LocationName": "Milano",
                "Frequency": 2,
                "LatLng": "45.4654219,9.1859243"
            },
            {
                "LocationName": "Milton Keynes",
                "Frequency": 2,
                "LatLng": "52.0406224,-0.7594171"
            },
            {
                "LocationName": "MN",
                "Frequency": 2,
                "LatLng": "46.729553,-94.6858998"
            },
            {
                "LocationName": "Mohali",
                "Frequency": 2,
                "LatLng": "30.7046486,76.7178726"
            },
            {
                "LocationName": "Montevideo - Uruguay",
                "Frequency": 2,
                "LatLng": "-34.9011127,-56.1645314"
            },
            {
                "LocationName": "Mount Pleasant, SC",
                "Frequency": 2,
                "LatLng": "32.8323225,-79.8284258"
            },
            {
                "LocationName": "Murray, UT",
                "Frequency": 2,
                "LatLng": "40.6668916,-111.8879909"
            },
            {
                "LocationName": "mylapore",
                "Frequency": 2,
                "LatLng": "13.0367914,80.2676303"
            },
            {
                "LocationName": "Mysore, India",
                "Frequency": 2,
                "LatLng": "12.2958104,76.6393805"
            },
            {
                "LocationName": "Netherlands, Utrecht",
                "Frequency": 2,
                "LatLng": "52.0907374,5.1214201"
            },
            {
                "LocationName": "Newcastle Upon Tyne",
                "Frequency": 2,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "New Hampshire",
                "Frequency": 2,
                "LatLng": "43.1938516,-71.5723953"
            },
            {
                "LocationName": "New Orleans, LA",
                "Frequency": 2,
                "LatLng": "29.9510658,-90.0715323"
            },
            {
                "LocationName": "New York City, NY",
                "Frequency": 2,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Nicaragua",
                "Frequency": 2,
                "LatLng": "12.865416,-85.207229"
            },
            {
                "LocationName": "Nijmegen, The Netherlands",
                "Frequency": 2,
                "LatLng": "51.8125626,5.8372264"
            },
            {
                "LocationName": "NJ, United States",
                "Frequency": 2,
                "LatLng": "40.0583238,-74.4056612"
            },
            {
                "LocationName": "Nomadic",
                "Frequency": 2,
                "LatLng": "12.8368211,10.2532215"
            },
            {
                "LocationName": "Norristown, PA",
                "Frequency": 2,
                "LatLng": "40.121497,-75.3399048"
            },
            {
                "LocationName": "North California",
                "Frequency": 2,
                "LatLng": "36.778261,-119.4179324"
            },
            {
                "LocationName": "Northern Massachusetts",
                "Frequency": 2,
                "LatLng": "42.5543857,-71.1383339"
            },
            {
                "LocationName": "Northern Virginia",
                "Frequency": 2,
                "LatLng": "37.2232316,-81.4498717"
            },
            {
                "LocationName": "Norwich, UK",
                "Frequency": 2,
                "LatLng": "52.6308859,1.297355"
            },
            {
                "LocationName": "Norwich, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.6308859,1.297355"
            },
            {
                "LocationName": "Nottingham, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.9547832,-1.1581086"
            },
            {
                "LocationName": "Nova Scotia, Canada",
                "Frequency": 2,
                "LatLng": "44.6819866,-63.744311"
            },
            {
                "LocationName": "Nürnberg/Germany",
                "Frequency": 2,
                "LatLng": "49.45203,11.07675"
            },
            {
                "LocationName": "NYC and SF",
                "Frequency": 2,
                "LatLng": "28.3551069,-81.5599163"
            },
            {
                "LocationName": "Nymegen, Netherlands",
                "Frequency": 2,
                "LatLng": "51.8125626,5.8372264"
            },
            {
                "LocationName": "Olsztyn",
                "Frequency": 2,
                "LatLng": "53.778422,20.4801193"
            },
            {
                "LocationName": "Omsk, Russia",
                "Frequency": 2,
                "LatLng": "54.9884804,73.3242362"
            },
            {
                "LocationName": "Onalaska, WI",
                "Frequency": 2,
                "LatLng": "43.8844092,-91.2351393"
            },
            {
                "LocationName": "Orange County, CA",
                "Frequency": 2,
                "LatLng": "33.7174708,-117.8311428"
            },
            {
                "LocationName": "Orlando",
                "Frequency": 2,
                "LatLng": "28.5383355,-81.3792365"
            },
            {
                "LocationName": "Orlando, FL, USA",
                "Frequency": 2,
                "LatLng": "28.5383355,-81.3792365"
            },
            {
                "LocationName": "Ostrava, Czech Republic",
                "Frequency": 2,
                "LatLng": "49.8209226,18.2625243"
            },
            {
                "LocationName": "Ottawa, ON, Canada",
                "Frequency": 2,
                "LatLng": "45.4215296,-75.6971931"
            },
            {
                "LocationName": "Pakistan Abbottabad",
                "Frequency": 2,
                "LatLng": "34.1687502,73.2214982"
            },
            {
                "LocationName": "Palestine",
                "Frequency": 2,
                "LatLng": "31.952162,35.233154"
            },
            {
                "LocationName": "Pereira, Colombia",
                "Frequency": 2,
                "LatLng": "4.8087174,-75.690601"
            },
            {
                "LocationName": "Perm', Russia",
                "Frequency": 2,
                "LatLng": "58.0296813,56.2667916"
            },
            {
                "LocationName": "Philadelphia Suburbs",
                "Frequency": 2,
                "LatLng": "40.0083531,-74.9572167"
            },
            {
                "LocationName": "Phoenix, AZ, USA",
                "Frequency": 2,
                "LatLng": "33.4483771,-112.0740373"
            },
            {
                "LocationName": "Pilsen, Czech Republic",
                "Frequency": 2,
                "LatLng": "49.7384314,13.3736371"
            },
            {
                "LocationName": "Pleasant Hill, OH",
                "Frequency": 2,
                "LatLng": "40.0517184,-84.3443919"
            },
            {
                "LocationName": "Plymouth, UK",
                "Frequency": 2,
                "LatLng": "50.3754565,-4.1426565"
            },
            {
                "LocationName": "pondicherry",
                "Frequency": 2,
                "LatLng": "11.9138598,79.8144722"
            },
            {
                "LocationName": "Portland, ME",
                "Frequency": 2,
                "LatLng": "43.661471,-70.2553259"
            },
            {
                "LocationName": "Port Townsend, WA",
                "Frequency": 2,
                "LatLng": "48.1170387,-122.7604472"
            },
            {
                "LocationName": "Pretoria, South Africa",
                "Frequency": 2,
                "LatLng": "-25.7478676,28.2292712"
            },
            {
                "LocationName": "Princeton, NJ",
                "Frequency": 2,
                "LatLng": "40.3572976,-74.6672226"
            },
            {
                "LocationName": "Pune, MH, India",
                "Frequency": 2,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Queen Creek, AZ",
                "Frequency": 2,
                "LatLng": "33.2486638,-111.6342993"
            },
            {
                "LocationName": "Republik Indonesia",
                "Frequency": 2,
                "LatLng": "-0.789275,113.921327"
            },
            {
                "LocationName": "Reston, Va",
                "Frequency": 2,
                "LatLng": "38.9586307,-77.3570028"
            },
            {
                "LocationName": "Reston, VA",
                "Frequency": 2,
                "LatLng": "38.9586307,-77.3570028"
            },
            {
                "LocationName": "Reynosa",
                "Frequency": 2,
                "LatLng": "26.0508406,-98.2978951"
            },
            {
                "LocationName": "Ribeira, Spain",
                "Frequency": 2,
                "LatLng": "42.5540645,-8.9922481"
            },
            {
                "LocationName": "Riemerling, Germany",
                "Frequency": 2,
                "LatLng": "48.0599122,11.6796793"
            },
            {
                "LocationName": "Riverside, CA",
                "Frequency": 2,
                "LatLng": "33.9533487,-117.3961564"
            },
            {
                "LocationName": "Rockford, IL",
                "Frequency": 2,
                "LatLng": "42.2711311,-89.0939952"
            },
            {
                "LocationName": "Rome",
                "Frequency": 2,
                "LatLng": "41.9027835,12.4963655"
            },
            {
                "LocationName": "rotterdam",
                "Frequency": 2,
                "LatLng": "51.9244201,4.4777325"
            },
            {
                "LocationName": "RU",
                "Frequency": 2,
                "LatLng": "61.52401,105.318756"
            },
            {
                "LocationName": "Russia, Belgorod",
                "Frequency": 2,
                "LatLng": "50.5997134,36.5982621"
            },
            {
                "LocationName": "Russia, Irkutsk",
                "Frequency": 2,
                "LatLng": "52.2869741,104.3050183"
            },
            {
                "LocationName": "Russia, Khabarovsk",
                "Frequency": 2,
                "LatLng": "48.5027313,135.0662599"
            },
            {
                "LocationName": "Ryazan', Russia",
                "Frequency": 2,
                "LatLng": "54.6095418,39.7125857"
            },
            {
                "LocationName": "Rzeszow, Poland",
                "Frequency": 2,
                "LatLng": "50.0411867,21.9991196"
            },
            {
                "LocationName": "Saint Louis, Missouri, USA",
                "Frequency": 2,
                "LatLng": "38.6270025,-90.1994042"
            },
            {
                "LocationName": "Saint Paul, MN",
                "Frequency": 2,
                "LatLng": "44.9537029,-93.0899578"
            },
            {
                "LocationName": "Salzburg",
                "Frequency": 2,
                "LatLng": "47.80949,13.05501"
            },
            {
                "LocationName": "San Francisco Bay Area, CA",
                "Frequency": 2,
                "LatLng": "37.9994669,-122.174605"
            },
            {
                "LocationName": "San Mateo, CA",
                "Frequency": 2,
                "LatLng": "37.5629917,-122.3255254"
            },
            {
                "LocationName": "Santa Fe, Argentina",
                "Frequency": 2,
                "LatLng": "-31.6106578,-60.697294"
            },
            {
                "LocationName": "Santander, Spain",
                "Frequency": 2,
                "LatLng": "43.4623057,-3.8099803"
            },
            {
                "LocationName": "Santo Domingo, Dominican Republic",
                "Frequency": 2,
                "LatLng": "18.4860575,-69.9312117"
            },
            {
                "LocationName": "Sarajevo, Bosnia and Herzegovina",
                "Frequency": 2,
                "LatLng": "43.8562586,18.4130763"
            },
            {
                "LocationName": "Scottsdale AZ",
                "Frequency": 2,
                "LatLng": "33.4941704,-111.9260519"
            },
            {
                "LocationName": "Seattle, Washington",
                "Frequency": 2,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "Seattle WA, USA",
                "Frequency": 2,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "Sialkot, Pakistan",
                "Frequency": 2,
                "LatLng": "32.4924769,74.5310403"
            },
            {
                "LocationName": "Siegen, Germany",
                "Frequency": 2,
                "LatLng": "50.8838492,8.0209591"
            },
            {
                "LocationName": "Sofia",
                "Frequency": 2,
                "LatLng": "42.6977082,23.3218675"
            },
            {
                "LocationName": "Somewhere",
                "Frequency": 2,
                "LatLng": "53.9807737,-6.7148821"
            },
            {
                "LocationName": "Some where between this world and the other",
                "Frequency": 2
            },
            {
                "LocationName": "Sorocaba - SP, Brazil",
                "Frequency": 2,
                "LatLng": "-23.5015299,-47.4525603"
            },
            {
                "LocationName": "South East Asia",
                "Frequency": 2,
                "LatLng": "-2.2179704,115.66283"
            },
            {
                "LocationName": "South Orange, NJ",
                "Frequency": 2,
                "LatLng": "40.7489277,-74.2609903"
            },
            {
                "LocationName": "South Ozone Park, NY",
                "Frequency": 2,
                "LatLng": "40.6764003,-73.8124984"
            },
            {
                "LocationName": "South Point, OH",
                "Frequency": 2,
                "LatLng": "38.4178597,-82.5862699"
            },
            {
                "LocationName": "St. Andrews, United Kingdom",
                "Frequency": 2,
                "LatLng": "56.335054,-2.8063431"
            },
            {
                "LocationName": "St Augustine Campus, UWI, Trinidad and Tobago",
                "Frequency": 2,
                "LatLng": "29.9012437,-81.3124341"
            },
            {
                "LocationName": "Sterling, CO",
                "Frequency": 2,
                "LatLng": "40.6255415,-103.207709"
            },
            {
                "LocationName": "St Karins, Finland",
                "Frequency": 2,
                "LatLng": "60.4071689,22.3682407"
            },
            {
                "LocationName": "St. Paul, MN",
                "Frequency": 2,
                "LatLng": "44.9537029,-93.0899578"
            },
            {
                "LocationName": "Stuttgart",
                "Frequency": 2,
                "LatLng": "48.7758459,9.1829321"
            },
            {
                "LocationName": "Suffolk, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.1872472,0.9707801"
            },
            {
                "LocationName": "Tamilnadu , India",
                "Frequency": 2,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "Tashkent, Uzbekistan",
                "Frequency": 2,
                "LatLng": "41.2994958,69.2400734"
            },
            {
                "LocationName": "Teh internetz",
                "Frequency": 2,
                "LatLng": "53.3787237,-2.9159315"
            },
            {
                "LocationName": "Tenafly, NJ",
                "Frequency": 2,
                "LatLng": "40.9253766,-73.9629154"
            },
            {
                "LocationName": "The center, Earth",
                "Frequency": 2,
                "LatLng": "34.513299,-94.1628807"
            },
            {
                "LocationName": "The Holy Land",
                "Frequency": 2,
                "LatLng": "15.2260808,120.4865238"
            },
            {
                "LocationName": "The Royal Kingdom of the Netherlands",
                "Frequency": 2
            },
            {
                "LocationName": "Thessaloniki",
                "Frequency": 2,
                "LatLng": "40.6400629,22.9444191"
            },
            {
                "LocationName": "Tiruppur, India",
                "Frequency": 2,
                "LatLng": "11.1085242,77.3410656"
            },
            {
                "LocationName": "TLV",
                "Frequency": 2,
                "LatLng": "32.005532,34.8854112"
            },
            {
                "LocationName": "Toledo, OH",
                "Frequency": 2,
                "LatLng": "41.6639383,-83.555212"
            },
            {
                "LocationName": "Toronto, ON",
                "Frequency": 2,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Toulouse",
                "Frequency": 2,
                "LatLng": "43.604652,1.444209"
            },
            {
                "LocationName": "Trento, Italy",
                "Frequency": 2,
                "LatLng": "46.0747793,11.1217486"
            },
            {
                "LocationName": "Treuddyn, United Kingdom",
                "Frequency": 2,
                "LatLng": "53.117209,-3.1204139"
            },
            {
                "LocationName": "Trivandrum, India",
                "Frequency": 2,
                "LatLng": "8.5241391,76.9366376"
            },
            {
                "LocationName": "Troy, MI",
                "Frequency": 2,
                "LatLng": "42.6064095,-83.1497751"
            },
            {
                "LocationName": "Tulsa, OK",
                "Frequency": 2,
                "LatLng": "36.1539816,-95.992775"
            },
            {
                "LocationName": "Türkiye",
                "Frequency": 2,
                "LatLng": "38.963745,35.243322"
            },
            {
                "LocationName": "Twin Falls, ID",
                "Frequency": 2,
                "LatLng": "42.5629668,-114.4608711"
            },
            {
                "LocationName": "Udaipur, India",
                "Frequency": 2,
                "LatLng": "24.585445,73.712479"
            },
            {
                "LocationName": "uk",
                "Frequency": 2,
                "LatLng": "55.378051,-3.435973"
            },
            {
                "LocationName": "Ukraine, Kharkov",
                "Frequency": 2,
                "LatLng": "49.9935,36.230383"
            },
            {
                "LocationName": "Ukraine, Lviv region",
                "Frequency": 2,
                "LatLng": "49.839683,24.029717"
            },
            {
                "LocationName": "Ukraine, Vinnitsya",
                "Frequency": 2,
                "LatLng": "49.233083,28.468217"
            },
            {
                "LocationName": "Ulm, Germany",
                "Frequency": 2,
                "LatLng": "48.4010822,9.9876076"
            },
            {
                "LocationName": "Uppsala, Sweden",
                "Frequency": 2,
                "LatLng": "59.8585638,17.6389267"
            },
            {
                "LocationName": "Uruguay",
                "Frequency": 2,
                "LatLng": "-32.522779,-55.765835"
            },
            {
                "LocationName": "USA, CA",
                "Frequency": 2,
                "LatLng": "36.778261,-119.4179324"
            },
            {
                "LocationName": "Utah/ Hell",
                "Frequency": 2,
                "LatLng": "38.6033943,-109.5334702"
            },
            {
                "LocationName": "Valdosta, GA",
                "Frequency": 2,
                "LatLng": "30.8327022,-83.2784851"
            },
            {
                "LocationName": "valencia",
                "Frequency": 2,
                "LatLng": "39.4699075,-0.3762881"
            },
            {
                "LocationName": "Valle de Bravo, Mexico",
                "Frequency": 2,
                "LatLng": "19.1950964,-100.1326725"
            },
            {
                "LocationName": "Vanuatu",
                "Frequency": 2,
                "LatLng": "-15.376706,166.959158"
            },
            {
                "LocationName": "Variable",
                "Frequency": 2,
                "LatLng": "35.7303897,-78.6792568"
            },
            {
                "LocationName": "venezuela caracas",
                "Frequency": 2,
                "LatLng": "10.4805937,-66.9036063"
            },
            {
                "LocationName": "Vienna, Europe",
                "Frequency": 2,
                "LatLng": "48.2081743,16.3738189"
            },
            {
                "LocationName": "VN",
                "Frequency": 2,
                "LatLng": "14.058324,108.277199"
            },
            {
                "LocationName": "Waco, TX",
                "Frequency": 2,
                "LatLng": "31.549333,-97.1466695"
            },
            {
                "LocationName": "Wales, United Kingdom",
                "Frequency": 2,
                "LatLng": "52.1306607,-3.7837117"
            },
            {
                "LocationName": "Washington D.C., United States",
                "Frequency": 2,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Washington D.C., U.S.",
                "Frequency": 2,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Washington, UT",
                "Frequency": 2,
                "LatLng": "37.1305373,-113.5082867"
            },
            {
                "LocationName": "West Coast",
                "Frequency": 2,
                "LatLng": "-42.4064185,171.6911559"
            },
            {
                "LocationName": "White Sulphur Springs, WV",
                "Frequency": 2,
                "LatLng": "37.7965107,-80.2975704"
            },
            {
                "LocationName": "Wien",
                "Frequency": 2,
                "LatLng": "48.2081743,16.3738189"
            },
            {
                "LocationName": "Williamsport, PA",
                "Frequency": 2,
                "LatLng": "41.2411897,-77.0010786"
            },
            {
                "LocationName": "Winston-Salem, NC",
                "Frequency": 2,
                "LatLng": "36.0998596,-80.244216"
            },
            {
                "LocationName": "Winston-Salem, North Carolina",
                "Frequency": 2,
                "LatLng": "36.0998596,-80.244216"
            },
            {
                "LocationName": "Wollongong, Australia",
                "Frequency": 2,
                "LatLng": "-34.4250728,150.8931494"
            },
            {
                "LocationName": "Woodbridge, VA",
                "Frequency": 2,
                "LatLng": "38.6581722,-77.2497049"
            },
            {
                "LocationName": "Wroclaw",
                "Frequency": 2,
                "LatLng": "51.1078852,17.0385376"
            },
            {
                "LocationName": "Xiamen, China",
                "Frequency": 2,
                "LatLng": "24.479834,118.089425"
            },
            {
                "LocationName": "Yaroslavl",
                "Frequency": 2,
                "LatLng": "57.6260744,39.8844708"
            },
            {
                "LocationName": "Yeovil, United Kingdom",
                "Frequency": 2,
                "LatLng": "50.942061,-2.633308"
            },
            {
                "LocationName": "Zagreb",
                "Frequency": 2,
                "LatLng": "45.8150108,15.981919"
            },
            {
                "LocationName": "Zurich",
                "Frequency": 2
            },
            {
                "LocationName": "~",
                "Frequency": 1
            },
            {
                "LocationName": "30.173848, 31.401387",
                "Frequency": 1,
                "LatLng": "30.1741953,31.4009603"
            },
            {
                "LocationName": "-9.914534,-63.027210",
                "Frequency": 1,
                "LatLng": "-9.9145344,-63.0272852"
            },
            {
                "LocationName": "A2",
                "Frequency": 1,
                "LatLng": "42.2808256,-83.7430378"
            },
            {
                "LocationName": "A.A",
                "Frequency": 1,
                "LatLng": "48.3705449,10.89779"
            },
            {
                "LocationName": "Aalborg, Denmark",
                "Frequency": 1,
                "LatLng": "57.0488195,9.921747"
            },
            {
                "LocationName": "Abidjan, Côte d´Ivoire",
                "Frequency": 1,
                "LatLng": "5.3599517,-4.0082563"
            },
            {
                "LocationName": "Abilene, TX",
                "Frequency": 1,
                "LatLng": "32.4487364,-99.7331439"
            },
            {
                "LocationName": "A Coruña, Spain",
                "Frequency": 1,
                "LatLng": "43.3623436,-8.4115401"
            },
            {
                "LocationName": "Acworth, GA",
                "Frequency": 1,
                "LatLng": "34.0659329,-84.6768796"
            },
            {
                "LocationName": "Adelaide and Stockholm",
                "Frequency": 1,
                "LatLng": "-32.679268,26.093951"
            },
            {
                "LocationName": "Agra, India",
                "Frequency": 1,
                "LatLng": "27.1766701,78.0080745"
            },
            {
                "LocationName": "Aiken, SC",
                "Frequency": 1,
                "LatLng": "33.5604168,-81.7195533"
            },
            {
                "LocationName": "Aix-en-Provence",
                "Frequency": 1,
                "LatLng": "43.529742,5.447427"
            },
            {
                "LocationName": "Akron, Ohio",
                "Frequency": 1,
                "LatLng": "41.0814447,-81.5190053"
            },
            {
                "LocationName": "Alabama",
                "Frequency": 1,
                "LatLng": "32.3182314,-86.902298"
            },
            {
                "LocationName": "Alappuzha",
                "Frequency": 1,
                "LatLng": "9.4980667,76.3388484"
            },
            {
                "LocationName": "Alappuzha, India",
                "Frequency": 1,
                "LatLng": "9.4980667,76.3388484"
            },
            {
                "LocationName": "Alaska",
                "Frequency": 1,
                "LatLng": "64.2008413,-149.4936733"
            },
            {
                "LocationName": "Alcorcón, Spain",
                "Frequency": 1,
                "LatLng": "40.3468454,-3.8278443"
            },
            {
                "LocationName": "Aleppo, Syria",
                "Frequency": 1,
                "LatLng": "36.2021047,37.1342603"
            },
            {
                "LocationName": "Alexandria, VA",
                "Frequency": 1,
                "LatLng": "38.8048355,-77.0469214"
            },
            {
                "LocationName": "Algiers, Algeria",
                "Frequency": 1,
                "LatLng": "36.752887,3.042048"
            },
            {
                "LocationName": "Allentown, PA",
                "Frequency": 1,
                "LatLng": "40.6084305,-75.4901833"
            },
            {
                "LocationName": "America",
                "Frequency": 1,
                "LatLng": "37.09024,-95.712891"
            },
            {
                "LocationName": "American Canyon, CA",
                "Frequency": 1,
                "LatLng": "38.1749178,-122.2608044"
            },
            {
                "LocationName": "Amersfoort, The Netherlands",
                "Frequency": 1,
                "LatLng": "52.1561113,5.3878266"
            },
            {
                "LocationName": "amman,jordan",
                "Frequency": 1,
                "LatLng": "31.9565783,35.9456951"
            },
            {
                "LocationName": "Amsterdam, NL",
                "Frequency": 1,
                "LatLng": "52.3702157,4.8951679"
            },
            {
                "LocationName": "Anand",
                "Frequency": 1,
                "LatLng": "22.5645175,72.928871"
            },
            {
                "LocationName": "Andalusia, Spain",
                "Frequency": 1,
                "LatLng": "37.5442706,-4.7277528"
            },
            {
                "LocationName": "Andromeda Galaxy Cluster",
                "Frequency": 1
            },
            {
                "LocationName": "Ankara, Turkiye",
                "Frequency": 1,
                "LatLng": "39.9333635,32.8597419"
            },
            {
                "LocationName": "Antalya, Turkey",
                "Frequency": 1,
                "LatLng": "36.8968908,30.7133233"
            },
            {
                "LocationName": "Antigua and Barbuda",
                "Frequency": 1,
                "LatLng": "17.060816,-61.796428"
            },
            {
                "LocationName": "Antwerp",
                "Frequency": 1,
                "LatLng": "51.2194475,4.4024643"
            },
            {
                "LocationName": "Antwerp/Leuven, Belgium",
                "Frequency": 1,
                "LatLng": "50.9756831,4.5685782"
            },
            {
                "LocationName": "ANU",
                "Frequency": 1,
                "LatLng": "31.6996681,76.5184741"
            },
            {
                "LocationName": "Arequipa, Peru",
                "Frequency": 1,
                "LatLng": "-16.4090474,-71.537451"
            },
            {
                "LocationName": "Ariquemes, Brazil",
                "Frequency": 1,
                "LatLng": "-9.9061054,-63.0330413"
            },
            {
                "LocationName": "arizona",
                "Frequency": 1,
                "LatLng": "34.0489281,-111.0937311"
            },
            {
                "LocationName": "Arlington, MA",
                "Frequency": 1,
                "LatLng": "42.4153925,-71.1564729"
            },
            {
                "LocationName": "Arlington ,TX",
                "Frequency": 1,
                "LatLng": "32.735687,-97.1080656"
            },
            {
                "LocationName": "Arlington, TX",
                "Frequency": 1,
                "LatLng": "32.735687,-97.1080656"
            },
            {
                "LocationName": "Armenia - Quindío - Colombia",
                "Frequency": 1,
                "LatLng": "4.5350004,-75.6756888"
            },
            {
                "LocationName": "around the globe (Argentinian)",
                "Frequency": 1
            },
            {
                "LocationName": "Asenovgrad, Bulgaria",
                "Frequency": 1,
                "LatLng": "42.0133722,24.8784393"
            },
            {
                "LocationName": "Asia Pasific",
                "Frequency": 1,
                "LatLng": "24.9024346,67.1157776"
            },
            {
                "LocationName": "Atlanta, GA, United States",
                "Frequency": 1,
                "LatLng": "33.7489954,-84.3879824"
            },
            {
                "LocationName": "Atlanta, United States",
                "Frequency": 1,
                "LatLng": "33.7489954,-84.3879824"
            },
            {
                "LocationName": "Atlantida, Canelones, Uruguay",
                "Frequency": 1,
                "LatLng": "-34.7793791,-55.7596225"
            },
            {
                "LocationName": "Auburn University",
                "Frequency": 1,
                "LatLng": "32.6033726,-85.4861115"
            },
            {
                "LocationName": "Augsburg",
                "Frequency": 1,
                "LatLng": "48.3705449,10.89779"
            },
            {
                "LocationName": "austin",
                "Frequency": 1,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Austin,TX",
                "Frequency": 1,
                "LatLng": "30.267153,-97.7430608"
            },
            {
                "LocationName": "Autonomous City of Buenos Aires",
                "Frequency": 1,
                "LatLng": "-34.6037618,-58.381715"
            },
            {
                "LocationName": "B",
                "Frequency": 1,
                "LatLng": "37.2809455,49.5924134"
            },
            {
                "LocationName": "Babylon, NY",
                "Frequency": 1,
                "LatLng": "40.6956552,-73.3256753"
            },
            {
                "LocationName": "Baden-Wurttemberg",
                "Frequency": 1,
                "LatLng": "48.6616037,9.3501336"
            },
            {
                "LocationName": "Baldwin City, KS",
                "Frequency": 1,
                "LatLng": "38.775007,-95.1863603"
            },
            {
                "LocationName": "Baltimore",
                "Frequency": 1,
                "LatLng": "39.2903848,-76.6121893"
            },
            {
                "LocationName": "Bangalore INDIA",
                "Frequency": 1,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Banglore",
                "Frequency": 1,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Banglore, India",
                "Frequency": 1,
                "LatLng": "12.9715987,77.5945627"
            },
            {
                "LocationName": "Banialuca, Bosnia and Herzegovina",
                "Frequency": 1
            },
            {
                "LocationName": "Barcelona Area",
                "Frequency": 1,
                "LatLng": "14.3494751,120.9446548"
            },
            {
                "LocationName": "Bari, Italy",
                "Frequency": 1,
                "LatLng": "41.1171432,16.8718715"
            },
            {
                "LocationName": "Barranquilla, Colombia",
                "Frequency": 1,
                "LatLng": "11.0041072,-74.8069813"
            },
            {
                "LocationName": "Basel",
                "Frequency": 1,
                "LatLng": "47.5595986,7.5885761"
            },
            {
                "LocationName": "Batala, India",
                "Frequency": 1,
                "LatLng": "31.8183238,75.2070644"
            },
            {
                "LocationName": "Batticaloa, Sri Lanka",
                "Frequency": 1,
                "LatLng": "7.7309971,81.6747295"
            },
            {
                "LocationName": "Bavaria",
                "Frequency": 1,
                "LatLng": "48.7904472,11.4978895"
            },
            {
                "LocationName": "Bay Area, CA",
                "Frequency": 1,
                "LatLng": "37.9994669,-122.174605"
            },
            {
                "LocationName": "Bay Area, CA, United States",
                "Frequency": 1,
                "LatLng": "37.9994669,-122.174605"
            },
            {
                "LocationName": "Beaver Dam, WI",
                "Frequency": 1,
                "LatLng": "43.4577692,-88.837329"
            },
            {
                "LocationName": "Bedford, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.1359729,-0.4666546"
            },
            {
                "LocationName": "Bedminster, NJ",
                "Frequency": 1,
                "LatLng": "40.669264,-74.6804"
            },
            {
                "LocationName": "Belgium, EU",
                "Frequency": 1,
                "LatLng": "50.5320001,6.6364339"
            },
            {
                "LocationName": "Belgorod, Russia",
                "Frequency": 1,
                "LatLng": "50.5997134,36.5982621"
            },
            {
                "LocationName": "Belgrade",
                "Frequency": 1,
                "LatLng": "44.786568,20.4489216"
            },
            {
                "LocationName": "Bellevue, ID",
                "Frequency": 1,
                "LatLng": "43.4635179,-114.2605998"
            },
            {
                "LocationName": "Bellingham, WA",
                "Frequency": 1,
                "LatLng": "48.74908,-122.4781473"
            },
            {
                "LocationName": "Belo Horizonte, Minas Gerais, Brazil",
                "Frequency": 1,
                "LatLng": "-19.9166813,-43.9344931"
            },
            {
                "LocationName": "Beloit, WI",
                "Frequency": 1,
                "LatLng": "42.5083482,-89.0317765"
            },
            {
                "LocationName": "Belpre, OH",
                "Frequency": 1,
                "LatLng": "39.2739639,-81.5729029"
            },
            {
                "LocationName": "Benelux",
                "Frequency": 1,
                "LatLng": "19.322526,-69.5311575"
            },
            {
                "LocationName": "Berlin, DE",
                "Frequency": 1,
                "LatLng": "52.5200066,13.404954"
            },
            {
                "LocationName": "Besançon, France",
                "Frequency": 1,
                "LatLng": "47.237829,6.0240539"
            },
            {
                "LocationName": "Beseri",
                "Frequency": 1,
                "LatLng": "19.7517041,85.1758012"
            },
            {
                "LocationName": "Bethesda, MD",
                "Frequency": 1,
                "LatLng": "38.984652,-77.0947092"
            },
            {
                "LocationName": "Bethlehem, PA",
                "Frequency": 1,
                "LatLng": "40.6259316,-75.3704579"
            },
            {
                "LocationName": "Between a chair and a screen",
                "Frequency": 1
            },
            {
                "LocationName": "Biddinghuizen, Netherlands",
                "Frequency": 1,
                "LatLng": "52.4552356,5.692693"
            },
            {
                "LocationName": "Birigui, Brazil",
                "Frequency": 1,
                "LatLng": "-21.2915055,-50.3436312"
            },
            {
                "LocationName": "Birmingham, Alabama",
                "Frequency": 1,
                "LatLng": "33.5206608,-86.80249"
            },
            {
                "LocationName": "Birmingham, MI",
                "Frequency": 1,
                "LatLng": "42.5467012,-83.2113192"
            },
            {
                "LocationName": "Bishop's Stortford, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.8721635,0.1536502"
            },
            {
                "LocationName": "Blackpool, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.8175053,-3.0356748"
            },
            {
                "LocationName": "Blonay, Switzerland",
                "Frequency": 1,
                "LatLng": "46.4647104,6.8946536"
            },
            {
                "LocationName": "Bloomfield, NJ",
                "Frequency": 1,
                "LatLng": "40.8067546,-74.1854209"
            },
            {
                "LocationName": "Bloomington, IN",
                "Frequency": 1,
                "LatLng": "39.165325,-86.5263857"
            },
            {
                "LocationName": "Bogota, Colombia.",
                "Frequency": 1,
                "LatLng": "4.7109886,-74.072092"
            },
            {
                "LocationName": "Bogotá, Colombia",
                "Frequency": 1,
                "LatLng": "4.7109886,-74.072092"
            },
            {
                "LocationName": "Boise, Idaho",
                "Frequency": 1,
                "LatLng": "43.6187102,-116.2146068"
            },
            {
                "LocationName": "Bologna",
                "Frequency": 1,
                "LatLng": "44.494887,11.3426163"
            },
            {
                "LocationName": "Bosnia and Herzegovina",
                "Frequency": 1,
                "LatLng": "43.915886,17.679076"
            },
            {
                "LocationName": "Boston MA",
                "Frequency": 1,
                "LatLng": "42.3600825,-71.0588801"
            },
            {
                "LocationName": "Bottrop, Germany",
                "Frequency": 1,
                "LatLng": "51.529086,6.9446888"
            },
            {
                "LocationName": "Boulder",
                "Frequency": 1,
                "LatLng": "40.0149856,-105.2705456"
            },
            {
                "LocationName": "Bourgas, Bulgaria",
                "Frequency": 1,
                "LatLng": "42.5047926,27.4626361"
            },
            {
                "LocationName": "Bradford, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.795984,-1.759398"
            },
            {
                "LocationName": "Braintree, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.880087,0.5509269"
            },
            {
                "LocationName": "brasilia",
                "Frequency": 1,
                "LatLng": "-14.235004,-51.92528"
            },
            {
                "LocationName": "Brasilia, Brasil",
                "Frequency": 1,
                "LatLng": "-15.7942287,-47.8821658"
            },
            {
                "LocationName": "Bratislava",
                "Frequency": 1,
                "LatLng": "48.1458923,17.1071373"
            },
            {
                "LocationName": "Breim, Norway",
                "Frequency": 1,
                "LatLng": "61.739761,6.423295"
            },
            {
                "LocationName": "Bridgeport, CT",
                "Frequency": 1,
                "LatLng": "41.1865478,-73.1951767"
            },
            {
                "LocationName": "Bridgewater, MA",
                "Frequency": 1,
                "LatLng": "41.9903519,-70.9750541"
            },
            {
                "LocationName": "Brighton, UK",
                "Frequency": 1,
                "LatLng": "50.82253,-0.137163"
            },
            {
                "LocationName": "Brisbane Australia",
                "Frequency": 1,
                "LatLng": "-27.4710107,153.0234489"
            },
            {
                "LocationName": "Bristol, CT",
                "Frequency": 1,
                "LatLng": "41.6717648,-72.9492703"
            },
            {
                "LocationName": "British Columbia, Canada",
                "Frequency": 1,
                "LatLng": "53.7266683,-127.6476206"
            },
            {
                "LocationName": "Broad Ripple, IN",
                "Frequency": 1,
                "LatLng": "39.8686846,-86.1340693"
            },
            {
                "LocationName": "Brookfield, CT",
                "Frequency": 1,
                "LatLng": "41.4825947,-73.4095652"
            },
            {
                "LocationName": "Brookline, MA",
                "Frequency": 1,
                "LatLng": "42.3317642,-71.1211635"
            },
            {
                "LocationName": "Brooklyn, AL",
                "Frequency": 1,
                "LatLng": "31.2626708,-86.7710749"
            },
            {
                "LocationName": "Broomfield, CO",
                "Frequency": 1,
                "LatLng": "39.9205411,-105.0866504"
            },
            {
                "LocationName": "Buc, France",
                "Frequency": 1,
                "LatLng": "48.771808,2.123618"
            },
            {
                "LocationName": "Bucharest Frankfurt Munich",
                "Frequency": 1,
                "LatLng": "48.1351253,11.5819806"
            },
            {
                "LocationName": "buenos aires",
                "Frequency": 1,
                "LatLng": "-34.6036844,-58.3815591"
            },
            {
                "LocationName": "Burgas, Bulgaria",
                "Frequency": 1,
                "LatLng": "42.5047926,27.4626361"
            },
            {
                "LocationName": "Burlington, VT",
                "Frequency": 1,
                "LatLng": "44.4758825,-73.212072"
            },
            {
                "LocationName": "Bursa, Turkey",
                "Frequency": 1,
                "LatLng": "40.1885281,29.0609636"
            },
            {
                "LocationName": "Butler, PA",
                "Frequency": 1,
                "LatLng": "40.8611755,-79.8953328"
            },
            {
                "LocationName": "Byblos,Lebanon",
                "Frequency": 1,
                "LatLng": "34.1230022,35.6519282"
            },
            {
                "LocationName": "Caceres, Spain",
                "Frequency": 1,
                "LatLng": "39.4752765,-6.3724247"
            },
            {
                "LocationName": "Caldas da Rainha, Portugal",
                "Frequency": 1,
                "LatLng": "39.4048977,-9.135404"
            },
            {
                "LocationName": "Calgary",
                "Frequency": 1,
                "LatLng": "51.0486151,-114.0708459"
            },
            {
                "LocationName": "Calgary, AB",
                "Frequency": 1,
                "LatLng": "51.0486151,-114.0708459"
            },
            {
                "LocationName": "cali",
                "Frequency": 1,
                "LatLng": "3.4516467,-76.5319854"
            },
            {
                "LocationName": "California, USA",
                "Frequency": 1,
                "LatLng": "36.778261,-119.4179324"
            },
            {
                "LocationName": "Camarillo, CA",
                "Frequency": 1,
                "LatLng": "34.2163937,-119.0376023"
            },
            {
                "LocationName": "Cambridge",
                "Frequency": 1,
                "LatLng": "42.3736158,-71.1097335"
            },
            {
                "LocationName": "Cambridge, MA USA",
                "Frequency": 1,
                "LatLng": "42.3736158,-71.1097335"
            },
            {
                "LocationName": "Cambridge / Newburyport MA",
                "Frequency": 1,
                "LatLng": "42.8125913,-70.8772751"
            },
            {
                "LocationName": "Cambridge, USA",
                "Frequency": 1,
                "LatLng": "42.3736158,-71.1097335"
            },
            {
                "LocationName": "Cameroon",
                "Frequency": 1,
                "LatLng": "7.369722,12.354722"
            },
            {
                "LocationName": "Campbell, CA",
                "Frequency": 1,
                "LatLng": "37.2871651,-121.9499568"
            },
            {
                "LocationName": "Campo Grande, Brazil",
                "Frequency": 1,
                "LatLng": "-20.4697105,-54.6201211"
            },
            {
                "LocationName": "Canarias",
                "Frequency": 1,
                "LatLng": "28.2915637,-16.6291304"
            },
            {
                "LocationName": "Canton, MI",
                "Frequency": 1,
                "LatLng": "42.3086444,-83.482116"
            },
            {
                "LocationName": "Cape Town",
                "Frequency": 1,
                "LatLng": "-33.9248685,18.4240553"
            },
            {
                "LocationName": "Capital District, NY (Not NYC)",
                "Frequency": 1,
                "LatLng": "40.7630043,-73.9790557"
            },
            {
                "LocationName": "Caracas , Venezuela",
                "Frequency": 1,
                "LatLng": "10.4805937,-66.9036063"
            },
            {
                "LocationName": "Carbondale, CO",
                "Frequency": 1,
                "LatLng": "39.4022054,-107.2111628"
            },
            {
                "LocationName": "Cardiff, UK",
                "Frequency": 1,
                "LatLng": "51.481581,-3.17909"
            },
            {
                "LocationName": "Carlsbad, CA",
                "Frequency": 1,
                "LatLng": "33.1580933,-117.3505939"
            },
            {
                "LocationName": "Carrboro, NC",
                "Frequency": 1,
                "LatLng": "35.9101438,-79.0752895"
            },
            {
                "LocationName": "Casablanca",
                "Frequency": 1,
                "LatLng": "33.5731104,-7.5898434"
            },
            {
                "LocationName": "Caseros, Argentina",
                "Frequency": 1,
                "LatLng": "-34.6094827,-58.5634631"
            },
            {
                "LocationName": "Castlemaine, Australia",
                "Frequency": 1,
                "LatLng": "-37.0644398,144.2172001"
            },
            {
                "LocationName": "Catalonia",
                "Frequency": 1,
                "LatLng": "41.5911589,1.5208624"
            },
            {
                "LocationName": "Catania, Italy",
                "Frequency": 1,
                "LatLng": "37.5078772,15.0830304"
            },
            {
                "LocationName": "Caxias do Sul, RS, Brasil",
                "Frequency": 1,
                "LatLng": "-29.1634031,-51.1796683"
            },
            {
                "LocationName": "Cebu, Philippines",
                "Frequency": 1,
                "LatLng": "10.3156992,123.8854366"
            },
            {
                "LocationName": "Central Point, OR",
                "Frequency": 1,
                "LatLng": "42.3759586,-122.9164307"
            },
            {
                "LocationName": "Centreville, VA",
                "Frequency": 1,
                "LatLng": "38.8403909,-77.4288769"
            },
            {
                "LocationName": "Chamalieres, France",
                "Frequency": 1,
                "LatLng": "45.77412,3.060484"
            },
            {
                "LocationName": "chandhighar",
                "Frequency": 1,
                "LatLng": "30.7333148,76.7794179"
            },
            {
                "LocationName": "chandigarh",
                "Frequency": 1,
                "LatLng": "30.7333148,76.7794179"
            },
            {
                "LocationName": "Chandigarh,India",
                "Frequency": 1,
                "LatLng": "30.7333148,76.7794179"
            },
            {
                "LocationName": "Chandigarh, Jaipur, Kanpur, India",
                "Frequency": 1,
                "LatLng": "26.449923,80.3318736"
            },
            {
                "LocationName": "Channel Islands, United Kingdom",
                "Frequency": 1,
                "LatLng": "49.5,-2.5"
            },
            {
                "LocationName": "Chapeco, Brazil",
                "Frequency": 1,
                "LatLng": "-27.1009343,-52.615699"
            },
            {
                "LocationName": "Charleston, South Carolina, United States, 29407",
                "Frequency": 1,
                "LatLng": "32.8017595,-79.9975916"
            },
            {
                "LocationName": "Charlestown, IN",
                "Frequency": 1,
                "LatLng": "38.45312,-85.6702406"
            },
            {
                "LocationName": "Charles Town, WV",
                "Frequency": 1,
                "LatLng": "39.2889903,-77.8597175"
            },
            {
                "LocationName": "Chennai,India",
                "Frequency": 1,
                "LatLng": "13.0826802,80.2707184"
            },
            {
                "LocationName": "Chennai, Tamilnadu, India",
                "Frequency": 1,
                "LatLng": "13.0826802,80.2707184"
            },
            {
                "LocationName": "Chevy Chase MD",
                "Frequency": 1,
                "LatLng": "38.9949153,-77.0772052"
            },
            {
                "LocationName": "Cheyenne, WY",
                "Frequency": 1,
                "LatLng": "41.1399814,-104.8202462"
            },
            {
                "LocationName": "Chicago/California",
                "Frequency": 1,
                "LatLng": "34.5259403,-117.0626059"
            },
            {
                "LocationName": "Chicago IL",
                "Frequency": 1,
                "LatLng": "41.8781136,-87.6297982"
            },
            {
                "LocationName": "Chicago, Illinois",
                "Frequency": 1,
                "LatLng": "41.8781136,-87.6297982"
            },
            {
                "LocationName": "Chicagoland",
                "Frequency": 1,
                "LatLng": "41.7435073,-88.0118473"
            },
            {
                "LocationName": "Chicago, USA",
                "Frequency": 1,
                "LatLng": "41.8781136,-87.6297982"
            },
            {
                "LocationName": "China, Germany, Austria",
                "Frequency": 1
            },
            {
                "LocationName": "China wenzhou",
                "Frequency": 1,
                "LatLng": "27.994267,120.699367"
            },
            {
                "LocationName": "China Wuhan",
                "Frequency": 1,
                "LatLng": "30.593099,114.305393"
            },
            {
                "LocationName": "Chittagong, Bangladesh",
                "Frequency": 1,
                "LatLng": "22.3475365,91.8123324"
            },
            {
                "LocationName": "Circleville, OH",
                "Frequency": 1,
                "LatLng": "39.600618,-82.9460133"
            },
            {
                "LocationName": "circumgyrating DSS J010013.02+280225.8",
                "Frequency": 1
            },
            {
                "LocationName": "Claremont, Ca",
                "Frequency": 1,
                "LatLng": "34.0966764,-117.7197785"
            },
            {
                "LocationName": "Clarkston, MI",
                "Frequency": 1,
                "LatLng": "42.7351196,-83.4192941"
            },
            {
                "LocationName": "Clifton, NJ",
                "Frequency": 1,
                "LatLng": "40.8584328,-74.1637553"
            },
            {
                "LocationName": "Clinton, NY",
                "Frequency": 1,
                "LatLng": "43.0484029,-75.3785034"
            },
            {
                "LocationName": "Cluj Napoca, Romania",
                "Frequency": 1,
                "LatLng": "46.7712101,23.6236353"
            },
            {
                "LocationName": "Cluj-Napoca, România",
                "Frequency": 1,
                "LatLng": "46.7712101,23.6236353"
            },
            {
                "LocationName": "Cochabamba, Bolivia",
                "Frequency": 1,
                "LatLng": "-17.4139766,-66.1653224"
            },
            {
                "LocationName": "cochin",
                "Frequency": 1,
                "LatLng": "9.9312328,76.2673041"
            },
            {
                "LocationName": "Colchester, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.895927,0.891874"
            },
            {
                "LocationName": "Colima, Mexico",
                "Frequency": 1,
                "LatLng": "19.2452342,-103.7240868"
            },
            {
                "LocationName": "Colombo",
                "Frequency": 1,
                "LatLng": "6.9270786,79.861243"
            },
            {
                "LocationName": "Colorado, USA",
                "Frequency": 1,
                "LatLng": "39.5500507,-105.7820674"
            },
            {
                "LocationName": "Concepcion, Chile",
                "Frequency": 1,
                "LatLng": "-36.8201352,-73.0443904"
            },
            {
                "LocationName": "Conwy, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.282872,-3.82948"
            },
            {
                "LocationName": "Coral Springs, FL",
                "Frequency": 1,
                "LatLng": "26.271192,-80.2706044"
            },
            {
                "LocationName": "Cordoba",
                "Frequency": 1,
                "LatLng": "37.8881751,-4.7793835"
            },
            {
                "LocationName": "Corvallis, OR",
                "Frequency": 1,
                "LatLng": "44.5645659,-123.2620435"
            },
            {
                "LocationName": "Cowes, United Kingdom",
                "Frequency": 1,
                "LatLng": "50.762785,-1.300533"
            },
            {
                "LocationName": "Creighton University",
                "Frequency": 1,
                "LatLng": "41.2623773,-95.9428198"
            },
            {
                "LocationName": "Crewe, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.100405,-2.4438209"
            },
            {
                "LocationName": "Cucuta",
                "Frequency": 1,
                "LatLng": "7.8890971,-72.4966896"
            },
            {
                "LocationName": "Cuenca, Ecuador",
                "Frequency": 1,
                "LatLng": "-2.9001285,-79.0058965"
            },
            {
                "LocationName": "Culiacan, Mexico",
                "Frequency": 1,
                "LatLng": "24.8090649,-107.3940117"
            },
            {
                "LocationName": "Czech Republic and Slovakia",
                "Frequency": 1
            },
            {
                "LocationName": "Daejon, South Korea",
                "Frequency": 1,
                "LatLng": "36.3504119,127.3845475"
            },
            {
                "LocationName": "Dallas",
                "Frequency": 1,
                "LatLng": "32.7766642,-96.7969879"
            },
            {
                "LocationName": "Danang, Vietnam",
                "Frequency": 1,
                "LatLng": "16.0544068,108.2021667"
            },
            {
                "LocationName": "Da Nang, Vietnam",
                "Frequency": 1,
                "LatLng": "16.0544068,108.2021667"
            },
            {
                "LocationName": "Danmark",
                "Frequency": 1,
                "LatLng": "56.26392,9.501785"
            },
            {
                "LocationName": "Davao City, Philippines",
                "Frequency": 1,
                "LatLng": "7.190708,125.455341"
            },
            {
                "LocationName": "dc",
                "Frequency": 1,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "D.C Metro Area",
                "Frequency": 1,
                "LatLng": "44.9109635,-89.6026929"
            },
            {
                "LocationName": "De",
                "Frequency": 1,
                "LatLng": "38.9108325,-75.5276699"
            },
            {
                "LocationName": "DE Bremen",
                "Frequency": 1,
                "LatLng": "53.0792962,8.8016937"
            },
            {
                "LocationName": "Dehradun",
                "Frequency": 1,
                "LatLng": "30.3164945,78.0321918"
            },
            {
                "LocationName": "Delft, Netherlands",
                "Frequency": 1,
                "LatLng": "52.0115769,4.3570677"
            },
            {
                "LocationName": "Delft, The Netherlands",
                "Frequency": 1,
                "LatLng": "52.0115769,4.3570677"
            },
            {
                "LocationName": "Delray Beach, FL",
                "Frequency": 1,
                "LatLng": "26.4614625,-80.0728201"
            },
            {
                "LocationName": "Den Bosch, Netherlands",
                "Frequency": 1,
                "LatLng": "51.6978162,5.3036748"
            },
            {
                "LocationName": "Denver CO",
                "Frequency": 1,
                "LatLng": "39.7392358,-104.990251"
            },
            {
                "LocationName": "Derby, UK",
                "Frequency": 1,
                "LatLng": "52.9225301,-1.4746186"
            },
            {
                "LocationName": "Derby, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.9225301,-1.4746186"
            },
            {
                "LocationName": "Detroit → Harlem",
                "Frequency": 1,
                "LatLng": "40.8115504,-73.9464769"
            },
            {
                "LocationName": "Detroit, MI",
                "Frequency": 1,
                "LatLng": "42.331427,-83.0457538"
            },
            {
                "LocationName": "Didsbury, Canada",
                "Frequency": 1,
                "LatLng": "51.6608359,-114.136516"
            },
            {
                "LocationName": "Diest, Belgium",
                "Frequency": 1,
                "LatLng": "50.98965,5.05016"
            },
            {
                "LocationName": "District of Columbia, United States",
                "Frequency": 1,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Dnipropetrovs'k, Ukraine",
                "Frequency": 1,
                "LatLng": "48.464717,35.046183"
            },
            {
                "LocationName": "Doncaster, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.52282,-1.128462"
            },
            {
                "LocationName": "Dormagen",
                "Frequency": 1,
                "LatLng": "51.0936851,6.8289112"
            },
            {
                "LocationName": "Dover, NH",
                "Frequency": 1,
                "LatLng": "43.1978624,-70.8736698"
            },
            {
                "LocationName": "Dubai U.A.E",
                "Frequency": 1,
                "LatLng": "25.2048493,55.2707828"
            },
            {
                "LocationName": "Dublin Ireland",
                "Frequency": 1,
                "LatLng": "53.3498053,-6.2603097"
            },
            {
                "LocationName": "Dumaguete City, Philippines",
                "Frequency": 1,
                "LatLng": "9.3068402,123.3054467"
            },
            {
                "LocationName": "Dumaguete, Philippines",
                "Frequency": 1,
                "LatLng": "9.3068402,123.3054467"
            },
            {
                "LocationName": "Dundee, United Kingdom",
                "Frequency": 1,
                "LatLng": "56.462018,-2.970721"
            },
            {
                "LocationName": "Durban, South Africa",
                "Frequency": 1,
                "LatLng": "-29.8586804,31.0218404"
            },
            {
                "LocationName": "Eagle Mountain, UT",
                "Frequency": 1,
                "LatLng": "40.3141169,-112.006882"
            },
            {
                "LocationName": "Earth.",
                "Frequency": 1,
                "LatLng": "34.2331373,-102.4107493"
            },
            {
                "LocationName": "Eastbourne, United Kingdom",
                "Frequency": 1,
                "LatLng": "50.768035,0.290472"
            },
            {
                "LocationName": "East Brunswick, NJ",
                "Frequency": 1,
                "LatLng": "40.4316955,-74.4049778"
            },
            {
                "LocationName": "Eastern Europe",
                "Frequency": 1,
                "LatLng": "52.0055148,37.9587494"
            },
            {
                "LocationName": "Eastern Tennessee",
                "Frequency": 1,
                "LatLng": "36.4312908,-82.5275536"
            },
            {
                "LocationName": "East Killara",
                "Frequency": 1,
                "LatLng": "-33.7537831,151.1764519"
            },
            {
                "LocationName": "Ede, Netherlands",
                "Frequency": 1,
                "LatLng": "52.0401675,5.6648594"
            },
            {
                "LocationName": "Edmond OK",
                "Frequency": 1,
                "LatLng": "35.6528323,-97.4780954"
            },
            {
                "LocationName": "Edmond, OK",
                "Frequency": 1,
                "LatLng": "35.6528323,-97.4780954"
            },
            {
                "LocationName": "Epping, NH",
                "Frequency": 1,
                "LatLng": "43.0534843,-71.0735476"
            },
            {
                "LocationName": "Erie, PA",
                "Frequency": 1,
                "LatLng": "42.1292241,-80.085059"
            },
            {
                "LocationName": "Ernakulam, India",
                "Frequency": 1,
                "LatLng": "9.9816358,76.2998842"
            },
            {
                "LocationName": "Esfahan",
                "Frequency": 1,
                "LatLng": "32.6546275,51.6679826"
            },
            {
                "LocationName": "Espirito Santo, Brazil",
                "Frequency": 1,
                "LatLng": "-19.1834229,-40.3088626"
            },
            {
                "LocationName": "Esssen, Belgium",
                "Frequency": 1,
                "LatLng": "51.46776,4.46844"
            },
            {
                "LocationName": "EU",
                "Frequency": 1,
                "LatLng": "50.04887,1.419597"
            },
            {
                "LocationName": "Euless, TX",
                "Frequency": 1,
                "LatLng": "32.8370727,-97.0819541"
            },
            {
                "LocationName": "Europe, Ukraine",
                "Frequency": 1,
                "LatLng": "48.379433,31.16558"
            },
            {
                "LocationName": "Evansville, IN",
                "Frequency": 1,
                "LatLng": "37.9715592,-87.5710898"
            },
            {
                "LocationName": "Exton, PA",
                "Frequency": 1,
                "LatLng": "40.0325817,-75.6274583"
            },
            {
                "LocationName": "Faisalabad,Pakistan",
                "Frequency": 1,
                "LatLng": "31.4187142,73.0791073"
            },
            {
                "LocationName": "Far East of Russia",
                "Frequency": 1,
                "LatLng": "38.7945952,106.5348379"
            },
            {
                "LocationName": "Faridabad, Haryana, India",
                "Frequency": 1,
                "LatLng": "28.4089123,77.3177894"
            },
            {
                "LocationName": "Farmington, MI",
                "Frequency": 1,
                "LatLng": "42.4644795,-83.3763218"
            },
            {
                "LocationName": "Feasterville-Trevose, PA",
                "Frequency": 1,
                "LatLng": "40.1466378,-74.9952259"
            },
            {
                "LocationName": "Ferno, Italy",
                "Frequency": 1,
                "LatLng": "45.6124766,8.7577138"
            },
            {
                "LocationName": "Finland/Ukraine",
                "Frequency": 1,
                "LatLng": "60.1854184,25.0173953"
            },
            {
                "LocationName": "FL",
                "Frequency": 1,
                "LatLng": "27.6648274,-81.5157535"
            },
            {
                "LocationName": "Flint, MI",
                "Frequency": 1,
                "LatLng": "43.0125274,-83.6874562"
            },
            {
                "LocationName": "Florianópolis",
                "Frequency": 1,
                "LatLng": "-27.5953778,-48.5480499"
            },
            {
                "LocationName": "Florida International University, FL",
                "Frequency": 1,
                "LatLng": "28.313191,-80.7206765"
            },
            {
                "LocationName": "Fontana",
                "Frequency": 1,
                "LatLng": "34.0922335,-117.435048"
            },
            {
                "LocationName": "Fort Lee, NJ",
                "Frequency": 1,
                "LatLng": "40.8509333,-73.9701381"
            },
            {
                "LocationName": "Fort Walton Beach, FL",
                "Frequency": 1,
                "LatLng": "30.4200708,-86.6170308"
            },
            {
                "LocationName": "Fort Worth, TX",
                "Frequency": 1,
                "LatLng": "32.7554883,-97.3307658"
            },
            {
                "LocationName": "Foshan, China",
                "Frequency": 1,
                "LatLng": "23.021479,113.121436"
            },
            {
                "LocationName": "France, Grenoble",
                "Frequency": 1,
                "LatLng": "45.188529,5.724524"
            },
            {
                "LocationName": "France, Lyon",
                "Frequency": 1,
                "LatLng": "45.764043,4.835659"
            },
            {
                "LocationName": "france, paris",
                "Frequency": 1,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "France/San Francisco",
                "Frequency": 1,
                "LatLng": "37.718125,-122.434354"
            },
            {
                "LocationName": "Frankfurt am Main",
                "Frequency": 1,
                "LatLng": "50.1109221,8.6821267"
            },
            {
                "LocationName": "Frederiksberg, Denmark",
                "Frequency": 1,
                "LatLng": "55.677069,12.513321"
            },
            {
                "LocationName": "Fredrikstad, Norway",
                "Frequency": 1,
                "LatLng": "59.2205369,10.9347012"
            },
            {
                "LocationName": "Freiburg im Breisgau, Germany",
                "Frequency": 1,
                "LatLng": "47.9990077,7.8421043"
            },
            {
                "LocationName": "Freiburg / Zurich",
                "Frequency": 1,
                "LatLng": "47.9519514,8.1259898"
            },
            {
                "LocationName": "Fremont",
                "Frequency": 1,
                "LatLng": "37.5482697,-121.9885719"
            },
            {
                "LocationName": "Ft Lauderdale, FL",
                "Frequency": 1,
                "LatLng": "26.1224386,-80.1373174"
            },
            {
                "LocationName": "Furth, Germany",
                "Frequency": 1,
                "LatLng": "49.4771169,10.988667"
            },
            {
                "LocationName": "Gaithersburg, MD",
                "Frequency": 1,
                "LatLng": "39.1434406,-77.2013705"
            },
            {
                "LocationName": "Galle, Sri Lanka",
                "Frequency": 1,
                "LatLng": "6.0535185,80.2209773"
            },
            {
                "LocationName": "Galway",
                "Frequency": 1,
                "LatLng": "53.270668,-9.0567905"
            },
            {
                "LocationName": "Gandhinagar,India",
                "Frequency": 1,
                "LatLng": "23.2156354,72.6369415"
            },
            {
                "LocationName": "Gateshead, United Kingdom",
                "Frequency": 1,
                "LatLng": "54.95268,-1.603411"
            },
            {
                "LocationName": "Gatineau, Canada",
                "Frequency": 1,
                "LatLng": "45.4765446,-75.7012723"
            },
            {
                "LocationName": "Gent, Belgium",
                "Frequency": 1,
                "LatLng": "51.0543422,3.7174243"
            },
            {
                "LocationName": "Georgia,Tbilisi",
                "Frequency": 1,
                "LatLng": "41.7151377,44.827096"
            },
            {
                "LocationName": "Germany, Berlin",
                "Frequency": 1,
                "LatLng": "52.5200066,13.404954"
            },
            {
                "LocationName": "Germany Rhein/Main Area",
                "Frequency": 1
            },
            {
                "LocationName": "Germany/United States",
                "Frequency": 1,
                "LatLng": "39.7360581,-77.1082444"
            },
            {
                "LocationName": "Giza, Egypt",
                "Frequency": 1,
                "LatLng": "30.0130557,31.2088526"
            },
            {
                "LocationName": "Glasgow, Scotland.",
                "Frequency": 1,
                "LatLng": "55.864237,-4.251806"
            },
            {
                "LocationName": "Gloucestershire, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.8642112,-2.2380335"
            },
            {
                "LocationName": "Goiania, Brazil",
                "Frequency": 1,
                "LatLng": "-16.6868912,-49.2647943"
            },
            {
                "LocationName": "Goiânia, GO - Brazil",
                "Frequency": 1,
                "LatLng": "-16.6868912,-49.2647943"
            },
            {
                "LocationName": "Gostivar, Macedonia",
                "Frequency": 1,
                "LatLng": "41.8025541,20.9089378"
            },
            {
                "LocationName": "Granby",
                "Frequency": 1,
                "LatLng": "45.4032289,-72.7340662"
            },
            {
                "LocationName": "Great China Hong Kong",
                "Frequency": 1,
                "LatLng": "22.284623,114.152086"
            },
            {
                "LocationName": "Greater Boston Area",
                "Frequency": 1,
                "LatLng": "42.4272,-71.0069369"
            },
            {
                "LocationName": "Greater Los Angeles Area",
                "Frequency": 1
            },
            {
                "LocationName": "Great Malvern, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.112421,-2.327182"
            },
            {
                "LocationName": "Grenoble",
                "Frequency": 1,
                "LatLng": "45.188529,5.724524"
            },
            {
                "LocationName": "Groningen, The Netherlands",
                "Frequency": 1,
                "LatLng": "53.2193835,6.5665018"
            },
            {
                "LocationName": "Guadalajara, Mexico",
                "Frequency": 1,
                "LatLng": "20.6596988,-103.3496092"
            },
            {
                "LocationName": "Guam, USA",
                "Frequency": 1,
                "LatLng": "36.90194,-89.82361"
            },
            {
                "LocationName": "Guayaquil, Ecuador",
                "Frequency": 1,
                "LatLng": "-2.1709979,-79.9223592"
            },
            {
                "LocationName": "Guelph, Canada",
                "Frequency": 1,
                "LatLng": "43.5448048,-80.2481666"
            },
            {
                "LocationName": "Guilderland, NY",
                "Frequency": 1,
                "LatLng": "42.7043568,-73.9116433"
            },
            {
                "LocationName": "gurgaon",
                "Frequency": 1,
                "LatLng": "28.4594965,77.0266383"
            },
            {
                "LocationName": "Gwalior, India",
                "Frequency": 1,
                "LatLng": "26.2182871,78.1828308"
            },
            {
                "LocationName": "GZ",
                "Frequency": 1,
                "LatLng": "48.3658011,10.4344416"
            },
            {
                "LocationName": "Haarlem",
                "Frequency": 1,
                "LatLng": "52.3873878,4.6462194"
            },
            {
                "LocationName": "Haarlem, Netherlands",
                "Frequency": 1,
                "LatLng": "52.3873878,4.6462194"
            },
            {
                "LocationName": "Hải Phòng or Hồ Chí Minh",
                "Frequency": 1,
                "LatLng": "10.8230989,106.6296638"
            },
            {
                "LocationName": "Half Moon Bay, CA",
                "Frequency": 1,
                "LatLng": "37.4635519,-122.4285862"
            },
            {
                "LocationName": "Halifax, NS",
                "Frequency": 1,
                "LatLng": "44.6488625,-63.5753196"
            },
            {
                "LocationName": "Halifax, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.72702,-1.85754"
            },
            {
                "LocationName": "Halle, Germany",
                "Frequency": 1,
                "LatLng": "51.4969802,11.9688029"
            },
            {
                "LocationName": "Hammonton, NJ",
                "Frequency": 1,
                "LatLng": "39.6365056,-74.8023853"
            },
            {
                "LocationName": "Hanoi, VietNam",
                "Frequency": 1,
                "LatLng": "21.0277644,105.8341598"
            },
            {
                "LocationName": "Ha Noi, Viet Nam",
                "Frequency": 1,
                "LatLng": "21.0277644,105.8341598"
            },
            {
                "LocationName": "Hanover, Germany",
                "Frequency": 1,
                "LatLng": "52.3758916,9.7320104"
            },
            {
                "LocationName": "Hanover, PA",
                "Frequency": 1,
                "LatLng": "39.8006553,-76.9830358"
            },
            {
                "LocationName": "Harare, Zimbabwe",
                "Frequency": 1,
                "LatLng": "-17.8251657,31.03351"
            },
            {
                "LocationName": "Harrisonburg, VA",
                "Frequency": 1,
                "LatLng": "38.4495688,-78.8689155"
            },
            {
                "LocationName": "Hartford, CT; Los Angeles, CA",
                "Frequency": 1,
                "LatLng": "34.0551871,-118.2648435"
            },
            {
                "LocationName": "Hartland, WI",
                "Frequency": 1,
                "LatLng": "43.105008,-88.3420398"
            },
            {
                "LocationName": "Haverhill, MA",
                "Frequency": 1,
                "LatLng": "42.7762015,-71.0772796"
            },
            {
                "LocationName": "Hayling Island",
                "Frequency": 1,
                "LatLng": "50.829374,-0.97819"
            },
            {
                "LocationName": "HCMC",
                "Frequency": 1,
                "LatLng": "10.8060647,106.7068341"
            },
            {
                "LocationName": "Heerenveen, Netherlands",
                "Frequency": 1,
                "LatLng": "52.9605613,5.9205217"
            },
            {
                "LocationName": "Hell, Norway",
                "Frequency": 1,
                "LatLng": "63.4451715,10.9052167"
            },
            {
                "LocationName": "Hello World",
                "Frequency": 1,
                "LatLng": "37.7794841,-122.4295797"
            },
            {
                "LocationName": "Henderson, KY",
                "Frequency": 1,
                "LatLng": "37.8361538,-87.5900134"
            },
            {
                "LocationName": "Herndon, Virginia",
                "Frequency": 1,
                "LatLng": "38.9695545,-77.3860976"
            },
            {
                "LocationName": "Highlands Ranch, CO",
                "Frequency": 1,
                "LatLng": "39.5480789,-104.9739333"
            },
            {
                "LocationName": "Highland, UT",
                "Frequency": 1,
                "LatLng": "40.4248665,-111.7979285"
            },
            {
                "LocationName": "Highland, Utah",
                "Frequency": 1,
                "LatLng": "40.4248665,-111.7979285"
            },
            {
                "LocationName": "Hightstown, NJ",
                "Frequency": 1,
                "LatLng": "40.2695538,-74.5232089"
            },
            {
                "LocationName": "High wycombe",
                "Frequency": 1,
                "LatLng": "51.628611,-0.748229"
            },
            {
                "LocationName": "High Wycombe, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.628611,-0.748229"
            },
            {
                "LocationName": "Hitchin, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.94921,-0.283414"
            },
            {
                "LocationName": "HK",
                "Frequency": 1,
                "LatLng": "22.396428,114.109497"
            },
            {
                "LocationName": "Hobart, Australia",
                "Frequency": 1,
                "LatLng": "-42.8819032,147.3238148"
            },
            {
                "LocationName": "Ho Chi Minh",
                "Frequency": 1,
                "LatLng": "10.8230989,106.6296638"
            },
            {
                "LocationName": "Hollywood, CA",
                "Frequency": 1,
                "LatLng": "34.0928092,-118.3286614"
            },
            {
                "LocationName": "Home, KS",
                "Frequency": 1,
                "LatLng": "39.8415525,-96.5200564"
            },
            {
                "LocationName": "Horsham, UK",
                "Frequency": 1,
                "LatLng": "51.062883,-0.325858"
            },
            {
                "LocationName": "houston",
                "Frequency": 1,
                "LatLng": "29.7604267,-95.3698028"
            },
            {
                "LocationName": "How does Puget Sound?",
                "Frequency": 1
            },
            {
                "LocationName": "Hsinchu County",
                "Frequency": 1,
                "LatLng": "24.8387226,121.0177246"
            },
            {
                "LocationName": "http://ignoranceofman.com/",
                "Frequency": 1
            },
            {
                "LocationName": "Huddersfield, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.645792,-1.785035"
            },
            {
                "LocationName": "Huntingdon, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.33146,-0.182552"
            },
            {
                "LocationName": "Huntington, NY",
                "Frequency": 1,
                "LatLng": "40.8681539,-73.425676"
            },
            {
                "LocationName": "Huntsville, AL",
                "Frequency": 1,
                "LatLng": "34.7303688,-86.5861037"
            },
            {
                "LocationName": "Huntsville, Canada",
                "Frequency": 1,
                "LatLng": "45.3269323,-79.2167539"
            },
            {
                "LocationName": "Hurghada, Egypt",
                "Frequency": 1,
                "LatLng": "27.2578957,33.8116067"
            },
            {
                "LocationName": "Hyderaba",
                "Frequency": 1,
                "LatLng": "17.385044,78.486671"
            },
            {
                "LocationName": "Ibiza",
                "Frequency": 1,
                "LatLng": "38.9067339,1.4205983"
            },
            {
                "LocationName": "Iesi, Italy",
                "Frequency": 1,
                "LatLng": "43.5270861,13.2463797"
            },
            {
                "LocationName": "IIT kanpur",
                "Frequency": 1,
                "LatLng": "26.5203418,80.2324799"
            },
            {
                "LocationName": "Iit Kharagpur, India",
                "Frequency": 1,
                "LatLng": "22.3145443,87.3090683"
            },
            {
                "LocationName": "Ilidža, Bosnia and Herzegovina",
                "Frequency": 1,
                "LatLng": "43.8314063,18.3002114"
            },
            {
                "LocationName": "Iloilo City, Philippines",
                "Frequency": 1,
                "LatLng": "10.7201501,122.5621063"
            },
            {
                "LocationName": "India, Andhara Pradesh",
                "Frequency": 1,
                "LatLng": "15.9128998,79.7399875"
            },
            {
                "LocationName": "India (Jaipur)",
                "Frequency": 1,
                "LatLng": "26.9124336,75.7872709"
            },
            {
                "LocationName": "India, Tamilnadu",
                "Frequency": 1,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "indore",
                "Frequency": 1,
                "LatLng": "22.7195687,75.8577258"
            },
            {
                "LocationName": "indore, M.P india",
                "Frequency": 1,
                "LatLng": "22.7195687,75.8577258"
            },
            {
                "LocationName": "in front of my computer",
                "Frequency": 1
            },
            {
                "LocationName": "Ingolstadt, Germany",
                "Frequency": 1,
                "LatLng": "48.7665351,11.4257541"
            },
            {
                "LocationName": "Innernette",
                "Frequency": 1
            },
            {
                "LocationName": "inside your computer",
                "Frequency": 1
            },
            {
                "LocationName": "internet",
                "Frequency": 1,
                "LatLng": "15.1219947,105.8021808"
            },
            {
                "LocationName": "In The Middle Of The Forest",
                "Frequency": 1,
                "LatLng": "39.824992,-86.411666"
            },
            {
                "LocationName": "Iolcus, Greece",
                "Frequency": 1
            },
            {
                "LocationName": "Iowa City, IA",
                "Frequency": 1,
                "LatLng": "41.6611277,-91.5301683"
            },
            {
                "LocationName": "iran tehran",
                "Frequency": 1,
                "LatLng": "35.6891975,51.3889736"
            },
            {
                "LocationName": "Iran, Tehran",
                "Frequency": 1,
                "LatLng": "35.6891975,51.3889736"
            },
            {
                "LocationName": "Irving, TX",
                "Frequency": 1,
                "LatLng": "32.8140177,-96.9488945"
            },
            {
                "LocationName": "Is a function of time.",
                "Frequency": 1,
                "LatLng": "22.4656648,114.1788858"
            },
            {
                "LocationName": "Isla de Margarita - Venezuela",
                "Frequency": 1,
                "LatLng": "10.9970723,-63.9113296"
            },
            {
                "LocationName": "Istanbul, TR",
                "Frequency": 1,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "istanbul/türkiye",
                "Frequency": 1,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "Itajai, Brazil",
                "Frequency": 1,
                "LatLng": "-26.9105964,-48.6709514"
            },
            {
                "LocationName": "Italy,Tourin",
                "Frequency": 1,
                "LatLng": "45.070312,7.6868565"
            },
            {
                "LocationName": "İzmir, Turkey",
                "Frequency": 1,
                "LatLng": "38.423734,27.142826"
            },
            {
                "LocationName": "Jackson, MS",
                "Frequency": 1,
                "LatLng": "32.2987573,-90.1848103"
            },
            {
                "LocationName": "Jackson, TN",
                "Frequency": 1,
                "LatLng": "35.6145169,-88.8139469"
            },
            {
                "LocationName": "Jackson, WY",
                "Frequency": 1,
                "LatLng": "43.4799291,-110.7624282"
            },
            {
                "LocationName": "Jaén",
                "Frequency": 1,
                "LatLng": "37.7795941,-3.7849057"
            },
            {
                "LocationName": "jaipur,india",
                "Frequency": 1,
                "LatLng": "26.9124336,75.7872709"
            },
            {
                "LocationName": "Jalandhar - India",
                "Frequency": 1,
                "LatLng": "31.3260152,75.5761829"
            },
            {
                "LocationName": "Jannat !",
                "Frequency": 1,
                "LatLng": "29.5951969,52.5472199"
            },
            {
                "LocationName": "jaru, brasil",
                "Frequency": 1,
                "LatLng": "-10.4322235,-62.4792921"
            },
            {
                "LocationName": "Jeddah, Saudi Arabia",
                "Frequency": 1,
                "LatLng": "21.2854067,39.2375507"
            },
            {
                "LocationName": "Jersey, United Kingdom",
                "Frequency": 1,
                "LatLng": "49.2137765,-2.1357665"
            },
            {
                "LocationName": "JKT",
                "Frequency": 1,
                "LatLng": "10.3623228,123.9497119"
            },
            {
                "LocationName": "Jodhpur",
                "Frequency": 1,
                "LatLng": "26.2389469,73.0243094"
            },
            {
                "LocationName": "Johnstown, PA",
                "Frequency": 1,
                "LatLng": "40.3267407,-78.9219698"
            },
            {
                "LocationName": "Jordan - Amman",
                "Frequency": 1,
                "LatLng": "31.9565783,35.9456951"
            },
            {
                "LocationName": "Jupiter, FL",
                "Frequency": 1,
                "LatLng": "26.9342246,-80.0942087"
            },
            {
                "LocationName": "Jurmala, Latvia",
                "Frequency": 1,
                "LatLng": "56.947079,23.6168486"
            },
            {
                "LocationName": "Kalady, India",
                "Frequency": 1,
                "LatLng": "10.1672856,76.439884"
            },
            {
                "LocationName": "Kalyan, Mumbai",
                "Frequency": 1,
                "LatLng": "18.963397,72.820749"
            },
            {
                "LocationName": "kampala",
                "Frequency": 1,
                "LatLng": "0.3475964,32.5825197"
            },
            {
                "LocationName": "Kampala",
                "Frequency": 1,
                "LatLng": "0.3475964,32.5825197"
            },
            {
                "LocationName": "Kanazawa, Japan",
                "Frequency": 1,
                "LatLng": "36.5613254,136.6562051"
            },
            {
                "LocationName": "Kanniyakumari, India",
                "Frequency": 1,
                "LatLng": "8.0883064,77.5384507"
            },
            {
                "LocationName": "Kanpur, India",
                "Frequency": 1,
                "LatLng": "26.449923,80.3318736"
            },
            {
                "LocationName": "Kansas City, KS",
                "Frequency": 1,
                "LatLng": "39.114053,-94.6274636"
            },
            {
                "LocationName": "Karachi, London",
                "Frequency": 1,
                "LatLng": "51.5462828,0.0042971"
            },
            {
                "LocationName": "Karaganda, Kazakhstan",
                "Frequency": 1,
                "LatLng": "49.8046835,73.1093826"
            },
            {
                "LocationName": "Karawaci, Republik Indonesia",
                "Frequency": 1,
                "LatLng": "-6.1805852,106.6202025"
            },
            {
                "LocationName": "Karlsruhe",
                "Frequency": 1,
                "LatLng": "49.0068901,8.4036527"
            },
            {
                "LocationName": "Karlstad, Sweden",
                "Frequency": 1,
                "LatLng": "59.4021806,13.5114977"
            },
            {
                "LocationName": "Kathmandu",
                "Frequency": 1,
                "LatLng": "27.7172453,85.3239605"
            },
            {
                "LocationName": "Kathmandu Nepal",
                "Frequency": 1,
                "LatLng": "27.7172453,85.3239605"
            },
            {
                "LocationName": "Kathmandu,Nepal",
                "Frequency": 1,
                "LatLng": "27.7172453,85.3239605"
            },
            {
                "LocationName": "Kazan', Russia",
                "Frequency": 1,
                "LatLng": "55.8304307,49.0660806"
            },
            {
                "LocationName": "KBED",
                "Frequency": 1
            },
            {
                "LocationName": "KCMO",
                "Frequency": 1,
                "LatLng": "39.0997265,-94.5785667"
            },
            {
                "LocationName": "Kegalla, Sri Lanka",
                "Frequency": 1,
                "LatLng": "7.2513317,80.3463754"
            },
            {
                "LocationName": "Kent",
                "Frequency": 1,
                "LatLng": "51.2787075,0.5217254"
            },
            {
                "LocationName": "Kent, OH",
                "Frequency": 1,
                "LatLng": "41.1536674,-81.3578859"
            },
            {
                "LocationName": "Kent, WA",
                "Frequency": 1,
                "LatLng": "47.3809335,-122.2348431"
            },
            {
                "LocationName": "kerala , India",
                "Frequency": 1,
                "LatLng": "10.8505159,76.2710833"
            },
            {
                "LocationName": "Kerala,India",
                "Frequency": 1,
                "LatLng": "10.8505159,76.2710833"
            },
            {
                "LocationName": "Kerala, pathanamthitta",
                "Frequency": 1,
                "LatLng": "9.2647582,76.7870414"
            },
            {
                "LocationName": "Kettering, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.396322,-0.730249"
            },
            {
                "LocationName": "Key West, FL",
                "Frequency": 1,
                "LatLng": "24.5550593,-81.7799871"
            },
            {
                "LocationName": "Khulna",
                "Frequency": 1,
                "LatLng": "22.845641,89.5403279"
            },
            {
                "LocationName": "Kimberly, WI",
                "Frequency": 1,
                "LatLng": "44.2722093,-88.3389952"
            },
            {
                "LocationName": "Kingston, Canada",
                "Frequency": 1,
                "LatLng": "44.2311717,-76.4859544"
            },
            {
                "LocationName": "Kitchener, Canada",
                "Frequency": 1,
                "LatLng": "43.4129238,-80.4771472"
            },
            {
                "LocationName": "Kobe, Japan",
                "Frequency": 1,
                "LatLng": "34.690083,135.1955112"
            },
            {
                "LocationName": "Kochi,India",
                "Frequency": 1,
                "LatLng": "9.9312328,76.2673041"
            },
            {
                "LocationName": "Kodungallur, India",
                "Frequency": 1,
                "LatLng": "10.2244299,76.1977737"
            },
            {
                "LocationName": "Konoha",
                "Frequency": 1,
                "LatLng": "32.9159444,130.6281987"
            },
            {
                "LocationName": "Kostroma, Russia",
                "Frequency": 1,
                "LatLng": "57.7774816,40.9698928"
            },
            {
                "LocationName": "Kragujevac",
                "Frequency": 1,
                "LatLng": "44.0127932,20.9114225"
            },
            {
                "LocationName": "Krull",
                "Frequency": 1,
                "LatLng": "51.9318131,8.6053877"
            },
            {
                "LocationName": "KSA",
                "Frequency": 1,
                "LatLng": "36.9908526,-86.4519209"
            },
            {
                "LocationName": "Kurukshetra, India",
                "Frequency": 1,
                "LatLng": "29.9695121,76.878282"
            },
            {
                "LocationName": "Kuwait City / KW, Banglore / IN",
                "Frequency": 1,
                "LatLng": "29.375859,47.9774052"
            },
            {
                "LocationName": "Kyiv",
                "Frequency": 1,
                "LatLng": "50.4501,30.5234"
            },
            {
                "LocationName": "KZ",
                "Frequency": 1,
                "LatLng": "48.019573,66.923684"
            },
            {
                "LocationName": "Lafayette, CO",
                "Frequency": 1,
                "LatLng": "39.9935959,-105.0897058"
            },
            {
                "LocationName": "lagos",
                "Frequency": 1,
                "LatLng": "6.5243793,3.3792057"
            },
            {
                "LocationName": "Lahore Pakistan",
                "Frequency": 1,
                "LatLng": "31.5546061,74.3571581"
            },
            {
                "LocationName": "Lakehead, CA",
                "Frequency": 1,
                "LatLng": "40.90515,-122.3791777"
            },
            {
                "LocationName": "Lakeland, Florida",
                "Frequency": 1,
                "LatLng": "28.0394654,-81.9498042"
            },
            {
                "LocationName": "Lake Tahoe Region",
                "Frequency": 1,
                "LatLng": "43.9379258,-85.0431563"
            },
            {
                "LocationName": "Lalitpur, Nepal",
                "Frequency": 1,
                "LatLng": "27.6644011,85.3187914"
            },
            {
                "LocationName": "Lancashire, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.7632254,-2.7044052"
            },
            {
                "LocationName": "Lancaster, United Kingdom",
                "Frequency": 1,
                "LatLng": "54.046575,-2.8007399"
            },
            {
                "LocationName": "Lannion, France",
                "Frequency": 1,
                "LatLng": "48.732084,-3.459144"
            },
            {
                "LocationName": "La Spezia, Italy",
                "Frequency": 1,
                "LatLng": "44.1024504,9.8240826"
            },
            {
                "LocationName": "Lawrence, KS",
                "Frequency": 1,
                "LatLng": "38.9716689,-95.2352501"
            },
            {
                "LocationName": "Lebanon",
                "Frequency": 1,
                "LatLng": "33.854721,35.862285"
            },
            {
                "LocationName": "Leeuwarden, Netherlands",
                "Frequency": 1,
                "LatLng": "53.2012334,5.7999133"
            },
            {
                "LocationName": "Leiden",
                "Frequency": 1,
                "LatLng": "52.1601144,4.4970097"
            },
            {
                "LocationName": "Leiden, Netherlands",
                "Frequency": 1,
                "LatLng": "52.1601144,4.4970097"
            },
            {
                "LocationName": "Lemgo, Germany",
                "Frequency": 1,
                "LatLng": "52.0266732,8.9018625"
            },
            {
                "LocationName": "Lenoir, NC",
                "Frequency": 1,
                "LatLng": "35.9140196,-81.5389849"
            },
            {
                "LocationName": "Leuven, Belgium",
                "Frequency": 1,
                "LatLng": "50.8798438,4.7005176"
            },
            {
                "LocationName": "Leverkusen, Germany",
                "Frequency": 1,
                "LatLng": "51.0459248,7.0192196"
            },
            {
                "LocationName": "Lima, Perú",
                "Frequency": 1,
                "LatLng": "-12.046374,-77.0427934"
            },
            {
                "LocationName": "Lincoln, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.230688,-0.540579"
            },
            {
                "LocationName": "Lisbon, PT",
                "Frequency": 1,
                "LatLng": "38.7222524,-9.1393366"
            },
            {
                "LocationName": "Little Rock, AR",
                "Frequency": 1,
                "LatLng": "34.7464809,-92.2895948"
            },
            {
                "LocationName": "Liverpool, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.4083714,-2.9915726"
            },
            {
                "LocationName": "localhost:80",
                "Frequency": 1,
                "LatLng": "49.8003819,12.4260277"
            },
            {
                "LocationName": "Lockport, NY, USA",
                "Frequency": 1,
                "LatLng": "43.1706128,-78.6903098"
            },
            {
                "LocationName": "Lodz",
                "Frequency": 1,
                "LatLng": "51.7592485,19.4559833"
            },
            {
                "LocationName": "Lodz, Poland",
                "Frequency": 1,
                "LatLng": "51.7592485,19.4559833"
            },
            {
                "LocationName": "Łódź, Poland",
                "Frequency": 1,
                "LatLng": "51.7592485,19.4559833"
            },
            {
                "LocationName": "London Ontario",
                "Frequency": 1,
                "LatLng": "42.9869502,-81.243177"
            },
            {
                "LocationName": "London & Stockholm",
                "Frequency": 1,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "London UK",
                "Frequency": 1,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "London, United Kingdoms",
                "Frequency": 1,
                "LatLng": "51.5073509,-0.1277583"
            },
            {
                "LocationName": "Long Beach, California",
                "Frequency": 1,
                "LatLng": "33.7700504,-118.1937395"
            },
            {
                "LocationName": "Long Island, NY",
                "Frequency": 1,
                "LatLng": "40.789142,-73.134961"
            },
            {
                "LocationName": "Longmont, CO",
                "Frequency": 1,
                "LatLng": "40.1672068,-105.1019275"
            },
            {
                "LocationName": "Looking for me?I am underground!!",
                "Frequency": 1
            },
            {
                "LocationName": "Louisiana",
                "Frequency": 1,
                "LatLng": "30.9842977,-91.9623327"
            },
            {
                "LocationName": "Louisville, CO",
                "Frequency": 1,
                "LatLng": "39.977763,-105.1319296"
            },
            {
                "LocationName": "ludhiana",
                "Frequency": 1,
                "LatLng": "30.900965,75.8572758"
            },
            {
                "LocationName": "Ludhiana",
                "Frequency": 1,
                "LatLng": "30.900965,75.8572758"
            },
            {
                "LocationName": "Lugano, Switzerland",
                "Frequency": 1,
                "LatLng": "46.0036778,8.951052"
            },
            {
                "LocationName": "Luzern, Switzerland",
                "Frequency": 1,
                "LatLng": "47.0501682,8.3093072"
            },
            {
                "LocationName": "Lynn, MA",
                "Frequency": 1,
                "LatLng": "42.466763,-70.9494938"
            },
            {
                "LocationName": "Lyon (France)",
                "Frequency": 1,
                "LatLng": "45.764043,4.835659"
            },
            {
                "LocationName": "Macau",
                "Frequency": 1,
                "LatLng": "22.198745,113.543873"
            },
            {
                "LocationName": "Madison, WI, USA",
                "Frequency": 1,
                "LatLng": "43.0730517,-89.4012302"
            },
            {
                "LocationName": "Madras",
                "Frequency": 1,
                "LatLng": "13.0826802,80.2707184"
            },
            {
                "LocationName": "Madrid Spain",
                "Frequency": 1,
                "LatLng": "40.4167754,-3.7037902"
            },
            {
                "LocationName": "Magdeburg, Germany",
                "Frequency": 1,
                "LatLng": "52.1205333,11.6276237"
            },
            {
                "LocationName": "Maharagama, Sri Lanka",
                "Frequency": 1,
                "LatLng": "6.8522148,79.9248669"
            },
            {
                "LocationName": "Maharastra, India",
                "Frequency": 1,
                "LatLng": "19.7514798,75.7138884"
            },
            {
                "LocationName": "Mahuva, India",
                "Frequency": 1,
                "LatLng": "21.0902193,71.7563169"
            },
            {
                "LocationName": "Maine, USA",
                "Frequency": 1,
                "LatLng": "45.253783,-69.4454689"
            },
            {
                "LocationName": "Málaga",
                "Frequency": 1,
                "LatLng": "36.721261,-4.4212655"
            },
            {
                "LocationName": "malaysia",
                "Frequency": 1,
                "LatLng": "4.210484,101.975766"
            },
            {
                "LocationName": "Malaysia, Kuala Lumpur",
                "Frequency": 1,
                "LatLng": "3.139003,101.686855"
            },
            {
                "LocationName": "Maldives",
                "Frequency": 1,
                "LatLng": "1.977247,73.5361034"
            },
            {
                "LocationName": "Malmo, Sweden",
                "Frequency": 1,
                "LatLng": "55.604981,13.003822"
            },
            {
                "LocationName": "Managua, Nicaragua",
                "Frequency": 1,
                "LatLng": "12.1149926,-86.2361744"
            },
            {
                "LocationName": "Manchester/Belfast",
                "Frequency": 1,
                "LatLng": "54.597285,-5.93012"
            },
            {
                "LocationName": "Manchester, New Hampshire",
                "Frequency": 1,
                "LatLng": "42.9956397,-71.4547891"
            },
            {
                "LocationName": "Manchester, NH",
                "Frequency": 1,
                "LatLng": "42.9956397,-71.4547891"
            },
            {
                "LocationName": "Manchester, NJ",
                "Frequency": 1,
                "LatLng": "39.9711696,-74.3392821"
            },
            {
                "LocationName": "Manchester, UK",
                "Frequency": 1,
                "LatLng": "53.4807593,-2.2426305"
            },
            {
                "LocationName": "Mansfield, CT",
                "Frequency": 1,
                "LatLng": "41.788489,-72.2292913"
            },
            {
                "LocationName": "Mapleton, Utah",
                "Frequency": 1,
                "LatLng": "40.1302338,-111.5785281"
            },
            {
                "LocationName": "Maracay, Venezuela",
                "Frequency": 1,
                "LatLng": "10.2441931,-67.6066164"
            },
            {
                "LocationName": "Marau, Brazil",
                "Frequency": 1,
                "LatLng": "-28.4382141,-52.2098158"
            },
            {
                "LocationName": "Mar del Plata, Argentina",
                "Frequency": 1,
                "LatLng": "-38.0054771,-57.5426106"
            },
            {
                "LocationName": "Marikina, Philippines",
                "Frequency": 1,
                "LatLng": "14.65073,121.1028546"
            },
            {
                "LocationName": "Marion, IN",
                "Frequency": 1,
                "LatLng": "40.5583739,-85.6591442"
            },
            {
                "LocationName": "Marlborough, MA",
                "Frequency": 1,
                "LatLng": "42.3459271,-71.5522874"
            },
            {
                "LocationName": "Maryville, TN",
                "Frequency": 1,
                "LatLng": "35.7564719,-83.9704593"
            },
            {
                "LocationName": "Mashhad - Iran",
                "Frequency": 1,
                "LatLng": "36.2604623,59.6167549"
            },
            {
                "LocationName": "Massachussetts",
                "Frequency": 1,
                "LatLng": "42.4072107,-71.3824374"
            },
            {
                "LocationName": "Mauritius",
                "Frequency": 1,
                "LatLng": "-20.348404,57.552152"
            },
            {
                "LocationName": "Mayaguez, Puerto Rico",
                "Frequency": 1,
                "LatLng": "18.2013463,-67.1451517"
            },
            {
                "LocationName": "Maynooth, Ireland",
                "Frequency": 1,
                "LatLng": "53.3812896,-6.5918499"
            },
            {
                "LocationName": "Mbeya, Tanzania",
                "Frequency": 1,
                "LatLng": "-8.9094014,33.4607744"
            },
            {
                "LocationName": "Mcallen, TX",
                "Frequency": 1,
                "LatLng": "26.2034071,-98.2300124"
            },
            {
                "LocationName": "Mckinney, TX",
                "Frequency": 1,
                "LatLng": "33.1972465,-96.6397822"
            },
            {
                "LocationName": "Mclean, VA",
                "Frequency": 1,
                "LatLng": "38.9338676,-77.1772604"
            },
            {
                "LocationName": "md",
                "Frequency": 1,
                "LatLng": "39.0457549,-76.6412712"
            },
            {
                "LocationName": "Medan, Indonesia",
                "Frequency": 1,
                "LatLng": "3.5951956,98.6722227"
            },
            {
                "LocationName": "Meerut, India",
                "Frequency": 1,
                "LatLng": "28.9844618,77.7064137"
            },
            {
                "LocationName": "Melbourne, Slow Internet Land",
                "Frequency": 1,
                "LatLng": "28.0836269,-80.6081089"
            },
            {
                "LocationName": "Me.Locate()",
                "Frequency": 1
            },
            {
                "LocationName": "Menlo Park, CA",
                "Frequency": 1,
                "LatLng": "37.4529598,-122.1817252"
            },
            {
                "LocationName": "Menlo Park, California",
                "Frequency": 1,
                "LatLng": "37.4529598,-122.1817252"
            },
            {
                "LocationName": "México",
                "Frequency": 1,
                "LatLng": "23.634501,-102.552784"
            },
            {
                "LocationName": "MI",
                "Frequency": 1,
                "LatLng": "44.3148443,-85.6023643"
            },
            {
                "LocationName": "Miami Beach, FL",
                "Frequency": 1,
                "LatLng": "25.790654,-80.1300455"
            },
            {
                "LocationName": "Miami FL",
                "Frequency": 1,
                "LatLng": "25.7616798,-80.1917902"
            },
            {
                "LocationName": "Miami, Florida",
                "Frequency": 1,
                "LatLng": "25.7616798,-80.1917902"
            },
            {
                "LocationName": "Midlothian, VA",
                "Frequency": 1,
                "LatLng": "37.5059814,-77.6491578"
            },
            {
                "LocationName": "Miensk, Belarus",
                "Frequency": 1,
                "LatLng": "53.9045398,27.5615244"
            },
            {
                "LocationName": "Mijas Costa, Spain",
                "Frequency": 1,
                "LatLng": "36.5967755,-4.6323067"
            },
            {
                "LocationName": "Millersville, PA",
                "Frequency": 1,
                "LatLng": "39.9978764,-76.3541274"
            },
            {
                "LocationName": "Milton Keynes, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.0406224,-0.7594171"
            },
            {
                "LocationName": "Minneaoplis, MN",
                "Frequency": 1,
                "LatLng": "44.977753,-93.2650108"
            },
            {
                "LocationName": "Minneapolis",
                "Frequency": 1,
                "LatLng": "44.977753,-93.2650108"
            },
            {
                "LocationName": "Minneapolis, MN, USA",
                "Frequency": 1,
                "LatLng": "44.977753,-93.2650108"
            },
            {
                "LocationName": "Miramar, FL",
                "Frequency": 1,
                "LatLng": "25.9860762,-80.3035602"
            },
            {
                "LocationName": "MNL, Philippines",
                "Frequency": 1,
                "LatLng": "14.5122739,121.016508"
            },
            {
                "LocationName": "Moab, UT",
                "Frequency": 1,
                "LatLng": "38.5733155,-109.5498395"
            },
            {
                "LocationName": "Modena, Italy",
                "Frequency": 1,
                "LatLng": "44.647128,10.9252269"
            },
            {
                "LocationName": "Moldova",
                "Frequency": 1,
                "LatLng": "47.411631,28.369885"
            },
            {
                "LocationName": "Mombasa, Kenya",
                "Frequency": 1,
                "LatLng": "-4.0434771,39.6682065"
            },
            {
                "LocationName": "Moncton, Canada",
                "Frequency": 1,
                "LatLng": "46.0878165,-64.7782313"
            },
            {
                "LocationName": "monreal",
                "Frequency": 1,
                "LatLng": "50.3003791,7.1640076"
            },
            {
                "LocationName": "Monterrey, NL",
                "Frequency": 1,
                "LatLng": "25.6866142,-100.3161126"
            },
            {
                "LocationName": "Montréal, Canada",
                "Frequency": 1,
                "LatLng": "45.5016889,-73.567256"
            },
            {
                "LocationName": "Montreal, QC",
                "Frequency": 1,
                "LatLng": "45.5016889,-73.567256"
            },
            {
                "LocationName": "Montreal, Quebec",
                "Frequency": 1,
                "LatLng": "45.5016889,-73.567256"
            },
            {
                "LocationName": "Montverde, Florida",
                "Frequency": 1,
                "LatLng": "28.6002769,-81.673964"
            },
            {
                "LocationName": "Morinda, India",
                "Frequency": 1,
                "LatLng": "30.7892586,76.4996831"
            },
            {
                "LocationName": "Moscow / St. Petersburg, Russia",
                "Frequency": 1,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "Mountain View",
                "Frequency": 1,
                "LatLng": "37.3860517,-122.0838511"
            },
            {
                "LocationName": "mountainview, ca",
                "Frequency": 1,
                "LatLng": "37.3860517,-122.0838511"
            },
            {
                "LocationName": "Mountain View, California",
                "Frequency": 1,
                "LatLng": "37.3860517,-122.0838511"
            },
            {
                "LocationName": "Mozambique - Maputo",
                "Frequency": 1,
                "LatLng": "-25.891968,32.6051351"
            },
            {
                "LocationName": "Multan, Pakistan",
                "Frequency": 1,
                "LatLng": "30.1983807,71.4687028"
            },
            {
                "LocationName": "mumbai",
                "Frequency": 1,
                "LatLng": "19.0759837,72.8776559"
            },
            {
                "LocationName": "Mungia, Spain",
                "Frequency": 1,
                "LatLng": "43.3544186,-2.8467037"
            },
            {
                "LocationName": "Munich Germany",
                "Frequency": 1,
                "LatLng": "48.1351253,11.5819806"
            },
            {
                "LocationName": "Mykolayiv, Ukraine",
                "Frequency": 1,
                "LatLng": "46.975033,31.994583"
            },
            {
                "LocationName": "Nablus, Palestinian Territories",
                "Frequency": 1,
                "LatLng": "32.2250364,35.2609682"
            },
            {
                "LocationName": "Nancy, France",
                "Frequency": 1,
                "LatLng": "48.692054,6.184417"
            },
            {
                "LocationName": "Naples",
                "Frequency": 1,
                "LatLng": "26.1420358,-81.7948103"
            },
            {
                "LocationName": "Nashua, NH",
                "Frequency": 1,
                "LatLng": "42.7653662,-71.467566"
            },
            {
                "LocationName": "Natal",
                "Frequency": 1,
                "LatLng": "-5.7792569,-35.200916"
            },
            {
                "LocationName": "Natal - RN - Brazil",
                "Frequency": 1,
                "LatLng": "-5.7792569,-35.200916"
            },
            {
                "LocationName": "NC",
                "Frequency": 1,
                "LatLng": "35.7595731,-79.0192997"
            },
            {
                "LocationName": "Neraka",
                "Frequency": 1,
                "LatLng": "62.6715504,92.8797487"
            },
            {
                "LocationName": "Netherlands / Spain",
                "Frequency": 1,
                "LatLng": "45.0325483,-93.2580213"
            },
            {
                "LocationName": "Neu-Isenburg, Germany",
                "Frequency": 1,
                "LatLng": "50.0522076,8.6952638"
            },
            {
                "LocationName": "Neuquen, Argentina",
                "Frequency": 1,
                "LatLng": "-38.9516784,-68.0591888"
            },
            {
                "LocationName": "Nevada County, California",
                "Frequency": 1,
                "LatLng": "39.1346666,-121.1710389"
            },
            {
                "LocationName": "Nevada, United States",
                "Frequency": 1,
                "LatLng": "38.8026097,-116.419389"
            },
            {
                "LocationName": "New Bremen, OH",
                "Frequency": 1,
                "LatLng": "40.4369919,-84.3796729"
            },
            {
                "LocationName": "New Brunswick, NJ",
                "Frequency": 1,
                "LatLng": "40.4862157,-74.4518188"
            },
            {
                "LocationName": "Newcastle, UK",
                "Frequency": 1,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "Newcastle upon Tyne",
                "Frequency": 1,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "Newcastle Upon Tyne, UK",
                "Frequency": 1,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "Newcastle Upon Tyne, United Kingdom",
                "Frequency": 1,
                "LatLng": "54.978252,-1.61778"
            },
            {
                "LocationName": "New delhi",
                "Frequency": 1,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "new delhi (india)",
                "Frequency": 1,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "New Delhi , India",
                "Frequency": 1,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "New Delhi,India",
                "Frequency": 1,
                "LatLng": "28.6139391,77.2090212"
            },
            {
                "LocationName": "New Orleans",
                "Frequency": 1,
                "LatLng": "29.9510658,-90.0715323"
            },
            {
                "LocationName": "Newry Northern Ireland",
                "Frequency": 1,
                "LatLng": "54.1751024,-6.3402299"
            },
            {
                "LocationName": "New South Wales, Australia",
                "Frequency": 1,
                "LatLng": "-33.864174,151.2052868"
            },
            {
                "LocationName": "Newton-Le-Willows, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.452889,-2.63508"
            },
            {
                "LocationName": "New Ulm, MN",
                "Frequency": 1,
                "LatLng": "44.3144394,-94.4593018"
            },
            {
                "LocationName": "New York City, United States",
                "Frequency": 1,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "New York, New York",
                "Frequency": 1,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "New-York, NY",
                "Frequency": 1,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "Nijkerk",
                "Frequency": 1,
                "LatLng": "52.2224835,5.4835625"
            },
            {
                "LocationName": "Ninguan Parte, MX",
                "Frequency": 1
            },
            {
                "LocationName": "Nish, Serbia",
                "Frequency": 1,
                "LatLng": "43.3209022,21.8957589"
            },
            {
                "LocationName": "Nis, Serbia",
                "Frequency": 1,
                "LatLng": "43.3209022,21.8957589"
            },
            {
                "LocationName": "Nizhegorodskaya Oblast, Russia",
                "Frequency": 1,
                "LatLng": "55.7995159,44.0296769"
            },
            {
                "LocationName": "North America",
                "Frequency": 1,
                "LatLng": "54.5259614,-105.2551187"
            },
            {
                "LocationName": "North Avoca, Australia",
                "Frequency": 1,
                "LatLng": "-33.4576702,151.4391457"
            },
            {
                "LocationName": "North East, MD",
                "Frequency": 1,
                "LatLng": "39.6001132,-75.9413327"
            },
            {
                "LocationName": "Northern Hemisphere",
                "Frequency": 1,
                "LatLng": "-31.6860162,115.7801607"
            },
            {
                "LocationName": "Northern Ireland, United Kingdom",
                "Frequency": 1,
                "LatLng": "54.7877149,-6.4923145"
            },
            {
                "LocationName": "North Hollywood",
                "Frequency": 1,
                "LatLng": "34.187044,-118.3812562"
            },
            {
                "LocationName": "North Wales, PA",
                "Frequency": 1,
                "LatLng": "40.2109404,-75.2782317"
            },
            {
                "LocationName": "North Yorkshire, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.9915028,-1.5412015"
            },
            {
                "LocationName": "Norwalk, CT",
                "Frequency": 1,
                "LatLng": "41.117744,-73.4081575"
            },
            {
                "LocationName": "Norwich",
                "Frequency": 1,
                "LatLng": "52.6308859,1.297355"
            },
            {
                "LocationName": "Nottingham, England",
                "Frequency": 1,
                "LatLng": "52.9547832,-1.1581086"
            },
            {
                "LocationName": "Novato, CA",
                "Frequency": 1,
                "LatLng": "38.1074198,-122.5697032"
            },
            {
                "LocationName": "Nueva San Salvador, El Salvador",
                "Frequency": 1,
                "LatLng": "13.6757837,-89.2894733"
            },
            {
                "LocationName": "Nürnberg, Germany",
                "Frequency": 1,
                "LatLng": "49.45203,11.07675"
            },
            {
                "LocationName": "NY and NJ, United States",
                "Frequency": 1,
                "LatLng": "40.7127837,-74.0059413"
            },
            {
                "LocationName": "NYC Area",
                "Frequency": 1,
                "LatLng": "40.6045525,-74.1199014"
            },
            {
                "LocationName": "Oakland, MD",
                "Frequency": 1,
                "LatLng": "39.4078747,-79.4067116"
            },
            {
                "LocationName": "Ogden, UT",
                "Frequency": 1,
                "LatLng": "41.223,-111.9738304"
            },
            {
                "LocationName": "Okinawa Prefecture",
                "Frequency": 1,
                "LatLng": "26.2124013,127.6809317"
            },
            {
                "LocationName": "Oliver Springs, TN",
                "Frequency": 1,
                "LatLng": "36.0445222,-84.3443718"
            },
            {
                "LocationName": "Omicron Persei 8",
                "Frequency": 1
            },
            {
                "LocationName": "Onitsha, Nigeria",
                "Frequency": 1,
                "LatLng": "6.1413122,6.8029489"
            },
            {
                "LocationName": "online",
                "Frequency": 1,
                "LatLng": "32.9066839,-96.6049468"
            },
            {
                "LocationName": "Oradea",
                "Frequency": 1,
                "LatLng": "47.0465005,21.9189438"
            },
            {
                "LocationName": "Orange County, California",
                "Frequency": 1,
                "LatLng": "33.7174708,-117.8311428"
            },
            {
                "LocationName": "Orebro, Sweden",
                "Frequency": 1,
                "LatLng": "59.2752626,15.2134105"
            },
            {
                "LocationName": "Orem Utah",
                "Frequency": 1,
                "LatLng": "40.2968979,-111.6946475"
            },
            {
                "LocationName": "Orlean, VA",
                "Frequency": 1,
                "LatLng": "38.7526166,-77.9638846"
            },
            {
                "LocationName": "Osaka-shi, Japan",
                "Frequency": 1,
                "LatLng": "34.6937378,135.5021651"
            },
            {
                "LocationName": "Osijek, Croatia",
                "Frequency": 1,
                "LatLng": "45.5549624,18.6955144"
            },
            {
                "LocationName": "Oslo",
                "Frequency": 1,
                "LatLng": "59.9138688,10.7522454"
            },
            {
                "LocationName": "Ottawa, Ontario, Canada",
                "Frequency": 1,
                "LatLng": "45.4215296,-75.6971931"
            },
            {
                "LocationName": "Oulu, Finland",
                "Frequency": 1,
                "LatLng": "65.0126148,25.4714526"
            },
            {
                "LocationName": "overthere",
                "Frequency": 1,
                "LatLng": "36.2017054,-115.1742237"
            },
            {
                "LocationName": "Oviedo",
                "Frequency": 1,
                "LatLng": "43.3619145,-5.8493887"
            },
            {
                "LocationName": "Oviedo, Asturias - Spain",
                "Frequency": 1,
                "LatLng": "43.3619145,-5.8493887"
            },
            {
                "LocationName": "Oxford, UK",
                "Frequency": 1,
                "LatLng": "51.7520209,-1.2577263"
            },
            {
                "LocationName": "Ozone Park, NY",
                "Frequency": 1,
                "LatLng": "40.6794072,-73.8507279"
            },
            {
                "LocationName": "Pacific Northwest",
                "Frequency": 1,
                "LatLng": "46.5180824,-123.8264512"
            },
            {
                "LocationName": "Paderborn",
                "Frequency": 1,
                "LatLng": "51.7189205,8.7575093"
            },
            {
                "LocationName": "Pakistan / Saudi Arabia",
                "Frequency": 1,
                "LatLng": "33.7332309,73.1227513"
            },
            {
                "LocationName": "Palma, Spain",
                "Frequency": 1,
                "LatLng": "39.5696005,2.6501603"
            },
            {
                "LocationName": "Palm Beach, FL",
                "Frequency": 1,
                "LatLng": "26.7056206,-80.0364297"
            },
            {
                "LocationName": "Palm City, FL",
                "Frequency": 1,
                "LatLng": "27.1678268,-80.2661591"
            },
            {
                "LocationName": "Panamá",
                "Frequency": 1,
                "LatLng": "8.537981,-80.782127"
            },
            {
                "LocationName": "Panchkula",
                "Frequency": 1,
                "LatLng": "30.6942091,76.860565"
            },
            {
                "LocationName": "Paraguay",
                "Frequency": 1,
                "LatLng": "-23.442503,-58.443832"
            },
            {
                "LocationName": "Parana, Argentina",
                "Frequency": 1,
                "LatLng": "-31.7413197,-60.5115471"
            },
            {
                "LocationName": "Paris France",
                "Frequency": 1,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "Paris - France",
                "Frequency": 1,
                "LatLng": "48.856614,2.3522219"
            },
            {
                "LocationName": "Park City, UT",
                "Frequency": 1,
                "LatLng": "40.6460622,-111.4979729"
            },
            {
                "LocationName": "Parma, Italy",
                "Frequency": 1,
                "LatLng": "44.801485,10.3279036"
            },
            {
                "LocationName": "Parma, OH",
                "Frequency": 1,
                "LatLng": "41.4047742,-81.7229086"
            },
            {
                "LocationName": "Paron, France",
                "Frequency": 1,
                "LatLng": "48.178053,3.250624"
            },
            {
                "LocationName": "Parts unknown",
                "Frequency": 1
            },
            {
                "LocationName": "Pasadena, MD",
                "Frequency": 1,
                "LatLng": "39.1073317,-76.5710753"
            },
            {
                "LocationName": "Patras, Greece",
                "Frequency": 1,
                "LatLng": "38.2466395,21.734574"
            },
            {
                "LocationName": "Pecel, Hungary",
                "Frequency": 1,
                "LatLng": "47.4908971,19.337941"
            },
            {
                "LocationName": "Pelotas, Brazil",
                "Frequency": 1,
                "LatLng": "-31.7653989,-52.3375886"
            },
            {
                "LocationName": "Pennslvania",
                "Frequency": 1,
                "LatLng": "41.2033216,-77.1945247"
            },
            {
                "LocationName": "Pennsylvania, U.S.",
                "Frequency": 1,
                "LatLng": "41.2033216,-77.1945247"
            },
            {
                "LocationName": "Peoria, illinois",
                "Frequency": 1,
                "LatLng": "40.6936488,-89.5889864"
            },
            {
                "LocationName": "Perth",
                "Frequency": 1,
                "LatLng": "-31.9535132,115.8570471"
            },
            {
                "LocationName": "Perthshire, Scotland",
                "Frequency": 1,
                "LatLng": "56.3530265,-3.2314581"
            },
            {
                "LocationName": "Perú",
                "Frequency": 1,
                "LatLng": "-9.189967,-75.015152"
            },
            {
                "LocationName": "Perugia, Italy",
                "Frequency": 1,
                "LatLng": "43.1107168,12.3908279"
            },
            {
                "LocationName": "Pessac, France",
                "Frequency": 1,
                "LatLng": "44.80583,-0.630386"
            },
            {
                "LocationName": "Petaluma, CA",
                "Frequency": 1,
                "LatLng": "38.232417,-122.6366524"
            },
            {
                "LocationName": "Peterborough",
                "Frequency": 1,
                "LatLng": "52.5694985,-0.2405299"
            },
            {
                "LocationName": "Peterborough, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.5694985,-0.2405299"
            },
            {
                "LocationName": "Peterburg, Russia",
                "Frequency": 1,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "Petrovac, Montenegro",
                "Frequency": 1,
                "LatLng": "42.2053317,18.9457661"
            },
            {
                "LocationName": "Philadelphia",
                "Frequency": 1,
                "LatLng": "39.9525839,-75.1652215"
            },
            {
                "LocationName": "Philadelphia Pa",
                "Frequency": 1,
                "LatLng": "39.9525839,-75.1652215"
            },
            {
                "LocationName": "Phoenix",
                "Frequency": 1,
                "LatLng": "33.4483771,-112.0740373"
            },
            {
                "LocationName": "Phoenix , Arizona",
                "Frequency": 1,
                "LatLng": "33.4483771,-112.0740373"
            },
            {
                "LocationName": "Phoenixville, PA",
                "Frequency": 1,
                "LatLng": "40.1303822,-75.5149128"
            },
            {
                "LocationName": "Piaseczno, Poland",
                "Frequency": 1,
                "LatLng": "52.0811536,21.0238602"
            },
            {
                "LocationName": "Piscataway, USA",
                "Frequency": 1,
                "LatLng": "40.554887,-74.4642861"
            },
            {
                "LocationName": "Pittsford, NY",
                "Frequency": 1,
                "LatLng": "43.0906186,-77.5149969"
            },
            {
                "LocationName": ".pl",
                "Frequency": 1,
                "LatLng": "51.919438,19.145136"
            },
            {
                "LocationName": "PL",
                "Frequency": 1,
                "LatLng": "51.919438,19.145136"
            },
            {
                "LocationName": "Planet Vegeta",
                "Frequency": 1
            },
            {
                "LocationName": "Plano, Texas",
                "Frequency": 1,
                "LatLng": "33.0198431,-96.6988856"
            },
            {
                "LocationName": "Pleasant Grove, UT",
                "Frequency": 1,
                "LatLng": "40.3641184,-111.73854"
            },
            {
                "LocationName": "Plymouth, United Kingdome",
                "Frequency": 1,
                "LatLng": "50.3754565,-4.1426565"
            },
            {
                "LocationName": "Pokhara",
                "Frequency": 1,
                "LatLng": "28.237987,83.9955879"
            },
            {
                "LocationName": "Poland, IN",
                "Frequency": 1,
                "LatLng": "39.4440938,-86.9507203"
            },
            {
                "LocationName": "Polans",
                "Frequency": 1,
                "LatLng": "51.919438,19.145136"
            },
            {
                "LocationName": "Pondicherry, India",
                "Frequency": 1,
                "LatLng": "11.9138598,79.8144722"
            },
            {
                "LocationName": "Ponta Delgada, Portugal",
                "Frequency": 1,
                "LatLng": "37.7428301,-25.6805868"
            },
            {
                "LocationName": "Port 3000",
                "Frequency": 1,
                "LatLng": "-37.8152065,144.963937"
            },
            {
                "LocationName": "Portland, or",
                "Frequency": 1,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Portland,OR",
                "Frequency": 1,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Portland, Oregon, United States",
                "Frequency": 1,
                "LatLng": "45.5230622,-122.6764816"
            },
            {
                "LocationName": "Portsaid, Egypt",
                "Frequency": 1,
                "LatLng": "31.2652893,32.3018661"
            },
            {
                "LocationName": "Portsmouth",
                "Frequency": 1,
                "LatLng": "50.8197675,-1.0879769"
            },
            {
                "LocationName": "Portsmouth, United Kingdom",
                "Frequency": 1,
                "LatLng": "50.8197675,-1.0879769"
            },
            {
                "LocationName": "Post Falls, ID",
                "Frequency": 1,
                "LatLng": "47.7179578,-116.9515856"
            },
            {
                "LocationName": "Poznań, Poland",
                "Frequency": 1,
                "LatLng": "52.406374,16.9251681"
            },
            {
                "LocationName": "Preston, Lancashire, UK",
                "Frequency": 1,
                "LatLng": "53.763201,-2.70309"
            },
            {
                "LocationName": "Puchong New Village",
                "Frequency": 1,
                "LatLng": "2.9830701,101.6164589"
            },
            {
                "LocationName": "Puducherry",
                "Frequency": 1,
                "LatLng": "11.9138598,79.8144722"
            },
            {
                "LocationName": "Pune , India",
                "Frequency": 1,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Pune, India.",
                "Frequency": 1,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Pune,India.",
                "Frequency": 1,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "Pune, Maharshtra, India",
                "Frequency": 1,
                "LatLng": "18.5204303,73.8567437"
            },
            {
                "LocationName": "QATAR",
                "Frequency": 1,
                "LatLng": "25.354826,51.183884"
            },
            {
                "LocationName": "Qom, Iran",
                "Frequency": 1,
                "LatLng": "34.6399443,50.8759419"
            },
            {
                "LocationName": "R^11",
                "Frequency": 1,
                "LatLng": "30.4495247,30.3174958"
            },
            {
                "LocationName": "rabat",
                "Frequency": 1,
                "LatLng": "33.9715904,-6.8498129"
            },
            {
                "LocationName": "Rabat, Morocco",
                "Frequency": 1,
                "LatLng": "33.9715904,-6.8498129"
            },
            {
                "LocationName": "Rajasthan, India",
                "Frequency": 1,
                "LatLng": "27.0238036,74.2179326"
            },
            {
                "LocationName": "Ratisbon, Germany",
                "Frequency": 1,
                "LatLng": "49.0134297,12.1016236"
            },
            {
                "LocationName": "Ravenna, Italy",
                "Frequency": 1,
                "LatLng": "44.4183598,12.2035294"
            },
            {
                "LocationName": "Råwalpindi, Pakistan",
                "Frequency": 1,
                "LatLng": "33.598394,73.0441352"
            },
            {
                "LocationName": "Reading",
                "Frequency": 1,
                "LatLng": "40.3356483,-75.9268747"
            },
            {
                "LocationName": "Redondo Beach, CA",
                "Frequency": 1,
                "LatLng": "33.8491816,-118.3884078"
            },
            {
                "LocationName": "Reggio nell'Emilia, Italy",
                "Frequency": 1,
                "LatLng": "44.6989932,10.6296859"
            },
            {
                "LocationName": "Renton, WA",
                "Frequency": 1,
                "LatLng": "47.4828776,-122.2170661"
            },
            {
                "LocationName": "Richmond, CA",
                "Frequency": 1,
                "LatLng": "37.9357576,-122.3477486"
            },
            {
                "LocationName": "Richmond VA",
                "Frequency": 1,
                "LatLng": "37.5407246,-77.4360481"
            },
            {
                "LocationName": "Rijswijk, Netherlands",
                "Frequency": 1,
                "LatLng": "52.0376977,4.3219738"
            },
            {
                "LocationName": "Rio de Janeiro",
                "Frequency": 1,
                "LatLng": "-22.9068467,-43.1728965"
            },
            {
                "LocationName": "Rio de Janeiro - BR",
                "Frequency": 1,
                "LatLng": "-22.9068467,-43.1728965"
            },
            {
                "LocationName": "Rio De Janeiro, Brazil",
                "Frequency": 1,
                "LatLng": "-22.9068467,-43.1728965"
            },
            {
                "LocationName": "Rio Grande do Sul",
                "Frequency": 1,
                "LatLng": "-30.0346316,-51.2176986"
            },
            {
                "LocationName": "Rishikesh",
                "Frequency": 1,
                "LatLng": "30.0869281,78.2676116"
            },
            {
                "LocationName": "Rockaway, NJ",
                "Frequency": 1,
                "LatLng": "40.9012101,-74.5143232"
            },
            {
                "LocationName": "Rockville, MD",
                "Frequency": 1,
                "LatLng": "39.0839973,-77.1527578"
            },
            {
                "LocationName": "Rocky Mountains",
                "Frequency": 1,
                "LatLng": "43.74,-110.8"
            },
            {
                "LocationName": "Rome and Seattle",
                "Frequency": 1,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "Roorkee",
                "Frequency": 1,
                "LatLng": "29.8542626,77.8880002"
            },
            {
                "LocationName": "/root",
                "Frequency": 1,
                "LatLng": "40.8672374,-84.9193082"
            },
            {
                "LocationName": "Roseville, CA",
                "Frequency": 1,
                "LatLng": "38.7521235,-121.2880059"
            },
            {
                "LocationName": "Rostock, Germany",
                "Frequency": 1,
                "LatLng": "54.0924406,12.0991466"
            },
            {
                "LocationName": "Rostov-on-Don, Russia",
                "Frequency": 1,
                "LatLng": "47.2357137,39.701505"
            },
            {
                "LocationName": "Roswell, GA",
                "Frequency": 1,
                "LatLng": "34.0232431,-84.3615555"
            },
            {
                "LocationName": "Rothesay, New Brunswick",
                "Frequency": 1,
                "LatLng": "45.3888261,-65.9942973"
            },
            {
                "LocationName": "Rotterdam, The Netherlands",
                "Frequency": 1,
                "LatLng": "51.9244201,4.4777325"
            },
            {
                "LocationName": "Rouen, France",
                "Frequency": 1,
                "LatLng": "49.443232,1.099971"
            },
            {
                "LocationName": "Round Rock, Texas",
                "Frequency": 1,
                "LatLng": "30.5082551,-97.678896"
            },
            {
                "LocationName": "Round Rock, TX",
                "Frequency": 1,
                "LatLng": "30.5082551,-97.678896"
            },
            {
                "LocationName": "Rumia, Poland",
                "Frequency": 1,
                "LatLng": "54.5707832,18.3878224"
            },
            {
                "LocationName": "Rural, IN",
                "Frequency": 1,
                "LatLng": "40.1067123,-84.9660757"
            },
            {
                "LocationName": "Russia :(",
                "Frequency": 1,
                "LatLng": "61.52401,105.318756"
            },
            {
                "LocationName": "Russia, Chelyabinsk",
                "Frequency": 1,
                "LatLng": "55.1644419,61.4368431"
            },
            {
                "LocationName": "Russia, Izhevsk",
                "Frequency": 1,
                "LatLng": "56.8618601,53.2324285"
            },
            {
                "LocationName": "Russia, Rostov-on-Don",
                "Frequency": 1,
                "LatLng": "47.2357137,39.701505"
            },
            {
                "LocationName": "Russia, Stavropol",
                "Frequency": 1,
                "LatLng": "45.0454764,41.9683431"
            },
            {
                "LocationName": "Russia, St.Petersburg",
                "Frequency": 1,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "Russia, Tomsk",
                "Frequency": 1,
                "LatLng": "56.5010397,84.9924506"
            },
            {
                "LocationName": "Russia, Ulyanovsk",
                "Frequency": 1,
                "LatLng": "54.3181598,48.3837914"
            },
            {
                "LocationName": "Russia, Urals",
                "Frequency": 1,
                "LatLng": "60.2784931,59.1619065"
            },
            {
                "LocationName": "Rustavi, Georgia",
                "Frequency": 1,
                "LatLng": "41.5225612,45.0430369"
            },
            {
                "LocationName": "Ryazan, Russia",
                "Frequency": 1,
                "LatLng": "54.6095418,39.7125857"
            },
            {
                "LocationName": "Rye, East Sussex, United Kingdom",
                "Frequency": 1,
                "LatLng": "50.949708,0.73726"
            },
            {
                "LocationName": "Rzeszów, Poland",
                "Frequency": 1,
                "LatLng": "50.0411867,21.9991196"
            },
            {
                "LocationName": "SA",
                "Frequency": 1,
                "LatLng": "-30.0002315,136.2091547"
            },
            {
                "LocationName": "Saginaw, MI",
                "Frequency": 1,
                "LatLng": "43.4194699,-83.9508068"
            },
            {
                "LocationName": "Saint Charles, IL",
                "Frequency": 1,
                "LatLng": "41.9141945,-88.3086867"
            },
            {
                "LocationName": "Saint Louis, MO",
                "Frequency": 1,
                "LatLng": "38.6270025,-90.1994042"
            },
            {
                "LocationName": "Saint Petersburg",
                "Frequency": 1,
                "LatLng": "27.7518284,-82.6267345"
            },
            {
                "LocationName": "Saint-Petersburg",
                "Frequency": 1,
                "LatLng": "27.7518284,-82.6267345"
            },
            {
                "LocationName": "Saint-Petersburg, Russia",
                "Frequency": 1,
                "LatLng": "59.9342802,30.3350986"
            },
            {
                "LocationName": "Salt Lake City",
                "Frequency": 1,
                "LatLng": "40.7607793,-111.8910474"
            },
            {
                "LocationName": "Salyersville, KY",
                "Frequency": 1,
                "LatLng": "37.7525922,-83.0687816"
            },
            {
                "LocationName": "San Diego, California",
                "Frequency": 1,
                "LatLng": "32.715738,-117.1610838"
            },
            {
                "LocationName": "San Francicso, CA",
                "Frequency": 1,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "san francisco",
                "Frequency": 1,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Francisco Bay",
                "Frequency": 1,
                "LatLng": "37.6909682,-122.3107517"
            },
            {
                "LocationName": "San Francisco Bay Area, USA",
                "Frequency": 1,
                "LatLng": "37.9994669,-122.174605"
            },
            {
                "LocationName": "San Francisco, Earth",
                "Frequency": 1,
                "LatLng": "14.3302583,120.9298605"
            },
            {
                "LocationName": "San Francisco, USA",
                "Frequency": 1,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Fransisco",
                "Frequency": 1,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Fransisco, CA",
                "Frequency": 1,
                "LatLng": "37.7749295,-122.4194155"
            },
            {
                "LocationName": "San Jose California",
                "Frequency": 1,
                "LatLng": "37.3382082,-121.8863286"
            },
            {
                "LocationName": "San José de Guanipa, Venezuela",
                "Frequency": 1,
                "LatLng": "8.8780277,-64.1596539"
            },
            {
                "LocationName": "San Juan, Puerto Rico",
                "Frequency": 1,
                "LatLng": "18.4663338,-66.1057217"
            },
            {
                "LocationName": "San Luis, Argentina",
                "Frequency": 1,
                "LatLng": "-33.3017267,-66.3377522"
            },
            {
                "LocationName": "San Marcos, CA",
                "Frequency": 1,
                "LatLng": "33.1433723,-117.1661449"
            },
            {
                "LocationName": "San Marino",
                "Frequency": 1,
                "LatLng": "43.94236,12.457777"
            },
            {
                "LocationName": "San Pedro Sula, Honduras",
                "Frequency": 1,
                "LatLng": "15.5149204,-87.9922684"
            },
            {
                "LocationName": "San Rafael, CA",
                "Frequency": 1,
                "LatLng": "37.9735346,-122.5310874"
            },
            {
                "LocationName": "San Ramon, CA",
                "Frequency": 1,
                "LatLng": "37.7799273,-121.9780153"
            },
            {
                "LocationName": "San Rocco al Porto, Italy",
                "Frequency": 1,
                "LatLng": "45.0832757,9.6960732"
            },
            {
                "LocationName": "San Salvador, El Salvador",
                "Frequency": 1,
                "LatLng": "13.6929403,-89.2181911"
            },
            {
                "LocationName": "Santa Cruz, CA",
                "Frequency": 1,
                "LatLng": "36.9741171,-122.0307963"
            },
            {
                "LocationName": "Santa Cruz, California, USA",
                "Frequency": 1,
                "LatLng": "36.9741171,-122.0307963"
            },
            {
                "LocationName": "Santa Fe, NM",
                "Frequency": 1,
                "LatLng": "35.6869752,-105.937799"
            },
            {
                "LocationName": "Santa Monica",
                "Frequency": 1,
                "LatLng": "34.0194543,-118.4911912"
            },
            {
                "LocationName": "Santiago de Compostela",
                "Frequency": 1,
                "LatLng": "42.8782132,-8.5448445"
            },
            {
                "LocationName": "Santiago de Compostela, Spain",
                "Frequency": 1,
                "LatLng": "42.8782132,-8.5448445"
            },
            {
                "LocationName": "Santurtzi, Basque Country",
                "Frequency": 1,
                "LatLng": "43.328128,-3.0336586"
            },
            {
                "LocationName": "Sao Carlos, Brazil",
                "Frequency": 1,
                "LatLng": "-22.0087082,-47.8909263"
            },
            {
                "LocationName": "Sao Jose Do Calcado, Brazil",
                "Frequency": 1,
                "LatLng": "-21.0279344,-41.6640232"
            },
            {
                "LocationName": "São José dos Campos, São Paulo, Brazil",
                "Frequency": 1,
                "LatLng": "-23.223701,-45.9009074"
            },
            {
                "LocationName": "São Paulo - Brazil",
                "Frequency": 1,
                "LatLng": "-23.5505199,-46.6333094"
            },
            {
                "LocationName": "Sapporo-shi, Japan",
                "Frequency": 1,
                "LatLng": "43.0620958,141.3543763"
            },
            {
                "LocationName": "Saratoga Springs, NY",
                "Frequency": 1,
                "LatLng": "43.0831301,-73.7845651"
            },
            {
                "LocationName": "Saratov, Russia",
                "Frequency": 1,
                "LatLng": "51.5563789,45.9798167"
            },
            {
                "LocationName": "Saudi Arabia",
                "Frequency": 1,
                "LatLng": "23.885942,45.079162"
            },
            {
                "LocationName": "Saxony",
                "Frequency": 1,
                "LatLng": "51.1045407,13.2017384"
            },
            {
                "LocationName": "Scandinavia",
                "Frequency": 1,
                "LatLng": "62.2786475,12.3401708"
            },
            {
                "LocationName": "Schenectady, NY",
                "Frequency": 1,
                "LatLng": "42.8142432,-73.9395687"
            },
            {
                "LocationName": "Schwerin, Germany",
                "Frequency": 1,
                "LatLng": "53.6355022,11.4012499"
            },
            {
                "LocationName": "Seattle W",
                "Frequency": 1,
                "LatLng": "47.6062095,-122.3320708"
            },
            {
                "LocationName": "Segovia, Spain",
                "Frequency": 1,
                "LatLng": "40.9429032,-4.1088069"
            },
            {
                "LocationName": "Seine-et-Marne",
                "Frequency": 1,
                "LatLng": "48.841082,2.999366"
            },
            {
                "LocationName": "Senec, Slovakia",
                "Frequency": 1,
                "LatLng": "48.2166758,17.3981035"
            },
            {
                "LocationName": "Serbia ( Am Syrian )",
                "Frequency": 1
            },
            {
                "LocationName": "Sesame Street",
                "Frequency": 1,
                "LatLng": "30.0754404,-81.902009"
            },
            {
                "LocationName": "Sevastopol",
                "Frequency": 1,
                "LatLng": "44.61665,33.525367"
            },
            {
                "LocationName": "Sevastopol', Russia",
                "Frequency": 1,
                "LatLng": "44.61665,33.525367"
            },
            {
                "LocationName": "Sevastopol, Russian Federation",
                "Frequency": 1,
                "LatLng": "44.61665,33.525367"
            },
            {
                "LocationName": "Sevastopol', Ukraine",
                "Frequency": 1,
                "LatLng": "44.61665,33.525367"
            },
            {
                "LocationName": "SF Bay",
                "Frequency": 1,
                "LatLng": "37.6909682,-122.3107517"
            },
            {
                "LocationName": "ShangHai",
                "Frequency": 1,
                "LatLng": "31.230416,121.473701"
            },
            {
                "LocationName": "Shanghai China",
                "Frequency": 1,
                "LatLng": "31.230416,121.473701"
            },
            {
                "LocationName": "Sherbrooke, Canada",
                "Frequency": 1,
                "LatLng": "45.4009928,-71.8824288"
            },
            {
                "LocationName": "Shreveport, LA",
                "Frequency": 1,
                "LatLng": "32.5251516,-93.7501789"
            },
            {
                "LocationName": "Sichua,China",
                "Frequency": 1,
                "LatLng": "30.651652,104.075931"
            },
            {
                "LocationName": "Sichuan/Shanghai, China",
                "Frequency": 1,
                "LatLng": "31.25808,121.4828715"
            },
            {
                "LocationName": "Silver Spring, MD",
                "Frequency": 1,
                "LatLng": "38.9906657,-77.026088"
            },
            {
                "LocationName": "Si, Mali",
                "Frequency": 1,
                "LatLng": "13.6,-4.983333"
            },
            {
                "LocationName": "Simi Valley, CA",
                "Frequency": 1,
                "LatLng": "34.2694474,-118.781482"
            },
            {
                "LocationName": "Sioux Falls, SD",
                "Frequency": 1,
                "LatLng": "43.5445959,-96.7311034"
            },
            {
                "LocationName": "Skien, Norway",
                "Frequency": 1,
                "LatLng": "59.2089131,9.6057526"
            },
            {
                "LocationName": "skrypalyk",
                "Frequency": 1,
                "LatLng": "49.962439,-97.188259"
            },
            {
                "LocationName": "slovenia",
                "Frequency": 1,
                "LatLng": "46.151241,14.995463"
            },
            {
                "LocationName": "Snowflake, AZ",
                "Frequency": 1,
                "LatLng": "34.5133698,-110.0784491"
            },
            {
                "LocationName": "Snowmass Village, CO",
                "Frequency": 1,
                "LatLng": "39.2130418,-106.9378207"
            },
            {
                "LocationName": "Sokołów Młp.",
                "Frequency": 1,
                "LatLng": "50.22904,22.11964"
            },
            {
                "LocationName": "Sol",
                "Frequency": 1,
                "LatLng": "8.7221556,47.7637565"
            },
            {
                "LocationName": "Sol-3",
                "Frequency": 1,
                "LatLng": "18.4857957,-69.8765633"
            },
            {
                "LocationName": "somewhere",
                "Frequency": 1,
                "LatLng": "53.9807737,-6.7148821"
            },
            {
                "LocationName": "somewhere in the Universe",
                "Frequency": 1
            },
            {
                "LocationName": "Somewhere in this galaxie or another.",
                "Frequency": 1
            },
            {
                "LocationName": "Somwhere Inside India",
                "Frequency": 1
            },
            {
                "LocationName": "Southeast",
                "Frequency": 1,
                "LatLng": "39.6540262,-104.8980058"
            },
            {
                "LocationName": "Spain, Barcelona",
                "Frequency": 1,
                "LatLng": "41.3850639,2.1734035"
            },
            {
                "LocationName": "Split, Croatia",
                "Frequency": 1,
                "LatLng": "43.5081323,16.4401935"
            },
            {
                "LocationName": "Springfield, MO",
                "Frequency": 1,
                "LatLng": "37.2089572,-93.2922989"
            },
            {
                "LocationName": "Spring Hill, KS",
                "Frequency": 1,
                "LatLng": "38.7430645,-94.8255166"
            },
            {
                "LocationName": "Staffordshire, UK",
                "Frequency": 1,
                "LatLng": "52.8792745,-2.0571868"
            },
            {
                "LocationName": "St Andrews, UK",
                "Frequency": 1,
                "LatLng": "56.335054,-2.8063431"
            },
            {
                "LocationName": "Starkville, MS",
                "Frequency": 1,
                "LatLng": "33.4503998,-88.8183872"
            },
            {
                "LocationName": "State College, PA",
                "Frequency": 1,
                "LatLng": "40.7933949,-77.8600012"
            },
            {
                "LocationName": "Stavanger, Norway",
                "Frequency": 1,
                "LatLng": "58.9699756,5.7331073"
            },
            {
                "LocationName": "St Cloud, MN",
                "Frequency": 1,
                "LatLng": "45.5579451,-94.1632404"
            },
            {
                "LocationName": "Stellenbosch, South Africa",
                "Frequency": 1,
                "LatLng": "-33.9321045,18.860152"
            },
            {
                "LocationName": "Sterling, VA",
                "Frequency": 1,
                "LatLng": "39.0066993,-77.4291298"
            },
            {
                "LocationName": "st.louis",
                "Frequency": 1,
                "LatLng": "38.6270025,-90.1994042"
            },
            {
                "LocationName": "St. Louis Metro East",
                "Frequency": 1,
                "LatLng": "38.5481158,-90.1854266"
            },
            {
                "LocationName": "Stockhom, Sweden",
                "Frequency": 1,
                "LatLng": "59.3293235,18.0685808"
            },
            {
                "LocationName": "Stoke On Trent",
                "Frequency": 1,
                "LatLng": "53.002668,-2.179404"
            },
            {
                "LocationName": "Stony Brook, NY",
                "Frequency": 1,
                "LatLng": "40.9256538,-73.1409429"
            },
            {
                "LocationName": "St. Petersburg, FL",
                "Frequency": 1,
                "LatLng": "27.7518284,-82.6267345"
            },
            {
                "LocationName": "Strandby, Denmark",
                "Frequency": 1,
                "LatLng": "57.4937533,10.494117"
            },
            {
                "LocationName": "Surabaya, Indonesia",
                "Frequency": 1,
                "LatLng": "-7.2574719,112.7520883"
            },
            {
                "LocationName": "Surrey, BC, Canada",
                "Frequency": 1,
                "LatLng": "49.1044302,-122.801094"
            },
            {
                "LocationName": "Suwon, South Korea",
                "Frequency": 1,
                "LatLng": "37.2635727,127.0286009"
            },
            {
                "LocationName": "Suzhou, China",
                "Frequency": 1,
                "LatLng": "31.298974,120.585297"
            },
            {
                "LocationName": "Swarzędz, Poland",
                "Frequency": 1,
                "LatLng": "52.4125371,17.0855512"
            },
            {
                "LocationName": "Sweden / Switzerland",
                "Frequency": 1,
                "LatLng": "46.2293889,6.0743274"
            },
            {
                "LocationName": "Swindon, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.5557739,-1.7797176"
            },
            {
                "LocationName": "Switzerland - Loves to travel",
                "Frequency": 1
            },
            {
                "LocationName": "Syracuse, NY",
                "Frequency": 1,
                "LatLng": "43.0481221,-76.1474244"
            },
            {
                "LocationName": "Tacoma, WA",
                "Frequency": 1,
                "LatLng": "47.2528768,-122.4442906"
            },
            {
                "LocationName": "Taguig, Philippines",
                "Frequency": 1,
                "LatLng": "14.5176184,121.0508645"
            },
            {
                "LocationName": "Taipei, Taiwan",
                "Frequency": 1,
                "LatLng": "25.0329694,121.5654177"
            },
            {
                "LocationName": "Tamilnadu, India",
                "Frequency": 1,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "Tamil Nadu, india",
                "Frequency": 1,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "Tamil Nadu, India",
                "Frequency": 1,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "TamilNadu, India",
                "Frequency": 1,
                "LatLng": "11.1271225,78.6568942"
            },
            {
                "LocationName": "Tardis",
                "Frequency": 1,
                "LatLng": "46.9713621,9.5508103"
            },
            {
                "LocationName": "Tarnopol', Ukraine",
                "Frequency": 1,
                "LatLng": "49.553517,25.594767"
            },
            {
                "LocationName": "Tartu, Estonia",
                "Frequency": 1,
                "LatLng": "58.3776252,26.7290063"
            },
            {
                "LocationName": "Taubate, Brazil",
                "Frequency": 1,
                "LatLng": "-23.0204559,-45.5563555"
            },
            {
                "LocationName": "Teh",
                "Frequency": 1,
                "LatLng": "63.1345235,-142.5226887"
            },
            {
                "LocationName": "Tehran",
                "Frequency": 1,
                "LatLng": "35.6891975,51.3889736"
            },
            {
                "LocationName": "Tehran, Persia",
                "Frequency": 1,
                "LatLng": "35.6891975,51.3889736"
            },
            {
                "LocationName": "Tennessee, USA",
                "Frequency": 1,
                "LatLng": "35.5174913,-86.5804473"
            },
            {
                "LocationName": "Ternopil, Ukraine",
                "Frequency": 1,
                "LatLng": "49.553517,25.594767"
            },
            {
                "LocationName": "Ternopil', Ukraine",
                "Frequency": 1,
                "LatLng": "49.553517,25.594767"
            },
            {
                "LocationName": "Terra",
                "Frequency": 1,
                "LatLng": "44.78455,1.984477"
            },
            {
                "LocationName": "The Hague, Netherlands",
                "Frequency": 1,
                "LatLng": "52.0704978,4.3006999"
            },
            {
                "LocationName": "The Hague, The Netherlands",
                "Frequency": 1,
                "LatLng": "52.0704978,4.3006999"
            },
            {
                "LocationName": "The Internets",
                "Frequency": 1,
                "LatLng": "53.3787237,-2.9159315"
            },
            {
                "LocationName": "the Netherlands",
                "Frequency": 1,
                "LatLng": "52.132633,5.291266"
            },
            {
                "LocationName": "The Old World",
                "Frequency": 1,
                "LatLng": "35.4945831,-97.1742237"
            },
            {
                "LocationName": "Thessaloniki Greece",
                "Frequency": 1,
                "LatLng": "40.6400629,22.9444191"
            },
            {
                "LocationName": "Thessaloniki - Greece",
                "Frequency": 1,
                "LatLng": "40.6400629,22.9444191"
            },
            {
                "LocationName": "The United Kingdom of Great Britain and Northern Ireland",
                "Frequency": 1,
                "LatLng": "54.7877149,-6.4923145"
            },
            {
                "LocationName": "The void",
                "Frequency": 1,
                "LatLng": "48.687526,5.618458"
            },
            {
                "LocationName": "Thionville, France",
                "Frequency": 1,
                "LatLng": "49.357571,6.168426"
            },
            {
                "LocationName": "Thornton, CO",
                "Frequency": 1,
                "LatLng": "39.8680412,-104.9719243"
            },
            {
                "LocationName": "Tianjin, China",
                "Frequency": 1,
                "LatLng": "39.084158,117.200983"
            },
            {
                "LocationName": "Timisoara, Romania",
                "Frequency": 1,
                "LatLng": "45.7488716,21.2086793"
            },
            {
                "LocationName": "Tirana, Albania",
                "Frequency": 1,
                "LatLng": "41.3275459,19.8186982"
            },
            {
                "LocationName": "Tokyo - Japan",
                "Frequency": 1,
                "LatLng": "35.7090259,139.7319925"
            },
            {
                "LocationName": "Tokyo,Japan",
                "Frequency": 1,
                "LatLng": "35.7090259,139.7319925"
            },
            {
                "LocationName": "Toledo, OH USA",
                "Frequency": 1,
                "LatLng": "41.6639383,-83.555212"
            },
            {
                "LocationName": "Tol'yatti, Russia",
                "Frequency": 1,
                "LatLng": "53.5086002,49.4198344"
            },
            {
                "LocationName": "Tomares, Spain",
                "Frequency": 1,
                "LatLng": "37.375855,-6.0450059"
            },
            {
                "LocationName": "tomorrow",
                "Frequency": 1,
                "LatLng": "33.8736398,132.7614071"
            },
            {
                "LocationName": "Tompkinsville, KY",
                "Frequency": 1,
                "LatLng": "36.7022797,-85.6916396"
            },
            {
                "LocationName": "Torhout, Belgium",
                "Frequency": 1,
                "LatLng": "51.06498,3.10157"
            },
            {
                "LocationName": "Torino",
                "Frequency": 1,
                "LatLng": "45.070312,7.6868565"
            },
            {
                "LocationName": "Toronto Canada",
                "Frequency": 1,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Toronto, Ontario - Canada",
                "Frequency": 1,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Toronto,Ontario,Canada",
                "Frequency": 1,
                "LatLng": "43.653226,-79.3831843"
            },
            {
                "LocationName": "Toulouse, fr",
                "Frequency": 1,
                "LatLng": "43.604652,1.444209"
            },
            {
                "LocationName": "Tours, France",
                "Frequency": 1,
                "LatLng": "47.394144,0.68484"
            },
            {
                "LocationName": "Townsend, GA",
                "Frequency": 1,
                "LatLng": "31.5413343,-81.5230042"
            },
            {
                "LocationName": "Trebigne, Bosnia and Herzegovina",
                "Frequency": 1,
                "LatLng": "42.7081585,18.3502638"
            },
            {
                "LocationName": "Trent, Italy",
                "Frequency": 1,
                "LatLng": "46.0747793,11.1217486"
            },
            {
                "LocationName": "Trento",
                "Frequency": 1,
                "LatLng": "46.0747793,11.1217486"
            },
            {
                "LocationName": "Treviso, Italy",
                "Frequency": 1,
                "LatLng": "45.6668893,12.2430437"
            },
            {
                "LocationName": "Trieste, Italy",
                "Frequency": 1,
                "LatLng": "45.6495264,13.7768182"
            },
            {
                "LocationName": "Trivandrum",
                "Frequency": 1,
                "LatLng": "8.5241391,76.9366376"
            },
            {
                "LocationName": "Tromso, Norway",
                "Frequency": 1,
                "LatLng": "69.6492047,18.9553238"
            },
            {
                "LocationName": "Troyes, France",
                "Frequency": 1,
                "LatLng": "48.2973451,4.0744009"
            },
            {
                "LocationName": "Tshwane, South Africa",
                "Frequency": 1,
                "LatLng": "-25.6975497,28.1590786"
            },
            {
                "LocationName": "Tsukuba-shi, Japan",
                "Frequency": 1,
                "LatLng": "36.0834857,140.0766423"
            },
            {
                "LocationName": "Tucson",
                "Frequency": 1,
                "LatLng": "32.2217429,-110.926479"
            },
            {
                "LocationName": "Tunisie",
                "Frequency": 1,
                "LatLng": "33.886917,9.537499"
            },
            {
                "LocationName": "Turkeu",
                "Frequency": 1,
                "LatLng": "38.963745,35.243322"
            },
            {
                "LocationName": "Turkey - Istanbul",
                "Frequency": 1,
                "LatLng": "41.0082376,28.9783589"
            },
            {
                "LocationName": "Turku, Finland",
                "Frequency": 1,
                "LatLng": "60.4518126,22.2666303"
            },
            {
                "LocationName": "Twin Cities",
                "Frequency": 1,
                "LatLng": "44.9374831,-93.2009998"
            },
            {
                "LocationName": "Uberaba, Brazil",
                "Frequency": 1,
                "LatLng": "-19.7473668,-47.939154"
            },
            {
                "LocationName": "Uberlandia,Brazil",
                "Frequency": 1,
                "LatLng": "-18.9146078,-48.2753801"
            },
            {
                "LocationName": "Uberlândia, Brazil",
                "Frequency": 1,
                "LatLng": "-18.9146078,-48.2753801"
            },
            {
                "LocationName": "Ubuntu",
                "Frequency": 1,
                "LatLng": "-6.7881715,39.2237894"
            },
            {
                "LocationName": "Udupi, Karnataka, India",
                "Frequency": 1,
                "LatLng": "13.3371151,74.746596"
            },
            {
                "LocationName": "Ufa, Russia",
                "Frequency": 1,
                "LatLng": "54.7387621,55.9720554"
            },
            {
                "LocationName": "U̱͖̻͚͔͟k̡̙͖͍̘̟͟͞",
                "Frequency": 1,
                "LatLng": "55.378051,-3.435973"
            },
            {
                "LocationName": "Ukraine/Kiev",
                "Frequency": 1,
                "LatLng": "50.4501,30.5234"
            },
            {
                "LocationName": "Ukraine, Odessa",
                "Frequency": 1,
                "LatLng": "46.482526,30.7233095"
            },
            {
                "LocationName": "Ukraine, Zaporizhzhya",
                "Frequency": 1,
                "LatLng": "47.8388,35.139567"
            },
            {
                "LocationName": "Umbria",
                "Frequency": 1,
                "LatLng": "42.938004,12.6216211"
            },
            {
                "LocationName": "United Arab Emirates",
                "Frequency": 1,
                "LatLng": "23.424076,53.847818"
            },
            {
                "LocationName": "University of Wisconsin at Madison, WI",
                "Frequency": 1,
                "LatLng": "42.9402407,-88.8585235"
            },
            {
                "LocationName": "Urbana, IL",
                "Frequency": 1,
                "LatLng": "40.1105875,-88.2072697"
            },
            {
                "LocationName": "usa",
                "Frequency": 1,
                "LatLng": "37.09024,-95.712891"
            },
            {
                "LocationName": "Utah, USA",
                "Frequency": 1,
                "LatLng": "39.3209801,-111.0937311"
            },
            {
                "LocationName": "Utica, NY",
                "Frequency": 1,
                "LatLng": "43.100903,-75.232664"
            },
            {
                "LocationName": "Utopia",
                "Frequency": 1,
                "LatLng": "29.6152274,-99.5269926"
            },
            {
                "LocationName": "UY Scuti",
                "Frequency": 1
            },
            {
                "LocationName": "Uzb",
                "Frequency": 1,
                "LatLng": "34.5397036,69.1826594"
            },
            {
                "LocationName": "Valbo, Sweden",
                "Frequency": 1,
                "LatLng": "60.6430312,17.0082511"
            },
            {
                "LocationName": "Valmiera, Latvia",
                "Frequency": 1,
                "LatLng": "57.5384659,25.4263618"
            },
            {
                "LocationName": "Vancouver, Canda",
                "Frequency": 1,
                "LatLng": "49.2827291,-123.1207375"
            },
            {
                "LocationName": "Vancouver Island, British Columbia, Canada",
                "Frequency": 1,
                "LatLng": "49.6506376,-125.4493906"
            },
            {
                "LocationName": "Vancouver, WA",
                "Frequency": 1,
                "LatLng": "45.6387281,-122.6614861"
            },
            {
                "LocationName": "Vantaa",
                "Frequency": 1,
                "LatLng": "60.2933664,25.0377329"
            },
            {
                "LocationName": "Varazdin, Croatia",
                "Frequency": 1,
                "LatLng": "46.305746,16.3366066"
            },
            {
                "LocationName": "Västerås, Sweden",
                "Frequency": 1,
                "LatLng": "59.6099005,16.5448091"
            },
            {
                "LocationName": "Vaughn",
                "Frequency": 1,
                "LatLng": "47.3442616,-122.7631918"
            },
            {
                "LocationName": "Vejle, Denmark",
                "Frequency": 1,
                "LatLng": "55.7113112,9.5363541"
            },
            {
                "LocationName": "Venlo, Netherlands",
                "Frequency": 1,
                "LatLng": "51.3703748,6.1724031"
            },
            {
                "LocationName": "Ventura, CA",
                "Frequency": 1,
                "LatLng": "34.274646,-119.2290316"
            },
            {
                "LocationName": "Vercelli, Italy",
                "Frequency": 1,
                "LatLng": "45.3202272,8.4185735"
            },
            {
                "LocationName": "Verona, Italy",
                "Frequency": 1,
                "LatLng": "45.4383842,10.9916215"
            },
            {
                "LocationName": "Vicenza, Italy",
                "Frequency": 1,
                "LatLng": "45.5454787,11.5354214"
            },
            {
                "LocationName": "Victoria, BC",
                "Frequency": 1,
                "LatLng": "48.4284207,-123.3656444"
            },
            {
                "LocationName": "Vienne, Austria",
                "Frequency": 1,
                "LatLng": "48.2081743,16.3738189"
            },
            {
                "LocationName": "VietNam",
                "Frequency": 1,
                "LatLng": "14.058324,108.277199"
            },
            {
                "LocationName": "Vigo",
                "Frequency": 1,
                "LatLng": "42.2405989,-8.7207268"
            },
            {
                "LocationName": "Vila Nova de Famalião, Portugal",
                "Frequency": 1,
                "LatLng": "41.4111259,-8.5237319"
            },
            {
                "LocationName": "Viljandi, Estonia",
                "Frequency": 1,
                "LatLng": "58.367135,25.5974277"
            },
            {
                "LocationName": "Virginia, US",
                "Frequency": 1,
                "LatLng": "37.4315734,-78.6568942"
            },
            {
                "LocationName": "Vista, CA",
                "Frequency": 1,
                "LatLng": "33.2000368,-117.2425355"
            },
            {
                "LocationName": "Vitoria, Brazil",
                "Frequency": 1,
                "LatLng": "-20.2976178,-40.2957768"
            },
            {
                "LocationName": "Volos",
                "Frequency": 1,
                "LatLng": "39.3621896,22.942159"
            },
            {
                "LocationName": "Voronezh, Russia",
                "Frequency": 1,
                "LatLng": "51.6754966,39.2088823"
            },
            {
                "LocationName": "w00t",
                "Frequency": 1
            },
            {
                "LocationName": "Wageningen, Netherlands",
                "Frequency": 1,
                "LatLng": "51.9691868,5.6653948"
            },
            {
                "LocationName": "Wales",
                "Frequency": 1,
                "LatLng": "52.1306607,-3.7837117"
            },
            {
                "LocationName": "Walsall, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.586214,-1.982919"
            },
            {
                "LocationName": "Warsaw Poland",
                "Frequency": 1,
                "LatLng": "52.2296756,21.0122287"
            },
            {
                "LocationName": "Warsaw/Poland",
                "Frequency": 1,
                "LatLng": "52.2296756,21.0122287"
            },
            {
                "LocationName": "Washington D.C",
                "Frequency": 1,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Washington, D.C. area",
                "Frequency": 1,
                "LatLng": "14.3215924,120.9529391"
            },
            {
                "LocationName": "Washington, D.c United States",
                "Frequency": 1,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Washington, District of Columbia, US",
                "Frequency": 1,
                "LatLng": "38.9071923,-77.0368707"
            },
            {
                "LocationName": "Waterloo, AL",
                "Frequency": 1,
                "LatLng": "34.9181425,-88.064203"
            },
            {
                "LocationName": "Waterloo, ON",
                "Frequency": 1,
                "LatLng": "43.4642578,-80.5204096"
            },
            {
                "LocationName": "Waterloo, ON, CANADA",
                "Frequency": 1,
                "LatLng": "43.4642578,-80.5204096"
            },
            {
                "LocationName": "Waterloo, Ontario",
                "Frequency": 1,
                "LatLng": "43.4642578,-80.5204096"
            },
            {
                "LocationName": "Webster, NY",
                "Frequency": 1,
                "LatLng": "43.2122851,-77.4299939"
            },
            {
                "LocationName": "Weihai, China",
                "Frequency": 1,
                "LatLng": "37.513068,122.12042"
            },
            {
                "LocationName": "West Bengal",
                "Frequency": 1,
                "LatLng": "22.9867569,87.8549755"
            },
            {
                "LocationName": "Westchester, NY",
                "Frequency": 1,
                "LatLng": "41.1220194,-73.7948516"
            },
            {
                "LocationName": "West Des Moines, IA",
                "Frequency": 1,
                "LatLng": "41.5772115,-93.711332"
            },
            {
                "LocationName": "Western Australia",
                "Frequency": 1,
                "LatLng": "-27.6728168,121.6283098"
            },
            {
                "LocationName": "Westmoreland, NY",
                "Frequency": 1,
                "LatLng": "43.1162663,-75.4037358"
            },
            {
                "LocationName": "West Sacramento, CA",
                "Frequency": 1,
                "LatLng": "38.5804609,-121.530234"
            },
            {
                "LocationName": "Wheeling, WV",
                "Frequency": 1,
                "LatLng": "40.0639616,-80.7209149"
            },
            {
                "LocationName": "Wiesbaden, Germany",
                "Frequency": 1,
                "LatLng": "50.0782184,8.2397608"
            },
            {
                "LocationName": "Wigan, United Kingdom",
                "Frequency": 1,
                "LatLng": "53.5450645,-2.6325074"
            },
            {
                "LocationName": "Wilmette, IL",
                "Frequency": 1,
                "LatLng": "42.0722513,-87.7228384"
            },
            {
                "LocationName": "Winchester, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.059771,-1.310142"
            },
            {
                "LocationName": "Windsor, Canada",
                "Frequency": 1,
                "LatLng": "42.3149367,-83.0363633"
            },
            {
                "LocationName": "Windsor, Ontario",
                "Frequency": 1,
                "LatLng": "42.3149367,-83.0363633"
            },
            {
                "LocationName": "Winterswijk, Netherlands",
                "Frequency": 1,
                "LatLng": "51.9713139,6.720509"
            },
            {
                "LocationName": "Wokingham, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.410457,-0.833861"
            },
            {
                "LocationName": "Woking, United Kingdom",
                "Frequency": 1,
                "LatLng": "51.316774,-0.5600349"
            },
            {
                "LocationName": "Woodstock, GA",
                "Frequency": 1,
                "LatLng": "34.1014873,-84.5193754"
            },
            {
                "LocationName": "Worcestershire, United Kingdom",
                "Frequency": 1,
                "LatLng": "52.2545225,-2.2668382"
            },
            {
                "LocationName": "World Wide Web",
                "Frequency": 1
            },
            {
                "LocationName": "Worms, Germany",
                "Frequency": 1,
                "LatLng": "49.6341372,8.3507182"
            },
            {
                "LocationName": "Wredenhagen, Germany",
                "Frequency": 1,
                "LatLng": "53.2887141,12.514872"
            },
            {
                "LocationName": "wuhan china",
                "Frequency": 1,
                "LatLng": "30.593099,114.305393"
            },
            {
                "LocationName": "Wuppertal",
                "Frequency": 1,
                "LatLng": "51.2562128,7.1507636"
            },
            {
                "LocationName": "www.liftedattire.com",
                "Frequency": 1
            },
            {
                "LocationName": "Wyong, NSW, Australia",
                "Frequency": 1,
                "LatLng": "-33.2836287,151.4230076"
            },
            {
                "LocationName": "Yangon, Myanmar.",
                "Frequency": 1,
                "LatLng": "16.8660694,96.195132"
            },
            {
                "LocationName": "Yogyakarya, Indonesia",
                "Frequency": 1,
                "LatLng": "-7.7955798,110.3694896"
            },
            {
                "LocationName": "Yorkshire, England",
                "Frequency": 1,
                "LatLng": "53.6204416,-2.1525678"
            },
            {
                "LocationName": "York, UK",
                "Frequency": 1,
                "LatLng": "53.9599651,-1.0872979"
            },
            {
                "LocationName": "Youngstown, OH",
                "Frequency": 1,
                "LatLng": "41.0997803,-80.6495194"
            },
            {
                "LocationName": "Zaandam, Netherlands",
                "Frequency": 1,
                "LatLng": "52.4420399,4.8291992"
            },
            {
                "LocationName": "Zambia",
                "Frequency": 1,
                "LatLng": "-13.133897,27.849332"
            },
            {
                "LocationName": "Zanjan, Iran",
                "Frequency": 1,
                "LatLng": "36.6830045,48.5087209"
            },
            {
                "LocationName": "Zenica, Bosnia and Herzegovina",
                "Frequency": 1,
                "LatLng": "44.2034392,17.9077432"
            },
            {
                "LocationName": "Zhodino, Belarus",
                "Frequency": 1,
                "LatLng": "54.1016136,28.3471258"
            },
            {
                "LocationName": "Zirndorf, Germany",
                "Frequency": 1,
                "LatLng": "49.444555,10.9550183"
            },
            {
                "LocationName": "Zoetermeer, Netherlands",
                "Frequency": 1,
                "LatLng": "52.060669,4.494025"
            },
            {
                "LocationName": "Zülpich, Germany",
                "Frequency": 1,
                "LatLng": "50.6938699,6.6549936"
            },
            {
                "LocationName": "Zürich, Switzerland",
                "Frequency": 1,
                "LatLng": "47.3768866,8.541694"
            },
            {
                "LocationName": "Zwingenberg, Germany",
                "Frequency": 1,
                "LatLng": "49.7250007,8.6109755"
            },
            {
                "LocationName": "وجدة, Morocco",
                "Frequency": 1,
                "LatLng": "34.681962,-1.900155"
            },
            {
                "LocationName": "Беговой, а иногда и Хорватия",
                "Frequency": 1
            },
            {
                "LocationName": "Киров",
                "Frequency": 1,
                "LatLng": "58.6035321,49.6667983"
            },
            {
                "LocationName": "Косовска Митровица",
                "Frequency": 1,
                "LatLng": "42.8913909,20.8659995"
            },
            {
                "LocationName": "北京",
                "Frequency": 1
            }
        ]
        _.each(locations,function(location) {
            Locations.insert(location);
        })

    }
}

console.log('count - >',Locations.find({ $where: function() {return false} }).count())