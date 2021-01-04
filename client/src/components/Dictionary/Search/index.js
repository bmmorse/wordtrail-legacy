import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import v from '../../../Globals/VARIABLES';
import { errorAnimation } from './transition';
import { CSSTransition } from 'react-transition-group';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
`;

const Form = styled.form`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  max-width: 768px;
  position: relative;
  width: 100%;

  label {
    align-self: center;
    font-size: 12px;
    color: hsla(0, 0%, 0%, 0.64);
    letter-spacing: 0;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
`;

const InputWrapper = styled.div`
  border-radius: 8px;
  display: flex;
  background: #e1fdfa;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.29), 0 0 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  ${errorAnimation('error')}

  input {
    background: none;
    border: none;
    color: hsla(0, 0%, 0%, 0.64);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin: 16px 24px;
    width: 100%;

    &::-webkit-search-cancel-button {
      display: none;
    }

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: hsla(0, 0%, 0%, 0.64);
    }
  }

  button {
    color: #25564d;
    background: #9ae0d3;
    border: none;
    border-radius: 8px;
    margin: 4px;
    outline: none;
    padding: 12px 36px;
  }
`;

/**
 * @prop {object} dictionary
 *    dictionary.state - state object from <Dictionary/>
 *    dictionary.update - update <Dictionary/> state
 */
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      inputValue: '',
    };
    /**
     * TESTING sets whether the App is testing
     *
     *   TESTING = 0 | test mode
     *           = 1 | query Oxford entry endpoint
     *           = 2 | query Oxford lemma endpoint, then query Oxford entry
     */
    this.TESTING = 1;
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { dictionary } = this.props;
    this.setState({ inputValue: '' });
    this.inputRef.current.blur();

    const routes = [
      `/test/${this.state.inputValue}`,
      `/api/single/${this.state.inputValue}`,
      `/api/double/${this.state.inputValue}`,
    ];

    e.preventDefault();
    dictionary.update({ loading: true });
    axios
      .get(routes[this.TESTING])
      .then((response) => {
        dictionary.update({
          error: false,
          loading: false,
          wordList: [response.data, ...dictionary.state.wordList],
        });
      })
      // ERRORS
      .catch((err) => {
        dictionary.update({ error: true, loading: false });
        this.inputRef.current.blur();
        this.inputRef.current.placeholder = 'No result';
        this.setState({ inputValue: '' });
      });
  };

  render() {
    const { dictionary } = this.props;
    return (
      <Container>
        <Form action='.' onSubmit={this.onSubmit} className='FORM'>
          <label htmlFor='word'>search the dictionary</label>

          <CSSTransition
            in={dictionary.state.error}
            timeout={500}
            classNames='error'
          >
            <InputWrapper>
              <input
                ref={this.inputRef}
                type='search'
                name='word'
                autoComplete='on'
                autoCapitalize='off'
                autoCorrect='on'
                value={this.state.inputValue}
                placeholder={
                  dictionary.state.loading ? 'Loading...' : 'enter a word'
                }
                onChange={this.onChange}
                onClick={(e) => {
                  e.target.placeholder = '';
                }}
                onFocus={(e) => {
                  e.target.placeholder = '';
                }}
                onBlur={(e) => {
                  e.target.placeholder = 'enter a word';
                }}
              />

              <button>submit</button>
            </InputWrapper>
          </CSSTransition>
        </Form>
      </Container>
    );
  }
}
