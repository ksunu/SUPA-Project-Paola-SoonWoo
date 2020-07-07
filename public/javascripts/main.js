let myMap

window.onload = () => {

    // SUPA index
    const supaStore = {
        lat: 40.392499,
        lng: -3.698214
    };

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 13,
        center: supaStore,
        styles: mapStyles.retro
    });

    const geocoder = new google.maps.Geocoder();
    document.getElementById('submit').addEventListener('click', function () {
        geocodeAddress(geocoder, myMap);
      });


    const myMarker = new google.maps.Marker({
        position: {
            lat: 40.392499,
            lng: -3.698214
        },
        map: myMap,
        title: "¡SUPA está aquí!"
    });
}

//Geocoder
 
function geocodeAddress(geocoder, resultsMap) {
  let address = document.getElementById('address').value;
 
  geocoder.geocode({ 'address': address }, function (results, status) {
 
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

let flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },

  ];
  let flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(myMap);










//DirectionService

// const directionsService = new google.maps.DirectionsService;
// const directionsDisplay = new google.maps.DirectionsRenderer;

// const directionRequest = {
//     origin: { lat: 41.3977381, lng: 2.190471916},
//     destination: document.getElementById('address').value,
//     travelMode: 'DRIVING'
//   };

// directionsService.route(
//     directionRequest,
//     (response, status) => {
//         console.log('El estado de la petición a directonsSevice ha sido:', status)
//         console.log('La respuesta del directonsSevice ha sido:', response)

//         const directionsDisplay = new google.maps.DirectionsRenderer
//         directionsDisplay.setDirections(response)
//         directionsDisplay.setMap(myMap)
//     }
// )