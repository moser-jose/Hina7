import React, {useState, useEffect, useCallback} from 'react';
import {useStateValueHino} from '../../state/ContextProviderHinos';
import TrackPlayer from 'react-native-track-player';
import {Container} from './styles';
import TabTopHino from '../../components/TabTopHino';

export default () => {
  const [favorited, setFavorited] = useState(false);
  const {setClickFav, setTamanho, tamanho,hinoInfo, favoritos} = useStateValueHino();



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
  }, [hinoInfo]);
  return (
    <Container>
      <TabTopHino
        setClickFav={setClickFav}
        setTamanho={setTamanho}
        tamanho={tamanho}
        favorited={favorited}
        setFavorited={setFavorited}
      />
    </Container>
  );
};