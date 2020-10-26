import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation,useRoute} from '@react-navigation/native';
import IconLeft from '../assets/img/Icon_left.svg';
const ConfContainer = styled.View`
    elevation:2;
    margin-bottom:30px;
`;
const ConfContainerCont = styled.View`
    background-color:${props=>props.theme.container};
`;

const TabTopVoltarBotao = styled.View`
    flex-direction:row;
    /* flex:1; */
    padding:10px;
`;
const TabTopVoltar = styled.TouchableOpacity`
    flex-direction:row;
    /* flex:1; */
    align-items:center;
`;
const TabText = styled.Text`
    padding-left:6px;
    font-size:16;
    color:${props=>props.theme.title};
`;


const Scroller = styled.ScrollView`
`;

const TabTop = styled.View`
    flex-direction:row;
    /* height: 60px;
    margin-bottom:10px; */
    justify-content:space-between;
    padding:10px;
`;

const TabTopLeft = styled.View`
   justify-content:center;
    align-items: center;
`;
const TabTopLeftText=styled.Text`
    font-size:30px;
    font-family:"Poppins-Black";
    color:${props=>props.theme.title};
`;


export default({Texto}) =>{
    const navigation=useNavigation();

    const voltar =()=>{
        navigation.goBack();
    }

    return(
        <Scroller>
            <ConfContainer>
                <ConfContainerCont>
                        <TabTopVoltarBotao>
                            <TabTopVoltar  onPress={voltar}>
                                <IconLeft></IconLeft>
                                <TabText>Voltar</TabText>
                            </TabTopVoltar>
                    </TabTopVoltarBotao> 

                    <TabTop>
                        <TabTopLeft>
                            <TabTopLeftText>
                                    {Texto}
                            </TabTopLeftText>
                        </TabTopLeft>
                    </TabTop>
                </ConfContainerCont>
            </ConfContainer>
        </Scroller>
    );
}