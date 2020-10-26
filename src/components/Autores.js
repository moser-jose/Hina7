import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import hinario from '../api/hinario.json';

import {useNavigation} from '@react-navigation/native';

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

                


