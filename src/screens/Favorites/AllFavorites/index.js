import React from 'react';
import {LogBox} from 'react-native';
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