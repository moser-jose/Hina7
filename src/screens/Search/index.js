import React,{useState,useEffect,Component} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    Scroller
} from './styles';

import HinoContainerUp from '../../components/HinoContainerUp';
import TabTopCustom from '../../components/TabTopCustom';
/* import PesquisarConp from '../../components/PesquisarConp'; */
import ModalPesquisa from '../../components/ModalPesquisa';




export default ()=>{
        
    const [showModal, setShowModal]=useState(false);
    const handleClickShowModal =()=>{
        setShowModal(true);
    }
        return(
            <Container>
                <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
                <Scroller>
                    
                    <HinoContainerUp></HinoContainerUp>
               
                </Scroller>
            </Container>
        );
}