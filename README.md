"# node beaginging prject" 

What is nodeJs

nodejs is open source, cross paltform, javascript run time envirnoment using this we can execute javascript code outside browser or without browser most imporatnt server side. It is built on Chrome's V8 JavaScript engine


# Day 1
javascript module using es6

in package.json file "type = module" -- tells Node.js to treat your .js files as ES modules. without this Default = CommonJS.

1. type to call module in es6 using this we can call multiple module {add ,sub, div}.
import {add} from './math.js';

console.log("Sum is:", add(10, 3));
math.js
export function add(a,b) {
    return a+b;
};

2. nd type to call module for single module
import add from './math.js';
console.log("Sum is:", add(10, 3));

math.js
export default function add(a, b) {
    return a+b;
};

3. module type used for basic javascript
const add = require('./math');
console.log("Sum is:", add(10, 3));
function add(a,b) {
    return a+b;
}   1q2`
module.exports=add;

# Day 2
 learn file system (two way tradional and es6)
To handle file operations like creating, reading, deleting, etc., Node.js provides an inbuilt module called FS (File System).All file system operations can have synchronous and asynchronous forms depending upon user requirements. To use this File System module, use the const fs = require('fs'); method


Callback-based  (older/traditional)
import * as fs from 'fs';

fs.writeFile('note.txt', 'Hello from callback!', (err) => {
  if (err) {
    console.error(' Error:', err);
    return;
  }
  console.log('File written (callback)');
});

Promise-based with async/await + try...catch (modern)
import { writeFile } from 'fs/promises';

try {
  await writeFile('note.txt', 'Hello from promise!');
  console.log('File written (promise)');
} catch (err) {
  console.error('Error:', err);
}


# Day 3
1. Create http server using node.js without express js. code added in app.js
2. install express and create server with this (npm install express)