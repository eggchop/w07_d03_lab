const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const Countries = function () {
  this.countries = null;
};

Countries.prototype.bindEvents = function() {

  PubSub.subscribe('Selected-country', (evt) => {
    const selectedIndex = evt.detail;
    this.findObjectByIndex(selectedIndex);
  });
};

Countries.prototype.findObjectByIndex = function (selectedIndex){
  const selectedCountry = this.countries[selectedIndex];
  PubSub.publish('Country-object-ready', selectedCountry);
};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  const parseData = (data) => {
    console.log(this);
    this.countries = data;
    PubSub.publish('All-countries-ready', this.countries);
  }
  requestHelper.get(parseData);

};


module.exports = Countries;
