let React =     require('react');
let ReactDom = require('react-dom/client');

let WordRelay = require('./WordRelay');

ReactDom.createRoot(document.querySelector('#root')).render(<WordRelay />);