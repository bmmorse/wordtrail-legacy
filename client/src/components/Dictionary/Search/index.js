import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { errorAnimation } from './transition';
import { CSSTransition } from 'react-transition-group';
import v from '../../../Globals/VARIABLES';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;
`;

const Form = styled.form`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  max-width: 768px;
  position: relative;
  width: 100%;

  .labelWrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  label {
    font-size: 1.25rem;
    color: #25564d;
    line-height: 2rem;
    margin: 2.5rem 0 2rem 0; // 72px 64px
    @media (min-width: 64rem) {
      margin: 4.5rem 0 4rem 0; // 72px 64px
    }
  }
`;

const InputWrapper = styled.div`
  align-items: baseline;
  border-radius: 8px;
  background: #e1fdfa;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.29), 0 0 16px 0 rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  height: 64px;
  position: relative;
  ${errorAnimation('error')}

  input {
    background: none;
    border: none;
    color: hsla(0, 0%, 0%, 0.64);
    font-family: ${v.helvetica};
    font-size: 1rem;
    line-height: 1.5rem;
    height: 24px;
    outline: none;
    width: 80%;
    position: absolute;
    top: 20px;
    left: 24px;

    &::-webkit-search-cancel-button {
      display: none;
    }

    &::placeholder {
      color: hsla(0, 0%, 0%, 0.64);
    }
  }

  button {
    color: #25564d;
    background: #c2f1e9;
    border: none;
    border-radius: 0.5rem;
    font-family: ${v.helvetica};
    font-size: 1rem;
    line-height: 1;
    outline: none;
    padding: 1rem 2rem;
    position: absolute;
    top: 8px;
    right: 8px;
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
    this.TESTING = 2;
  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { dictionary } = this.props;
    this.inputRef.current.blur();
    this.setState({ inputValue: '' });

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
        this.setState({ inputValue: '' });
        this.inputRef.current.blur();
        dictionary.update({ error: true, loading: false });
        this.inputRef.current.placeholder = 'No result';
      });
  };

  render() {
    const { dictionary } = this.props;
    return (
      <Container>
        <Form action='.' onSubmit={this.onSubmit} className='FORM'>
          <div className='labelWrapper'>
            <label htmlFor='word'>search the dictionary</label>
          </div>

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
                  dictionary.update({ error: false });
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
