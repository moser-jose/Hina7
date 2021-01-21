import React from 'react';
import {Share, Linking} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwessome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
                            <MaterialCommunityIcons name="cog-transfer-outline" size={24} color="#8890A6"/>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Configurações</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                        <FontAwessome5 name="caret-right" size={22} color="#8890A6"/>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    <Line></Line>
                    <ConfigurationsBotao onPress={handleClickShare}>
                        <ConfigurationsBotaoLeft>
                        <FontAwessome5 name="share-alt" size={22} color="#8890A6"/>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Partilhar o App</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                        <FontAwessome5 name="caret-right" size={22} color="#8890A6"/>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    <Line></Line>
                    <ConfigurationsBotao onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.hin7')}>
                        <ConfigurationsBotaoLeft>
                            <AntDesign name="like1" size={24} color="#8890A6"/>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Feedback</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                            <FontAwessome5 name="caret-right" size={22} color="#8890A6"/>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    <Line></Line>
                    <ConfigurationsBotao onPress={handleClickSobre}>
                        <ConfigurationsBotaoLeft>
                        <Ionicons name="information-circle" size={24} color="#8890A6"/>
                        </ConfigurationsBotaoLeft>

                        <ConfigurationsBotaoMiddle>
                            <ConfigurationsBotaoMiddleText>Sobre o App</ConfigurationsBotaoMiddleText>
                            
                        </ConfigurationsBotaoMiddle>
                        <ConfigurationsBotaoRight>
                        <FontAwessome5 name="caret-right" size={22} color="#8890A6"/>
                        </ConfigurationsBotaoRight>
                    
                    </ConfigurationsBotao> 
                    
                </Configurations>

            </Scroller>
        </Container>

        
    );
}