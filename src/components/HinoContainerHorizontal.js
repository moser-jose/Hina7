import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import hinario from '../api/hinario.json';

import {useNavigation} from '@react-navigation/native';
const HinoContainerHorizontal = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
`;

const Hino = styled.View`
    flex-direction:row;
    elevation:2;
    margin-right:5px;
    padding:4px 8px;
    background-color:#fff;
    
    overflow:hidden;
`; 
const HinoLeft = styled.View`
    justify-content: center;
    align-items:center;
`;
const HinoRigth = styled.View`
    background-color:#fff;
`;
const HinoBotao = styled.TouchableOpacity`
    
`; 
const NumeroHino = styled.Text`
    color:#272A3F;
    font-size:25px;
    font-weight:700;
    padding-right:10px;
`; 
const BotaoTitulo = styled.TouchableOpacity`
    width:100%;
`; 
const TituloHino = styled.Text`
    color:#272A3F;
    font-size:16px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
`; 
const TituloHinoIngles = styled.Text`
    color:#272A3F;
    font-size:12px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    margin-top:-5px;

`; 
const FavoritoAutor = styled.View`
    flex-direction:row;
    margin-top:2px;
    padding:5px;
    
`; 
const Favoritos = styled.View`
    align-self:center;
`; 
const FavoritosBotao = styled.TouchableOpacity`
    
`; 
const Autores = styled.View`
    flex:1;
    justify-content:flex-end;
`; 
const Autor = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
`;
const FlatListUp = styled.FlatList`
    
`;


export default() =>{
    
    const navigation=useNavigation();
    
    
    useEffect(()=> {
    }, []);
    return(
        <FlatListUp 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hinario.hinos.slice(0,10)}
        keyExtractor={(item) => item.titulo}
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}
        renderItem={HinosGet}>
        </FlatListUp>
    );
    function HinosGet(item){

        const {id,titulo,numero_view,titulo_ingles,autores,texto_biblico,coro,estrofes}=item.item;
        const handleClick = () => {
            navigation.navigate('Hino',{
                id:id,
                titulo:titulo,
                numero_view:numero_view,
                titulo_ingles:titulo_ingles,
                autores:autores,
                texto_biblico:texto_biblico,
                coro:coro,
                estrofes:estrofes
            });
        }
        return(
            <HinoContainerHorizontal>
                <Hino>
                    <HinoLeft>
                        <HinoBotao onPress={handleClick}>
                            <NumeroHino>{numero_view}</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo onPress={handleClick}>
                            <TituloHino>{titulo}</TituloHino>
                            <TituloHinoIngles>{titulo_ingles}</TituloHinoIngles>
                        </BotaoTitulo>
                        <FavoritoAutor>
                            <Favoritos>
                                <FavoritosBotao>
                                <FavoritesIcon fill="#29C17E"/>
                                </FavoritosBotao>
                            </Favoritos>
                            <Autores>
                                <FlatListUp 
                                    data={autores}
                                    keyExtractor={(item) => item.nome}
                                    contentContainerStyle={{flexGrow:1}}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={HinosGetAutores}>
                                </FlatListUp>
                            </Autores>   
                            
                        </FavoritoAutor>
                    </HinoRigth>
                </Hino>
            </HinoContainerHorizontal>
        )
    }
    function HinosGetAutores(item){
        const {nome}=item.item;
        return(
                <Autor>{nome}</Autor>
            )
    }

}
                