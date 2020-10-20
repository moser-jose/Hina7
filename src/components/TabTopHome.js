import React from 'react';
import styled from 'styled-components/native';
import ImagemTop from '../assets/img/imagem-top.svg';
import Logo from '../assets/img/logo.svg';

const TabTop = styled.View`
    background-color:#fff;
    flex-direction:row;
    height: 80px;
    elevation:2;
    margin-bottom:10px;
`;

const TabTopLeft = styled.View`
    flex:1;
    justify-content:center;
    align-items: center;
`;
const TabTopMiddle = styled.View`
    flex:2;
    justify-content:center;
    align-items: center;
`;
const TabTopRight = styled.View`
    flex:1;
    justify-content:center;
    align-items: center;
`;

const TabTopMiddleTitleBold = styled.Text`
    font-size:25px;
    font-family:"Poppins-Bold";
    letter-spacing: 1px;
    color:#272A3F;
`;
const TabTopMiddleTitleLight = styled.Text`
    font-size:10px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    color:#272A3F;
    margin-top:-8px;
`;

export default() =>{
    return(
        <TabTop>
            <TabTopLeft>
                <Logo></Logo>
            </TabTopLeft>
            <TabTopMiddle>
                <TabTopMiddleTitleBold>Hinário</TabTopMiddleTitleBold>
                <TabTopMiddleTitleLight>Adventista do 7º dia</TabTopMiddleTitleLight>
            </TabTopMiddle>
            <TabTopRight>
                <ImagemTop />
            </TabTopRight>
        </TabTop>
    );
}