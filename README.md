
# User Management API

Backend Node.js/Express per la gestione degli utenti con MongoDB.

<p align="center">
  <img src="img/cover.jpg" alt="Cover" width="100%" />
</p>

## 🚀 Caratteristiche

- API RESTful
- Integrazione MongoDB
- Autenticazione con token
- Filtri avanzati sugli utenti
- Schema validazione dati

## 🛠 Tecnologie

- Node.js
- Express
- MongoDB con Mongoose
- Dotenv
- Nodemon (development)

## 📦 Installazione

```bash
npm install
```

## ⚙️ Configurazione

Crea un file `.env` nella root del progetto:

```
MONGODB_URI=il_tuo_url_mongodb
MY_SECRET_TOKEN=il_tuo_token_segreto
```

## 🚀 Avvio

```bash
npm run dev
```

Il server sarà in ascolto sulla porta 8913

## 📝 API Endpoints

Tutti gli endpoint richiedono un token di autenticazione nell'header:
`Authorization: il_tuo_token_segreto`

- `GET /utenti/attivi` - Recupera utenti attivi
- `GET /utenti/eta/maggiore-26` - Utenti con età > 26
- `GET /utenti/eta/tra-26-e-30` - Utenti con età tra 26 e 30
- `GET /utenti/occhi/brown-blue` - Utenti con occhi marroni o blu
- `GET /utenti/occhi/non-green` - Utenti con occhi non verdi
- `GET /utenti/occhi/non-green-blue` - Utenti con occhi né verdi né blu
- `GET /utenti/fitcore/email` - Email degli utenti di FITCORE

### Struttura JSON Utente

```json
{
  "isActive": Boolean,
  "age": Number,
  "eyeColor": String,
  "company": String,
  "email": String,
  "name": Object
}
```

Esempio:
```json
{
  "isActive": true,
  "age": 28,
  "eyeColor": "brown",
  "company": "FITCORE",
  "email": "user@example.com",
  "name": {
    "first": "Mario",
    "last": "Rossi"
  }
}
```

## 👤 Autore
Progetto creato da [Henry](https://github.com/henry8913) per scopi didattici.

## 📄 Licenza

Questo progetto è rilasciato sotto licenza [MIT](https://github.com/henry8913/6_Node-Express-MongoDB-CH2_Back-end.git/blob/main/LICENSE.txt). Consulta il file `LICENSE` per maggiori dettagli.
