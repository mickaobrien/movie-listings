import { pad } from './formatting';

function today() {
  const date = new Date();
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${year}${month}${day}`;
}

function setQueryParams(url, params) {
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return url;
}

function apiURL(day, lat, lng) {
  if ( typeof day === 'undefined' ) {
    day = today();
  }
  if ( typeof lat === 'undefined' ) {
    lat = 51.8968917;
    lng = -8.486315699999977;
  }
  const url = new URL('https://api.flixster.com/api/v2/ticketing/theaters');
  const params = {
    showtimes: true,
    latitude: lat,
    longitude: lng,
    date: day,
    fullMovieInfo: true
  }
  return setQueryParams(url, params);
}

export default function getData(day, lat, lng) {
  const url = apiURL(day, lat, lng);
  return fetch(url).then(response => response.json());
}
