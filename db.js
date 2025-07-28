// db.js
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shop'
});

connection.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

export default connection;
