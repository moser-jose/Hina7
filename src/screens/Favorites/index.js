import React from 'react';
import { 
    Container,
    Scroller
} from './styles';
import TabTop from '../../components/TabTopCustom';
import HinosFavoritos from '../../components/HinosFavoritos';
import {useStateValueHino} from '../../state/ContextProviderHinos';
export default () => {
    const {favoritos}=useStateValueHino();
    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroller>
                <HinosFavoritos hinos={favoritos}></HinosFavoritos>
            </Scroller>
        </Container>
    );
}