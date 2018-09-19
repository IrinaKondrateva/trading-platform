import React, { PureComponent } from 'react';
import styled from 'styled-components';
import logowhite from '../Logo-white.svg';

const TradeFooter = styled.footer`
  width: 100%;
  height: 100px;
  color: #fff;
  font-size: 14px;
  font-weight: 100;
  background-color: #1f2022;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const TradeFooterWrapper = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TradeFooterLogo = styled.img`
  width: 180px;
`;

const TradeFooterInfo = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Footer extends PureComponent {
  render() {
    return (
      <TradeFooter>
        <TradeFooterWrapper>
          <TradeFooterInfo>
            <p>Домашнее задание LoftSchool по курсу 'React'.</p>
            <p style={{ paddingTop: '5px' }}>Выполнила:  Кондратьева Ирина</p>
          </TradeFooterInfo>
          <TradeFooterLogo src={logowhite} alt="logo" />
        </TradeFooterWrapper>
      </TradeFooter>
    )
  }
};

export default Footer;