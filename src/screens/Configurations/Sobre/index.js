import React, { useState } from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import Logo from '../../../assets/img/logo.svg';
import {  
    Container,
    Scroller,
    Versao,
    VersaoTexto,
    TituloApp,
    TituloBold,
    TituloLightItalic,
    SobreTexto,
    SobreContaneir,
    SobreContaneirBotao,
    SobreTextoCenterAutor,
    SobreTextoCenterAutorT

} from './styles';

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
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://www.instagram.com/fabiosmoc/')}>
                        <SobreTextoCenterAutorT>
                            @fabiosmoc
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
                        Visite o Site em:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://hinario-adventista.vercel.app/')}>
                        <SobreTextoCenterAutorT>
                        https://hinario-adventista.vercel.app/
                        </SobreTextoCenterAutorT>
                    </SobreContaneirBotao>
                </SobreContaneir>

                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Envie sugestões para:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('mailto:mosmmy@gmail.com')}>
                        <SobreTextoCenterAutorT>
                        mosmmy@gmail.com
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