import React from 'react';
import {Share} from 'react-native';
import styled from 'styled-components/native';
import ShareIcon from '../assets/img/share.svg';
import FontAwessome5 from 'react-native-vector-icons/FontAwesome5';

const Partilhar=styled.View`padding-right: 10px;`
const PartilharContainer = styled.View`
  flex-direction: row;
  margin-top: 10px;
  width: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.container};
  border-radius: 3px;
  justify-content: center;
  elevation: 1;
  padding: 10px;
`;

const PartilharContainerLeft = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`;

const PartilharContainerRigth = styled.View`
  flex: 2;
`;

const PartilharCima = styled.View``;

const PartilharCimaTexto = styled.Text`
  font-size: 14px;
  text-align: right;
  font-family: 'Poppins-LightItalic';
  color: ${(props) => props.theme.title}; ;
`;
const PartilharBaixo = styled.View`
  margin-top: 20px;
`;
const PartilharBotao = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export default () => {
  const handleClickShare = () => {
    Share.share(
      {
        title: 'Hinário Adventista do 7º dia',
        url: 'https://www.hinario-adventista.vercel.app/',
        message:
          'Instale o novo App do Hinário Adventista do 7º dia e desfrute do Hinário como nunca, faça o download em https://play.google.com/store/apps/details?id=com.hin7 ou visite a página em https://www.hinario-adventista.vercel.app/',
      },
      {
        dialogTitle: 'Partilhe o Hinário Adventista do 7º dia',
      },
    );
  };

  return (
    <Partilhar>
    <PartilharContainer>
      <PartilharContainerLeft>
        <ShareIcon width="100%" heigth="190" />
      </PartilharContainerLeft>
      <PartilharContainerRigth>
        <PartilharCima>
          <PartilharCimaTexto>
            Partilha a aplicação {'\n'}
            com os seus amigos{'\n'}e juntos louvem a Deus.
          </PartilharCimaTexto>
        </PartilharCima>
        <PartilharBaixo>
          <PartilharBotao onPress={handleClickShare}>
            <FontAwessome5 name="share-alt" size={24} color="#8890A6" />
          </PartilharBotao>
        </PartilharBaixo>
      </PartilharContainerRigth>
    </PartilharContainer>
    </Partilhar>
  );
};
