import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import AutoresHino from '../components/Autores';
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

export default({data}) =>{
    const [list, setList]=useState([]);
    
    useEffect(()=> {
        setList(data.autores);
    }, []);
        return(
            <HinoContainerHorizontal>
                <Hino>
                    <HinoLeft>
                        <HinoBotao>
                            <NumeroHino>{data.numero_view}</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo>
                            <TituloHino>{data.title}</TituloHino>
                            <TituloHinoIngles>{data.ingles}</TituloHinoIngles>
                        </BotaoTitulo>
                        <FavoritoAutor>
                            <Favoritos>
                                <FavoritosBotao>
                                <FavoritesIcon fill="#29C17E"/>
                                </FavoritosBotao>
                            </Favoritos>
                                <TextoBiblico>{data.texto_biblico}</TextoBiblico>
                            <Autores>
                                {list.map((item, k)=>(
                                    <AutoresHino data={item} key={k}></AutoresHino>
                                ))}
                            </Autores>   
                            
                        </FavoritoAutor>
                    </HinoRigth>
                </Hino>
            </HinoContainerHorizontal>
        )
    }

                


