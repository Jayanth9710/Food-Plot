var zoom=5;
	var latstart=22.76;
	var longstart=78;
    var map = L.map('map').setView([latstart, longstart], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*var geoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "What": "Elaneer Juice ( Tender Coconut)",
          "Landmark": "Opposite to Devar Hall",
          "Price": "30 per Glass",
          "What else": "Dates Juice"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            78.69371116161345,
            10.821935666713527
          ]
        }
      }
    ]
  }

 // L.geoJSON(geoJSON).addTo(map)*/

var elaneermarker= L.marker([10.821935666713527,
    78.69371116161345]).addTo(map);

    elaneermarker.bindPopup('<p><a href="elaneer.html">Watch Review</a></p>'
    ).openPopup();

    
