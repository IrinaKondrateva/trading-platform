import React, { PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
// import TradeOperations from '../TradeOperations/TradeOperations';
import Particles from 'react-particles-js';
import particleParams from '../../particles-params';
import { getIsAuthorized } from '../../ducks/auth';

const Main = styled.main`
  background-color: #f5f5f6;
  height: 100vh;
`;

const AuthDivWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Greeting = () => <div>Hi there!</div>

class AppRouter extends PureComponent {
  render() {
    const { isAuthorized } = this.props;

    return (
      <Main>
        <AuthDivWrapper>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/profile" component={Greeting} />
            <Redirect to="/profile" />
          </Switch>
        </AuthDivWrapper>
        {!isAuthorized && <Particles params={particleParams} width="100%" height="100vh" />}
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default withRouter(
  connect(
    mapStateToProps
  )(AppRouter)
);
