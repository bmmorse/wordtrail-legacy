// helpers.js provides helper functions used inside the API routes
const { v4: uuidv4 } = require('uuid');

/**
 * the base URL string for all the API requests
 */
const lemmaURL = 'https://od-api.oxforddictionaries.com/api/v2/lemmas/en-gb/';
const entryURL = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/';

/**
 * authentication object passed to axios.get()
 */
const HEADERS = {
  Accept: 'application/json',
  app_id: process.env.OXFORD_ID,
  app_key: process.env.OXFORD_KEY,
};

/**
 * input response.data from axios, output the lemma string
 *
 * @param {object} lemmaObject | response.data from axios
 * @returns {string} the lemma word
 */
function getLemma(lemmaObject) {
  return lemmaObject.results[0].lexicalEntries[0].inflectionOf[0].id;
}

/**
 * input response.data from axios, output a Word object
 *
 * @param {object} entryObject | response.data from axios
 * @returns {object} { id, word, partOfSpeech, definition }
 */
function getEntry(entryObject) {
  let result = {}; // create an object to fill with data and return
  result.hey = 'hey';

  result.id = uuidv4();

  // get the main word
  result.word = entryObject.id;

  // get the definition
  result.definition =
    entryObject.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];

  // get the part of speech
  result.partOfSpeech =
    entryObject.results[0].lexicalEntries[0].lexicalCategory.text;

  return result;
}

const API = {
  headers: HEADERS,
  getLemma,
  getEntry,
  lemmaURL,
  entryURL,
};

module.exports = API;
