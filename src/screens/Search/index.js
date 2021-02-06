import React, {useState, useMemo, useCallback} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useStateValue} from '../../state/ContextProvider';
import {
  Container,
  Scroller,
  HinoPesq,
  PesquisarConp,
  PesquisarConpLeft,
  PesquisarConpMiddle,
  PesquisarCompMiddleBotao,
  TextImput,
  EscolhaPesquisaContainer,
  EscolhaPesquisa,
  TextoPesquisa,
  Barra,
} from './styles';
import HinoContainerUp from '../../components/HinoContainerUp';
import TabTopCustom from '../../components/TabTopCustom';
import {useStateValueHino} from '../../state/ContextProviderHinos';
export default () => {
  const {hinario, favoritos} = useStateValueHino();
  const [state] = useStateValue();
  const [ativo, setAtivo] = useState(1);
  const [query, setQuery] = useState('');

  const filtrarHino = useMemo(() => {
    if (!query) {
      return hinario.hinos;
    }
    if (ativo == 1) {
      return hinario.hinos.filter((item) => {
        return item.numero == query;
      });
    } else if (ativo == 2) {
      return hinario.hinos.filter((l) => l.title.toLowerCase().match(query));
    } else {
      var hn = [];
      hinario.hinos.map((v) => {
        const vb = v.estrofes.filter((l) =>
          l.estrofe.toLowerCase().match(query),
        );
        if (vb != '') {
          hn.push(v);
        }
      });
      return hn;
    }
  }, [query, ativo, hinario.hinos]);

  return (
    <Container>
      <TabTopCustom titulo={'Pesquisar'} />
      <Scroller>
        <HinoPesq>
          <EscolhaPesquisaContainer>
            <EscolhaPesquisa
              onPress={() => setAtivo(1)}
              style={
                ativo == 1
                  ? {backgroundColor: '#29C17E'}
                  : {backgroundColor: state.theme.container}
              }>
              <TextoPesquisa
                style={
                  ativo == 1 ? {color: '#fff'} : {color: state.theme.title}
                }>
                Busca por Número
              </TextoPesquisa>
            </EscolhaPesquisa>
            <Barra />
            <EscolhaPesquisa
              onPress={() => setAtivo(2)}
              style={
                ativo == 2
                  ? {backgroundColor: '#29C17E'}
                  : {backgroundColor: state.theme.container}
              }>
              <TextoPesquisa
                style={
                  ativo === 2 ? {color: '#fff'} : {color: state.theme.title}
                }>
                Busca por Titulo
              </TextoPesquisa>
            </EscolhaPesquisa>
            <Barra />
            <EscolhaPesquisa
              onPress={() => setAtivo(3)}
              style={
                ativo === 3
                  ? {backgroundColor: '#29C17E'}
                  : {backgroundColor: state.theme.container}
              }>
              <TextoPesquisa
                style={
                  ativo === 3 ? {color: '#fff'} : {color: state.theme.title}
                }>
                Busca por Letra
              </TextoPesquisa>
            </EscolhaPesquisa>
          </EscolhaPesquisaContainer>
          <PesquisarConp>
            <PesquisarConpMiddle>
              <PesquisarCompMiddleBotao>
                <Ionicons name="search" size={18} color="#8890A6" />
              </PesquisarCompMiddleBotao>
            </PesquisarConpMiddle>
            <PesquisarConpLeft>
              {ativo === 1 ? (
                <TextImput
                  placeholderTextColor="#aaa"
                  placeholder="Introduza o número do hino"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={query}
                  onChangeText={(query) => setQuery(query)}
                />
              ) : ativo === 2 ? (
                <TextImput
                  placeholderTextColor="#aaa"
                  placeholder="Introduza o titulo do hino"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={query}
                  onChangeText={(query) => setQuery(query)}
                />
              ) : (
                ativo === 3 && (
                  <TextImput
                    placeholderTextColor="#aaa"
                    placeholder="Introduza parte da letra do hino"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={query}
                    onChangeText={(query) => setQuery(query)}
                  />
                )
              )}
            </PesquisarConpLeft>
          </PesquisarConp>
        </HinoPesq>

        <HinoContainerUp hinos={filtrarHino} favoritos={favoritos} />
      </Scroller>
    </Container>
  );
};
