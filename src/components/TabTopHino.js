import React,{useState,useEffect, useMemo} from 'react';
import styled from 'styled-components/native';
import {useNavigation,useRoute} from '@react-navigation/native';
import {FlatList,ActivityIndicator} from 'react-native';
import Slider from '@react-native-community/slider';
import { useStateValueHino } from '../state/ContextProviderHinos';
import {useStateValue} from '../state/ContextProvider'; 
import getRealm from '../api/realm/realm';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Estrofes from './Estrofes';
import TrackPlayer, {
    Capability,
    useTrackPlayerEvents,
    usePlaybackState,
    TrackPlayerEvents,
    STATE_PLAYING,
    Event,
    useProgress
  } from 'react-native-track-player';
import { memo } from 'react';
import { useCallback } from 'react';
const HinoContainer = styled.SafeAreaView`

flex:1;
`;
const TabTopHino = styled.View`
    background-color:${props=>props.theme.container};
    elevation:2;
    margin-bottom:10px;
`;


const TabTopVoltarBotao = styled.View`
    flex-direction:row;
    padding:10px;
`;
const TabTopVoltar = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
`;
const TabText = styled.Text`
    padding-left:6px;
    font-size:16px;
    font-weight:bold;
    color:${props=>props.theme.title};;
`;

const TabTopTitulo = styled.View`
    
    width:100%;
    padding:10px 10px 0;
`;
const TabTopTituloText = styled.Text`
    font-size:18px;
    font-weight:700;
    letter-spacing:1px;
    color:${props=>props.theme.title};
`;
const TabTopTituloEng = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top:2px;
`;
const TabTopTituloEngText = styled.Text`
    font-size:12px;
    font-family:"Poppins-LightItalic";
    color:${props=>props.theme.title};
`;
const TabTopTituloEngTextBib = styled.Text`
    font-size:12px;
    font-family:"Poppins-LightItalic";
    color:${props=>props.theme.title};
`;
const TabTopTituloBase = styled.View`
    flex-direction:row;
    margin-top:5px;
`;
const TabTopTituloLeft = styled.View`
    align-self:center;
    flex:1;
`;
const TabTopTituloRigth = styled.View`
    flex:3;
    align-self:center;
`;
const TabTopTituloRigthText = styled.Text`
   font-size:12px;
   font-family:"Poppins-LightItalic";
   text-align:right;
   color:${props=>props.theme.title};
`;
const TabTopTituloMiddle = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`;
const TabTopTituloMiddleText = styled.Text`
   font-size:25px;
   font-family:"Poppins-Bold";
   color:${props=>props.theme.title};
   
`;

const Hino = styled.View`
    justify-content:center;
    
`;
const HinoT = styled.View`
    background-color:${props=>props.theme.background};;
    padding:10px;
    flex:1;
`;
const Estrofe = styled.Text`
   font-size:16px;
   font-family:"Poppins-Regular";
   margin-bottom:5px;
   color:${props=>props.theme.title};
   letter-spacing:1px;
`;

const Coro = styled.Text`
   font-size:16px;
   font-family:"Poppins-Regular";
   margin-bottom:5px;
   color:${props=>props.theme.title};

`;

const TabTopTituloleftFavor = styled.TouchableOpacity`
  
`;

const HinoEstrofes = styled.View`
    
`;

const NumeroEstrofe = styled.Text`
    font-size:20px;
    font-weight:700;
    color:${props=>props.theme.title};;
    margin-bottom:5px;
`;

const Scroller = styled.ScrollView`
    
flex:1;
`;
const Configurations = styled.View`
    flex-direction:row;
    align-items:center;
    padding:5px 10px 10px 10px;
    justify-content:space-between;
`;
const Font = styled.Text`
    font-size:16px;
    font-weight:600;
    /* font-family:"Poppins-SemiBold"; */
    color:${props=>props.theme.title};;
`;
const FontAudio = styled.Text`
    font-size:10px;
    font-weight:400;
    /* font-family:"Poppins-Light"; */
    color:${props=>props.theme.title};;
`;

const FontContainer = styled.View`
    flex-direction:row;
    align-items:center;
`;
const PlayerContainer = styled.View`
    flex-direction:row;
    align-items:center;
`;
const Botao = styled.TouchableOpacity`
    
`;
const SliderContainer = styled.View`
    
