import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ##Middleware
//app.use(express.json());


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

// 404 fallback
app.use((req, res) => {
  res.status(404).send('❌ Page Not Found');
});

export default app;