import React from 'react';
import {Share} from 'react-native';
import styled from 'styled-components/native';

import Brevemente from '../assets/img/Brevemente.svg';

const PartilharContainer = styled.View`
    flex-direction:row;
    margin-top:10px;
    width:100%;
    margin-right:10px;
    margin-bottom:10px;
    background-color:${props=>props.theme.container};
    border-radius:3px;
    justify-content:center;
    elevation:2;
    padding:10px;
`;

const PartilharContainerLeft = styled.View`
    flex:1;
    justify-content:center;
    align-self:center;
`;

const PartilharContainerRigth = styled.View`
    flex:2;
`;

const PartilharCima = styled.View`
   

`;



const PartilharCimaTexto = styled.Text`
   
    font-size:14px;
    text-align:right;
    font-family:"Poppins-LightItalic";
    color:${props=>props.theme.title};;

`;
const Bold = styled.Text`
    font-family:"Poppins-Bold";
    font-size:16px;
`;

export default() =>{
    return(
        <PartilharContainer>
            <PartilharContainerLeft>
                <Brevemente></Brevemente>
            </PartilharContainerLeft>
            <PartilharContainerRigth>

                <PartilharCima>
                    <PartilharCimaTexto>
                    <Bold>Brevemente{'\n'}</Bold>
                    nas Línguas <Bold>Umbundo</Bold>{'\n'}
                    e <Bold>Kimbundo</Bold>.
                    </PartilharCimaTexto>
                </PartilharCima>
            </PartilharContainerRigth>
        </PartilharContainer>
    );
}
                