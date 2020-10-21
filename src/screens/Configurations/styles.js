import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#F4F7FA;
    flex: 1;
    position: relative;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding:0 10px;
`;
export const Configurations = styled.View`
    flex: 1;
    background-color:#fff;
    elevation:4;
    border-radius:2px;
    margin:1px;
    padding:6px 16px;
`;
export const Line = styled.View`
    align-self:center;
    justify-content:center;
    background-color:#ccc;
    height:1px;
    width:100%;
`;


export const ConfigurationsBotao = styled.TouchableOpacity`
    flex-direction:row;
    padding:12px;
`;
export const ConfigurationsBotaoLeft = styled.View`
    flex:1.5;
    align-self:center;
    justify-content:center;
`;


export const ConfigurationsBotaoMiddle = styled.View`
    flex:9;
    align-self:center;
`;

export const ConfigurationsBotaoMiddleText = styled.Text`
    font-size:18px;
    letter-spacing:1px;
`;
export const ConfigurationsBotaoRight = styled.View`
    flex:1;
    align-self:center;
    flex-direction:row;
    justify-content:flex-end;
`;