import React, {memo} from 'react';
import {Image, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
const CategoriaHol = styled.View`
  margin-top: 10px;
  height: 70px;
  margin-right: 10px;

  width: 48.5%;
`;

const CategoriaContainer = styled.View`
  elevation: 1;
  overflow: hidden;
  border-radius: 2px;
  height: 70px;
  width: 100%;
`;

const CategoriaBotao = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  position: absolute;
  padding: 0 10px;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

const CategoriaText = styled.Text`
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: 'Poppins-Bold';
  text-align: center;
`;
const Cat = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      numColumns={2}
      keyExtractor={(item, index) => item.categoria}
      showsVerticalScrollIndicator={false}
      renderItem={getCategorias}
    />
  );

  function getCategorias(item) {
    const {id, sub_categorias, categoria, background} = item.item;
    const getBackgroundSource = (background) => {
      let r = require('../assets/img/adoracao.jpg');
      switch (background) {
        case 'adoracao.jpg':
          r = require('../assets/img/adoracao.jpg');
          break;
        case 'Deus.jpg':
          r = require('../assets/img/Deus.jpg');
          break;
        case 'jesus_back.jpg':
          r = require('../assets/img/jesus_back.jpg');
          break;
        case 'espirito_santo_back.jpg':
          r = require('../assets/img/espirito_santo_back.jpg');
          break;
        case 'escritura.jpg':
          r = require('../assets/img/escritura.jpg');
          break;
        case 'evangelho.jpg':
          r = require('../assets/img/evangelho.jpg');
          break;
        case 'vida_crista.jpg':
          r = require('../assets/img/vida_crista.jpg');
          break;
        case 'lar.jpg':
          r = require('../assets/img/lar.jpg');
          break;
        case 'igreja.jpg':
          r = require('../assets/img/igreja.jpg');
          break;
        case 'canticos.jpg':
          r = require('../assets/img/canticos.jpg');
          break;
        case 'amem.jpg':
          r = require('../assets/img/amem.jpg');
          break;
        default:
          break;
      }
      return r;
    };
    const handleClick = () => {
      navigation.navigate('Categorie', {
        id: id,
        sub_categorias: sub_categorias,
        categoria: categoria,
        background: background,
      });
    };

    return (
      <CategoriaHol>
        <CategoriaContainer>
          <Image
            source={getBackgroundSource(background)}
            style={{height: 70, resizeMode: 'cover'}}
          />
          <CategoriaBotao onPress={handleClick}>
            <CategoriaText>{categoria}</CategoriaText>
          </CategoriaBotao>
        </CategoriaContainer>
      </CategoriaHol>
    );
  }
};
export default memo(Cat);
