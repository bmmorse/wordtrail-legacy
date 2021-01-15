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
    color: #25564d;
    font-family: 'HelveticaNeue-Medium', ${v.helvetica};
    font-size: 1.5rem;
    line-height: 1;

    &.nav {
      font-size: 0.75rem;
      line-height: 1;
      font-family: 'HelveticaNeue-Medium', ${v.helvetica};
    }
  }
`;

const Background = styled.div`
  background: url(${background}) no-repeat;
  background-color: white;
  background-position: top 120px center;
  background-size: 100%;
  height: 100vh;
  min-height: 100vh;
  position: fixed;
  overflow: hidden;
  width: 100%;
  z-index: -100;

  @media (min-width: 64rem) {
    background-position: top 150px center;
  }

  &.about {
    background-color: #f1c2c2;
  }
`;

/**
 *
 */
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Background className={this.props.page} />
        <Container>
          <Link
            to={{
              pathname: '/',
              state: { refresh: true },
            }}
          >
            wordtrail
          </Link>
          <Link to='/about' className='nav'>
            about
          </Link>
        </Container>
      </>
    );
  }
}
