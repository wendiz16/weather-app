// Init lS
const storage = new Storage();
// get stored loc data 
const weatherLocation = storage.getLocationData();
//Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init Ui
const ui = new UI();
// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// change loc
document.getElementById('w-change-button').addEventListener(
  'click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    // change loc
    weather.changeLoc(city, country);
    //set loc in LS
    storage.setLocationData(city, country);
    // get weather and display it
    getWeather();
    // close modal 
    $('#locModal').modal('hide');

  }
)

// weather.changeLoc("Vancouver","Canada");

function getWeather() {

  weather.getWeather()
    .then(results => { ui.paint(results); })
    .catch(err => console.log(err));
}
