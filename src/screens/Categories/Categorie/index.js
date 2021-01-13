import React, {useState} from 'react';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import SubCategoria from '../../../components/SubCategorias';
import {useRoute} from '@react-navigation/native';

const Tudol = styled.ScrollView`
   background-color:${props=>props.theme.background};
    flex:30;
`;
const Tudo = styled.View`
   background-color:${props=>props.theme.background};
    flex:1;
`;
export default () => {
    const route=useRoute();
    const [categoria]=useState({
        id:route.params.id,
        sub_categorias:route.params.sub_categorias,
        categoria:route.params.categoria,
        background:route.params.background
    });
    return(
        
           <Tudo>
                <TabTopConf Texto={"Sub-Secções"}></TabTopConf>
                <Tudol>
                    <SubCategoria subCategorias={categoria}></SubCategoria>
                </Tudol>
           </Tudo>
    );
}