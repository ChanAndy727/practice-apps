require("dotenv").config();
const express = require("express");
const path = require("path");
const helpers = require('../helpers/dictionary.js')
const db = require('./db.js');

const app = express();
app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/words', (req, res) => {
  helpers.getWordDefinition(req.body.term)
    .then((data) => {
      db.exists(data[0].word, (err, doesExist) => {
        console.log(doesExist);
        if (err) {
          res.send(err);
        } else if (!doesExist) {
          db.save(data);
          res.send('added new word!')
        } else {
          res.send('Already exists')
        }
      })
      // db.save(data);
      // res.send('saved!');
    })
    .catch((err) => {
      res.send(err);
    })
})

app.get('/words', (req, res) => {
  db.getWords((err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log(data)
      res.send(data);
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
