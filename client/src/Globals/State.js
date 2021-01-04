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
    'Africa',
    'Noun',
    'the second largest continent, a southward projection of the Old World land mass divided roughly in two by the equator and surrounded by sea except where the Isthmus of Suez joins it to Asia'
  ),
  MakeWord('Exquisite', 'Adjective', 'extremely beautiful and delicate'),
  MakeWord(
    'Rendition',
    'Noun',
    'a performance or interpretation, especially of a dramatic role or piece of music'
  ),
];

export default fakeState;
