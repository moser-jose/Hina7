import React, { useState,useEffect } from 'react';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import ListarHinos from '../../../components/ListarHinosSubCategoria';


const Tudol = styled.ScrollView`
   background-color:${props=>props.theme.background};
    flex:30;
    padding:0 10px;
`;
const Tudo = styled.View`
   background-color:${props=>props.theme.background};
    flex:1;
`;
export default () => {

    return(
        
           <Tudo>
                <TabTopConf Texto={"Hinos"}></TabTopConf>
                <Tudol>
                    <ListarHinos></ListarHinos>
                </Tudol>
           </Tudo>
    );
}