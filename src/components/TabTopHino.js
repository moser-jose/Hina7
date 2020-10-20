import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import FavoritosIconFull from '../assets/img/favorite_icon_full.svg';

import FavoritosIconWhite from '../assets/img/favorite_icon_white.svg';


const HinoContainer = styled.View`
`;
const TabTopHino = styled.View`
    background-color:#fff;
    elevation:2;
    margin-bottom:10px;
`;


const TabTopVoltarBotao = styled.TouchableOpacity`
`;


const TabTopVoltar = styled.Text`
    font-size:16px;
    padding:10px;

`;
const TabTopTitulo = styled.View`
    
    width:100%;
    padding:10px;
`;
const TabTopTituloText = styled.Text`
    font-size:18px;
    font-weight:700;
    letter-spacing:1px;
`;
const TabTopTituloEng = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top:2px;
`;
const TabTopTituloEngText = styled.Text`
    font-size:12px;
    font-family:"Poppins-LightItalic";
`;
const TabTopTituloEngTextBib = styled.Text`
    font-size:12px;
    font-family:"Poppins-LightItalic";
`;
const TabTopTituloBase = styled.View`
    flex-direction:row;
    margin-top:5px;
`;
const TabTopTituloLeft = styled.View`
    align-self:center;
    flex:1;
`;
const TabTopTituloRigth = styled.View`
    flex:3;
    align-self:center;
`;
const TabTopTituloRigthText = styled.Text`
   font-size:12px;
   font-family:"Poppins-LightItalic";
   text-align:right;
`;
const TabTopTituloMiddle = styled.View`
    justify-content:center;
    align-items:center;
    
    flex:1;
`;
const TabTopTituloMiddleText = styled.Text`
   font-size:25px;
   font-family:"Poppins-Bold";
`;

const Hino = styled.View`
    justify-content:center;
    
`;
const HinoT = styled.View`
    background-color:#fff;
    padding:10px;
`;
const Estrofe = styled.Text`
   font-size:18px;
   font-family:"Poppins-Regular";
`;

const TabTopTituloleftFavor = styled.TouchableOpacity`
  
`;


export default() =>{
    const navigation=useNavigation();
    const [favorited, setFavorited]=useState(false);
    const voltar =()=>{
        navigation.goBack();
    }
    const handlerClick=() =>{
        setFavorited(!favorited);
    }
    return(
        <HinoContainer>
            <TabTopHino>
                <TabTopVoltarBotao onPress={voltar}>
                    <TabTopVoltar>{'<'} Voltar </TabTopVoltar>
                </TabTopVoltarBotao>
                <TabTopTitulo>
                <TabTopTituloText>Ó Deus de Amor</TabTopTituloText>
                <TabTopTituloEng>
                    <TabTopTituloEngText>Before Jehova´s Awful Throne</TabTopTituloEngText>
                    <TabTopTituloEngTextBib>Génesis 1:1</TabTopTituloEngTextBib>
                </TabTopTituloEng>
                <TabTopTituloBase>
                    <TabTopTituloLeft>
                        <TabTopTituloleftFavor onPress={handlerClick}>
                            {favorited ?
                                <FavoritosIconFull fill="#29C17E" ></FavoritosIconFull>
                                    :
                                <FavoritosIconWhite ></FavoritosIconWhite>
                            }
                        </TabTopTituloleftFavor>

                    </TabTopTituloLeft>
                    <TabTopTituloMiddle>
                        <TabTopTituloMiddleText>001</TabTopTituloMiddleText>
                    </TabTopTituloMiddle>
                    <TabTopTituloRigth>
                        <TabTopTituloRigthText>Isaac Watts (1674 - 1748)</TabTopTituloRigthText>
                        <TabTopTituloRigthText>John Hatton (c. 1710 - 1793)</TabTopTituloRigthText>
                    </TabTopTituloRigth>
                </TabTopTituloBase>
            </TabTopTitulo>
            </TabTopHino>
            <Hino>
                <HinoT>
                    <Estrofe>
                    Ó Deus de amor,{'\n'} vimos nós te adorar.{'\n'} Vós, ó nações, rendei louvor!{'\n'} És tu, Senhor,{'\n'} o poderoso Vencedor,{'\n'} És Criador e Rei sem par.{'\n'}{'\n'}

                    Por teu poder nos criaste, Senhor, deste-nos vida e perfeição; E ao desviar-nos de teu plano de amor, veio em Jesus à salvação.

                    Por teu poder nos criaste, Senhor, deste-nos vida e perfeição; E ao desviar-nos de teu plano de amor, veio em Jesus à salvação.

                    Por teu poder nos criaste, Senhor, deste-nos vida e perfeição; E ao desviar-nos de teu plano de amor, veio em Jesus à salvação.
                    </Estrofe>
                </HinoT>
            </Hino>
        </HinoContainer>
    );
}