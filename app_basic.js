//## below to for use module system of javascript 

/*
basic javascript
//const add = require('./math'); 
//console.log("Sum is:", add(10, 3));
*/

// ES6 with single function exist  javascript

import add from './math.js';
console.log("Sum is:", add(10, 3));


// ES6 with multiple function exist  javascript

import {greetd, nodeHello} from './greet.js';
console.log(greetd("mansha singhal"));
console.log(nodeHello("singhal"));

// file system */
import { writeFile } from 'fs/promises';
await writeFile('hello.txt', 'Hello from Node.js!');

//read file
import { readFile } from 'fs/promises'; 
const data = await readFile('hello.txt', 'utf-8');
console.log('File content:', data);

//append text into file
import { appendFile } from 'fs/promises';
await appendFile('hello.txt', '\nThis is a new line.');

// Path module

import path from 'path';
import { fileURLToPath } from 'url';

const __filename    = fileURLToPath(import.meta.url);//E:\nodejs\node-learning\app.js
const __dirname     = path.dirname(__filename); //E:\nodejs\node-learning
const fullPath      = path.join(__dirname,'files','myfile.txt');
await writeFile(fullPath, 'Hello from path module!');

console.log(fullPath);//:\nodejs\node-learning\files\myfile.txt

const result = path.resolve('folder', 'file.txt');
console.log(result); // e.g., '/Users/me/project/folder/file.txt'


/*
//# create http server using node js

import http from 'http';
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Home Page</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Us Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
*/

//## create server with express packages
import express from 'express';
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Express server is running at http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('🏠 Home Page');
});

app.get('/about', (req, res) => {
  res.send('ℹ️ About Page');
});

app.use((req, res) => {
  res.status(404).send('❌ Page Not Found');
});