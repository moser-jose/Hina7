import React from 'react';
import { 
    Container,
    Scroller
} from './styles';
import TabTopConf from '../../../components/TabTopConf';
import CategoriaContainerCatCat from '../../../components/CategoriaContainerCatCat';
import {useStateValueHino} from '../../../state/ContextProviderHinos';
export default () => {
    const {hinario}=useStateValueHino();
    return(
        
        <Container>
            <TabTopConf Texto={"Categorias"}></TabTopConf>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat data={hinario.categorias}></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}