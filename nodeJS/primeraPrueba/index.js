const colors = require('colors');
const axios = require('axios').default;
const dayjs = require('dayjs');

const { mul } = require('./operaciones');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

// axios.get('https://rickandmorty.com/api/character')
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message));

console.log(dayjs('2022-09-12').diff('2022-09-11', 'minutes'));
console.log(dayjs().add(5, 'minutes').format('DD-MM-YYYY hh:mm:ss'));
console.log(__dirname);
console.log(__filename);
console.log(process.argv);