import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation,useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native'
import FavoritosIconFull from '../assets/img/favorite_icon_full.svg';
import FavoritosIconWhite from '../assets/img/favorite_icon_white.svg';
import IconLeft from '../assets/img/Icon_left.svg';
import { useStateValueFavorite } from '../state/ContextProviderFavoritos';
import getRealm from '../api/realm/realm';
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
    padding:10px;
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
    justify-content:center;
    align-items:center;
    
    flex:1;
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

export default() =>{
    const navigation=useNavigation();
    const route=useRoute();
    const [favorited, setFavorited]=useState(false);
    const [hine, setHine]=useStateValueFavorite();
   const [hinoInfo, setHinoInfo]=useState({

        id: route.params.id,
        titulo: route.params.titulo,
        numero_view: route.params.numero_view,
        titulo_ingles: route.params.titulo_ingles,
        autores: route.params.autores,
        texto_biblico: route.params.texto_biblico,
        coro: route.params.coro,
        estrofes: route.params.estrofes
   });
    async function SaveFavorites(hinoInfo, favor){
        const data={
            id:hinoInfo.id,
            hino:hinoInfo.id,
            titulo:hinoInfo.titulo,
            favorito:favor,
        };
        const realm= await getRealm();

        realm.write(()=>{
            realm.create('Favoritos', data, 'modified');
        });
    }


    async function RefreshFavorites(hinoInfo, favor){
        await SaveFavorites(hinoInfo, favor);
    }

    async function handlerActClickf(){
        const realm =await getRealm();
        const dogs = realm.objects('Favoritos').filtered('id='+hinoInfo.id+'');
        for (let p of dogs) {
            setFavorited(p.favorito);
        }
    }

    function handlerClick(){
        if(favorited){
            setFavorited(false);
            setHine({
                type:'hinos'
            })
            RefreshFavorites(hinoInfo, false);
            
        }
        else{
            setFavorited(true);
            setHine({
                type:'hinos'
            })
            SaveFavorites(hinoInfo, true);
            setHine({
                type:'hinos'
            })
        }
        
    }
    function handlerActClick(){
        handlerClick();
    }
    const voltar =()=>{
        navigation.goBack();
    }

    useEffect(()=>{
        handlerActClickf();
    },[]);
    return(
        
        <HinoContainer>
            <TabTopHino>
                    <TabTopVoltarBotao>
                        <TabTopVoltar  onPress={voltar}>
                            <IconLeft></IconLeft>
                            <TabText>Voltar</TabText>
                        </TabTopVoltar>
                </TabTopVoltarBotao> 
                <TabTopTitulo>
                <TabTopTituloText>{hinoInfo.titulo}</TabTopTituloText>
                <TabTopTituloEng>
                    <TabTopTituloEngText>{hinoInfo.titulo_ingles}</TabTopTituloEngText>
                    <TabTopTituloEngTextBib>{hinoInfo.texto_biblico}</TabTopTituloEngTextBib>
                </TabTopTituloEng>
                <TabTopTituloBase>
                    <TabTopTituloLeft>
                        <TabTopTituloleftFavor onPress={handlerActClick}>
                            {favorited ?
                                <FavoritosIconFull fill="#29C17E" ></FavoritosIconFull>
                                    :
                                <FavoritosIconWhite ></FavoritosIconWhite>
                            }
                        </TabTopTituloleftFavor>
                    </TabTopTituloLeft>
                    <TabTopTituloMiddle>
                        <TabTopTituloMiddleText>{hinoInfo.numero_view}</TabTopTituloMiddleText>
                    </TabTopTituloMiddle>
                    <TabTopTituloRigth>
                            <FlatList
                                    data={hinoInfo.autores}
                                    keyExtractor={(item) => item.nome}
                                    contentContainerStyle={{flexGrow:1}}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={HinosGetAutores}>
                            </FlatList>
                    </TabTopTituloRigth>
                </TabTopTituloBase>
            </TabTopTitulo>
            </TabTopHino>
            <Scroller>
                
                    <Hino>
                        <HinoT>
                            <FlatList
                                data={hinoInfo.estrofes.slice(0, 1)}
                                keyExtractor={(item) => item.estrofe}
                                
                                showsVerticalScrollIndicator={false}
                                renderItem={HinosGetEstrofes}>
                            </FlatList>

                            <FlatList
                                data={hinoInfo.coro}
                                keyExtractor={(item) => item.coro}
                                showsVerticalScrollIndicator={false}
                                renderItem={HinosGetCoro}>
                            </FlatList>

                            <FlatList
                            data={hinoInfo.estrofes.slice(1, 5)}
                            keyExtractor={(item) => item.estrofe}
                            showsVerticalScrollIndicator={false}
                            renderItem={HinosGetEstrofes}>
                        </FlatList>
                        </HinoT>
                        
                    </Hino>
             </Scroller>

              </HinoContainer>
    );
    function HinosGetAutores(item){
        const {nome}=item.item;
        return(
                <TabTopTituloRigthText>{nome}</TabTopTituloRigthText>
            )
    }
    function HinosGetCoro(item){
        const {coro,nome_coro}=item.item;

            if(coro!=null){
                return(
                    <HinoEstrofes>
                        <NumeroEstrofe>{nome_coro}</NumeroEstrofe>
                        <Coro>{coro}</Coro>
                    </HinoEstrofes>
                )
            }
    }
    function HinosGetEstrofes(item){
        const {estrofe,numero}=item.item;

            return(
                <HinoEstrofes>
                    <NumeroEstrofe>{numero}</NumeroEstrofe>
                    <Estrofe>{estrofe}</Estrofe>
                </HinoEstrofes>
            )
    }
}