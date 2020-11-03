import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:${props=>props.theme.background};;
    flex: 1;
    padding-bottom:10px;
`;

export const Scroller = styled.ScrollView`
    padding:0 10px;
    margin-top:10px;
`;