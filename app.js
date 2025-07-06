//## below to for use module system of javascript 
/*
basic javascript
//const add = require('./math'); 
//console.log("Sum is:", add(10, 3));
*/
import add from './math.js';
console.log("Sum is:", add(10, 3));


// ES6 with multiple function exist  javascript
import {greetd, nodeHello} from './greet.js';
console.log(greetd("mansha singhal"));
console.log(nodeHello("singhal"));

// file system
import { writeFile } from 'fs/promises';
await writeFile('hello.txt', 'Hello from Node.js!');

//read file
import { readFile } from 'fs/promises'; 
const data = await readFile('hello.txt', 'utf-8');
console.log('📄 File content:', data);

//append text into file
import { appendFile } from 'fs/promises';
await appendFile('hello.txt', '\nThis is a new line.');

// Path module

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);//E:\nodejs\node-learning\app.js
const __dirname = path.dirname(__filename); //E:\nodejs\node-learning
const fullPath = path.join(__dirname,'files','myfile.txt');
await writeFile(fullPath, 'Hello from path module!');

console.log(fullPath);//:\nodejs\node-learning\files\myfile.txt
 
