import React, { useState } from 'react';
import styled from 'styled-components/native';
import TabTopConf from '../../../components/TabTopConf';
import ThemeLight from '../../../assets/img/light.svg';
import ThemeDark from '../../../assets/img/dark.svg';
import IconCheck from '../../../assets/img/Icon_check.svg';
import IconUnCheck from '../../../assets/img/Icon_uncheck.svg';

const Scroller = styled.ScrollView`
background-color:${props=>props.theme.background};
`;
const Container = styled.View`
    padding:0 10px;
    
`;
const Temas = styled.View`
    flex:1;
    flex-direction:row;
    elevation:4px;
    height:160px;
    width:100%;
    margin:0 1px 30px;
    background-color:${props=>props.theme.container};
    border-radius:2px;

    /* ${props=>props.theme.background} */
`;


const TemasLeft = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    padding:10px 0;
`;
const TemasLeftTheme = styled.TouchableOpacity`
    flex:1;
    elevation:2;
    height:100px;
    width:80px;
    border-radius:2px;
    overflow:hidden;
`;


const TemasRigt = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    padding:10px 0;

`;
const Lista = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    padding:18px 0;
`;

const ListaLi = styled.Text`
    letter-spacing:1px;
    font-size:18px;
    font-weight:400;
    color:${props=>props.theme.title};
`;
const Line = styled.View`
    background-color:#ccc;
    height:1px;
    width:100%;
`;



const TemasLista = styled.View`
    elevation:4px;
    width:100%;
    margin:0 1px 20px 1px;
    background-color:${props=>props.theme.container};
    border-radius:2px;
    padding:0 12px 10px;
`;

const ListaLiInf = styled.Text`
    margin-top:-12px;
    letter-spacing:1px;
    font-size:12px;
    color:#aaa;
`;
export default () => {

    const [light, setLight]=useState(true);
    const [dark, setdark]=useState(false);
    const [phone, setphone]=useState(false);

    const handleClickLight=()=>{
        setphone(false);
        setLight(true);
        setdark(false);
    }
    const handleClickDark=()=>{
        setphone(false);
        setLight(false);
        setdark(true);
    }
    const handleClickPhone=()=>{
        setphone(true);
        setLight(false);
        setdark(false);
    }

    return(
        <Scroller>
            <TabTopConf Texto={"Temas"}></TabTopConf>
                <Container>
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
                            {light ? 
                            <IconCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                            :
                            <IconUnCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                            }
                            
                        </Lista>
                        <Line></Line>
                        <Lista onPress={handleClickDark}>
                            <ListaLi>Escuro</ListaLi>
                            {dark ? 
                            <IconCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                            :
                            <IconUnCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                            }
                        </Lista>
                        <Line></Line>
                        <Lista onPress={handleClickPhone}>
                            <ListaLi>Automático</ListaLi>
                            {phone ? 
                            <IconCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconCheck>
                            :
                            <IconUnCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                            }
                        </Lista>
                        <ListaLiInf>Usar as configurações do dispositivo</ListaLiInf>
                    </TemasLista>
                </Container>
            </Scroller>
    );
}