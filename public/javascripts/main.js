function initMap() {
  // SUPA index
  const supaStore = {
    lat: 40.392499,
    lng: -3.698214
  };

  let myMap = new google.maps.Map(document.getElementById('myMap'), {
    mapTypeControl: false,
    center: supaStore,
    zoom: 13,
    styles: mapStyles.retro

  });

  const image = {
    url: "/images/supa (1).ico",
    size: new google.maps.Size(60, 60),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 55)
  }
  const myMarker = new google.maps.Marker({
    position: supaStore,
    map: myMap,
    title: "¡SUPA está aquí!",
    icon: image
  })

  new AutocompleteDirectionsHandler(myMap);

}

function AutocompleteDirectionsHandler(myMap) {
  this.myMap = myMap;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'WALKING';
  this.directionsService = new google.maps.DirectionsService;
  this.directionsRenderer = new google.maps.DirectionsRenderer;
  this.directionsRenderer.setMap(myMap);
  let originInput = document.getElementById('origin-input');
  let destinationInput = document.getElementById('destination-input');
  let modeSelector = document.getElementById('mode-selector');
  let originAutocomplete = new google.maps.places.Autocomplete(originInput);

  originAutocomplete.setFields(['place_id']);
  let destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);

  destinationAutocomplete.setFields(['place_id']);
  this.setupClickListener('changemode-walking', 'WALKING');
  this.setupClickListener('changemode-transit', 'TRANSIT');
  this.setupClickListener('changemode-driving', 'DRIVING');
  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
  this.myMap.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  this.myMap.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
  this.myMap.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

AutocompleteDirectionsHandler.prototype.setupClickListener = function (id, mode) {
  let radioButton = document.getElementById(id);
  let infoMap = this;
  radioButton.addEventListener('click', function () {
    infoMap.travelMode = mode;
    infoMap.route();
  });
};
AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (
  autocomplete, mode) {
  let infoMap = this;
  autocomplete.bindTo('bounds', this.myMap);
  autocomplete.addListener('place_changed', function () {
    let place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert('Please select an option from the dropdown list.');
      return;
    }
    if (mode === 'ORIG') {
      infoMap.originPlaceId = place.place_id;
    } else {
      infoMap.destinationPlaceId = place.place_id;
    }
    infoMap.route();
  });
};
AutocompleteDirectionsHandler.prototype.route = function () {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  let infoMap = this;
  this.directionsService.route({
      origin: {
        'placeId': this.originPlaceId
      },
      destination: {
        'placeId': this.destinationPlaceId
      },
      travelMode: this.travelMode
    },
    function (response, status) {
      if (status === 'OK') {
        infoMap.directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
};