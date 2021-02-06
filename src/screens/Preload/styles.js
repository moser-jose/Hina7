import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  padding-top: 30px;
  position: relative;
`;
export const TituloApp = styled.View`
  width: 100%;
  text-align: center;
  margin-top: 5px;
`;
export const TituloBold = styled.Text`
  color: ${(props) => props.theme.title};
  font-family: 'Poppins-Bold';
  font-size: 30px;
  letter-spacing: 1px;
  text-align: center;
`;
export const TituloLightItalic = styled.Text`
  color: ${(props) => props.theme.title};
  font-family: 'Poppins-LightItalic';
  font-size: 12px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: -15px;
`;
export const BemvindoApp = styled.View`
  width: 100%;
  position: absolute;
  bottom: 30px;
`;
export const BemvindoAppText = styled.Text`
  color: ${(props) => props.theme.title};
  font-family: 'Poppins-Bold';
  font-size: 20px;
  letter-spacing: 1px;
  text-align: center;
`;
export const BemvindoAppVersao = styled.Text`
  color: ${(props) => props.theme.title};
  font-family: 'Poppins-Bold';
  font-size: 10px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: -6px;
`;

export const IconLoad = styled.View`
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
`;

export const IconLoading = styled.ActivityIndicator``;
