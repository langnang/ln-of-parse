document.write('<h1>Hello World <small>LN</small></h1>');
const ln = () => {
    console.log("ln");
}

ln();

const ln1 = (obj) => {
    console.log(typeof obj);
}

ln1("ln");

import is from './package/is';

console.log(is.isArray("123"));


import './../../css/ln/index.css';
import './../../sass/ln/index.scss';
import './../../less/ln/index.less';

import json from './../../json/ln/index.json';
import json5 from "./../../json5/ln/index.json5";
console.log(json);
console.log(json5);

import L from './../../img/L.PNG';