import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:${props=>props.theme.background};
    flex: 1;
    position: relative;
    justify-content:center;
    width:100%;
`;

export const Scroler = styled.ScrollView`
    flex: 1;
    padding:0 10px;
    
`;

export const TabTop = styled.View`
    background-color:#fff;
    flex-direction:row;
    height: 80px;
    elevation:2;
`;


export const Favoritos = styled.View`
`;

