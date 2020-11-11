import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import AutoresHino from './Autores';
import {useNavigation} from '@react-navigation/native';
const HinoContainerUp = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
`;

const Hino = styled.View`
    flex-direction:row;
    width:100%;
    elevation:2;
    padding:4px;
    background-color:${props=>props.theme.container};
    overflow:hidden;
    `;
const HinoLeft = styled.View`
    justify-content: center;
    align-items:center;
`;
const HinoRigth = styled.View`
    width:85%;
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
    width:100%;
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
    flex:1;
`; 

const Autores = styled.View`
`; 

const TextoBiblico = styled.Text`
    font-size:10px;
    margin-top:2px;
    align-self:center;
    font-family:"Poppins-Italic";
    color:${props=>props.theme.title};

`;

const Hin = styled.View`
`;
export default({data}) =>{
    const navigation=useNavigation();
    const [list, setList]=useState([]);
    const [autores, setAutores]=useState([]);
   useEffect(()=> {
    
    setList(data);
    setAutores(data.autores);
   }, []);
   const handleClick = () => {
    navigation.navigate('Hino',{
        id:list.id,
        titulo:list.titulo,
        numero_view:list.numero_view,
        titulo_ingles:list.titulo_ingles,
        autores:list.autores,
        texto_biblico:list.texto_biblico,
        coro:list.coro,
        estrofes:list.estrofes
    });
}
    return(
        
        <Hin>
                 
            <HinoContainerUp>
            <Hino>
            <HinoLeft>
                <HinoBotao onPress={handleClick}>
                    <NumeroHino>{list.numero_view}</NumeroHino>
                </HinoBotao>
            </HinoLeft>
            <HinoRigth>
                <BotaoTitulo onPress={handleClick}>
                    <TituloHino>{list.titulo}</TituloHino>
                    <TituloHinoIngles>{list.titulo_ingles}</TituloHinoIngles>
                </BotaoTitulo>
                <FavoritoAutor>
                    <TextoBiblico>{list.texto_biblico}</TextoBiblico>
                        <Autores>
                            {autores.map((item, k)=>(
                                <AutoresHino data={item} key={k}></AutoresHino>
                            ))}
                        </Autores>    
                    
                </FavoritoAutor>
            </HinoRigth>
            </Hino>
            </HinoContainerUp>
        </Hin>
    )
}
                