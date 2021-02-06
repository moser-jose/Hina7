import React, {memo} from 'react';
import styled from 'styled-components/native';
import HinoContainerUpH from './HinoContainerUp';
import {useStateValueHino} from '../state/ContextProviderHinos';

const Div = styled.View``;

const FavoritosF = styled.View`
  background-color: #df5c5c;
  padding: 14px 10px;
  border-radius: 2px;
`;
const FavoritosFText = styled.Text`
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Favoritos = ({hinos}) => {
  const {favoritos} = useStateValueHino();
  return (
    <Div>
      {hinos != '' ? (
        <HinoContainerUpH hinos={hinos} favoritos={favoritos} />
      ) : (
        <FavoritosF>
          <FavoritosFText>Não Existem Hinos Favoritos</FavoritosFText>
        </FavoritosF>
      )}
    </Div>
  );
};
export default memo(Favoritos);
