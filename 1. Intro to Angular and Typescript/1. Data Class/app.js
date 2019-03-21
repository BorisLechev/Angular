"use strict";
exports.__esModule = true;
var dataClass_1 = require("./dataClass");
var myData = new dataClass_1["default"]('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
