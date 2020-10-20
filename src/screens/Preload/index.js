import React from 'react';
import { 
    Container,
    TituloApp,
    TituloBold,
    TituloLightItalic,
    BemvindoApp,
    BemvindoAppText
} from './styles';

import Logo from '../../assets/img/logo.svg';

export default () => {

    return(
        <Container>
            <Logo width="100%" height="120" />
            <TituloApp>
                <TituloBold>Hinário</TituloBold>
                <TituloLightItalic>Adventista do 7º dia</TituloLightItalic>
            </TituloApp>

            <BemvindoApp>
                <BemvindoAppText> Bem Vindo</BemvindoAppText>
            </BemvindoApp>
        </Container>
    );
}