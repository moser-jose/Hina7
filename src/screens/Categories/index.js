import React from 'react';
import { 
    Container,
    Scroller
} from './styles';
import TabTop from '../../components/TabTopCustom';
import CategoriaContainerCatCat from '../../components/CategoriaContainerCatCat';
import {useStateValueHino} from '../../state/ContextProviderHinos';
export default () => {
    const {hinario}=useStateValueHino();
    return(
        
        <Container>
            <TabTop titulo={"Secções"}></TabTop>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat data={hinario.categorias}></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}