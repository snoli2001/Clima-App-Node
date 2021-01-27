
const axios = require('axios');

const getLugarLatLon = async ( direccion ) => {

    const encodedUrl = encodeURI( direccion );

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: {'x-rapidapi-key': '7bbe814cecmshbeadf8c2ff3be14p125d76jsn6d84e2fc02e8'}
    });

   const resp = await instance.get();

   if ( resp.data.code === '404' ) {
       throw  new Error(`No hay resultados para ${direccion}`);
   }

   const data = resp.data;
   const direcc = data.name;
   const lat = data.coord.lat;
   const lon = data.coord.lon;

   return {
        direcc,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}
