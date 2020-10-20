import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
} from './styles';
import TabTopHino from '../../components/TabTopHino';

export default () => {

    return(
        <Container>
            <TabTopHino titulo={"Pesquisar"}></TabTopHino>
        </Container>
    );
}