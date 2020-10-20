import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';


const CategoriaHol = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:70px;
    background-color:red;
    margin-right:10px;
`;

const CategoriaContainer = styled.View`
    flex-direction:row;
    elevation:2;
    overflow:hidden;
    height:70px;
    border-radius:2px;
    
`; 

const CategoriaBotao = styled.TouchableOpacity`
    flex-direction:row;
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
    font-size:18px;
    letter-spacing: 1px;
    font-family:"Poppins-Bold";
    text-align:center;
    
    
`; 

export default({nome,back}) =>{
    return(
        <CategoriaHol>
            <CategoriaContainer>
                    <Image source={back} style={{height:70,resizeMode: "cover" }}>
                    </Image>
                <CategoriaBotao >
                    <CategoriaBotaoRigth>
                        <CategoriaText>
                            {nome}
                        </CategoriaText>
                    </CategoriaBotaoRigth>
                </CategoriaBotao>
            </CategoriaContainer>
        </CategoriaHol>
    );
}
                