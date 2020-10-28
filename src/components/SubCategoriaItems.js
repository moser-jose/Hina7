import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
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
export default({data}) =>{
    const navigation=useNavigation();
    const handleClick = () => {
        navigation.navigate('HinosSubCategoria',{
            id:data.id,
            tituloSubcategoria:data.titulo
        });
    }
        return(
            <SubCategoriaBotao onPress={handleClick}>
                <SubCategoriaText>
                        {data.titulo}
                    </SubCategoriaText>
                    <SubCategoriaText>
                        {data.hinos}
                </SubCategoriaText>
            </SubCategoriaBotao>
        )
    }