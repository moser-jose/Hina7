import React from 'react';
import {Text} from 'react-native';
import { 
    Container,
} from './styles';

import TabTop from '../../components/TabTopCustom';

export default () => {

    return(
        <Container>
            <TabTop titulo={"Configurações"}></TabTop>
        </Container>
    );
}