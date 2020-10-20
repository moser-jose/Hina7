import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#F4F7FA;
    flex: 1;
    padding-top:30px;
    position: relative;
`;
export const TituloApp = styled.View`
    width:100%;
    text-align: center;
    margin-top:5px;
`;
export const TituloBold = styled.Text`

    color:#272A3F;
    font-family:"Poppins-Bold";
    font-size: 30px;
    letter-spacing: 1px;
    text-align: center;

`;
export const TituloLightItalic = styled.Text`

    color:#272A3F;
    font-family:"Poppins-LightItalic";
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    margin-top:-15px;

`;
export const BemvindoApp = styled.View`
    width:100%;
    position: absolute;
    bottom:30px;
`;
export const BemvindoAppText = styled.Text`

    color:#272A3F;
    font-family:"Poppins-Bold";
    font-size: 20px;
    letter-spacing: 1px;
    text-align: center;
`;