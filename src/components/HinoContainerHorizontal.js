import React, {memo} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStateValueHino } from '../state/ContextProviderHinos';
const HinoContainerHorizontal = styled.View`
  flex-direction: row;
  margin: 0 1px 0;
  padding: 8px;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom:10px;
  elevation: 1;
  background-color: ${(props) => props.theme.container}; ;
`;
const Hino = styled.View`
  flex-direction: row;

  overflow: hidden;
`;
const HinoLeft = styled.View`
  justify-content: center;
  align-items: center;
`;
const HinoRigth = styled.View``;
const HinoBotao = styled.TouchableOpacity``;
const NumeroHino = styled.Text`
  color: ${(props) => props.theme.title};
  font-size: 25px;
  font-weight: 700;
  padding-right: 10px;
`;
const BotaoTitulo = styled.TouchableOpacity``;
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
const FavoritoAutor = styled.View`
  flex-direction: row;
  margin-top: 2px;
  justify-content: space-between;
  align-items: center;
`;

const Autores = styled.View`
  justify-content: flex-end;
`;
const Autor = styled.Text`
  font-size: 10px;
  text-align: right;
  margin-top: 2px;
  color: ${(props) => props.theme.title};
`;
const FlatListUp = styled.FlatList``;

const TextoBiblico = styled.Text`
  font-size: 10px;
  text-align: right;
  margin-top: 2px;
  padding-right: 40px;
  align-self: center;
  font-family: 'Poppins-Italic';
  color: ${(props) => props.theme.title};
`;

const Favorito = styled.View`
  margin-right: 20px;
`;

const HinoHor = ({hinos, favoritos}) => {
  const navigation = useNavigation();
  const{setHinoInfo}=useStateValueHino();
  return (
    <FlatListUp
      horizontal
      showsHorizontalScrollIndicator={false}
      data={hinos}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
      renderItem={HinosGet}
    />
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
      setHinoInfo({
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
        anterior:hinos.find((item)=> item.id==id-1),
        proximo:hinos.find((item)=> item.id==id+1)
      })
      navigation.navigate('Hino');
    };
    return (
      <HinoContainerHorizontal>
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
                (item, k) =>
                  item.id == id && (
                    <Favorito key={k}>
                      <Icon size={24} name="heart" color="#29C17E" />
                    </Favorito>
                  ),
              )}
              <TextoBiblico>{texto_biblico}</TextoBiblico>
              <Autores>
                <FlatListUp
                  data={autores}
                  keyExtractor={(item) => item.nome}
                  showsVerticalScrollIndicator={false}
                  renderItem={HinosGetAutores}
                />
              </Autores>
            </FavoritoAutor>
          </HinoRigth>
        </Hino>
      </HinoContainerHorizontal>
    );
  }
  function HinosGetAutores(item) {
    const {nome} = item.item;
    return <Autor>{nome}</Autor>;
  }
};
export default memo(HinoHor);