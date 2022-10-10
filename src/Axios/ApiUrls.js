export const API_URLS = {
  getCities: city => `get-city-list?page=1&search=${city}`,
  getWeatherReport: (lon, lat) =>
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=9ae2447983447457a57564703f4382ac&exclude=current,minutely,hourly,alerts`,
};
