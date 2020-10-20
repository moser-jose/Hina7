import React from 'react';
import styled from 'styled-components/native';

const TextContTitulo = styled.View`
   
    flex-direction:row;
    justify-content:center;
    margin-top:10px;

`;

const TextoTituloConatiner = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
`;
const BotaoVerTodos = styled.TouchableOpacity`

`; 
const TextoTituloLeft = styled.Text`
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
`;
const TextoTituloRight = styled.Text`
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
`;
export default ({nome}) => {
    return(
        <TextContTitulo>
            <TextoTituloConatiner>
                <TextoTituloLeft>
                    {nome}
                </TextoTituloLeft>
                <BotaoVerTodos>
                    <TextoTituloRight>
                        Ver Todos {">"}
                    </TextoTituloRight>
                </BotaoVerTodos>
            </TextoTituloConatiner>
        </TextContTitulo>
    );
}



