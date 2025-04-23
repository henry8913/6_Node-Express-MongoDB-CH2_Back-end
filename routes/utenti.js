// routes/utenti.js
const express = require('express');
const router = express.Router();
const Utente = require('../models/Utente');
const auth = require('../middlewares/auth');

// GET isActive === true
router.get('/attivi', auth, async (req, res) => {
  const utenti = await Utente.find({ isActive: true });
  res.json({ totale: utenti.length, utenti });
});

// GET age > 26
router.get('/eta/maggiore-26', auth, async (req, res) => {
  const utenti = await Utente.find({ age: { $gt: 26 } });
  res.json({ totale: utenti.length, utenti });
});

// GET 26 < age <= 30
router.get('/eta/tra-26-e-30', auth, async (req, res) => {
  const utenti = await Utente.find({ age: { $gt: 26, $lte: 30 } });
  res.json({ totale: utenti.length, utenti });
});

// eyes === "brown" o "blue"
router.get('/occhi/brown-blue', auth, async (req, res) => {
  const utenti = await Utente.find({ eyeColor: { $in: ['brown', 'blue'] } });
  res.json({ totale: utenti.length, utenti });
});

// eyes !== "green"
router.get('/occhi/non-green', auth, async (req, res) => {
  const utenti = await Utente.find({ eyeColor: { $ne: 'green' } });
  res.json({ totale: utenti.length, utenti });
});

// eyes !== "green" && !== "blue"
router.get('/occhi/non-green-blue', auth, async (req, res) => {
  const utenti = await Utente.find({ eyeColor: { $nin: ['green', 'blue'] } });
  res.json({ totale: utenti.length, utenti });
});

// company === "FITCORE" e mostra solo email
router.get('/fitcore/email', auth, async (req, res) => {
  const utenti = await Utente.find({ company: 'FITCORE' }, { email: 1, _id: 0 });
  res.json({ totale: utenti.length, email: utenti });
});

module.exports = router;
