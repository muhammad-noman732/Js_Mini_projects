// Es6 = an external file that contain resuable code that
//          can be imported into another Files .
//          write resuable code for different apps..
//          can contain classes , function , variables... nd more
//         introduced part of EMCASRIPT 2015 update.

import {PI , getArea , getCircumference , getVolume} from './mathutils.js';

console.log(PI);

const circumference = getCircumference(10)

console.log(circumference);

const volume = getVolume(2);

console.log(` volume is ${volume}`);

const area = getArea(2)
console.log(` area is ${area}`);


