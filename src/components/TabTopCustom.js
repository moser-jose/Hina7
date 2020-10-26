import React from 'react';
import styled from 'styled-components/native';
import ImagemTop from '../assets/img/imagem-top.svg';

const TabTop = styled.View`
    background-color:${props=>props.theme.container};
    flex-direction:row;
    height: 80px;
    elevation:2;
    margin-bottom:10px;
    justify-content:space-between;
    padding:10px;
`;

const TabTopLeft = styled.View`
   justify-content:center;
    align-items: center;
`;
const TabTopLeftText=styled.Text`
    font-size:20px;
    font-family:"Poppins-Light";
    color:${props=>props.theme.title};
`;

const TabTopRight = styled.View`
    justify-content:center;
    align-items: center;
`;


export default({titulo}) =>{
    return(
        <TabTop>
            <TabTopLeft>
                <TabTopLeftText>
                        {titulo}
                </TabTopLeftText>
            </TabTopLeft>
            <TabTopRight>
                <ImagemTop />
            </TabTopRight>
        </TabTop>
    );
}