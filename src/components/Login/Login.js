import React, { Fragment, PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';
import usershape from './user-shape.svg';
import lock from './padlock-unlock.svg';
import {
  registrationRequest,
  loginRequest,
  getIsAuthorized,
  getRegistationError,
  getLoginError
} from '../../ducks/auth';

const DivLoginWrapper = styled.div`
  background-color: #f5f5f6;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivContainer = styled.div`
  width: 440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;

  form {
    background-color: #fff;
    border-radius: 7px;
    padding: 9px 0;
    width: 100%;
    margin: 11px 0;
    position: relative;
    border: 1px solid #c3c3c3;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      content: '';
      border-radius: 7px;
      background: transparent;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      box-shadow: 0px 0px 68px 4px rgba(0, 0, 0, 0.23);
    }
  }

  .logo {
    width: 300px;
    height: 144px;
    fill: pink;
  }

  input {
    margin: 10px 0;
    padding: 16px 6px 16px 53px;
    border: 1px solid #dfdfdf;
    border-radius: 7px;
    width: calc(100% - 62px);
    font-size: 16px;
  }
`;

const InputDiv = styled.div`
  width: 400px;
  position: relative;
`;

const EmailSpan = styled.span`
  background-image: url(${usershape});
  width: 19px;
  height: 19px;
  opacity: 0.4;
  background-size: cover;
  position: absolute;
  top: 25px;
  left: 21px;
`;

const PasswordSpan = EmailSpan.extend`
  background-image: url(${lock});
`;

const Button = styled.button`
  height: 50px;
  width: 400px;
  margin: 10px 0;
  padding: 12px 0;
  background-color: #4db6e2;
  color: #fff;
  border: none;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 1.1px;
  cursor: pointer;
`;

const ErrorP = styled.p`
  color: grey;
`;

const DivLoginOrRegister = styled.div`
  width: 100%;
  height: 28px;
  margin: 11px 0;
  padding: 9px 0;
  background-color: #fff;
  border: 1px solid #c3c3c3;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    border-radius: 7px;
    background: transparent;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    box-shadow: 0px 0px 68px 4px rgba(0, 0, 0, 0.23);
  }
`;

const Input = ({ input, placeholder, meta }) => {
  return (
    <Fragment>
      <input {...input} placeholder={placeholder} />
      {meta.error && meta.touched && <span style={{ color: 'grey' }}>{meta.error}</span>}
    </Fragment>
  );
};

const formValidation = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

export class Login extends PureComponent {
  state = {
    isLogin: true
  };

  handleSubmit = values => {
    const { registrationRequest, loginRequest } = this.props;

    this.state.isLogin ? loginRequest(values) : registrationRequest(values);
  };

  handleLoginOrRegister = e => {
    e.preventDefault();
    this.setState({ isLogin: !this.state.isLogin });
  };

  render() {
    const { isLogin } = this.state;
    const { isAuthorized, registationError, loginError  } = this.props;

    if (isAuthorized) {
      return <Redirect to="/profile" />;
    }

    return (
      <DivLoginWrapper>
        <DivContainer>
          <img className="logo" src={logo} alt="logo" />
          <Form
            initialValues={{ email: '', password: '' }}
            onSubmit={this.handleSubmit}
            validate={formValidation}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <InputDiv>
                  <EmailSpan />
                  <Field name="email" type="email" placeholder="email" component={Input} />
                </InputDiv>
                <InputDiv>
                  <PasswordSpan />
                  <Field name="password" type="text" placeholder="password" component={Input} />
                </InputDiv>
                {registationError && <ErrorP>{registationError}</ErrorP>}
                {loginError && <ErrorP>{loginError}</ErrorP>}
                <Button type="submit">
                  {isLogin && 'Войти'}
                  {!isLogin && 'Зарегистрироваться'}
                </Button>
              </form>
            )}
          />
          <DivLoginOrRegister>
            {isLogin && (
              <p>
                Впервые на сайте?
                <a onClick={this.handleLoginOrRegister} href="">
                  Регистрация
                </a>
              </p>
            )}
            {!isLogin && (
              <p>
                Уже зарегистрированы?
                <a onClick={this.handleLoginOrRegister} href="">
                  Войти
                </a>
              </p>
            )}
          </DivLoginOrRegister>
        </DivContainer>
      </DivLoginWrapper>
    );
  }
};

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  registationError: getRegistationError(state),
  loginError: getLoginError(state)
});

const mapDispatchToProps = { registrationRequest, loginRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);