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
import HinosFavoritos from '../../../components/HinosFavoritos';

export default () => {

    return(
        
        <Container>
            <TabTopConf Texto={"Hinos Favoritos"}></TabTopConf>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <HinosFavoritos></HinosFavoritos>
            </Scroller>
        </Container>
        
    );
}