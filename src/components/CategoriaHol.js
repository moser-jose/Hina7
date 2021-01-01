import React,{useEffect} from 'react';
import {Image,FlatList} from 'react-native';
import styled from 'styled-components/native';
import categoria from '../api/hinario.json';
import {useNavigation} from '@react-navigation/native';
const CategoriaHol = styled.View`
    flex-direction:row;
    height:70px;
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
    const navigation=useNavigation();
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
        const {id, sub_categorias,categoria, background}=item.item;
        const getBackgroundSource =(background) =>{
            let r=require("../assets/img/adoracao.jpg");
            switch(background){
                case "adoracao.jpg":
                    r=require("../assets/img/adoracao.jpg");
                    break;
                case "Deus.jpg":
                    r=require("../assets/img/Deus.jpg");
                    break;
                case "jesus_back.jpg":
                    r=require("../assets/img/jesus_back.jpg");
                    break;
                case "espirito_santo_back.jpg":
                    r=require("../assets/img/espirito_santo_back.jpg");
                    break;
                case "escritura.jpg":
                    r=require("../assets/img/escritura.jpg");
                    break;
                case "evangelho.jpg":
                    r=require("../assets/img/evangelho.jpg");
                    break;
                case "vida_crista.jpg":
                    r=require("../assets/img/vida_crista.jpg");
                break;
                    case "lar.jpg":
                    r=require("../assets/img/lar.jpg");
                    break;
                case "igreja.jpg":
                    r=require("../assets/img/igreja.jpg");
                    break;
                case "canticos.jpg":
                    r=require("../assets/img/canticos.jpg");
                    break;
                case "amem.jpg":
                    r=require("../assets/img/amem.jpg");
                    break;
                default:
                    break;
            }
            return r;
        }
        const handleClick = () => {
            navigation.navigate('Categorie',{
                id:id,
                sub_categorias:sub_categorias,
                categoria:categoria,
                background:background
            });
        }

        return(
            <CategoriaHol>
                <CategoriaContainer>
                   
                        <Image source={getBackgroundSource(background)} style={{height:70,resizeMode: "cover" }}>
                        </Image>
                    <CategoriaBotao onPress={handleClick}>
                        <CategoriaBotaoRigth >
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
                