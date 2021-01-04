import React from 'react';
import Routes from './Routes/index';
import Globals from './Globals/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Globals />
        <div className='App'>
          <Routes CONFIG={this.config} />
        </div>
      </>
    );
  }
}

export default App;
