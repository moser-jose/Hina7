import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  position: relative;
  padding-bottom: 108px;
`;

export const Scroller = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ScrollView = styled.View`
  flex: 1;
`;
export const HinoPesq = styled.View`
  width: 100%;
`;
export const PesquisarConp = styled.View`
  background-color: ${(props) => props.theme.container};
  flex-direction: row;
  height: 50px;
  elevation: 2;
  margin: 10px 0.5px;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 2px;
`;

export const PesquisarConpLeft = styled.View`
  flex: 8;
`;

export const PesquisarConpMiddle = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;
export const PesquisarCompMiddleBotao = styled.View``;
export const PesquisarCompMiddleBotaoTouch = styled.TouchableOpacity``;

export const TextImput = styled.TextInput`
  flex: 1;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.title};
  background-color: ${(props) => props.theme.container};
`;

export const EscolhaPesquisaContainer = styled.View`
  height: 40px;
  width: 100%;
  border-radius: 2px;
  elevation: 2;
  flex-direction: row;
  overflow: hidden;
`;
export const EscolhaPesquisa = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8px 4px;
  background-color: ${(props) => props.theme.container};
`;

export const TextoPesquisa = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 12px;
  text-align: center;
`;

export const Barra = styled.View`
  background-color: ${(props) => props.theme.title};
  width: 0.5px;
`;
