let myMap, clientMap

window.onload = () => {

    // SUPA index
    const supaStore = {
        lat: 40.392499,
        lng: -3.698214
    };

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: supaStore,
        styles: mapStyles.retro
    });

    const myMarker = new google.maps.Marker({
        position: {
            lat: 40.392499,
            lng: -3.698214
        },
        map: myMap,
        title: "¡SUPA está aquí!"
    });

    // CLIENT SIDE
    // initMap = () => {

    //     let mapOptions = {
    //         center: directions.ironhackBCN.coords,
    //         zoom: 15,
    //         styles: mapStyles.night
    //     }
    //     clientMap = new google.maps.Map(document.querySelector('clientMap'), mapOptions)

    //     // Detalles de la ruta    
    //     const directionRequest = {
    //         origin: directions.ironhackBCN.coords,
    //         destination: 'Fabrik, Madrid, ES',
    //         travelMode: 'DRIVING'
    //     }

    //     const directionsService = new google.maps.DirectionsService

    //     directionsService.route(
    //         directionRequest,
    //         (response, status) => {
    //             console.log('El estado de la petición a directonsSevice ha sido:', status)
    //             console.log('La respuesta del directonsSevice ha sido:', response)

    //             const directionsDisplay = new google.maps.DirectionsRenderer
    //             directionsDisplay.setDirections(response)
    //             directionsDisplay.setMap(clientMap)
    //         }
    //     )
    // }
}