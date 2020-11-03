import React from 'react';
import {Share} from 'react-native';
import { 
    Container,
    Scroller,
    Configurations,
    ConfigurationsBotao,
    ConfigurationsBotaoLeft,
    ConfigurationsBotaoMiddle,
    ConfigurationsBotaoMiddleText,
    ConfigurationsBotaoRight,
    Line
} from './styles';

import TabTop from '../../components/TabTopCustom';
import IconSetings from '../../assets/img/settings.svg';
import IconRight from '../../assets/img/Icon_right.svg';
import IconInfo from '../../assets/img/info.svg';
import IconHand from '../../assets/img/hand.svg';
import IconShare from '../../assets/img/Icon_share.svg';
import {useNavigation} from '@react-navigation/native';
export default () => {
    const navigation=useNavigation();
    
    const handleClickConf = () => {
        navigation.push('Config');
    }
    const handleClickSobre = () => {
        navigation.push('Sobre');
    }
    const handleClickShare=()=>{
        Share.share({
            title:"alguma coisa",
            url:"www.google.com"/* ,
            message:"ok vou partilhar" */
        },{
            dialogTitle:"ok estando partilhar"
        })
    }
    return(
        <Container>
            <TabTop titulo={"Configurações"}></TabTop>

            <Scroller>

                <Configurations>
                     <ConfigurationsBotao onPress={handleClickConf}>
                        <ConfigurationsBotaoLeft>
                            <IconSetings></IconSetings>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Configurações</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                            <IconRight></IconRight>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    <Line></Line>
                    <ConfigurationsBotao>
                        <ConfigurationsBotaoLeft>
                            <IconHand></IconHand>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Como Usar o App</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                            <IconRight></IconRight>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    <Line></Line>
                    <ConfigurationsBotao onPress={handleClickShare}>
                        <ConfigurationsBotaoLeft>
                            <IconShare></IconShare>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Partilhar o App</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                            <IconRight></IconRight>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    
                    <Line></Line>
                    <ConfigurationsBotao onPress={handleClickSobre}>
                        <ConfigurationsBotaoLeft>
                            <IconInfo></IconInfo>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Sobre o App</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                            <IconRight></IconRight>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    
                </Configurations>

            </Scroller>
        </Container>

        
    );
}