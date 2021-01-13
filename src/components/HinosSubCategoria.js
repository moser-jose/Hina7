import React,{useState} from 'react';
import styled from 'styled-components/native';
import AutoresHino from './Autores';
import {useNavigation} from '@react-navigation/native';
import {useStateValueHino} from '../state/ContextProviderHinos';
import FavoritoFull from '../assets/img/favorite_icon_full.svg';
const HinoContainerUp = styled.View`
    flex-direction:row;
    margin-top:10px;
`;

const Hino = styled.View`
    flex-direction:row;
    width:100%;
    elevation:2;
    padding:8px;
    border-radius:2px;
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
    justify-content:space-between;
    align-items:center;
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
const Favorito = styled.View`
    margin-right:20px;
`;
export default({data}) =>{
    const navigation=useNavigation();

    const {favoritos}=useStateValueHino();
    const [autores, setAutores]=useState([]);
   /* useEffect(()=> {
    
    setList(data);
    setAutores(data.autores);
   }, []); */
   const handleClick = () => {
    navigation.navigate('Hino',{
        id:data.id,
        titulo:data.titulo,
        numero_view:data.numero_view,
        titulo_ingles:data.titulo_ingles,
        autores:data.autores,
        texto_biblico:data.texto_biblico,
        coro:data.coro,
        estrofes:data.estrofes
    });
}
    return(
        
        <Hin>
            <HinoContainerUp>
            <Hino>
            <HinoLeft>
                <HinoBotao onPress={handleClick}>
                    <NumeroHino>{data.numero_view}</NumeroHino>
                </HinoBotao>
            </HinoLeft>
            <HinoRigth>
                <BotaoTitulo onPress={handleClick}>
                    <TituloHino>{data.titulo}</TituloHino>
                    <TituloHinoIngles>{data.titulo_ingles}</TituloHinoIngles>
                </BotaoTitulo>
                <FavoritoAutor>
                { favoritos.map((item,k) => (
                                item.id==data.id &&
                                <Favorito key={k}>
                                    <FavoritoFull></FavoritoFull>
                                </Favorito>
                                
                                )
                                )}
                    <TextoBiblico>{data.texto_biblico}</TextoBiblico>
                        <Autores>
                            {data.autores.map((item, k)=>(
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
                