import React from 'react';
import styled from 'styled-components';
import v from '../../Globals/VARIABLES';
import { Link } from 'react-router-dom';

const Outer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${v.media640};
  text-align: center;
  width: 100%;

  h1,
  h2 {
    color: ${v.dg2};
  }

  h1 {
    margin: 4rem 0 1rem 0;
  }

  a {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 0.72px;
    line-height: 3rem;
  }

  h2,
  span {
    font-size: 1rem;
    font-weight: 400;

    line-height: 1.5;
    margin: 0 0 2rem 0;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.words = [
      'delve into',
      'explore',
      'glance at',
      'investigate',
      'jump around',
      'meander through',
      'navigate',
      'probe',
      'query',
      'scout',
      'search',
      'sift through',
      'tour',
      'traverse',
    ];
    this.state = {
      animatedPosition: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.animatedPosition < this.words.length - 1) {
        this.setState({
          animatedPosition: this.state.animatedPosition + 1,
        });
      } else {
        this.setState({ animatedPosition: 0 });
      }
    }, 1000);
  }

  render() {
    return (
      <Outer>
        <Inner>
          <h2>
            helps you <span>{this.words[this.state.animatedPosition]} </span>{' '}
            the dictionary
          </h2>
        </Inner>
      </Outer>
    );
  }
}

export default Header;
