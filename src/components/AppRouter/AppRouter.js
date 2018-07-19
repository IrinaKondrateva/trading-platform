import React, { PureComponent } from 'react';
import Login from '../Login';
import styled from 'styled-components';

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

class AppRouter extends PureComponent {
  render() {
    return (
      <Main>
        <AuthDivWrapper>
          <Login />
        </AuthDivWrapper>
      </Main>
    );
  }
}

export default AppRouter;
