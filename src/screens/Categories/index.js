import React,{useEffect} from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
import { 
    Container,
    Scroller
} from './styles';
import TabTop from '../../components/TabTopCustom';
import CategoriaContainerCatCat from '../../components/CategoriaContainerCatCat';
import {useStateValueCategoria} from '../../state/ContextProviderCategorias';
export default () => {
    const [categoria, setCategoria]=useStateValueCategoria();
    /* useEffect(() => {
        setHinos({type:'categorias'})
    }, []) */
    return(
        
        <Container>
            <TabTop titulo={"Secções"}></TabTop>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <CategoriaContainerCatCat data={categoria.categorias}></CategoriaContainerCatCat>
            </Scroller>
        </Container>
        
    );
}