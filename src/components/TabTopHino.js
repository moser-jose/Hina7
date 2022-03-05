import React, {useState, memo,useCallback} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {useStateValue} from '../state/ContextProvider';
import getRealm from '../api/realm/realm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Estrofes from './Estrofes';
import TrackPlayer, {useTrackPlayerProgress} from 'react-native-track-player';
import { useStateValueHino } from '../state/ContextProviderHinos';
const HinoContainer = styled.SafeAreaView`
  flex: 1;
`;
const TabTopHino = styled.View`
  background-color: ${(props) => props.theme.container};
  elevation: 1;
  padding: 35px 0 0px;
`;

const TabTopVoltarBotao = styled.View`
  flex-direction: row;
  padding: 5px 10px 0px;
`;
const TabTopVoltar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const TabText = styled.Text`
  padding-left: 6px;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.title}; ;
`;

const TabTopTitulo = styled.View`
  width: 100%;
  padding: 5px 10px 0;
`;
const TabTopTituloText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.title};
`;
const TabTopTituloEng = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
`;
const TabTopTituloEngText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-LightItalic';
  color: ${(props) => props.theme.title};
`;
const TabTopTituloEngTextBib = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-LightItalic';
  color: ${(props) => props.theme.title};
`;
const TabTopTituloBase = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
const TabTopTituloLeft = styled.View`
  align-self: center;
  flex: 1;
`;
const TabTopTituloRigth = styled.View`
  flex: 3;
  align-self: center;
`;
const TabTopTituloRigthText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-LightItalic';
  text-align: right;
  color: ${(props) => props.theme.title};
`;
const TabTopTituloMiddle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TabTopTituloMiddleText = styled.Text`
  font-size: 25px;
  font-family: 'Poppins-Bold';
  color: ${(props) => props.theme.title};
`;

const Hino = styled.View`
  justify-content: center;
`;
const HinoT = styled.View`
  background-color: ${(props) => props.theme.background};
  padding: 10px;
  flex: 1;
`;

const Coro = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Regular';
  margin-bottom: 5px;
  color: ${(props) => props.theme.title};
`;

const TabTopTituloleftFavor = styled.TouchableOpacity``;

const HinoEstrofes = styled.View``;

const NumeroEstrofe = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.title};
  margin-bottom: 5px;
`;

const Scroller = styled.ScrollView`
  flex: 1;
`;
const Configurations = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px 3px 10px;
  justify-content: space-between;
`;
const Font = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.title}; ;
`;
const FontAudio = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: ${(props) => props.theme.title}; ;
`;

const FontContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const PlayerContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Botao = styled.TouchableOpacity``;
const SliderContainer = styled.View``;
const NextPreview=styled.View`
  flex:1;
  flex-direction: row;
  align-items: center;
  justify-content:flex-end;

`;
const TabTextB =styled.Text`
  padding-left: 6px;
  font-size: 18px;
  font-weight: bold;
  color:#29C17E;
  `;
  const TabTextT =styled.Text`
    padding-left: 6px;
    font-size: 16px;
    font-weight: 300;
    color: ${(props) => props.theme.title}; ;
  `;
  const TabTextH =styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.title}; ;
`;
  const TabTextC =styled.Text`
  padding-left: 6px;
  font-size: 13px;
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme.title}; ;
`;
const TabTextD =styled.Text`
  font-size: 13px;
  font-weight: bold;
  text-align: left;
  color: ${(props) => props.theme.title}; ;
`;
const TabTopNextPreview =styled.TouchableOpacity`
  flex-direction: column;
  justify-content: flex-end;