`;

const Hinos=() =>{
    const navigation=useNavigation();
    const route=useRoute();
    const [state,dispach]=useStateValue();
    const [favorited, setFavorited]=useState(false);
    const {setClickFav,setTamanho,tamanho,favoritos}=useStateValueHino();
    const [hinoInfo, setHinoInfo]=useState({
            id: route.params.id,
            title: route.params.title,
            url:route.params.url,
            artwork:route.params.artwork,
            artist:route.params.artist,
            numero_view: route.params.numero_view,
            ingles: route.params.ingles,
            autores: route.params.autores,
            texto_biblico: route.params.texto_biblico,
            coro: route.params.coro,
            estrofes: route.params.estrofes
    });
    const [botaoPlay, setBotaoPlay]=useState(true);
    const playbackState = usePlaybackState();
    const {position, duration} = useProgress();
    const [stop, setStop] = useState('play'); //paused play loading
    async function SaveFavorites(hinoInfo, favor){
        const data={
            id:hinoInfo.id,
            hino:hinoInfo.id,
            titulo:hinoInfo.title,
            favorito:favor,
        };
        const realm= await getRealm();
        realm.write(()=>{
            realm.create('Favoritos', data, 'modified');
        });
        
    }
    const getRealmData=useCallback(()=>{
        if(favoritos.length == 0){
            return setFavorited(false);
        }
        else{
            favoritos.map((value) => {
                if(hinoInfo.id==value.id){
                    return setFavorited(true);
                }
                else return setFavorited(false);
            })
        }
    },[favoritos]);

    const HandlerPlay=()=>{
        
        
            if (botaoPlay==true){
                TrackPlayer.play();
                setBotaoPlay(false);
                setStop('play');
            }
            else{
                TrackPlayer.pause();
                setBotaoPlay(true);
                setStop('play');
            }
          
        
    }
    const formatTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        let seconds = Math.ceil(secs - minutes * 60);
    
        if (seconds < 10) seconds = `0${seconds}`;
    
        return `${minutes}:${seconds}`;
    }
    const HandlerStop=()=>{
       /*  TrackPlayer.stop(); */
        navigation.goBack()
        
    }
    function handlerClick(){
        var bool=favorited;
            if(favorited==true){
                setFavorited(false);
                bool=false;
            }
            else{
                setFavorited(true);
                bool=true;
            }
            setClickFav(true);
            SaveFavorites(hinoInfo, bool);
    }
    const handleChange = (val) => {
        TrackPlayer.seekTo(val);
      };
    useEffect(()=>{
        getRealmData();
        (async ()=>{
            await TrackPlayer.setupPlayer().then(()=>{
                console.log('ready')
            });
            await TrackPlayer.reset();
            await TrackPlayer.add([hinoInfo]);
            
        })();
    },[]);
    return(
        
        <HinoContainer>
            <TabTopHino>
                    <TabTopVoltarBotao>
                        <TabTopVoltar  onPress={HandlerStop}>
                        <FontAwesome5 size={18} name="caret-left" color="#8890A6"/>
                            <TabText>Voltar</TabText>
                        </TabTopVoltar>
                </TabTopVoltarBotao> 
                <TabTopTitulo>
                <TabTopTituloText>{hinoInfo.title}</TabTopTituloText>
                <TabTopTituloEng>
                    <TabTopTituloEngText>{hinoInfo.ingles}</TabTopTituloEngText>
                    <TabTopTituloEngTextBib>{hinoInfo.texto_biblico}</TabTopTituloEngTextBib>
                </TabTopTituloEng>
                <TabTopTituloBase>
                <TabTopTituloLeft>
                        <TabTopTituloleftFavor onPress={handlerClick}>

                            {
                                favorited == true ?
                                <Icon size={24} name="heart" color="#29C17E" ></Icon>
                                    :
                                <Icon size={24} name="heart-outline" color="#29C17E" ></Icon>
                            }
                        </TabTopTituloleftFavor>
                    </TabTopTituloLeft>
                    <TabTopTituloMiddle>
                        <TabTopTituloMiddleText>{hinoInfo.numero_view}</TabTopTituloMiddleText>
                    </TabTopTituloMiddle>
                    <TabTopTituloRigth>
                        {
                            hinoInfo.autores.map((value, index) => {
                                return(
                                <TabTopTituloRigthText key={index}>{value.nome}</TabTopTituloRigthText>
                                )
                            })
                        }
                    </TabTopTituloRigth>
                </TabTopTituloBase>
                </TabTopTitulo>
                <Configurations>
                    <PlayerContainer>
                        <Botao onPress={HandlerPlay}>
                            {botaoPlay ==true ? 

                            /* <ActivityIndicator color="#29C17E" size={20} style={{marginRight:10}} /> */
                            
                            <Feather name="play"  style={{marginRight:8}} size={18} color="#29C17E"/>
                            :
                            <Feather name="pause"  style={{marginRight:8}} size={18} color="#29C17E"/>
                            }
                        </Botao>
                        <FontContainer>
                            <FontAudio>
                                {formatTime(position)}
                            </FontAudio>
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
                            <FontAudio>
                                {formatTime(duration)}
                            </FontAudio>
                        </FontContainer>
                    </PlayerContainer>
                
                    <FontContainer>
                    <Font>
                        aA
                    </Font>
                <Slider
                    value={tamanho}
                    style={{width: 100}}
                    thumbTintColor="#29C17E"
                    minimumValue={20}
                    maximumValue={50}
                    minimumTrackTintColor={state.theme.title}
                    maximumTrackTintColor={state.theme.title}
                    onValueChange={(itemValue, itemIndex) =>
                        setTamanho(itemValue)
                    }
                />
                    </FontContainer>
                </Configurations>
            
            </TabTopHino>
            <Scroller>
                
                    <Hino>
                        <HinoT>
                            {
                                hinoInfo.estrofes.slice(0, 1).map((value, index) => (
                                    <Estrofes key={index} value={value} tamanho={tamanho}>
                                    </Estrofes>
                                ))
                            }

                            {
                                hinoInfo.coro.map((value, index) => {
                                    if(value.coro!=null)
                                    {
                                        return(
                                            <HinoEstrofes key={index}>
                                                <NumeroEstrofe style={{fontSize:tamanho}}>{value.nome_coro}</NumeroEstrofe>
                                                <Coro style={{fontSize:tamanho}}>{value.coro}</Coro>
                                            </HinoEstrofes>
                                        )
                                    }
                                })
                            }
                            {
                                hinoInfo.estrofes.slice(1, 5).map((value, index) => (
                                    <Estrofes key={index} value={value} tamanho={tamanho}>
                                    </Estrofes>
                                ))
                            }
                        </HinoT>
                        
                    </Hino>
             </Scroller>

              </HinoContainer>
    );
}
export default memo(Hinos);