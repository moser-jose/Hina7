import React from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
import { 
    Container,
    Scroller
} from './styles';
import TabTopConf from '../../../components/TabTopConf';
import CategoriaContainerCatCat from '../../../components/CategoriaContainerCatCat';

export default () => {

    return(
        
        <Container>
            <TabTopConf Texto={"Categorias"}></TabTopConf>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}