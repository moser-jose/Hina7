import React from 'react';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import SubCategoria from '../../../components/SubCategorias';


const Tudol = styled.ScrollView`
   background-color:${props=>props.theme.background};
    flex:30;
`;
const Tudo = styled.View`
   background-color:${props=>props.theme.background};
    flex:1;
`;
export default () => {

    return(
        
           <Tudo>
                <TabTopConf Texto={"Sub-Secções"}></TabTopConf>
                <Tudol>
                    <SubCategoria></SubCategoria>
                </Tudol>
           </Tudo>
    );
}