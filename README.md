"# node beaginging prject" 

What is nodeJs

nodejs is open source, cross paltform, javascript run time envirnoment using this we can execute javascript code outside browser or without browser most imporatnt server side. It is built on Chrome's V8 JavaScript engine



javascript module using es6

in package.json file "type = module" -- tells Node.js to treat your .js files as ES modules. without this Default = CommonJS.

1. type to call module
import {add} from './math.js';

console.log("Sum is:", add(10, 3));
export function add(a,b) {
    return a+b;
};

2. nd type to call module
import add from './math.js';

console.log("Sum is:", add(10, 3));ort default function add(a, b) {
    return a+b;
};