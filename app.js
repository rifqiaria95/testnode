const express = require('express');
const app = express();
const PORT = 3000;

// Middleware biar bisa baca JSON dari body request
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Halo dari Node.js + Express 👋');
});

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});