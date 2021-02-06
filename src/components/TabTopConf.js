import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ConfContainer = styled.View`
  elevation: 2;
`;
const ConfContainerCont = styled.View`
  background-color: ${(props) => props.theme.container};
  padding: 22px 0 10px;
`;

const TabTopVoltarBotao = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const TabTopVoltar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const TabText = styled.Text`
  padding-left: 6px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${(props) => props.theme.title};
`;

const Scroller = styled.View``;

const TabTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const TabTopLeft = styled.View`
  justify-content: center;
  align-items: center;
`;
const TabTopLeftText = styled.Text`
  font-size: 25px;
  font-family: 'Poppins-Black';
  color: ${(props) => props.theme.title};
`;

export default ({Texto}) => {
  const navigation = useNavigation();
  const voltar = () => {
    navigation.goBack();
  };

  return (
    <Scroller>
      <ConfContainer>
        <ConfContainerCont>
          <TabTopVoltarBotao>
            <TabTopVoltar onPress={voltar}>
              <FontAwesome5 size={18} name="caret-left" color="#8890A6" />
              <TabText>Voltar</TabText>
            </TabTopVoltar>
          </TabTopVoltarBotao>

          <TabTop>
            <TabTopLeft>
              <TabTopLeftText>{Texto}</TabTopLeftText>
            </TabTopLeft>
          </TabTop>
        </ConfContainerCont>
      </ConfContainer>
    </Scroller>
  );
};
