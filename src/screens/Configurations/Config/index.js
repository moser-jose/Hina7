import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import TabTopConf from '../../../components/TabTopConf';
import ThemeLight from '../../../assets/img/light.svg';
import ThemeDark from '../../../assets/img/dark.svg';
import IconCheck from '../../../assets/img/Icon_check.svg';
import IconUnCheck from '../../../assets/img/Icon_uncheck.svg';

const Scroller = styled.ScrollView`

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
    margin:8px 1px 20px 1px;
    background-color:#fff;
    border-radius:2px;
`;


const TemasLeft = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    padding:10px 0;
`;
const TemasLeftTheme = styled.View`
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
const ThemesTitule = styled.Text`
    letter-spacing:1px;
    font-size:20px;
    font-weight:700;
    color:#292C35;


`;
const Lista = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    padding:14px 0;
`;

const ListaLi = styled.Text`
    letter-spacing:1px;
    font-size:18px;
    font-weight:400;
    color:#292C35;
`;
const Line = styled.View`
    background-color:#ccc;
    height:1px;
    width:100%;
`;



const TemasLista = styled.View`
    elevation:4px;
    width:100%;
    margin:8px 1px 20px 1px;
    background-color:#fff;
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

    return(
        <Scroller>
            <TabTopConf></TabTopConf>
                <Container>
                    <Temas>
                        <TemasLeft>
                            <TemasLeftTheme>
                                <ThemeLight></ThemeLight>
                            </TemasLeftTheme>
                        </TemasLeft>
                        <TemasRigt>
                            <TemasLeftTheme>
                                <ThemeDark></ThemeDark>
                            </TemasLeftTheme>
                        </TemasRigt>
                    </Temas>
                        
                    <TemasLista>
                        <Lista>
                            <ListaLi>Claro</ListaLi>
                            <IconUnCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                        </Lista>
                        <Line></Line>
                        <Lista>
                            <ListaLi>Escuro</ListaLi>
                            <IconUnCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                        </Lista>
                        <Line></Line>
                        <Lista>
                            <ListaLi>Automático</ListaLi>
                            <IconUnCheck  style={{justifyContent:'center', alignSelf:'center'}}></IconUnCheck>
                        </Lista>
                        <ListaLiInf>Usar as configurações do dispositivo</ListaLiInf>
                    </TemasLista>
                </Container>
            </Scroller>
    );
}