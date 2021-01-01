import React from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
import { 
    Container,
    Scroller
} from './styles';
import TabTop from '../../components/TabTopCustom';
import CategoriaContainerCatCat from '../../components/CategoriaContainerCatCat';

export default () => {

    return(
        
        <Container>
            <TabTop titulo={"Secções"}></TabTop>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}