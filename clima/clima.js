
const axios = require('axios');

const getClima = async (lat, lon) => {

  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=a5a4ebd5428c61591f7c2bc57a0d8bd8`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
