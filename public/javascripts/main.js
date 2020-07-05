let myMap

window.onload = () => {

    const supaStore = {
        lat: 40.392499,
        lng: -3.698214
    };

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        center: supaStore,
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