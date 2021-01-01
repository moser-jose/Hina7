import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import IconLeft from '../assets/img/Icon_left.svg';

const ConfContainer = styled.View`
    elevation:2;
`;
const ConfContainerCont = styled.View`
    background-color:${props=>props.theme.container};
`;

const TabTopVoltarBotao = styled.View`
    flex-direction:row;
    padding:10px;
`;
const TabTopVoltar = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
`;
const TabText = styled.Text`
    padding-left:6px;
    font-size:16px;
    font-weight:bold;
    letter-spacing:1px;
    color:${props=>props.theme.title};
`;


const Scroller = styled.View`
`;

const TabTop = styled.View`
    flex-direction:row;
    justify-content:space-between;
    padding:10px;
`;

const TabTopLeft = styled.View`
   justify-content:center;
    align-items: center;
`;
const TabTopLeftText=styled.Text`
    font-size:25px;
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