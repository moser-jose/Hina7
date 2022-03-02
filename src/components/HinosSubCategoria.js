import React, {memo} from 'react';
import styled from 'styled-components/native';
import AutoresHino from './Autores';
import {useNavigation} from '@react-navigation/native';
import {useStateValueHino} from '../state/ContextProviderHinos';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useMemo} from 'react';
const HinoContainerUp = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const Hino = styled.View`
  flex-direction: row;
  width: 100%;
  elevation: 1;
  padding: 8px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.container};
  overflow: hidden;
`;
const HinoLeft = styled.View`
  justify-content: center;
  align-items: center;
`;
const HinoRigth = styled.View`
  width: 85%;
`;
const HinoBotao = styled.TouchableOpacity``;
const NumeroHino = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 25px;
  font-weight: 700;
  padding-right: 10px;
`;
const BotaoTitulo = styled.TouchableOpacity`
  width: 100%;
`;
const TituloHino = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'Poppins-SemiBold';
`;
const TituloHinoIngles = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 12px;
  font-family: 'Poppins-LightItalic';
  letter-spacing: 1px;
  margin-top: -5px;
`;
const FavoritoAutor = styled.View`
  flex-direction: row;
  margin-top: 2px;
  justify-content: space-between;
  align-items: center;
`;

const Autores = styled.View``;

const TextoBiblico = styled.Text`
  font-size: 10px;
  margin-top: 2px;
  align-self: center;
  font-family: 'Poppins-Italic';
  color: ${(props) => props.theme.title};
`;

const Hin = styled.View``;
const Favorito = styled.View`
  margin-right: 20px;
`;
const HinosSub = ({data}) => {
  const navigation = useNavigation();
  const {favoritos} = useStateValueHino();
  const handleClick = () => {
    navigation.navigate('Hino', {
      id: data.id,
      title: data.title,
      url: data.url,
      artwork: data.artwork,
      artist: data.artist,
      numero_view: data.numero_view,
      ingles: data.ingles,
      autores: data.autores,
      texto_biblico: data.texto_biblico,
      coro: data.coro,
      estrofes: data.estrofes,
    });
  };

  return (
    <Hin>
      <HinoContainerUp>
        <Hino>
          <HinoLeft>
            <HinoBotao onPress={handleClick}>
              <NumeroHino>{data.numero_view}</NumeroHino>
            </HinoBotao>
          </HinoLeft>
          <HinoRigth>
            <BotaoTitulo onPress={handleClick}>
              <TituloHino>{data.title}</TituloHino>
              <TituloHinoIngles>{data.ingles}</TituloHinoIngles>
            </BotaoTitulo>
            <FavoritoAutor>
              {favoritos.map(
                (item, k) =>
                  item.id == data.id && (
                    <Favorito key={k}>
                      <Icon size={24} name="heart" color="#29C17E" />
                    </Favorito>
                  ),
              )}
              <TextoBiblico>{data.texto_biblico}</TextoBiblico>
              <Autores>
                {data.autores.map((item, k) => (
                  <AutoresHino data={item} key={k} />
                ))}
              </Autores>
            </FavoritoAutor>
          </HinoRigth>
        </Hino>
      </HinoContainerUp>
    </Hin>
  );
};
export default memo(HinosSub);
