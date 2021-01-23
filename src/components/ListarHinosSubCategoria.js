import React, { useState,memo,useMemo} from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import HinoContainerUp from '../components/HinoContainerUp';
import {useStateValueHino} from '../state/ContextProviderHinos';
const Tab = styled.View`
`;
const HinosLista = ({hinos}) => {
    const {favoritos}=useStateValueHino();
    const route=useRoute();
    const [subcategoria]=useState({
        id:route.params.id,
        sub_categorias:route.params.tituloSubcategoria,
    });


    const listarH=useMemo(() => hinos.filter((value) => {
        return value.sub_categoria==subcategoria.sub_categorias;
    }), [hinos])
    
    return(
        
        <Tab>
                <HinoContainerUp hinos={listarH} favoritos={favoritos}></HinoContainerUp>
        </Tab>
    );
}
export default memo(HinosLista);