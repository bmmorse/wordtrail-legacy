import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;

  div.wrapper {
    margin: 4rem 0 0 0;
    max-width: 756px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 2rem;
      margin: 0 0 2rem 0;
    }
  }
`;

export default function About() {
  return (
    <>
      <Container>
        <div className='wrapper'>
          <h2>About</h2>
          <p>Wordtrail is a dictionary app.</p>
        </div>
      </Container>
    </>
  );
}
