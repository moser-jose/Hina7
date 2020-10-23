import React from 'react';
import {Text} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
export default () => {
    const navigation=useNavigation();
    
    const handleClick = () => {
        navigation.push('Config');
    }
    return(
        <Container>
            <TabTop titulo={"Configurações"}></TabTop>

            <Scroller>

                <Configurations>
                     <ConfigurationsBotao onPress={handleClick}>
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
                            <ConfigurationsBotaoMiddleText>Como Usar a App</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                            <IconRight></IconRight>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    <Line></Line>
                    <ConfigurationsBotao>
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