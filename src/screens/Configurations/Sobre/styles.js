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
export const Versao = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const VersaoTexto = styled.Text`
  font-family: 'Poppins-Bold';
  text-align: center;
  background-color: #ff4b63;
  padding: 4px 10px;
  border-radius: 2px;
  font-size: 10px;
  color: #fff;
  margin: 10px 0;
  text-align: center;
  width: 27%;
`;
export const TituloApp = styled.View`
  width: 100%;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
`;
export const TituloBold = styled.Text`
  color: ${(props) => props.theme.title};
  font-family: 'Poppins-Bold';
  font-size: 25px;
  letter-spacing: 1px;
  text-align: center;
`;
export const TituloLightItalic = styled.Text`
  color: ${(props) => props.theme.title};
  font-family: 'Poppins-LightItalic';
  font-size: 12px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: -13px;
`;

export const SobreTexto = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 16px;
  letter-spacing: 1px;
  margin: 20px 0 10px;
`;

export const SobreContaneir = styled.View``;
export const SobreContaneirBotao = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.container};
  elevation: 1;
  padding: 14px 10px;
  margin: 7px 1px;
  border-radius: 2px;
`;

export const SobreTextoCenterAutor = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 14px;
  font-family: 'Poppins-Bold';
  letter-spacing: 1px;
  margin-top: 20px;
`;

export const SobreTextoCenterAutorT = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 12px;
  font-family: 'Poppins-Regular';
  letter-spacing: 1px;
`;
