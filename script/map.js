const getLocations = async () => {
  const response = await fetch('https://open-data-220705.appspot.com/api/danger_location');
  if (response.status === 200) {
      return response.json();
  } else {
      throw new Error('Failed to fetch data.');
  }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: {lat: 22.9984984, lng: 120.2131725},
  mapTypeId: 'terrain'
  });

  getLocations().then(data => {
      // console.log(data.response);
      const locations = data.response;

      // 繪製圈圈
      for (var coord in locations) {
          var crimeCircle = new google.maps.Circle({
          strokeColor: '#ed6555',
          strokeOpacity: 0,
          strokeWeight: 2,
          fillColor: '#ed6555',
          fillOpacity: 0.35,
          map: map,
          center: locations[coord],
          radius: 200
          });
      }
  }).catch(error => {
      console.log(`Error: ${error}`);
  })
}