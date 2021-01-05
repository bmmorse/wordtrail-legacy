import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Word from './Word';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 2rem 1rem;
  width: 100%;
`;

/**
 * @prop {object} dictionary | state and setState from <Dictionary /> parent
 *   dictionary.state
 *   dictionary.update
 */
export default class List extends React.Component {
  render() {
    const { dictionary } = this.props;

    return (
      <Container>
        <TransitionGroup component={null}>
          {dictionary.state.wordList.map((word) => (
            <CSSTransition
              mountOnEnter={true}
              unmountOnExit={true}
              key={word.id}
              timeout={200}
              classNames='word'
            >
              <Word word={word} dictionary={dictionary} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    );
  }
}
