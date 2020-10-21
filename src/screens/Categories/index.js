import React from 'react';
import {Text, LogBox} from 'react-native';
//console.disableYellowBox = true;
// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
import { 
    Container,
    CategoriaContCont,
    Scroller
} from './styles';
import PartilharContainer from '../../components/PartilharContainer';
import TabTop from '../../components/TabTopCustom';
import CategoriaContainerCat from '../../components/CategoriaContainerCat';

export default () => {

    return(
        
        <Container>
            <TabTop titulo={"Categorias"}></TabTop>
        
        
            <Scroller showsVerticalScrollIndicator={false}>
        {/* <PartilharContainer></PartilharContainer> */}
        <CategoriaContCont>
                <CategoriaContainerCat nome={"Adoração"}  back={require('../../assets/img/adoracao.jpg')} ></CategoriaContainerCat>
                
                
                <CategoriaContainerCat nome={"Deus, o Pai"} back={require('../../assets/img/Deus.jpg')} ></CategoriaContainerCat>
            </CategoriaContCont>

            <CategoriaContCont>
                <CategoriaContainerCat nome={"Jesus Cristo"}  back={require('../../assets/img/jesus_back.jpg')}></CategoriaContainerCat>
                
                <CategoriaContainerCat nome={"Espirito Santo"} back={require('../../assets/img/espirito_santo_back.jpg')} ></CategoriaContainerCat>
            </CategoriaContCont>

            <CategoriaContCont>
                <CategoriaContainerCat nome={"Santa Escritura"}  back={require('../../assets/img/escritura.jpg')}></CategoriaContainerCat>
                
                <CategoriaContainerCat nome={"O Evangelho"} back={require('../../assets/img/evangelho.jpg')} ></CategoriaContainerCat>
            </CategoriaContCont>


            <CategoriaContCont>
                <CategoriaContainerCat nome={"Vida Cristã"}  back={require('../../assets/img/vida_crista.jpg')}></CategoriaContainerCat>
                
                <CategoriaContainerCat nome={"Lar Cristão"} back={require('../../assets/img/lar.jpg')} ></CategoriaContainerCat>
            </CategoriaContCont>


            <CategoriaContCont>
                <CategoriaContainerCat nome={"Igreja e Doutrina"}  back={require('../../assets/img/igreja.jpg')}></CategoriaContainerCat>
                
                <CategoriaContainerCat nome={"Cânticos Responsivos"} back={require('../../assets/img/canticos.jpg')} ></CategoriaContainerCat>
            </CategoriaContCont>


            <CategoriaContCont>
                <CategoriaContainerCat nome={"Améns"}  back={require('../../assets/img/amem.jpg')}></CategoriaContainerCat>
                <CategoriaContainerCat nome={"Améns"}  back={require('../../assets/img/escritura.jpg')}></CategoriaContainerCat>
            </CategoriaContCont>

        
            </Scroller>
        </Container>
        
    );
}