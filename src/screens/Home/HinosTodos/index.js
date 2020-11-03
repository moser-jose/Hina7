import React,{useState,useEffect} from 'react';
import { 
    Container,
    Scroller
} from './styles';
import TabTopConf from '../../../components/TabTopConf';
import HinoContainerUp from '../../../components/HinoContainerUp';

export default () => {

    return(
        <Container>
            
            <TabTopConf Texto={"Hinos"}></TabTopConf>
            <Scroller>
                <HinoContainerUp></HinoContainerUp>
            </Scroller>
                
        </Container>
    );
}