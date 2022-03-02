import React, {memo} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HinoContainerUp = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.container};
  border-radius: 2px;
  padding: 10px;
  margin: 0 0 10px;
  elevation: 1;
`;

const Hino = styled.View`
  flex-direction: row;

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
  font-size: 20px;
  font-weight: 700;
  padding-right: 10px;
`;
const BotaoTitulo = styled.TouchableOpacity`
  width: 100%;
`;
const TituloHino = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 14px;
  letter-spacing: 1px;
  font-family: 'Poppins-SemiBold';
`;
const TituloHinoIngles = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 10px;
  font-family: 'Poppins-LightItalic';
  letter-spacing: 1px;
  margin-top: -5px;
`;
const Favorito = styled.View`
  margin-right: 20px;
`;
const FavoritoAutor = styled.View`
  flex-direction: row;
  margin-top: 2px;
  justify-content: space-between;
  align-items: center;
`;

const Autores = styled.View``;

const Autor = styled.Text`
  font-size: 10px;
  text-align: right;
  margin-top: 2px;
  color: ${(props) => props.theme.title};
`;
const FlatListUp = styled.FlatList``;

const TextoBiblico = styled.Text`
  font-size: 8px;
  margin-top: 2px;
  align-self: center;
  font-family: 'Poppins-Italic';
  color: ${(props) => props.theme.title};
`;

const Div = styled.View``;

const Hinarios = ({hinos, favoritos}) => {
  const navigation = useNavigation();
  return (
    <Div>
      <FlatListUp
        data={hinos}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        renderItem={HinosGet}
      />
    </Div>
  );
  function HinosGet(item) {
    const {
      id,
      url,
      artwork,
      artist,
      title,
      numero_view,
      ingles,
      autores,
      texto_biblico,
      coro,
      estrofes,
    } = item.item;
    const handleClick = () => {
      navigation.navigate('Hino', {
        id: id,
        title: title,
        url: url,
        artwork: artwork,
        artist: artist,
        numero_view: numero_view,
        ingles: ingles,
        autores: autores,
        texto_biblico: texto_biblico,
        coro: coro,
        estrofes: estrofes,
      });
    };

    return (
      <HinoContainerUp>
        <Hino>
          <HinoLeft>
            <HinoBotao onPress={handleClick}>
              <NumeroHino>{numero_view}</NumeroHino>
            </HinoBotao>
          </HinoLeft>
          <HinoRigth>
            <BotaoTitulo onPress={handleClick}>
              <TituloHino>{title}</TituloHino>
              <TituloHinoIngles>{ingles}</TituloHinoIngles>
            </BotaoTitulo>
            <FavoritoAutor>
              {favoritos.map(
                (value, index) =>
                  value.id == id && (
                    <Favorito key={index}>
                      <Icon size={24} name="heart" color="#29C17E" />
                    </Favorito>
                  ),
              )}
              <TextoBiblico>{texto_biblico}</TextoBiblico>
              <Autores>
                {autores.map((value, index) => {
                  return <Autor key={index}>{value.nome}</Autor>;
                })}
              </Autores>
            </FavoritoAutor>
          </HinoRigth>
        </Hino>
      </HinoContainerUp>
    );
  }
};
export default memo(Hinarios);