`;

const Hinos = ({
  //hinoInfo,
  setClickFav,
  setTamanho,
  tamanho,
  setFavorited,
  favorited,
}) => {
  const navigation = useNavigation();
  const [state, ] = useStateValue();
  const{hinoInfo,setHinoInfo,hinario}=useStateValueHino();
  const [botaoPlay, setBotaoPlay] = useState(true);
  const {position, duration} = useTrackPlayerProgress();
  async function SaveFavorites(hinoInfo, favor) {
    const data = {
      id: hinoInfo.id,
      hino: hinoInfo.id,
      titulo: hinoInfo.title,
      favorito: favor,
    };
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Favoritos', data, 'modified');
    });
  }

  const HandlerPlay = () => {
    if (botaoPlay == true) {
      TrackPlayer.play();
      setBotaoPlay(false);
    } else {
      TrackPlayer.pause();
      setBotaoPlay(true);
    }
  };
  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };
  const HandlerStop = () => {
    navigation.goBack();
  };
  function handlerClick() {
    var bool = favorited;
    if (favorited == true) {
      setFavorited(false);
      bool = false;
    } else {
      setFavorited(true);
      bool = true;
    }
    setClickFav(true);
    SaveFavorites(hinoInfo, bool);
  }
  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
  };

  const filter=(numl)=>{
    hinario.hinos.map((item)=>{
      if (item.id===numl){
        setHinoInfo({
          id: item.id,
          title: item.title,
          url: item.url,
          artwork: item.artwork,
          artist: item.artist,
          numero_view: item.numero_view,
          ingles: item.ingles,
          autores: item.autores,
          texto_biblico: item.texto_biblico,
          coro: item.coro,
          estrofes: item.estrofes,
          anterior:hinario.hinos.find((i)=> i.id==item.id-1),
          proximo:hinario.hinos.find((i)=> i.id==item.id+1)
        }) 
      }
    })
  }

  const hinoAnterior = () => {
    TrackPlayer.stop();
    setBotaoPlay(true);
    filter(hinoInfo.anterior.numero);
  };

  const hinoProximo =() => {
    TrackPlayer.stop();
    setBotaoPlay(true);
    filter(hinoInfo.proximo.numero);
  };
  
  return (
    <HinoContainer>
      <TabTopHino>
        <TabTopVoltarBotao>
          <TabTopVoltar onPress={HandlerStop}>
            <FontAwesome5 size={18} name="caret-left" color="#8890A6" />
            <TabText>Voltar</TabText>
          </TabTopVoltar>
          <NextPreview>
            {
              hinoInfo.id >= 2 && hinoInfo.id <= 609  ?
              <>
                <TabTopNextPreview onPress={hinoAnterior}>
                  <TabTextH>Anterior</TabTextH>
                  <TabTextD>{hinoInfo.anterior.numero_view}</TabTextD>
                </TabTopNextPreview>
                <TabTextB>|</TabTextB>
                <TabTopNextPreview onPress={hinoProximo}>
                  <TabTextT>Próximo</TabTextT>
                  <TabTextC>{hinoInfo.proximo.numero_view}</TabTextC>
                </TabTopNextPreview>
              </>:hinoInfo.id === 1 ? 
              <TabTopNextPreview onPress={hinoProximo}>
                <TabTextT>Próximo</TabTextT>
                <TabTextC>{hinoInfo.proximo.numero_view}</TabTextC>
              </TabTopNextPreview>:hinoInfo.id === 610 & 
              <TabTopNextPreview onPress={hinoProximo}>
                <TabTextH>Anterior</TabTextH>
                <TabTextD>{hinoInfo.anterior.numero_view}</TabTextD>
              </TabTopNextPreview>
            }
            
            
          </NextPreview>
        </TabTopVoltarBotao>
        <TabTopTitulo>
          <TabTopTituloText>{hinoInfo.title}</TabTopTituloText>
          <TabTopTituloEng>
            <TabTopTituloEngText>{hinoInfo.ingles}</TabTopTituloEngText>
            <TabTopTituloEngTextBib>
              {hinoInfo.texto_biblico}
            </TabTopTituloEngTextBib>
          </TabTopTituloEng>
          <TabTopTituloBase>
            <TabTopTituloLeft>
              <TabTopTituloleftFavor onPress={handlerClick}>
                {favorited == true ? (
                  <Icon size={24} name="heart" color="#29C17E" />
                ) : (
                  <Icon size={24} name="heart-outline" color="#29C17E" />
                )}
              </TabTopTituloleftFavor>
            </TabTopTituloLeft>
            <TabTopTituloMiddle>
              <TabTopTituloMiddleText>
                {hinoInfo.numero_view}
              </TabTopTituloMiddleText>
            </TabTopTituloMiddle>
            <TabTopTituloRigth>
              {hinoInfo.autores.map((value, index) => {
                return (
                  <TabTopTituloRigthText key={index}>
                    {value.nome}
                  </TabTopTituloRigthText>
                );
              })}
            </TabTopTituloRigth>
          </TabTopTituloBase>
        </TabTopTitulo>
        <Configurations>
          <PlayerContainer>
            <Botao onPress={HandlerPlay}>
              {botaoPlay == true ? (
                <Feather
                  name="play"
                  style={{marginRight: 8}}
                  size={18}
                  color="#29C17E"
                />
              ) : (
                <Feather
                  name="pause"
                  style={{marginRight: 8}}
                  size={18}
                  color="#29C17E"
                />
              )}
            </Botao>
            <FontContainer>
              <FontAudio>{formatTime(position)}</FontAudio>
              <SliderContainer>
                <Slider
                  value={position}
                  style={{width: 110}}
                  thumbTintColor="#29C17E"
                  minimumValue={0}
                  maximumValue={duration}
                  minimumTrackTintColor={state.theme.title}
                  maximumTrackTintColor={state.theme.title}
                  onValueChange={handleChange}
                />
              </SliderContainer>
              <FontAudio>{formatTime(duration)}</FontAudio>
            </FontContainer>
          </PlayerContainer>

          <FontContainer>
            <Font>aA</Font>
            <Slider
              value={tamanho}
              style={{width: 100}}
              thumbTintColor="#29C17E"
              minimumValue={20}
              maximumValue={50}
              minimumTrackTintColor={state.theme.title}
              maximumTrackTintColor={state.theme.title}
              onSlidingComplete={(itemValue, itemIndex) =>
                setTamanho(itemValue)
              }
            />
          </FontContainer>
        </Configurations>
      </TabTopHino>
      <Scroller >
        <Hino>
          <HinoT>
            {hinoInfo.estrofes.slice(0, 1).map((value, index) => (
              <Estrofes key={index} value={value} tamanho={tamanho} />
            ))}

            {hinoInfo.coro.map((value, index) => {
              if (value.coro != null) {
                return (
                  <HinoEstrofes key={index}>
                    <NumeroEstrofe style={{fontSize: tamanho}}>
                      {value.nome_coro}
                    </NumeroEstrofe>
                    <Coro style={{fontSize: tamanho}}>{value.coro}</Coro>
                  </HinoEstrofes>
                );
              }
            })}
            {hinoInfo.estrofes.slice(1, 5).map((value, index) => (
              <Estrofes key={index} value={value} tamanho={tamanho} />
            ))}
          </HinoT>
        </Hino>
      </Scroller>
    </HinoContainer>
  );
};
export default memo(Hinos);