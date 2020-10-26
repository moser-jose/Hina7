import React,{useState,useEffect} from 'react';
import { 
    Container,
    Scroller
} from './styles';
import TabTop from '../../components/TabTopCustom';
import HinoContainerUp from '../../components/HinoContainerUp';
import { SectionList } from 'react-native';

export default () => {

    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroller>
                <HinoContainerUp></HinoContainerUp>
            </Scroller>
        </Container>
    );
}