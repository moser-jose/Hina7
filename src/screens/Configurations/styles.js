import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  position: relative;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 0 10px;
`;
export const Configurations = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.container};
  elevation: 4;
  border-radius: 2px;
  padding: 6px 16px;
  margin-top: 10px;
`;
export const Line = styled.View`
  align-self: center;
  justify-content: center;
  background-color: #ccc;
  height: 1px;
  width: 100%;
`;

export const ConfigurationsBotao = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px 12px;
`;
export const ConfigurationsBotaoLeft = styled.View`
  flex: 1.5;
  align-self: center;
  justify-content: center;
`;

export const ConfigurationsBotaoMiddle = styled.View`
  flex: 9;
  align-self: center;
`;

export const ConfigurationsBotaoMiddleText = styled.Text`
  font-size: 18px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.title}; ;
`;
export const ConfigurationsBotaoRight = styled.View`
  flex: 1;
  align-self: center;
  flex-direction: row;
  justify-content: flex-end;
`;
