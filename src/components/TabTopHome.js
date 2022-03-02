import React from 'react';
import styled from 'styled-components/native';
import ImagemTop from '../assets/img/imagem-top.svg';
import Logo from '../assets/img/logo.svg';

const TabTop = styled.View`
  background-color: ${(props) => props.theme.container};
  flex-direction: row;
  elevation: 1;
  padding: 35px 0 10px;
  justify-content: center;
  align-items: center;
`;

const TabTopLeft = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabTopMiddle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const TabTopRight = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabTopMiddleTitleBold = styled.Text`
  font-size: 22px;
  font-family: 'Poppins-Bold';
  letter-spacing: 1px;
  color: ${(props) => props.theme.title};
`;
const TabTopMiddleTitleLight = styled.Text`
  font-size: 9px;
  font-family: 'Poppins-LightItalic';
  letter-spacing: 1px;
  color: ${(props) => props.theme.title};
  margin-top: -8px;
`;

export default () => {
  return (
    <TabTop>
      <TabTopLeft>
        <Logo />
      </TabTopLeft>
      <TabTopMiddle>
        <TabTopMiddleTitleBold>Hinário</TabTopMiddleTitleBold>
        <TabTopMiddleTitleLight>Adventista do 7º dia</TabTopMiddleTitleLight>
      </TabTopMiddle>
      <TabTopRight>
        <ImagemTop />
      </TabTopRight>
    </TabTop>
  );
};
