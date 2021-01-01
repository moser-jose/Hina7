import React from 'react';
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