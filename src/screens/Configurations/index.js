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
            title:"Hinário Adventista do 7º dia",
            url:"https://www.hinario-adventista.vercel.app/",
            message:"Instale o novo App do Hinário Adventista do 7º dia e desfrute do Hinário como nunca, faça o download em https://play.google.com/store/apps/details?id=com.hin7 ou visite a página em https://www.hinario-adventista.vercel.app/"
        },{
            dialogTitle:"Partilhe o Hinário Adventista do 7º dia"
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