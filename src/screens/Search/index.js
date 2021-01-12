import React from 'react';
import { 
    Container,
    Scroller
} from './styles';
import HinoContainerUp from '../../components/HinoContainerUp';
import TabTopCustom from '../../components/TabTopCustom';
import {useStateValueHino} from '../../state/ContextProviderHinos';
export default ()=>{
    const {hinario, favoritos}=useStateValueHino();
        return(
            <Container>
                <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
                <Scroller>
                    <HinoContainerUp hinos={hinario.hinos} favoritos={favoritos}></HinoContainerUp>
                </Scroller>
            </Container>
        );
}