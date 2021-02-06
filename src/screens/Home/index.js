import React from 'react';
import {Container, Scroler, Favoritos} from './styles';
import {StatusBar} from 'react-native';
import TextContTitulo from '../../components/TextContTitulo';
import TabTop from '../../components/TabTopHome';
import CategoriaHol from '../../components/CategoriaHol';
import HinoContainerHorizontal from '../../components/HinoContainerHorizontal';
import {useStateValueHino} from '../../state/ContextProviderHinos';
import PartilharContainer from '../../components/PartilharContainer';
import {useStateValue} from '../../state/ContextProvider';
export default () => {
  const {hinario, favoritos} = useStateValueHino();
  const [state] = useStateValue();
  return (
    <>
      <StatusBar
        barStyle={state.theme.statusBarStyle}
        /* backgroundColor={state.theme.container} */
        hidden={false}
        backgroundColor="transparent"
        translucent={true} /* hidden={true} */
      />
      <Container>
        <TabTop titulo={'Favoritos'} />
        <Scroler>
          <TextContTitulo nome={'Hinos'} />
          <HinoContainerHorizontal
            hinos={hinario.hinos}
            favoritos={favoritos}
          />

          <TextContTitulo nome={'Secções'} />
          <CategoriaHol categoria={hinario.categorias} />

          <Favoritos>
            {favoritos != '' && <TextContTitulo nome={'Favoritos'} />}
            <HinoContainerHorizontal hinos={favoritos} favoritos={favoritos} />
          </Favoritos>
          <PartilharContainer />
        </Scroler>
      </Container>
    </>
  );
};
