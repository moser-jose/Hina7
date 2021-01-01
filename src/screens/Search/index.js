import React from 'react';
import { 
    Container,
    Scroller
} from './styles';

import HinoContainerUp from '../../components/HinoContainerUp';
import TabTopCustom from '../../components/TabTopCustom';

export default ()=>{
        return(
            <Container>
                <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
                <Scroller>
                    <HinoContainerUp></HinoContainerUp>
                </Scroller>
            </Container>
        );
}