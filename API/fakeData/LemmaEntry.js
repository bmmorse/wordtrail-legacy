const lemma = {
  metadata: {
    provider: 'Oxford University Press',
  },
  results: [
    {
      id: 'attempted',
      language: 'en',
      lexicalEntries: [
        {
          inflectionOf: [
            {
              id: 'attempt',
              text: 'attempt',
            },
          ],
          language: 'en',
          lexicalCategory: {
            id: 'verb',
            text: 'Verb',
          },
          text: 'attempted',
        },
      ],
      word: 'attempted',
    },
  ],
};

const entry = {
  id: 'attempt',
  metadata: {
    operation: 'retrieve',
    provider: 'Oxford University Press',
    schema: 'RetrieveEntry',
  },
  results: [
    {
      id: 'attempt',
      language: 'en-gb',
      lexicalEntries: [
        {
          derivatives: [
            {
              id: 'attemptable',
              text: 'attemptable',
            },
          ],
          entries: [
            {
              etymologies: [
                'late Middle English: from Old French attempter, from Latin attemptare, from ad- ‘to’ + temptare ‘to tempt’',
              ],
              grammaticalFeatures: [
                {
                  id: 'transitive',
                  text: 'Transitive',
                  type: 'Subcategorization',
                },
              ],
              pronunciations: [
                {
                  audioFile:
                    'https://audio.oxforddictionaries.com/en/mp3/attempt_gb_1.mp3',
                  dialects: ['British English'],
                  phoneticNotation: 'IPA',
                  phoneticSpelling: 'əˈtɛm(p)t',
                },
              ],
              senses: [
                {
                  definitions: [
                    'make an effort to achieve or complete (something difficult)',
                  ],
                  examples: [
                    {
                      text: 'she attempted a comeback in 2001',
                    },
                    {
                      notes: [
                        {
                          text: 'with infinitive',
                          type: 'grammaticalNote',
                        },
                      ],
                      text: 'troops shot civilians who attempted to flee',
                    },
                  ],
                  id: 'm_en_gbus0056280.005',
                  shortDefinitions: ['make effort to do'],
                  subsenses: [
                    {
                      definitions: ['try to climb to the top of (a mountain)'],
                      examples: [
                        {
                          text:
                            'the expedition was the first to attempt Everest',
                        },
                      ],
                      id: 'm_en_gbus0056280.011',
                      shortDefinitions: ['try to climb'],
                    },
                    {
                      definitions: ['try to take (a life)'],
                      examples: [
                        {
                          text:
                            'he would not have attempted the life of a friend',
                        },
                      ],
                      id: 'm_en_gbus0056280.012',
                      registers: [
                        {
                          id: 'archaic',
                          text: 'Archaic',
                        },
                      ],
                      shortDefinitions: ['try to take life'],
                    },
                  ],
                  synonyms: [
                    {
                      language: 'en',
                      text: 'try',
                    },
                    {
                      language: 'en',
                      text: 'strive',
                    },
                    {
                      language: 'en',
                      text: 'aim',
                    },
                    {
                      language: 'en',
                      text: 'venture',
                    },
                    {
                      language: 'en',
                      text: 'endeavour',
                    },
                    {
                      language: 'en',
                      text: 'seek',
                    },
                    {
                      language: 'en',
                      text: 'set out',
                    },
                    {
                      language: 'en',
                      text: "do one's best",
                    },
                    {
                      language: 'en',
                      text: 'do all one can',
                    },
                    {
                      language: 'en',
                      text: "do one's utmost",
                    },
                    {
                      language: 'en',
                      text: 'make an effort',
                    },
                    {
                      language: 'en',
                      text: 'make every effort',
                    },
                    {
                      language: 'en',
                      text: 'spare no effort',
                    },
                    {
                      language: 'en',
                      text: "give one's all",
                    },
                    {
                      language: 'en',
                      text: 'take it on oneself',
                    },
                  ],
                  thesaurusLinks: [
                    {
                      entry_id: 'attempt',
                      sense_id: 't_en_gb0000951.001',
                    },
                  ],
                },
              ],
            },
          ],
          language: 'en-gb',
          lexicalCategory: {
            id: 'verb',
            text: 'Verb',
          },
          text: 'attempt',
        },
        {
          derivatives: [
            {
              id: 'attemptable',
              text: 'attemptable',
            },
          ],
          entries: [
            {
              pronunciations: [
                {
                  audioFile:
                    'https://audio.oxforddictionaries.com/en/mp3/attempt_gb_1.mp3',
                  dialects: ['British English'],
                  phoneticNotation: 'IPA',
                  phoneticSpelling: 'əˈtɛm(p)t',
                },
              ],
              senses: [
                {
                  definitions: [
                    'an effort to achieve or complete a difficult task or action',
                  ],
                  examples: [
                    {
                      notes: [
                        {
                          text: 'with infinitive',
                          type: 'grammaticalNote',
                        },
                      ],
                      text: 'an attempt to halt the bombings',
                    },
                  ],
                  id: 'm_en_gbus0056280.014',
                  semanticClasses: [
                    {
                      id: 'attempt',
                      text: 'Attempt',
                    },
                  ],
                  shortDefinitions: ['effort to achieve something'],
                  subsenses: [
                    {
                      constructions: [
                        {
                          text: 'attempt on',
                        },
                      ],
                      definitions: [
                        'an effort to surpass a record or conquer a mountain',
                      ],
                      examples: [
                        {
                          text: 'an attempt on the unclimbed north-east ridge',
                        },
                      ],
                      id: 'm_en_gbus0056280.017',
                      semanticClasses: [
                        {
                          id: 'attempt',
                          text: 'Attempt',
                        },
                      ],
                      shortDefinitions: ['effort to beat record'],
                    },
                    {
                      constructions: [
                        {
                          text: 'attempt on',
                        },
                      ],
                      definitions: ['a bid to kill someone'],
                      examples: [
                        {
                          text: "Karakozov made an attempt on the Tsar's life",
                        },
                      ],
                      id: 'm_en_gbus0056280.018',
                      semanticClasses: [
                        {
                          id: 'action',
                          text: 'Action',
                        },
                      ],
                      shortDefinitions: ['bid to kill'],
                    },
                    {
                      constructions: [
                        {
                          text: 'attempt at',
                        },
                      ],
                      definitions: [
                        'a thing produced as a result of trying to make or achieve something',
                      ],
                      examples: [
                        {
                          text:
                            'she picked her first attempt at a letter out of the wastebasket',
                        },
                      ],
                      id: 'm_en_gbus0056280.019',
                      semanticClasses: [
                        {
                          id: 'artefact',
                          text: 'Artefact',
                        },
                      ],
                      shortDefinitions: ['result of effort'],
                    },
                  ],
                  synonyms: [
                    {
                      language: 'en',
                      text: 'effort',
                    },
                    {
                      language: 'en',
                      text: 'endeavour',
                    },
                    {
                      language: 'en',
                      text: 'try',
                    },
                    {
                      language: 'en',
                      text: 'bid',
                    },
                    {
                      language: 'en',
                      text: 'venture',
                    },
                    {
                      language: 'en',
                      text: 'trial',
                    },
                    {
                      language: 'en',
                      text: 'experiment',
                    },
                  ],
                  thesaurusLinks: [
                    {
                      entry_id: 'attempt',
                      sense_id: 't_en_gb0000951.002',
                    },
                  ],
                },
              ],
            },
          ],
          language: 'en-gb',
          lexicalCategory: {
            id: 'noun',
            text: 'Noun',
          },
          text: 'attempt',
        },
      ],
      type: 'headword',
      word: 'attempt',
    },
  ],
  word: 'attempt',
};

module.exports = { lemma, entry };
