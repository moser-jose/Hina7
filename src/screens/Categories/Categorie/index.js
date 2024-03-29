import React, {useState} from 'react';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import SubCategoriaItems from '../../../components/SubCategoriaItems';
import {useRoute} from '@react-navigation/native';

const Tudol = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 30;
  
`;
const Tudo = styled.View`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;
const ListArea = styled.ScrollView`
  margin: 0 10px;
  flex: 1;
`;
export default () => {
  const route = useRoute();
  const [categoria] = useState({
    id: route.params.id,
    sub_categorias: route.params.sub_categorias,
    categoria: route.params.categoria,
    background: route.params.background,
  });
  return (
    <Tudo>
      <TabTopConf Texto={'Sub-Secções'} />
      <Tudol>
        <ListArea showsVerticalScrollIndicator={false}>
          {categoria.sub_categorias.map((item, k) => (
            <SubCategoriaItems data={item} key={k} />
          ))}
        </ListArea>
      </Tudol>
    </Tudo>
  );
};
