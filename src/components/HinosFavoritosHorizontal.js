import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const HinoContainerHorizontal = styled.View`
    flex-direction:row;
`;

const Hino = styled.View`
    flex-direction:row;
    elevation:2;
    margin-right:10px;
    padding:8px;
    background-color:${props=>props.theme.container};;
    border-radius:2px;
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
    justify-content:space-between;
    align-items:center;
    
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
const Favorito = styled.View`
    margin-right:20px;
`;

export default({favoritos}) =>{
    const navigation=useNavigation();
    return(
        <FlatListUp 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={favoritos}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        renderItem={HinosGet}>
        </FlatListUp>
    );
    function HinosGet(item){

        const {id,url,artwork,artist,title,numero_view,ingles,autores,texto_biblico,coro,estrofes}=item.item;
        const handleClick = () => {
            navigation.navigate('Hino',{
                id:id,
                title:title,
                url:url,
                artwork:artwork,
                artist:artist,
                numero_view:numero_view,
                ingles:ingles,
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
                                <TituloHino>{title}</TituloHino>
                                <TituloHinoIngles>{ingles}</TituloHinoIngles>
                            </BotaoTitulo>
                            <FavoritoAutor>
                                <Favorito> 
                                <Icon size={24} name="heart" color="#29C17E" ></Icon>
                                </Favorito>
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
                