import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
import db from './db.js';

app.use((req, res, next) => {
  console.log('Middleware called');
  next(); // Pass control to the next middleware ## dummy
});

// Routes
app.get('/', (req, res) => {
  //res.send('Hello from app.js!');
 /* 
 // Tell Express to serve all files in "public" as static assets
 app.use(express.static(path.join(__dirname, 'public')));*/
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// 🆕 Contact route
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});




/**
 * 
 * Now creating Rest api, using mysql db this is new step, DB connection in db.js
 * api route started here
 */ 
app.use(express.json());

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


// Create a user
app.post('/users', (req, res) => {

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {

    if (err) return res.status(500).json({ error: err.message });

    res.json({ id: result.insertId, name, email });
    
  });

});


export default app;