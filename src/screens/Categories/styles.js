import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:${props=>props.theme.background};
    flex: 1;
    position: relative;
`;
export const Scroller = styled.ScrollView`
    flex:1;
    padding:10px 10px 20px 10px;
`;
export const CategoriaContCont = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:center;
`; 