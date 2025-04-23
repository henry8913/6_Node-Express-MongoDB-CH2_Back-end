
const mongoose = require('mongoose');

const utenteSchema = new mongoose.Schema({
  isActive: Boolean,
  age: Number,
  eyeColor: String,
  company: String,
  email: String,
  name: Object,
});

module.exports = mongoose.model('Utente', utenteSchema, 'utenti');

