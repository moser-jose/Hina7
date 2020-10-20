import React from 'react';
import {Text} from 'react-native';
import { 
    Container,
    Scroller
} from './styles';

import TabTopCustom from '../../components/TabTopCustom';
import PesquisarConp from '../../components/PesquisarConp';
PesquisarConp
export default () => {

    return(
        <Container>
           <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
           <Scroller>
            <PesquisarConp>
                
            </PesquisarConp>
           </Scroller>
        </Container>
    );
}