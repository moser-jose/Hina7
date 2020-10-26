import React,{useState,useEffect} from 'react';
import { 
    Container,
    Sco
} from './styles';
import TabTopConf from '../../../components/TabTopConf';
import HinoContainerUp from '../../../components/HinoContainerUp';
import { SectionList } from 'react-native';

export default () => {

    return(
        <Container>
            
            <TabTopConf Texto={"Hinos"}></TabTopConf>
            <Sco>
                <HinoContainerUp></HinoContainerUp>
            </Sco>
                
        </Container>
    );
}