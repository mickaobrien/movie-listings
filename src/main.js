//import MovieList from './components/MovieList.html';
import Listings from './components/Listings.html';
import 'whatwg-fetch';

const listings = new Listings({
  target: document.querySelector('main'),
  data: {},
});
