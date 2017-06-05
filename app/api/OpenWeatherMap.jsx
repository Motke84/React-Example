import axios from 'axios';


const OPEN_WEATHER_MAP_URL = 
'http://api.openweathermap.org/data/2.5/weather?appid=609d33a20a4526dd734d027b805c422e&units=metric';

module.exports = {
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) =>  {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (res) => {
      throw new Error(res.data.message);
    });
  }
}
