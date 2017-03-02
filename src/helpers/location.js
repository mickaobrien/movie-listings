function getPosition(settings) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      // On Success
      function(position) {
        resolve(position);
      },
      // On Error
      function(error) {
        reject(error);
      },
      settings
    );
  });
}

function getDeviceLocation() {
  //TODO handle denial of permission, errors
  return getPosition().then(position => {
    const location = {lat: position.coords.latitude, lng: position.coords.longitude};
    saveLocation(location);
    return location;
  })
}

function saveLocation(location) {
  let locations = JSON.parse(localStorage.locations || '[]');
  locations.push(location);
  localStorage.locations = JSON.stringify(locations);
}

export default function getLocation() {
  // Previously stored locations
  if (localStorage.locations) {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.locations)[0]);
    });
  }
  // Request location from the device
  return getDeviceLocation();
}
