import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

/**
 * RouteAnimation.js encapsulates the functionalty needed for animating
 * route transitions
 */

/**
 * TIMEOUT is used in 2 places
 *   1.  it's the number inside the CSS .name-enter-active transition classes
 *   2.  it's the prop <CSSTransition timeout={TIMEOUT} ... />
 */
const TIMEOUT = 1000;

function routeAnimation(name) {
  return `
  &.${name}-enter {
    opacity: 0;
  }
  &.${name}-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }
  &.${name}-exit{
    opacity: 1;
  }

  &.${name}-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
`;
}

const RouteWrapper = styled.div`
  position: absolute;
  width: 100%;
  ${routeAnimation('route')}
`;

/**
 * @props {string} path | the path string that will be the route
 */
export default class MakeRoute extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route exact path={this.props.path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={TIMEOUT}
            classNames='route'
            unmountOnExit
          >
            <RouteWrapper>{this.props.children}</RouteWrapper>
          </CSSTransition>
        )}
      </Route>
    );
  }
}
