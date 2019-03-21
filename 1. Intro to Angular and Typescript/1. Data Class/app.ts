import Data from './dataClass';

const myData: Data = new Data(
    'GET',
    'http://google.com',
    'HTTP/1.1',
    ''
);

console.log(myData);