function geolocate() {
    console.log("Geolocating")
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
   }
}

function onGeolocateSuccess(coordinates) {
   const { latitude, longitude } = coordinates.coords;
   console.log('Found coordinates: ', latitude, longitude);
  appendLocation(latitude, longitude); 
}

function onGeolocateError(error) {
   console.warn(error.code, error.message);

   if (error.code === 1) {
   // they said no
   } else if (error.code === 2) {
   // position unavailable
   } else if (error.code === 3) {
   // timeout
   }
}

function appendLocation(latitude, longitude){
    const footer = document.getElementById('location');
    //let locationText = document.createElement('p');
    footer.innerHTML = `<p>latitude: ${latitude}, longitude: ${longitude}</p>`
}

geolocate();

exports.modules = { geolocate  };