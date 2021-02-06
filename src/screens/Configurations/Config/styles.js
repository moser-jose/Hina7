import React from 'react';
import styled from 'styled-components/native';

export const Scroller = styled.View`
  background-color: ${(props) => props.theme.background};
  padding: 0 10px;
  flex: 30;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
`;
export const Temas = styled.View`
  flex-direction: row;
  elevation: 2;
  height: 160px;
  width: 100%;
  margin: 20px 1px;
  background-color: ${(props) => props.theme.container};
  border-radius: 2px;
`;
export const TemasLeft = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
export const TemasLeftTheme = styled.TouchableOpacity`
  flex: 1;
  elevation: 2;
  height: 100px;
  width: 80px;
  border-radius: 2px;
  overflow: hidden;
`;
export const TemasRigt = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
export const Lista = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 0;
`;
export const ListaLi = styled.Text`
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.title};
`;
export const Line = styled.View`
  background-color: #ccc;
  height: 1px;
  width: 100%;
`;
export const TemasLista = styled.View`
  elevation: 2;
  width: 100%;
  margin: 0 1px 20px 1px;
  background-color: ${(props) => props.theme.container};
  border-radius: 2px;
  padding: 0 12px 10px;
`;
export const ListaLiInf = styled.Text`
  margin-top: -12px;
  letter-spacing: 1px;
  font-size: 12px;
  color: #aaa;
`;
