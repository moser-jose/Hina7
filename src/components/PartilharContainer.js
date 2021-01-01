import React from 'react';
import {Share} from 'react-native';
import styled from 'styled-components/native';

import ShareIcon from '../assets/img/share.svg';
import ShareIconShare from '../assets/img/share_icon.svg';

const PartilharContainer = styled.View`
    flex-direction:row;
    margin-top:20px;
    width:100%;
    margin-right:10px;
    margin-bottom:10px;
    background-color:${props=>props.theme.container};
    border-radius:3px;
    justify-content:center;
    elevation:2;
    padding:10px;
`;

const PartilharContainerLeft = styled.View`
    flex:1;
    justify-content:center;
    align-self:center;
`;

const PartilharContainerRigth = styled.View`
    flex:2;
`;

const PartilharCima = styled.View`
   

`;



const PartilharCimaTexto = styled.Text`
   
    font-size:14px;
    text-align:right;
    font-family:"Poppins-LightItalic";
    color:${props=>props.theme.title};;

`;
const PartilharBaixo = styled.View`
    margin-top:20px;
`;
const PartilharBotao = styled.TouchableOpacity`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
`;


export default() =>{

    const handleClickShare=()=>{
        Share.share({
            title:"Hina7",
            url:"www.google.com",
            message:"Instale o novo App do Hinário Adventista do 7º dia e desfrute do Hinário como nunca, faça o download em www.google.com"
        },{
            dialogTitle:"Partilhe o App Hina7"
        })
    }


    return(
        <PartilharContainer>
            <PartilharContainerLeft>
                <ShareIcon width="100%" heigth="190"></ShareIcon>
            </PartilharContainerLeft>
            <PartilharContainerRigth>

                <PartilharCima>
                    <PartilharCimaTexto>
                    Partilha a aplicação {'\n'}
                    com os seus amigos{'\n'}
                    e juntos louvem a Deus.
                    </PartilharCimaTexto>
                </PartilharCima>

                <PartilharBaixo>
                    <PartilharBotao onPress={handleClickShare}>
                        <ShareIconShare></ShareIconShare>
                    </PartilharBotao>
                </PartilharBaixo>
            
            </PartilharContainerRigth>
        </PartilharContainer>
    );
}
                