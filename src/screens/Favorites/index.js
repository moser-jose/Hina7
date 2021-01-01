import React from 'react';
import { 
    Container,
    Scroller
} from './styles';
import TabTop from '../../components/TabTopCustom';
import HinosFavoritos from '../../components/HinosFavoritos';

export default () => {

    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroller>
                <HinosFavoritos></HinosFavoritos>
            </Scroller>
        </Container>
    );
}