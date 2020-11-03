import React from 'react';
import {Text, LogBox} from 'react-native';
//console.disableYellowBox = true;
// Ignore log notification by message:
/* LogBox.ignoreLogs(['Warning: ...']);
 */
// Ignore all log notifications:
LogBox.ignoreAllLogs();
import { 
    Container,
    CategoriaContCont,
    Scroller
} from './styles';
import PartilharContainer from '../../components/PartilharContainer';
import TabTop from '../../components/TabTopCustom';
import CategoriaContainerCatCat from '../../components/CategoriaContainerCatCat';

export default () => {

    return(
        
        <Container>
            <TabTop titulo={"Categorias"}></TabTop>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}