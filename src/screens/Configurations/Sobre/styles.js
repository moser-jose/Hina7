import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    background-color:${props=>props.theme.background};;
    flex: 1;
    position: relative;
    padding-bottom:20px;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding:0 20px;
    margin-top:10px;
`;
export const Versao = styled.View`
margin-top:20px;
`;

export const VersaoTexto = styled.Text`
    font-size:12px;
    font-family:"Poppins-Bold";
    text-align:center;
    letter-spacing:1px;
    color:${props=>props.theme.title};

`;
export const TituloApp = styled.View`
    width:100%;
    text-align: center;
    margin-top:5px;
`;
export const TituloBold = styled.Text`
    color:${props=>props.theme.title};
    font-family:"Poppins-Bold";
    font-size: 25px;
    letter-spacing: 1px;
    text-align: center;
`;
export const TituloLightItalic = styled.Text`
    color:${props=>props.theme.title};
    font-family:"Poppins-LightItalic";
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
    margin-top:-13px;
`;

export const SobreTexto = styled.Text`
    color:${props=>props.theme.title};
    font-size: 16px;
    letter-spacing: 1px;
    margin:20px 0 10px;
`;

export const SobreContaneir = styled.View`
   
`;
export const SobreContaneirBotao = styled.TouchableOpacity`
   
`;


export const SobreTextoCenterAutor = styled.Text`
    color:${props=>props.theme.title};
    font-size: 14px;
    font-family:"Poppins-Bold";
    letter-spacing: 1px;
    text-align:center;
    margin-top:20px;
`;


export const SobreTextoCenterAutorT = styled.Text`
    color:${props=>props.theme.title};
    font-size: 14px;
    font-family:"Poppins-Light";
    letter-spacing: 1px;
    text-align:center;
`;

