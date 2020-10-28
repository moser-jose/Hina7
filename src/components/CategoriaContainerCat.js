import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import IconsCategoria from './IconsCategoria';

const CategoriaContainerCat = styled.View`
    flex-direction:row;
    margin-top:5px;
    height:70px;
    width:50%;
    margin-right:5px;
    margin-left:5px;
`;

const CategoriaContainer = styled.View`
    flex-direction:row;
    elevation:2;
    overflow:hidden;
    border-radius:2px;
    width:100%;
    
`; 

const CategoriaBotao = styled.TouchableOpacity`
    flex-direction:column;
    position:absolute;
    align-self:center;
    padding: 0 10px;
    width:100%;
`; 

const CategoriaBotaoRigth= styled.View`
    align-self:center;
`;

const CategoriaText = styled.Text`
    color:#fff;
    font-size:16px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
    text-align:center;
    
    
`; 

export default({nome,back, num}) =>{
    return(
        

        <CategoriaContainerCat>
            
            <CategoriaContainer >
               
                <Image source={back} style={{height:90,resizeMode: "cover" }}>
                    </Image>
                
                <CategoriaBotao >
                    <CategoriaBotaoRigth >
                        <CategoriaText>
                            {nome}
                        </CategoriaText>
                    </CategoriaBotaoRigth>
                </CategoriaBotao>
            </CategoriaContainer>
        
        </CategoriaContainerCat>
    );
}
                