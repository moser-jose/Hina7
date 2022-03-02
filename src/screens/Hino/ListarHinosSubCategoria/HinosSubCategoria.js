import React, {memo} from 'react';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import ListarHinosSubCategoria from '../../../components/ListarHinosSubCategoria';
import {useStateValueHino} from '../../../state/ContextProviderHinos';

const Tudol = styled.View`
  background-color: ${(props) => props.theme.background};
  padding: 10px 10px 0;
  
  flex: 1;
`;
const Tudo = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  
`;
const List = () => {
  const {hinario} = useStateValueHino();
  return (
    <Tudo>
      <TabTopConf Texto={'Hinos'} />
      <Tudol>
        <ListarHinosSubCategoria hinos={hinario.hinos} />
      </Tudol>
    </Tudo>
  );
};
export default memo(List);
