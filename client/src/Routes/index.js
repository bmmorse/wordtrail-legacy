import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header/index';
import Dictionary from '../components/Dictionary/index';
import About from '../components/About/index';

// Route Animation
import MakeRoute from './MakeRoute';

/**
 * @props {object} config | the config object from <App />
 */
export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='RouteContainer'>
          <Route exact path='/'>
            {({ match }) => (
              <MakeRoute match={match}>
                <Header />
                <Dictionary CONFIG={this.props.config} />
              </MakeRoute>
            )}
          </Route>

          <Route exact path='/about'>
            {({ match }) => (
              <MakeRoute match={match}>
                <Header />
                <About />
              </MakeRoute>
            )}
          </Route>
        </div>
      </>
    );
  }
}
