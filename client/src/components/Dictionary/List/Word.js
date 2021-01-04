import React from 'react';
import styled from 'styled-components';
import v from '../../../Globals/VARIABLES';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import deleteButton from './deleteButton.svg';

const cssAnimation = (name) => `
  &.${name}-enter {
    opacity: 0;
  }
  &.${name}-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  &.${name}-exit{
    opacity: 1;
  }

  &.${name}-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const Container = styled.div`
  background: #c2f1e9;
  // box-shadow: -2px -2px 4px 0px hsla(0, 0%, 100%, 0.48),
  //   2px 2px 4px -2px hsla(0, 0%, 0%, 0.48);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem 3rem 3rem;
  position: relative;
  margin: 2rem 0 0 0;
  max-width: 768px;
  width: 100%;
  ${cssAnimation('word')}

  p.partofspeech {
    font-size: 1rem;
    color: hsla(0, 0%, 0%, 0.64);
    line-height: 1;
    margin: 0 0 0.25rem 0;
  }

  h3.word {
    font-size: 2rem;
    color: #072b5a;
    line-height: 1.5;
  }

  p.definition {
    font-size: 1rem;
    color: hsla(0, 0%, 0%, 0.64);
    line-height: 1.5rem;
  }
`;

const Divider = styled.div`
  background: hsla(0, 0%, 0%, 0.08);
  border-radius: 0.5rem;
  height: 2px;
  margin: 8px 0 24px 0;
  width: 256px;
`;

const DeleteButton = styled.button`
  align-items: center;
  background: #25564d;
  border: none;
  border-radius: 0 0.5rem 0 0.5rem;
  display: flex;
  outline: none;
  padding: 1rem;
  position: absolute;
  top: 0px;
  right: 0px;
`;

/**
 * @prop {word} word | the specific word object, from state.wordList in <Dictionary />
 * {id, word, partOfSpeech, definition}
 *
 * @prop {dictionary} object | state and setState from <Dictionary />
 * {state, update}
 *
 */
export default function Word({ word, dictionary }) {
  /**
   * the word object removes itself from dictionary.state.wordList,
   * and then updates state.wordList in <Dictionary />
   */
  const handleClick = () => {
    const filterList = dictionary.state.wordList.filter(
      (obj) => obj.id !== word.id
    );

    dictionary.update({
      wordList: filterList,
    });
  };

  return (
    <Container>
      <h3 className='word'>{word.word}</h3>
      <p className='partofspeech'>{word.partOfSpeech}</p>

      <Divider />
      <p className='definition'>{word.definition}</p>

      <DeleteButton onClick={handleClick}>
        <img src={deleteButton} alt='' />
      </DeleteButton>
    </Container>
  );
}
