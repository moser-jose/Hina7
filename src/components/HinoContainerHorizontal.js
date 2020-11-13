import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import hinario from '../api/hinario.json';
import {useNavigation} from '@react-navigation/native';
const HinoContainerHorizontal = styled.View`
    flex-direction:row;
    margin:10px 1px 0;
    padding: 8px;
    border-radius:2px;
    margin-right:10px;
    elevation:2;
    background-color:${props=>props.theme.container};;
`;

const Hino = styled.View`
    flex-direction:row;
    
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
    font-size:14px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
`; 
const TituloHinoIngles = styled.Text`
    color:${props=>props.theme.title};
    font-size:10px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    margin-top:-5px;

`; 
const FavoritoAutor = styled.View`
    flex-direction:row;
    margin-top:2px;
    justify-content:space-between;
    
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
    padding-right:40px;
    align-self:center;
    font-family:"Poppins-Italic";
    color:${props=>props.theme.title};

`;

export default() =>{
    
    const navigation=useNavigation();
    const [list, setList]=useState([]);
    
    useEffect(()=> {
        setList(hinario.hinos);
    }, []);
    return(
        <FlatListUp 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item.titulo}
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
                                    <TextoBiblico>{texto_biblico}</TextoBiblico>
                                <Autores>
                                    <FlatListUp 
                                        data={autores}
                                        keyExtractor={(item) => item.nome}
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
                