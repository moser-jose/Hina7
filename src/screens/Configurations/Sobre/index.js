import React from 'react';
import { Linking } from 'react-native';
import TabTopConf from '../../../components/TabTopConf';
import Logo from '../../../assets/img/logo.svg';
import {useStateValue} from '../../../state/ContextProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
    const [state,dispach]=useStateValue();
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
                        <FontAwesome name="share-square-o" color={state.theme.icon} size={20}/>
                    </SobreContaneirBotao>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://www.instagram.com/fabiosmoc/')}>
                        <SobreTextoCenterAutorT>
                            @fabiosmoc
                        </SobreTextoCenterAutorT>
                        <FontAwesome name="share-square-o" color={state.theme.icon} size={20}/>
                    </SobreContaneirBotao>
               
                </SobreContaneir>

                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Contribua com o projeto em:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://github.com/moser-jose/Hina7')}>
                        <SobreTextoCenterAutorT>
                        @Hina7
                        </SobreTextoCenterAutorT>
                        <Ionicons name="logo-github" color={state.theme.icon} size={20}/>
                    </SobreContaneirBotao>
                </SobreContaneir>

                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Visite o site em:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://hinario-adventista.vercel.app/')}>
                        <SobreTextoCenterAutorT>
                        https://hinario-adventista.vercel.app/
                        </SobreTextoCenterAutorT>
                        <FontAwesome name="share-square-o" color={state.theme.icon} size={20}/>
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
                        <MaterialCommunityIcons name="email-send" color={state.theme.icon} size={20}/>
                    </SobreContaneirBotao>
                </SobreContaneir>
                <SobreContaneir >
                    <SobreTextoCenterAutor>
                        Developer:
                    </SobreTextoCenterAutor>
                    <SobreContaneirBotao onPress={() => Linking.openURL('https://github.com/moser-jose')}>
                        <SobreTextoCenterAutorT>
                        @moser-jose
                        </SobreTextoCenterAutorT>
                        <Ionicons name="logo-github" color={state.theme.icon} size={20}/>
                    </SobreContaneirBotao>
                </SobreContaneir>

                <Versao>
                    <VersaoTexto>
                        Versão 1.0.5
                    </VersaoTexto>
                </Versao>
        </Scroller>
        </Container>
    );
}