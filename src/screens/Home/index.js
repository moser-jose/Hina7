import React from 'react';
import { 
    Container,
    Scroler,
    Favoritos
} from './styles';

import TextContTitulo from '../../components/TextContTitulo';
import TabTop from '../../components/TabTopHome';
import CategoriaHol from '../../components/CategoriaHol';
import HinoContainerHorizontal from '../../components/HinoContainerHorizontal';
import HinosFavoritosHorizontal from '../../components/HinosFavoritosHorizontal';
import {useStateValueHino} from '../../state/ContextProviderHinos';
import PartilharContainer from '../../components/PartilharContainer';

export default () => {
    const {hinario,favoritos}=useStateValueHino();
    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroler>
            
            <TextContTitulo  nome={"Hinos"}></TextContTitulo>
            <HinoContainerHorizontal  hinos={hinario.hinos} favoritos={favoritos} ></HinoContainerHorizontal>

            <TextContTitulo nome={"Secções"} ></TextContTitulo>
            <CategoriaHol categoria={hinario.categorias} ></CategoriaHol>
            
            <Favoritos>
            {favoritos != '' && <TextContTitulo nome={"Favoritos"}></TextContTitulo>}
            <HinosFavoritosHorizontal favoritos={favoritos} ></HinosFavoritosHorizontal>
                </Favoritos>
                <PartilharContainer></PartilharContainer>
            </Scroler>
        
        </Container>
    );
}