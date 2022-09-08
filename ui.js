class UI {
  constructor() {
    this.loc = document.getElementById('w-location');
    this.des = document.getElementById('w-description');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.feelsliketemp = document.getElementById('w-temp-feels-like')
    this.humidity = document.getElementById('w-humidity');
    this.windspeed = document.getElementById('w-windspeed');
    this.visibility = document.getElementById('w-visibility');
  }
  paint(weather) {
    this.loc.textContent = weather.name;
    this.des.textContent = weather.weather[0].description;
    this.string.textContent = `${Math.round(weather.main.temp)} ℃`;
    this.icon.setAttribute('src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.feelsliketemp.textContent = `Feels Like : ${Math.round(weather.main.feels_like)} ℃`;
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}%`;
    this.windspeed.textContent = `Wind-Speed : ${weather.wind.speed}meter/sec`;
    this.visibility.textContent = `Visibility : ${weather.visibility}m`;
  }
}