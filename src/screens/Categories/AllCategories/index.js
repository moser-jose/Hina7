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