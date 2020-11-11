import React,{useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    Scroler
} from './styles';

import TextContTitulo from '../../components/TextContTitulo';
import TabTop from '../../components/TabTopHome';
import CategoriaHol from '../../components/CategoriaHol';


import HinoContainerHorizontal from '../../components/HinoContainerHorizontal';
import HinosFavoritosHorizontal from '../../components/HinosFavoritosHorizontal';

import PartilharContainer from '../../components/PartilharContainer';


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

            <TextContTitulo nome={"Secções"} ></TextContTitulo>
            <CategoriaHol></CategoriaHol>

            <TextContTitulo nome={"Favoritos"}></TextContTitulo>
            <HinosFavoritosHorizontal ></HinosFavoritosHorizontal>
            <PartilharContainer>
                
            </PartilharContainer>
            </Scroler>
        
        </Container>
    );
}