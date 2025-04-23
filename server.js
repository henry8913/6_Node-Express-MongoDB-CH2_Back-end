// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const utentiRoutes = require('./routes/utenti');

const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Mongo connection error:", err));

app.use(express.json());
app.use('/utenti', utentiRoutes);

const PORT = process.env.PORT || 8913;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
