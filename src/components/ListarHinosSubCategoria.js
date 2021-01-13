import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import HinosSubCategoria from '../components/HinosSubCategoria';

const Tab = styled.View`
`;
const IconLoading = styled.ActivityIndicator`
    margin: 10px 0;
`;
export default ({hinos}) => {
    
    const route=useRoute();
    const [subcategoria]=useState({
        id:route.params.id,
        sub_categorias:route.params.tituloSubcategoria,
   });


   const hino=hinos.filter((value) => {
       return value.sub_categoria==subcategoria.sub_categorias;
   })

   const [list, setList]=useState([]);
   const [loading, setLoading]=useState(true);

   const getHino=()=>{
        setList(hino);
        setLoading(false);
   }
   useEffect(()=> {
        getHino();
   }, []);
    return(
        
        <Tab>
                {loading && <IconLoading size="large"  color="#29c17e"></IconLoading>}
                { list.map((item, k) => (
                    <HinosSubCategoria data={item} key={k}></HinosSubCategoria>
                    
                ))}
        </Tab>
    );
}