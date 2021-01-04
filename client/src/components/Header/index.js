import React from 'react';
import styled from 'styled-components';
import v from '../../Globals/VARIABLES';
import { Link } from 'react-router-dom';
import background from './background.svg';

const Container = styled.div`
  align-items: baseline;
  background: none;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 2rem;
  }

  @media (min-width: 1440px) {
    padding: 2rem 4rem;
  }

  a {
    color: ${v.dg3};
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    letter-spacing: 0.4px;

    &.nav {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1;
    }
  }
`;

const Background = styled.div`
  // background: url(${background}) no-repeat;
  background-color: #9ae0d3;
  background-size: 100%;
  background-position: fixed;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  width: 100%;
  z-index: -100;
`;

export default class Header extends React.Component {
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

  render() {
    return (
      <>
        <Background className='BACKGROUND' />
        <Container>
          <Link to='/'>wordtrail</Link>
          <Link to='/about' className='nav'>
            about
          </Link>
        </Container>
      </>
    );
  }
}
