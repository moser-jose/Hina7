import React, { useState } from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native';

const SubCategoriaBotao = styled.TouchableOpacity`
    background-color:${props=>props.theme.container};
    padding:10px 5px;
    elevation:2;
    border-radius:2px;
    margin-top:5px;
    margin-bottom:5px;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
`;

const SubCategoriaText = styled.Text`
    font-size:18px;
    font-weight:bold;
    letter-spacing:1px;
    color:${props=>props.theme.title};
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
        
        <FlatList 
            showsVerticalScrollIndicator={false}
            data={categoria.sub_categorias}
            keyExtractor={(item, index) => item.titulo}
            contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
            renderItem={GetSubcat}>
        </FlatList>
    );


    function GetSubcat(item){
        const {titulo, hinos}=item.item;
        return(
            <SubCategoriaBotao>
                <SubCategoriaText>
                        {titulo}
                    </SubCategoriaText>
                    <SubCategoriaText>
                        {hinos}
                </SubCategoriaText>
            </SubCategoriaBotao>
        )
    }
}