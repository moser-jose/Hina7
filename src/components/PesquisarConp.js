import React from 'react';
import styled from 'styled-components/native';
import FilterIcon from '../assets/img/filter.svg';
import SearchIcon from '../assets/img/search.svg';

const PesquisarConp = styled.View`
    background-color:#fff;
    flex-direction:row;
    height: 50px;
    elevation:4;
    margin:10px .5px;
    justify-content:space-between;
    padding:0 5px;
    border-radius:2px;
`;

const PesquisarConpLeft = styled.View`
    flex:8;
`;

const PesquisarConpMiddle = styled.View`
    flex-direction:row;
    align-self:center;
    flex:1;
    justify-content:center;
    
`;
const PesquisarCompMiddleBotao = styled.TouchableOpacity`
    
`;


const PesquisarConpRight = styled.View`
    flex-direction:row;
    flex:1;
    justify-content:center;
    align-self:center;
    
`;
const PesquisarConpRightBotao = styled.TouchableOpacity`
    
`;
const TextImput = styled.TextInput`
    flex:1;
    align-items:center;
    font-size:16px;
`;

export default() =>{
    return(
            <PesquisarConp>
            <PesquisarConpLeft>
                <TextImput placeholder="Introduza o número do hino"></TextImput>
            </PesquisarConpLeft>
            <PesquisarConpMiddle>
                <PesquisarCompMiddleBotao>
                    <SearchIcon fill="#8890A6"></SearchIcon>
                </PesquisarCompMiddleBotao>
            </PesquisarConpMiddle>
            <PesquisarConpRight>
                <PesquisarConpRightBotao>
                    <FilterIcon></FilterIcon>
                </PesquisarConpRightBotao>
            </PesquisarConpRight>
        </PesquisarConp>
        
    );
}