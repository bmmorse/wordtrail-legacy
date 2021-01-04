import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import VAR from '../Globals/VARIABLES';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  body {
    color: ${VAR.dg1};
    font-family: ${VAR.helvetica};
  }

  a,
  a:visited {
    display: block;
    color: ${VAR.dg1};
    line-height: 1.5;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.5;  
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .App {
    position: relative;
    width: 100%;
    min-height: 100vh;
  } 
  
  .RouteContainer {
    position: relative;
  }

`;

export default class Globals extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <GlobalStyle />
      </>
    );
  }
}
