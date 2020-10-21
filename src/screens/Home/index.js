import React,{useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    Scroler,
    Hino,
    HinoContainer,
    HinoLeft,
    HinoRigth,
    HinoBotao,
    NumeroHino,
    BotaoTitulo,
    TituloHino,
    TituloHinoIngles,
    FavoritoAutor,
    Favoritos,
    Autores,
    Autor,
    FavoritosBotao


} from './styles';

import TextContTitulo from '../../components/TextContTitulo';
import TabTop from '../../components/TabTopHome';
import CategoriaHol from '../../components/CategoriaHol';


import HinoContainerHorizontal from '../../components/HinoContainerHorizontal';
import PartilharContainer from '../../components/PartilharContainer';
import FavoritesIcon from '../../assets/img/favorites.svg';
import { ScrollView } from 'react-native-gesture-handler';

import FavoritosIconFull from '../../assets/img/favorite_icon_full.svg';

import FavoritosIconWhite from '../../assets/img/favorite_icon_white.svg';

export default () => {
    const navigation=useNavigation();

    
    
    const [favorited, setFavorited]=useState(false);
    const handlerClickFav=() =>{
        setFavorited(!favorited);
    }
    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroler>
                
            <TextContTitulo  nome={"Hinos"}></TextContTitulo>
            <HinoContainerHorizontal ></HinoContainerHorizontal>

            <TextContTitulo nome={"Categorias"} ></TextContTitulo>
            <CategoriaHol></CategoriaHol>
            {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{flexDirection:'row', width:'100%'}}>
                <CategoriaHol nome={"Adoração"} back={require('../../assets/img/adoracao.jpg')}></CategoriaHol>
                
                
                <CategoriaHol nome={"Deus, o Pai"} back={require('../../assets/img/Deus.jpg')}></CategoriaHol>
                
                <CategoriaHol nome={"Jusus Cristo"} back={require('../../assets/img/jesus_back.jpg')} ></CategoriaHol>
                <CategoriaHol nome={"Espirito Santo"} back={require('../../assets/img/espirito_santo_back.jpg')} ></CategoriaHol>
           
            </ScrollView> */}

            <TextContTitulo nome={"Favoritos"}></TextContTitulo>
            <ScrollView  showsHorizontalScrollIndicator={false} horizontal style={{flexDirection:'row', width:'100%'}}>
                <HinoContainer>
                <Hino>
                    <HinoLeft>
                        <HinoBotao>
                            <NumeroHino>001</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo>
                            <TituloHino>Ó Deus de Amor</TituloHino>
                            <TituloHinoIngles>Before Jehova´s Awful Throne</TituloHinoIngles>
                        </BotaoTitulo>
                        <FavoritoAutor>
                            <Favoritos>
                                    <FavoritosBotao onPress={handlerClickFav}>
                                    {favorited ?
                                        <FavoritosIconWhite ></FavoritosIconWhite>
                                            :
                                        <FavoritosIconFull fill="#29C17E" ></FavoritosIconFull>
                                    }
                                </FavoritosBotao>
                            </Favoritos>
                            <Autores>
                                <Autor>Isaac Watts (1674 - 1748)</Autor>
                                <Autor>John Hatton (c. 1710 - 1793)</Autor>
                            </Autores>
                        </FavoritoAutor>
                    </HinoRigth>
                </Hino>
                </HinoContainer>
                <HinoContainer>
                <Hino>
                    <HinoLeft>
                        <HinoBotao>
                            <NumeroHino>001</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo>
                            <TituloHino>Ó Deus de Amor</TituloHino>
                            <TituloHinoIngles>Before Jehova´s Awful Throne</TituloHinoIngles>
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
                </HinoContainer>
                <HinoContainer>
                <Hino>
                    <HinoLeft>
                        <HinoBotao>
                            <NumeroHino>001</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo>
                            <TituloHino>Ó Deus de Amor</TituloHino>
                            <TituloHinoIngles>Before Jehova´s Awful Throne</TituloHinoIngles>
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
                </HinoContainer>
                <HinoContainer>
                <Hino>
                    <HinoLeft>
                        <HinoBotao>
                            <NumeroHino>001</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo>
                            <TituloHino>Ó Deus de Amor</TituloHino>
                            <TituloHinoIngles>Before Jehova´s Awful Throne</TituloHinoIngles>
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
                </HinoContainer>

            </ScrollView>
            <PartilharContainer>
                
            </PartilharContainer>
            </Scroler>
        
        </Container>
    );
}