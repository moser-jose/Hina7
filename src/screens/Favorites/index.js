import React,{useState,useEffect} from 'react';
import { 
    Container,
} from './styles';
import TabTop from '../../components/TabTopCustom';
import HinoContainerUp from '../../components/HinoContainerUp';
import { SectionList } from 'react-native';

export default () => {

    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <HinoContainerUp></HinoContainerUp>
        </Container>
    );
}