function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
   }
}

function onGeolocateSuccess(coordinates) {
   const { latitude, longitude } = coordinates.coords;
   console.log('Found coordinates: ', latitude, longitude);
   return coordinates.coords;
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

exports.modules = geolocate;