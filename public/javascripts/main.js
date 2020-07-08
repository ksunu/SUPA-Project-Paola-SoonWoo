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
    //directionService 

    const directionRequest = {
      origin: document.getElementById('address').value,
      destination: supaStore,
      travelMode: 'DRIVING',
  }

  const directionsService = new google.maps.DirectionsService

  directionsService.route(
      directionRequest,
      (response, status) => {
          console.log('El estado de la petición a directonsSevice ha sido:', status)
          console.log('La respuesta del directonsSevice ha sido:', response)

          const directionsDisplay = new google.maps.DirectionsRenderer
          directionsDisplay.setDirections(response)
          directionsDisplay.setMap(myMap)
      }
  )
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

//dibujo de polilineas
//  let flightPlanCoordinates = [{
//   lat: 40.392499,
//   lng: -3.698214
// }]

  // let flightPath = new google.maps.Polyline({
  //   path: supaStore.resultsMap,
  //   geodesic: true,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // flightPath.setMap(myMap);

//informacion de un sitio

const ClickEventHandler = function() {

    this.infowindow = new google.maps.InfoWindow();
    this.infowindowContent = document.getElementById();
   
  };
  ClickEventHandler.prototype.handleClick = function(event) {
    console.log("You clicked on: " + event.latLng);
    
  };

