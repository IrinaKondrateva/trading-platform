import React, { Fragment, PureComponent } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import Header from '../Trade/Header';
import Footer from '../Trade/Footer';
import Particles from 'react-particles-js';
import particleParams from '../../particles-params';

const Greeting = () => <div>Hi there!</div>

class AppRouter extends PureComponent {
  render() {
    return (
      <Fragment>
        {checkLocationPath() && <Header />}
        <main>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/trade/btc" component={Greeting} />
            <Redirect to="/trade/btc" />
          </Switch>
          {window.location.pathname === "/" && <Particles params={particleParams} width="100%" height="100vh" />}
        </main>
        {checkLocationPath() && <Footer />}
      </Fragment>
    );
  }
}

function checkLocationPath() {
  return (window.location.pathname === "/trade/btc" || window.location.pathname === "/trade/eth");
}

export default withRouter(AppRouter);
