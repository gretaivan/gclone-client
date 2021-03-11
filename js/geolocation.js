const apiFuncs = require('./api')

function geolocate() {
    console.log("Geolocating")
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
   }
}

async function onGeolocateSuccess(coordinates) {
   const { latitude, longitude } = coordinates.coords;
   console.log('Found coordinates: ', latitude, longitude);
   const data = await apiFuncs.getData(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=10`)
   console.log(data.address.county, data.address.state)
   appendLocation(data.address.county, data.address.state); 
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

function appendLocation(county, state){
    const footer = document.getElementById('location');
    //let locationText = document.createElement('p');
    footer.innerHTML = `<p>${county}, ${state}</p>`
}

geolocate();

exports.modules = { geolocate  };