import React,{useState, useEffect} from 'react';
import {Share} from 'react-native';
import {
  Container,
  Scroller,
  Configurations,
  ConfigurationsBotao,
  ConfigurationsBotaoLeft,
  ConfigurationsBotaoMiddle,
  ConfigurationsBotaoMiddleText,
  ConfigurationsBotaoRight,
  Line,
} from './styles';
import TabTop from '../../components/TabTopCustom';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwessome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from '../../components/ModalView'
export default () => {
  const navigation = useNavigation();
  const [active, setActive]=useState(false);
  const [loading, setLoading]=useState(0);
  const [actualizar, setActualizar]=useState('');
  const act='v1.0.9'
  const vers=['v1.0.9','v1.1.0','v1.1.1','v1.1.2','v1.1.3','v1.1.4','v1.1.5','v1.1.6','v1.1.7','v1.1.8','v1.1.9'];
  

  const handleClickConf = () => {
    navigation.push('Config');
  };

  const handleClickModal = () => {
    setActive(true)
  };

  const handleClickSobre = () => {
    navigation.push('Sobre');
  };
  const handleClickShare = () => {
    Share.share(
      {
        title: 'Hinário Adventista do 7º dia',
        url: 'https://www.hinario-adventista.vercel.app/',
        message:
          'Instale o novo App do Hinário Adventista do 7º dia e desfrute do Hinário como nunca, faça o download em https://play.google.com/store/apps/details?id=com.hin7 ou visite a página em https://www.hinario-adventista.vercel.app/',
      },
      {
        dialogTitle: 'Partilhe o Hinário Adventista do 7º dia',
      },
    );
  };

  
  useEffect(() => {
    setLoading(0)
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          'https://github.com/moser-jose/Hina7/releases/latest'
        );
        const versao = response.url.substring(49,56)

        for (let i = 0; i < vers.length; i++) {
          if((vers[i]===versao) && (versao!==act)){
              setActualizar(vers[i])
              setLoading(1)
              break;
          }
          else{
            setLoading(2)
            break;
          }
          
        }

      } catch (error) {
        setLoading(3)
        console.error(error);
      }
    };

    getMoviesFromApiAsync()
  },[])
  return (
    <Container>
      <Modal v={actualizar} loading={loading} active={active} setActive={setActive} />
      <TabTop titulo={'Configurações'} />
      <Scroller>
        <Configurations>
          <ConfigurationsBotao onPress={handleClickConf}>
            <ConfigurationsBotaoLeft>
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={24}
                color="#8890A6"
              />
            </ConfigurationsBotaoLeft>

            <ConfigurationsBotaoMiddle>
              <ConfigurationsBotaoMiddleText>
                Temas
              </ConfigurationsBotaoMiddleText>
            </ConfigurationsBotaoMiddle>
            <ConfigurationsBotaoRight>
              <FontAwessome5 name="caret-right" size={22} color="#8890A6" />
            </ConfigurationsBotaoRight>
          </ConfigurationsBotao>
          <Line />
          <ConfigurationsBotao onPress={handleClickShare}>
            <ConfigurationsBotaoLeft>
              <FontAwessome5 name="share-alt" size={22} color="#8890A6" />
            </ConfigurationsBotaoLeft>

            <ConfigurationsBotaoMiddle>
              <ConfigurationsBotaoMiddleText>
                Partilhar o App
              </ConfigurationsBotaoMiddleText>
            </ConfigurationsBotaoMiddle>
            <ConfigurationsBotaoRight>
              <FontAwessome5 name="caret-right" size={22} color="#8890A6" />
            </ConfigurationsBotaoRight>
          </ConfigurationsBotao>
          <Line />
          <ConfigurationsBotao onPress={handleClickModal}>
            <ConfigurationsBotaoLeft>
              <Ionicons name="ios-cloud-download-sharp" size={24} color="#8890A6" />
            </ConfigurationsBotaoLeft>

            <ConfigurationsBotaoMiddle>
              <ConfigurationsBotaoMiddleText>
                Procurar Actualizações
              </ConfigurationsBotaoMiddleText>
            </ConfigurationsBotaoMiddle>
            <ConfigurationsBotaoRight>
              <FontAwessome5 name="caret-right" size={22} color="#8890A6" />
            </ConfigurationsBotaoRight>
          </ConfigurationsBotao>
          <Line />
          <ConfigurationsBotao onPress={handleClickSobre}>
            <ConfigurationsBotaoLeft>
              <Ionicons name="information-circle" size={24} color="#8890A6" />
            </ConfigurationsBotaoLeft>

            <ConfigurationsBotaoMiddle>
              <ConfigurationsBotaoMiddleText>
                Sobre o App
              </ConfigurationsBotaoMiddleText>
            </ConfigurationsBotaoMiddle>
            <ConfigurationsBotaoRight>
              <FontAwessome5 name="caret-right" size={22} color="#8890A6" />
            </ConfigurationsBotaoRight>
          </ConfigurationsBotao>
        </Configurations>
      </Scroller>
    </Container>
  );
};
