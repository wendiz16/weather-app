class Weather {
  constructor(city, country) {
    this.apiKey = '7566d26369b5caef0b682b0e1092ce40';
    this.city = city;
    this.country = country;
  }
  // fetch weather 
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);
    const responseData = await response.json();
    return responseData;
  }
  // change loc 
  changeLoc(city, country) {
    this.city = city;
    this.country = country;
  }

}