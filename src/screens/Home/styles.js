import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#F4F7FA;
    flex: 1;
    position: relative;
    justify-content:center;
    width:100%;
`;

export const Scroler = styled.ScrollView`
    flex: 1;
    padding:0 10px;
    
`;

export const TabTop = styled.View`
    background-color:#fff;
    flex-direction:row;
    height: 80px;
    elevation:2;
`;

export const TabTopLeft = styled.View`
   flex:1;
   justify-content:center;
   align-items: center;
`;
export const TabTopMiddle = styled.View`
   flex:2;
   justify-content:center;
   align-items: center;
`;
export const TabTopRight = styled.View`
   flex:1;
   justify-content:center;
   align-items: center;
`;

export const TabTopMiddleTitleBold = styled.Text`
    font-size:25px;
    font-family:"Poppins-Bold";
    letter-spacing: 1px;
    color:#272A3F;
`;
export const TabTopMiddleTitleLight = styled.Text`
    font-size:10px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    color:#272A3F;
    margin-top:-8px;
`;

export const TextContTitulo = styled.View`
   
    flex-direction:row;
    justify-content:center;
    margin-top:10px;
    
`;

export const TextoTituloConatiner = styled.View`
    width:95%;
    flex-direction:row;
`;

export const TextoTituloLeft = styled.Text`
    text-align:left;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
`;
export const TextoTituloRight = styled.Text`
    text-align:right;
    width:84%;
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
`;


export const HinoContainerUp = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
    width:95%;
`;



export const HinoContainer = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
    margin-right:10px;
`;

export const Hino = styled.View`
    flex-direction:row;
    elevation:2;
    padding:4px;
    background-color:#fff;
    overflow:hidden;
`; 
export const HinoLeft = styled.View`
    justify-content: center;
    align-items:center;
    padding:0 4px;
`;

export const HinoRigth = styled.View`
    background-color:#fff;
    flex:2;
`;

export const HinoBotao = styled.TouchableOpacity`
    
`; 

export const NumeroHino = styled.Text`
    color:#272A3F;
    font-size:25px;
    font-weight:700;
`; 



export const BotaoTitulo = styled.TouchableOpacity`
`; 


export const TituloHino = styled.Text`
    color:#272A3F;
    font-size:16px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
`; 

export const TituloHinoIngles = styled.Text`
    color:#272A3F;
    font-size:12px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    margin-top:-5px;

`; 



export const FavoritoAutor = styled.View`
    flex-direction:row;
    margin-top:2px;
    padding:5px;
    
`; 

export const Favoritos = styled.View`
    align-self:center;
    flex:1;
`; 
export const FavoritosBotao = styled.TouchableOpacity`
    
`; 
export const BotaoVerTodos = styled.TouchableOpacity`
    width:100%;
`; 

export const Autores = styled.View`
   
    text-align:right;
`; 
    
export const Autor = styled.Text`
    font-size:10px;
    
    margin-top:2px;
`;

