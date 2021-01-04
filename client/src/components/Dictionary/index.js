import React from 'react';
import Search from './Search/index';
import List from './List/index';
import fakeState from '../../Globals/State';

/**
 * @props {object} config
 * @props {object} state | <App/> level state
 * @props {function} updateState | <App/> level setState()
 */
export default class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    /**
     * this.state.error @type {boolean} | default false
     *   toggles true error is returned from api request
     *
     * this.state.loading @type {boolean} | default false
     *   toggles true while waiting for api request to complete
     *
     * this.state.wordList @type {array}
     *   an array of Word objects, wordList = [word, word, ...];
     *
     *   const Word = {
     *     id: uuid(),
     *     word: '',
     *     partOfSpeech: '',
     *     definition: '',
     *   }
     */
    this.state = {
      error: false,
      loading: false,
      wordList: [],
    };

    this.setState = this.setState.bind(this);
  }

  render() {
    const dictionary = { state: this.state, update: this.setState };

    return (
      <>
        <Search dictionary={dictionary} />
        <List dictionary={dictionary} />
      </>
    );
  }
}
