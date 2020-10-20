import React,{useState,useEffect} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import hinario from '../api/hinario.json';
const HinoContainerUp = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
    width:95%;
    margin-right:10px;
`;

const Hino = styled.View`
    flex-direction:row;
    width:100%;
    elevation:2;
    margin:0 10px;
    padding:4px;
    background-color:#fff;
    
    overflow:hidden;
`; 
const HinoLeft = styled.View`
    width: 20%;
    justify-content: center;
    align-items:center;
`;
const HinoRigth = styled.View`
    background-color:#fff;
    width:100%;
`;
const HinoBotao = styled.TouchableOpacity`
    
`; 
const NumeroHino = styled.Text`
    color:#272A3F;
    font-size:25px;
    font-weight:700;
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
    width: 73%;
`; 
    
const Autor = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
`;
const HinaHD = styled.View`
    flex-direction:row;
`; 


export default() =>{
    const [list, setList] = useState([]);

    const getH =() =>{
        return fetch('https://raw.githubusercontent.com/moser-jose/Hina7/main/src/api/hinario.json')
        .then((response) => response.json())
        .then((json) => {
            console.log(json.hinos);
            return setList(json.hinos);
            
        }).catch((error) => {
            /* console.error(error); */
            alert(error);
        });
    }
    useEffect(()=> {
        getH();
    }, []);


    return(
        <FlatList 
        data={list}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{flexGrow:1}}
        renderItem={HunosGet}>
        </FlatList>
        
    );

    
    function HunosGet(item){

        const {titulo,numero_view,titulo_ingles}=item.item;

        return(
                <HinoContainerUp>
            <Hino>
                
               
            <HinoLeft>
                    <HinoBotao>
                        <NumeroHino>{numero_view}</NumeroHino>
                    </HinoBotao>
                </HinoLeft>
                <HinoRigth>
                    <BotaoTitulo>
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
                            <Autor>Isaac Watts (1674 - 1748)</Autor>
                            <Autor>John Hatton (c. 1710 - 1793)</Autor>
                        </Autores>
                    </FavoritoAutor>
                </HinoRigth>

            
            </Hino>
        </HinoContainerUp>
            
                )
    }

}
                