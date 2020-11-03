import React, { useState } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import Logo from '../../../assets/img/logo.svg';
import {  } from './styles';

const Scroller = styled.ScrollView`
    background-color:${props=>props.theme.background};
    padding:20px 20px 0 20px;
    position: relative;
    flex:1;
`;
const Container = styled.SafeAreaView`
    flex:1;
    background-color:${props=>props.theme.background};
    
`;

const Versao = styled.View`
margin-top:20px;
`;

const VersaoTexto = styled.Text`
    font-size:12px;
    font-family:"Poppins-Bold";
    text-align:center;
    letter-spacing:1px;
    color:${props=>props.theme.title};

`;
const TituloApp = styled.View`
    width:100%;
    text-align: center;
    margin-top:5px;
`;
const TituloBold = styled.Text`
    color:${props=>props.theme.title};
    font-family:"Poppins-Bold";
    font-size: 25px;
    letter-spacing: 1px;
    text-align: center;
`;
const TituloLightItalic = styled.Text`
    color:${props=>props.theme.title};
    font-family:"Poppins-LightItalic";
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    margin-top:-13px;
`;

const SobreTexto = styled.Text`
    color:${props=>props.theme.title};
    font-size: 16px;
    letter-spacing: 1px;
    margin:20px 0 10px;
`;

const SobreContaneir = styled.View`
   
`;
const SobreContaneirBotao = styled.TouchableOpacity`
   
`;


const SobreTextoCenterAutor = styled.Text`
    color:${props=>props.theme.title};
    font-size: 14px;
    font-family:"Poppins-Bold";
    letter-spacing: 1px;
    text-align:center;
    margin-top:20px;
`;


const SobreTextoCenterAutorT = styled.Text`
    color:${props=>props.theme.title};
    font-size: 14px;
    font-family:"Poppins-Light";
    letter-spacing: 1px;
    text-align:center;
`;


export default () => {
    return(
        <Container>
            <TabTopConf Texto={"Sobre a App"}></TabTopConf>
                
                    <Scroller showsVerticalScrollIndicator={false}>
                <Logo width="100%" height="90" />
                <TituloApp>
                    <TituloBold>Hinário</TituloBold>
                    <TituloLightItalic>Adventista do 7º dia</TituloLightItalic>
                </TituloApp>

                <SobreTexto>
                São mais de 600 hinos, que podem ser entoados não apenas no culto congregacional mas também no culto familiar, nas reuniões de jovens, na devoção particular e muito mais. Tira o maior proveito. Deus o abençoe.
                </SobreTexto>
                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Agradecimentos:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://musicaeadoracao.com.br')}>
                        <SobreTextoCenterAutorT>
                            https://musicaeadoracao.com.br
                        </SobreTextoCenterAutorT>
                    </SobreContaneirBotao>
                </SobreContaneir>

                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Contribua com o projeto em:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://github.com/moser-jose/Hina7')}>
                        <SobreTextoCenterAutorT>
                        https://github.com/moser-jose/Hina7
                        </SobreTextoCenterAutorT>
                    </SobreContaneirBotao>
                </SobreContaneir>

                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Envie sugestões para:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('mailto:hina7@gmail.com')}>
                        <SobreTextoCenterAutorT>
                        hina7@gmail.com
                        </SobreTextoCenterAutorT>
                    </SobreContaneirBotao>
                </SobreContaneir>

                
                
                <Versao>
                    <VersaoTexto>
                        Versão 1.0.1
                    </VersaoTexto>
                </Versao>
        </Scroller>
        </Container>
    );
}