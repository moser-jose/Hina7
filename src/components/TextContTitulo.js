import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

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
    color:${props=>props.theme.title};
`;
const TextoTituloRight = styled.Text`
    font-size:12px;
    font-weight:700;
    letter-spacing:1px;
    color:${props=>props.theme.title};
`;
export default ({nome}) => {
    const navigation=useNavigation();

    const handleClick=()=>{
        if(nome=="Hinos"){
            navigation.navigate('HinosTodos');
        }
        else if(nome=="Categorias"){
            navigation.navigate('AllCategories');
        }
        else{
            navigation.navigate('AllFavorites');
        }
    }

    return(
        <TextContTitulo>
            <TextoTituloConatiner>
                <TextoTituloLeft>
                    {nome}
                </TextoTituloLeft>
                <BotaoVerTodos onPress={handleClick}>
                    <TextoTituloRight>
                        Ver Todos {">"}
                    </TextoTituloRight>
                </BotaoVerTodos>
            </TextoTituloConatiner>
        </TextContTitulo>
    );
}



