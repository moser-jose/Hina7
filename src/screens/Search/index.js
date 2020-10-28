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



import FilterIcon from '../../assets/img/filter.svg';
import SearchIcon from '../../assets/img/search.svg';

const PesquisarConp = styled.View`
    background-color:${props=>props.theme.container};
    flex-direction:row;
    height: 50px;
    elevation:4;
    margin:10px .5px;
    justify-content:space-between;
    padding:0 5px;
    border-radius:2px;
`;

const PesquisarConpLeft = styled.View`
    flex:8;
`;

const PesquisarConpMiddle = styled.View`
    flex-direction:row;
    align-self:center;
    flex:1;
    justify-content:center;
    
`;
const PesquisarCompMiddleBotao = styled.TouchableOpacity`
    
`;


const PesquisarConpRight = styled.View`
    flex-direction:row;
    flex:1;
    justify-content:center;
    align-self:center;
    
`;
const PesquisarConpRightBotao = styled.TouchableOpacity`
    
`;
const TextImput = styled.TextInput`
    flex:1;
    align-items:center;
    font-size:16px;
    color:${props=>props.theme.title};
    background-color:${props=>props.theme.container};
`;

export default ()=>{
        
    const [showModal, setShowModal]=useState(false);
    const handleClickShowModal =()=>{
        setShowModal(true);
    }
        return(
            <Container>
                <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
                <Scroller>
                    <PesquisarConp>
                        <PesquisarConpLeft>
                            <TextImput placeholderTextColor="#aaa" placeholder="Introduza o número do hino"></TextImput>
                        </PesquisarConpLeft>
                        <PesquisarConpMiddle>
                            <PesquisarCompMiddleBotao>
                                <SearchIcon fill="#8890A6"></SearchIcon>
                            </PesquisarCompMiddleBotao>
                        </PesquisarConpMiddle>
                        <PesquisarConpRight>
                            <PesquisarConpRightBotao onPress={handleClickShowModal}>
                                <FilterIcon></FilterIcon>
                            </PesquisarConpRightBotao>
                        </PesquisarConpRight>
                    </PesquisarConp>
                
                    <HinoContainerUp></HinoContainerUp>
               
                </Scroller>
    
                <ModalPesquisa
                show={showModal}
                setShow={setShowModal}>
                    
                </ModalPesquisa>
            </Container>
        );
}