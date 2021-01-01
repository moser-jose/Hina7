import React from 'react';
import styled from 'styled-components/native';


const Autor = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
    color:${props=>props.theme.title};
`;

export default({data}) =>{
        return(
            <Autor>{data.nome}</Autor>
        )
    }

                


