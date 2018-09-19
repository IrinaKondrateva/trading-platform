import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import logowhite from '../Logo-white.svg';
// import {
//   registrationRequest,
//   loginRequest,
//   getIsAuthorized,
//   getRegistationError,
//   getLoginError
// } from '../../ducks/auth';

const TradeHeader = styled.header`
  width: 100%;
  height: 80px;
  color: #fff;
  background-color: #2b2c2e;
`;

const TradeHeaderWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TradeHeaderLogo = styled.img`
  width: 180px;
`;

const TradeHeaderCurrency = styled.div`
  display: flex;
`;

const CurrencyBlock = styled.div`
  height: 80px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const TradeHeaderUser = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const HeaderButton = styled.button`
  width: 100px;
  padding: 5px 0 3px;
  color: #fff;
  font-size: 12px;
  background-color: #69b3dc;;
  border: none;
  border-radius: 3px;
  letter-spacing: 1.1px;
  cursor: pointer;
`;

class Header extends PureComponent {
  render() {
    return (
      <TradeHeader>
        <TradeHeaderWrapper>
          <TradeHeaderLogo src={logowhite} alt="logo" />
          <TradeHeaderCurrency>
            <CurrencyBlock>
              123
              <b>1 BTC</b>
            </CurrencyBlock>
            <CurrencyBlock>
              456
              <b>1 ETH</b>
            </CurrencyBlock>
          </TradeHeaderCurrency>
          <TradeHeaderUser>
            <span>useremail@mail.ru</span>
            <HeaderButton>
              Выйти
            </HeaderButton>
          </TradeHeaderUser>
        </TradeHeaderWrapper>
      </TradeHeader>
    )
  };
};

export default Header;