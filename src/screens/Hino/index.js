import React, {useState, useEffect, useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {useStateValueHino} from '../../state/ContextProviderHinos';
import TrackPlayer from 'react-native-track-player';
import {Container} from './styles';
import TabTopHino from '../../components/TabTopHino';

export default () => {
  const route = useRoute();
  const [favorited, setFavorited] = useState(false);
  const {setClickFav, setTamanho, tamanho, favoritos} = useStateValueHino();
  const [hinoInfo, setHinoInfo] = useState({
    id: route.params.id,
    title: route.params.title,
    url: route.params.url,
    artwork: route.params.artwork,
    artist: route.params.artist,
    numero_view: route.params.numero_view,
    ingles: route.params.ingles,
    autores: route.params.autores,
    texto_biblico: route.params.texto_biblico,
    coro: route.params.coro,
    estrofes: route.params.estrofes,
  });

  const getRealmData = useCallback(() => {
    if (favoritos == '') {
      return setFavorited(false);
    } else {
      return favoritos.filter((item) => {
        if (item.id == hinoInfo.id) {
          return setFavorited(true);
        }
      });
    }
  }, [favoritos]);

  useEffect(() => {
    getRealmData();

    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('ready');
      });
      await TrackPlayer.add([hinoInfo]);
      TrackPlayer.updateOptions({
        stopWithApp: true,
        alwaysPauseOnInterruption: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
        ],
      });
    })();
    return () => {
      TrackPlayer.destroy();
    };
  }, []);
  return (
    <Container>
      <TabTopHino
        hinoInfo={hinoInfo}
        setClickFav={setClickFav}
        setTamanho={setTamanho}
        tamanho={tamanho}
        favorited={favorited}
        setFavorited={setFavorited}
      />
    </Container>
  );
};