import React from 'react';
import { v4 as uuid } from 'uuid'; // uuid()

// State.js provides an overview of <App/> level state and sample data

// Word Object
const word = {
  id: uuid(),
  word: '',
  partOfSpeech: '',
  definition: '',
};

function MakeWord(word, partOfSpeech, definition) {
  return { id: uuid(), word, partOfSpeech, definition };
}

const fakeState = [
  MakeWord(
    'hey',
    'Interjection',
    'used to attract attention, to express surprise, interest, or annoyance, or to elicit agreement'
  ),
];

export default fakeState;
