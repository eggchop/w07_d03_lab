const Map = require('../helpers/map.js');
const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container) {
  this.container = container;
};

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Country-object-ready', (evt) => {
    const countryObject = evt.detail;
    this.render(countryObject);
  });
};

CountryInfoView.prototype.render = function(countryObject){
  this.container.innerHTML = '';
  const map = new Map(countryObject.latlng[0],countryObject.latlng[1])

  const infoTextName = document.createElement('h1');
  infoTextName.textContent = `${countryObject.name}`;

  const infoTextPopulation = document.createElement('p');
  infoTextPopulation.textContent = `Population: ${this.formatNumbers(countryObject.population)}`;

  const languagesList = this.createLanguagesList(countryObject.languages);

  const infoTextRegion = document.createElement('h2');
  infoTextRegion.textContent = `${countryObject.region}`;

  const infoFlag = document.createElement('img');
  infoFlag.src = countryObject.flag



  this.container.appendChild(infoTextName);
  this.container.appendChild(infoTextPopulation);
  this.container.appendChild(languagesList);
  this.container.appendChild(infoTextRegion);
  this.container.appendChild(infoFlag);

};

CountryInfoView.prototype.createLanguagesList = function (languages) {
  const list = document.createElement('ul');

  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });

  return list;
};

CountryInfoView.prototype.formatNumbers = function(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


module.exports = CountryInfoView;
