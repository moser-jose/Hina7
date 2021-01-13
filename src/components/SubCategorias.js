import React from 'react';
import styled from 'styled-components/native';

import SubCategoriaItems from '../components/SubCategoriaItems';

const ListArea = styled.ScrollView`
    margin:10px;
`;
const Tab = styled.View`
`;
export default ({subCategorias}) => {

    return(

    <Tab>
            <ListArea >
                { subCategorias.sub_categorias.map((item,k) => (
                        <SubCategoriaItems data={item} key={k}></SubCategoriaItems>
                )

                )}
            </ListArea>
    </Tab>
);
}