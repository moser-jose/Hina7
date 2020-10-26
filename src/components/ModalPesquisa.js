import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import IconCheck from '../assets/img/Icon_check.svg';
import IconUnCheck from '../assets/img/Icon_uncheck.svg';
import IconDown from '../assets/img/Icon_down.svg';

const Modal = styled.Modal`


`;

const ModalArea = styled.View`

    flex:1;
    background-color:rgba(0,0,0,.5);
    justify-content:flex-end;
`;
const ModalBody =styled.View`
    background-color:${props=>props.theme.container};
    min-height:200px;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    padding:10px 20px;
    position:relative;

`;

const ModalBodyOpcao =styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:14px 0;

`;
const ModalBodyOpcaoTexto =styled.Text`
    font-size:17px;
    letter-spacing:1px;
    color:${props=>props.theme.title};

`;

const Line =styled.View`
    background-color:#ccc;
    width:100%;
    height:1px;
`; 
const BotaoCancelar =styled.TouchableOpacity`
    align-items:center;
    flex-direction:row;
    padding:0 0 10px;
   

`; 
const BotaoCancelarTexto =styled.Text`
    padding-left:10px;
    font-size:16px;
    letter-spacing:1px;
    color:${props=>props.theme.title};
`; 

export default({show, setShow}) =>{
    const handleClickBack =()=>{
        setShow(false);
    }
    return(
            <Modal 
                transparent={true}
                visible={show}
                animationType="slide"
            >
                <ModalArea>
                    <ModalBody>
                        
                    <BotaoCancelar onPress={handleClickBack}>
                        <IconDown></IconDown>
                        <BotaoCancelarTexto>Opções de Pesquisa</BotaoCancelarTexto>
                    </BotaoCancelar>
                    <Line></Line>
                        <ModalBodyOpcao>
                            <ModalBodyOpcaoTexto>
                                Pesquisar pelo número
                            </ModalBodyOpcaoTexto>
                            <IconCheck></IconCheck>
                        </ModalBodyOpcao>
                        <Line></Line>
                        <ModalBodyOpcao>
                            <ModalBodyOpcaoTexto>
                                Pesquisar pelo titulo
                            </ModalBodyOpcaoTexto>
                            <IconUnCheck></IconUnCheck>
                        </ModalBodyOpcao>
                    </ModalBody>
                </ModalArea>
            
            </Modal>
        
    );
}