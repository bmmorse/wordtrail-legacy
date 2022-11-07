const router = require('express').Router();
const axios = require('axios');
const api = require('./helpers');
const headers = api.headers;

router.get('/double/:input', (req, res, next) => {
  // hit the Oxford lemma endpoint
  console.log(req.params.input);
  axios
    .get(`${api.lemmaURL}${req.params.input}`, { headers })
    .then((response) => {
      const lemma = api.getLemma(response.data);
      // if the lemma exists, hit the definition endpoint
      axios
        .get(`${api.entryURL}${lemma}`, { headers })
        .then((response) => {
          let wordObject = api.getEntry(response.data);
          res.send(wordObject);
          console.log(wordObject);
        })
        .catch(next);
    })
    .catch(next);
});

router.get('/single/:input', (req, res, next) => {
  // hit only the entry endpoint
  axios
    .get(`${api.entryURL}${req.params.input}`, { headers })
    .then((response) => {
      let wordObject = api.getEntry(response.data);
      res.send(wordObject);
    })
    .catch(next);
});

module.exports = router;
