import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import SubCategoriaItems from '../components/SubCategoriaItems';
import TabTopConf from '../components/TabTopConf';
import { ScrollView } from 'react-native-gesture-handler';

const ListArea = styled.ScrollView`
    padding:0 10px;
`;
const Tab = styled.View`
`;
const TabF = styled.View`
    
`;
export default () => {
    
    const route=useRoute();
    const [categoria]=useState({
        id:route.params.id,
        sub_categorias:route.params.sub_categorias,
        categoria:route.params.categoria,
        background:route.params.background
   });

   const [list, setList]=useState([]);
   
   useEffect(()=> {
       setList(categoria.sub_categorias);
   }, []);

   return(

    <Tab>
            <ListArea>
                { list.map((item, k) => (
                    <SubCategoriaItems data={item} key={k}></SubCategoriaItems>
                ))}
            </ListArea>
    </Tab>
);
}