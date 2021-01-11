import React from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
import { 
    Container,
    Scroller
} from './styles';
import TabTopConf from '../../../components/TabTopConf';
import CategoriaContainerCatCat from '../../../components/CategoriaContainerCatCat';
import {useStateValueCategoria} from '../../../state/ContextProviderCategorias';
export default () => {
    const [categoria, setCategoria]=useStateValueCategoria();
    return(
        
        <Container>
            <TabTopConf Texto={"Categorias"}></TabTopConf>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat data={categoria.categorias}></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}