// const Map = require('./helpers/map.js')
const SelectView = require('./views/select_view.js');
const CountryInfoView = require('./views/country_info_view.js');
const Countries = require('./models/countries.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // const map = new Map()

  const selectElement = document.querySelector('select#countries');
  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();

  const container = document.querySelector('div#country');
  const countryInfoDisplay = new CountryInfoView(container);
  countryInfoDisplay.bindEvents();

  const countriesDataSource = new Countries();
  countriesDataSource.getData();
  countriesDataSource.bindEvents();

});
