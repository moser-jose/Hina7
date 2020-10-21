import React,{useEffect} from 'react';
import {Image,FlatList} from 'react-native';
import styled from 'styled-components/native';
import categoria from '../api/categorias.json';

const CategoriaHol = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:70px;
    background-color:red;
    margin-right:10px;
`;

const CategoriaContainer = styled.View`
    flex-direction:row;
    elevation:2;
    overflow:hidden;
    height:70px;
    border-radius:2px;
    
`; 

const CategoriaBotao = styled.TouchableOpacity`
    flex-direction:row;
    position:absolute;
    align-self:center;
    padding: 0 10px;
    width:100%;
`; 

const CategoriaBotaoRigth= styled.View`
    align-self:center;
`;

const CategoriaText = styled.Text`
    color:#fff;
    font-size:18px;
    letter-spacing: 1px;
    font-family:"Poppins-Bold";
    text-align:center;
    
    
`; 






export default() =>{
    useEffect(()=> {
    }, []);
    return(
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoria.categorias}
            keyExtractor={(item, index) => item.categoria}
            contentContainerStyle={{flexGrow:1}}
            showsVerticalScrollIndicator={false}
            renderItem={getCategorias}>
        </FlatList>
    );

    function getCategorias(item) {
        const {categoria, background}=item.item;
        return(
            <CategoriaHol>
                <CategoriaContainer>
                    
                        <Image source={{uri: background}} style={{height:70,resizeMode: "cover" }}>
                        </Image>
                    <CategoriaBotao >
                        <CategoriaBotaoRigth>
                            <CategoriaText>
                                {categoria}
                            </CategoriaText>
                        </CategoriaBotaoRigth>
                    </CategoriaBotao>
                </CategoriaContainer>
            </CategoriaHol>
        );

    }
}
                