import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:${props=>props.theme.background};;
    flex: 1;
    position: relative;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding:0 10px;
`;
