import React, { useState } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import Logo from '../../../assets/img/logo.svg';
import {  } from './styles';

const Scroller = styled.ScrollView`
background-color:${props=>props.theme.background};
flex:1;
`;
const Container = styled.View`
    padding: 10px 30px;
    position: relative;
    flex:1;
`;

const Versao = styled.View`
    position:absolute;
    width:100%;
    bottom:10px;
`;

const VersaoTexto = styled.Text`
    font-size:14px;
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
    margin:40px 0;
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
    margin-top:30px;
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
        <Scroller>
            <TabTopConf Texto={"Sobre a App"}></TabTopConf>
                <Container>
                <Logo width="100%" height="90" />
                <TituloApp>
                    <TituloBold>Hinário</TituloBold>
                    <TituloLightItalic>Adventista do 7º dia</TituloLightItalic>
                </TituloApp>

                <SobreTexto>
                São mais de 600 hinos, para louvor e adoração a Deus, tira o maior proveito
                </SobreTexto>

                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Autor:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://github.com/moser-jose?tab=repositories')}>
                        <SobreTextoCenterAutorT>
                            @moser-jose
                        </SobreTextoCenterAutorT>
                    </SobreContaneirBotao>
                </SobreContaneir>

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

               {/*  <Versao>
                    <VersaoTexto>
                        Versão 1.0.0
                    </VersaoTexto>
                </Versao> */}
                </Container>
        </Scroller>
    );
}