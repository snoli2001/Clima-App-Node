
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon( argv.direccion )
//     .then( console.log );

const getInfo = async ( direccion ) => {
    try{
        const resp = await lugar.getLugarLatLon( direccion );
        const lat = resp.lat;
        const lon = resp.lon;
        const temp = await clima.getClima(lat, lon);
        return `El clima de ${resp.direcc} es de ${temp} °C`
    } catch (e) {
        return `No se puedo determinar el clima de ${direccion}`
    }
}

getInfo( argv.direccion )
    .then( console.log )
    .catch(console.warn)
