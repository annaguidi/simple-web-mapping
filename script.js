let mydata = [
    {
      "year": "2020-02-02",
      "city": "New York City",
      "Latitude": 40.7127753,
      "Longitude": -74.0059728
    },
    {
      "year": "2020-02-03",
      "city": "Prague",
      "Latitude": 50.0755381,
      "Longitude": 14.4378005
    },
    {
      "year": "2020-05-18",
      "city": "Zurich",
      "Latitude": 47.3768866,
      "Longitude": 8.541694
    },
    {
      "year": "2020-05-19",
      "city": "Milan",
      "Latitude": 45.4642035,
      "Longitude": 9.189982
    }
  ]
  
  let mytoken = "pk.eyJ1Ijoia2FyaWhpZ2giLCJhIjoiY2p1bGpnbTByMGZ1czRkbHI3aDBwdHk1eiJ9.KJSyhm6rfumygW_BhUDHMQ";

  let layer = new L.StamenTileLayer("toner");
  
  let mymap = L.map('mapid').setView([42.345743, -36.825781], 4);
  
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: mytoken
    }).addTo(mymap);

    mymap.addLayer(layer);
  
  let flagIcon = L.icon({
    iconUrl: 'https://img.icons8.com/plasticine/2x/marker.png',
    iconSize: [30, 30],
    iconAnchor: [20, 20],
    popupAnchor: [0, 0],
  })
  
  for (let i = 0; i < mydata.length; i++) {
    
    let myplace = mydata[i];
    
    let popupText = "<h3>" + myplace.city + "</h3>" + " " + myplace.year;
    
    console.log(myplace.year);
    
    L.marker([myplace.Latitude, myplace.Longitude], {icon: flagIcon}).bindPopup(popupText).addTo(mymap);
  }
    
  
  