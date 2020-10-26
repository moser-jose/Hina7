import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import hinario from '../api/hinario.json';
import HinosH from '../components/HinosH';
import {useNavigation} from '@react-navigation/native';
const HinoContainerHorizontal = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
`;

const Hino = styled.View`
    flex-direction:row;
    elevation:2;
    margin-right:10px;
    padding:4px 8px;
    background-color:${props=>props.theme.container};;
    
    overflow:hidden;
`; 
const HinoLeft = styled.View`
    justify-content: center;
    align-items:center;
`;
const HinoRigth = styled.View`
`;
const HinoBotao = styled.TouchableOpacity`
    
`; 
const NumeroHino = styled.Text`
    color:${props=>props.theme.title};
    font-size:25px;
    font-weight:700;
    padding-right:10px;
`; 
const BotaoTitulo = styled.TouchableOpacity`
`; 
const TituloHino = styled.Text`
    color:${props=>props.theme.title};
    font-size:16px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
`; 
const TituloHinoIngles = styled.Text`
    color:${props=>props.theme.title};
    font-size:12px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    margin-top:-5px;

`; 
const FavoritoAutor = styled.View`
    flex-direction:row;
    margin-top:2px;
    padding:5px;
    justify-content:space-between;
    
`; 
const Favoritos = styled.View`
    align-self:center;
`; 
const FavoritosBotao = styled.TouchableOpacity`
    
`; 
const Autores = styled.View`
    
    justify-content:flex-end;
`; 
const Autor = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
    color:${props=>props.theme.title};
`;
const FlatListUp = styled.FlatList`
    
`;

const TextoBiblico = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
    padding:0 20px;
    align-self:center;
    font-family:"Poppins-Italic";
    color:${props=>props.theme.title};

`;

const ListArea = styled.ScrollView``;

export default() =>{
    
    const navigation=useNavigation();
    const [list, setList]=useState([]);
    
    useEffect(()=> {
        setList(hinario.hinos);
    }, []);
    return(
        <ListArea horizontal showsHorizontalScrollIndicator={false}>
            { list.map((item, k)=>(
                <HinosH data={item} key={k}></HinosH>
            ))}
        </ListArea>
    );

}
                