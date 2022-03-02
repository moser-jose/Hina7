import React from 'react';
import styled from 'styled-components/native';
import ImagemTop from '../assets/img/imagem-top.svg';

const TabTop = styled.View`
  background-color: ${(props) => props.theme.container};
  flex-direction: row;
  elevation: 1;
  
  justify-content: space-between;
  padding: 35px 10px 10px;
  align-items: center;
`;

const TabTopLeft = styled.View`
  justify-content: center;
  align-items: center;
`;
const TabTopLeftText = styled.Text`
  font-size: 20px;
  font-family: 'Poppins-Light';
  color: ${(props) => props.theme.title};
`;

const TabTopRight = styled.View`
  justify-content: center;
  align-items: center;
`;

export default ({titulo}) => {
  return (
    <TabTop>
      <TabTopLeft>
        <TabTopLeftText>{titulo}</TabTopLeftText>
      </TabTopLeft>
      <TabTopRight>
        <ImagemTop />
      </TabTopRight>
    </TabTop>
  );
};
