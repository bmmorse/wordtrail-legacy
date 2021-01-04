const router = require('express').Router();
const axios = require('axios');
const api = require('./helpers');
const headers = api.headers;
const { v4: uuidv4 } = require('uuid');

router.get('/:input', (req, res, next) => {
  setTimeout(() => {
    const word = {
      word: req.params.input,
      definition: `the definition of ${req.params.input}`,
      partOfSpeech: `Noun`,
      id: uuidv4(),
    };

    if (word.word === 'error') {
      res.status(400).send('testing error');
    } else {
      res.send(word);
    }
  }, 1000);
});

module.exports = router;
