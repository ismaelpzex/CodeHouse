const axios = require('axios');
const { XMLParser } = require('fast-xml-parser');
const terminalImage = require('terminal-image');
const got = require('got');
module.exports = async () => {
    const { data } = await axios.get('https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml');
    const parser = new XMLParser();
    const { kml: { Document: { Placemark: arrPlacemarks } } } = parser.parse(data);
    const numAleatorio = Math.floor(Math.random() * arrPlacemarks.length);
    const { description } = arrPlacemarks[numAleatorio];
    const start = description.indexOf('src=') + 4;
    const end = description.indexOf(' ', start);
    const url = description.substring(start, end);
    // const imgData = await axios.get(url, { responseType: 'arrayBuffer' });
    const { body } = await got(url, { responseType: 'buffer' });
    console.log(await terminalImage.buffer(body));
}