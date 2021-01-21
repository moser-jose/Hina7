import React, { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import TabTopConf from '../../../components/TabTopConf';
import ThemeLight from '../../../assets/img/light.svg';
import ThemeDark from '../../../assets/img/dark.svg';
import {useStateValue} from '../../../state/ContextProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Scroller,
    Container,
    Temas,
    TemasLeft,
    TemasRigt,
    Lista,
    ListaLi,
    Line,
    TemasLeftTheme,
    TemasLista,
    ListaLiInf
} from './styles'

export default () => {
    const [, dispach]=useStateValue();
    const [light, setLight]=useState(true);
    const [dark, setDark]=useState(false);
    const [phone, setPhone]=useState(false);

    const handleClickLight=()=>{
        setPhone(false);
        setLight(true);
        setDark(false);
        dispach({
            type:"lighTheme",
        })
    }
    const handleClickDark=()=>{
        setPhone(false);
        setLight(false);
        setDark(true);
        dispach({
            type:"darkTheme",
        })
    }
    const handleClickPhone=()=>{
        setPhone(true);
        setLight(false);
        setDark(false);
        dispach({
            type:"deviceTheme",
        })
    }

    useEffect(()=>{
        async function getInitialState(){
        const darkModeKey= await AsyncStorage.getItem("Theme");
    
        if(darkModeKey=== '1'){
            setPhone(false);
            setLight(true);
            setDark(false);
            return;
        }
        else if(darkModeKey=== '2'){
            setPhone(false);
            setLight(false);
            setDark(true);
            return;
        }
        else{
            setPhone(true);
            setLight(false);
            setDark(false);
            return;
        }
    
    }
    getInitialState();
},[]);

    return(
        
            <Container>
                <TabTopConf Texto={"Temas"}></TabTopConf>
                    
                    <Scroller>
                        <Temas>
                            <TemasLeft>
                                <TemasLeftTheme  onPress={handleClickLight}>
                                    <ThemeLight></ThemeLight>
                                </TemasLeftTheme>
                            </TemasLeft>
                            <TemasRigt>
                                <TemasLeftTheme onPress={handleClickDark}>
                                    <ThemeDark></ThemeDark>
                                </TemasLeftTheme>
                            </TemasRigt>
                        </Temas>
                        <TemasLista>
                            <Lista onPress={handleClickLight}>
                                <ListaLi >Claro</ListaLi>
                                {
                                    light ? 
                                    
                                    <Ionicons size={24} name="checkmark-circle" color="#8890A6"  style={{justifyContent:'center', alignSelf:'center'}}/>
                                    :
                                    <MaterialCommunityIcons name="checkbox-blank-circle-outline"
                                    size={24}
                                    color="#8890A6"  style={{justifyContent:'center', alignSelf:'center'}}/>
                                }
                                
                            </Lista>
                            <Line></Line>
                            <Lista onPress={handleClickDark}>
                                <ListaLi>Escuro</ListaLi>
                                {dark ?
                                <Ionicons size={24} name="checkmark-circle" color="#8890A6"  style={{justifyContent:'center', alignSelf:'center'}}/>
                                :
                                <MaterialCommunityIcons name="checkbox-blank-circle-outline"
                                size={24}
                                color="#8890A6"  style={{justifyContent:'center', alignSelf:'center'}}/>
                                }
                            </Lista>
                            <Line></Line>
                            <Lista onPress={handleClickPhone}>
                                <ListaLi>Automático</ListaLi>
                                {phone ? 
                                <Ionicons size={24} name="checkmark-circle" color="#8890A6"  style={{justifyContent:'center', alignSelf:'center'}}/>
                                :
                                <MaterialCommunityIcons name="checkbox-blank-circle-outline"
                                size={24}
                                color="#8890A6"  style={{justifyContent:'center', alignSelf:'center'}}/>
                                }
                            </Lista>
                            <ListaLiInf>Usar as configurações do dispositivo</ListaLiInf>
                        </TemasLista>
                    </Scroller>
                    
            </Container>
    );
}