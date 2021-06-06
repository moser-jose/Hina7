import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  IconLoading,
  IconLoad,
  TituloApp,
  TituloBold,
  TituloLightItalic,
  BemvindoApp,
  BemvindoAppText,
  BemvindoAppVersao,
} from './styles';

import Logo from '../../assets/img/logo.svg';

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const entrar = () => {
      setTimeout(() => {
        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      }, 100);
    };
    entrar();
  });

  return (
    <Container>
      <Logo width="100%" height="120" />
      <TituloApp>
        <TituloBold>Hinário</TituloBold>
        <TituloLightItalic>Adventista do 7º dia</TituloLightItalic>
      </TituloApp>
      <IconLoad>
        <IconLoading size="large" color="#29c17e" />
      </IconLoad>
      <BemvindoApp>
        <BemvindoAppText>Bem Vindo</BemvindoAppText>
        <BemvindoAppVersao>Versão 1.0.8</BemvindoAppVersao>
      </BemvindoApp>
    </Container>
  );
};
