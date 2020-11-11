import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import hinario from '../api/hinario.json';
import {useNavigation} from '@react-navigation/native';
import FilterIcon from '../assets/img/filter.svg';
import SearchIcon from '../assets/img/search.svg';
import FavoritosIconFull from '../assets/img/favorite_icon_full.svg';
import FavoritosIconWhite from '../assets/img/favorite_icon_white.svg';

import getRealm from '../api/realm/realm';
const HinoPesq = styled.SafeAreaView`
   
`;
const HinoContainerUp = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
`;

const Hino = styled.View`
    flex-direction:row;
    width:100%;
    elevation:2;
    padding:4px;
    background-color:${props=>props.theme.container};
    overflow:hidden;
    `;
const HinoLeft = styled.View`
    justify-content: center;
    align-items:center;
`;
const HinoRigth = styled.View`
    width:85%;
`;
const HinoBotao = styled.TouchableOpacity`
    
`; 
const NumeroHino = styled.Text`
    color:${props=>props.theme.title};
    font-size:25px;
    font-weight:700;
    padding-right:10px;
`; 
const BotaoTitulo = styled.TouchableOpacity`
    width:100%;
`; 
const TituloHino = styled.Text`
    color:${props=>props.theme.title};
    font-size:16px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
`; 
const TituloHinoIngles = styled.Text`
    color:${props=>props.theme.title};
    font-size:12px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    margin-top:-5px;

`; 
const FavoritoAutor = styled.View`
    flex-direction:row;
    margin-top:2px;
    padding:5px;
    justify-content:space-between;
    flex:1;
`; 

const Autores = styled.View`
`; 
    
const Autor = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
    color:${props=>props.theme.title};
`;
const FlatListUp = styled.FlatList`
    
`;

const TextoBiblico = styled.Text`
    font-size:10px;
    margin-top:2px;
    align-self:center;
    font-family:"Poppins-Italic";
    color:${props=>props.theme.title};

`;

const IconLoading = styled.ActivityIndicator`
    margin: 10px 0;
`;

const Div = styled.View`

`;
const FavoritosT = styled.View`
  
`;
const FavoritosF = styled.View`
    background-color:#df5c5c;
    padding:14px 10px;
    border-radius:2px;
    
`;
const FavoritosFText = styled.Text`
    color:#fff;
    font-size:16px;
    letter-spacing:1px;
    font-weight:bold;
`;


export default() =>{
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const navigation=useNavigation();
    filterItem = event => {
        var query = event.nativeEvent.text;
        setQuery(query);
        if (query == '') {
            setData(data);
        } else {
          var dataObj = data;
          query = query.toLowerCase();
          dataObj = dataObj.filter(l => l.numero.toString().toLowerCase().match(query));
          setData(dataObj);
        }
    };

    async function handlerActClickf(){
        setLoading(true);
        const realm =await getRealm();
        const d = realm.objects('Favoritos').filtered('favorito=true');
        var dataObj = hinario.hinos;
        var dataObj2 = [];
        var datad='{"hinos":[';
        var dataf="";
        for (let p=0; p<d.length; p++) {
            dataObj2=dataObj.filter((item, key)=>item.id==d[p].id);
            const vb=JSON.stringify(dataObj2);
            const lo=vb.slice(1,-1);
            if(d.length-1==p){
                dataf+=lo;
            }
            else{
                dataf+=lo+",";
            }
        }
        var go=datad+dataf+"]}"
        var ad=JSON.parse(go);
        setData(ad.hinos);
        setLoading(false);
    }
    useEffect(()=> {
        
        handlerActClickf();
    }, []);
    return(
        <Div>
            {data !="" ? 
                <FavoritosT>
                {loading && <IconLoading size="large"  color="#29c17e"></IconLoading>}
                <FlatListUp 
                
                data={data}
                keyExtractor={(item) => item.titulo}
                showsVerticalScrollIndicator={false}
                renderItem={HinosGet}>
                </FlatListUp>
       
            </FavoritosT>
            :
                <FavoritosF>
                    <FavoritosFText>
                        Não Existem Hinos Favoritos
                    </FavoritosFText>
                </FavoritosF>
            }
        </Div>
    );
    function HinosGet(item){
        const {id,titulo,numero_view,titulo_ingles,autores,texto_biblico,coro,estrofes}=item.item;
        
        const handleClick = () => {
            navigation.navigate('Hino',{
                id:id,
                titulo:titulo,
                numero_view:numero_view,
                titulo_ingles:titulo_ingles,
                autores:autores,
                texto_biblico:texto_biblico,
                coro:coro,
                estrofes:estrofes
            });
        }
        return(
            <HinoContainerUp>
                <Hino>
                    <HinoLeft>
                        <HinoBotao onPress={handleClick}>
                            <NumeroHino>{numero_view}</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo onPress={handleClick}>
                            <TituloHino>{titulo}</TituloHino>
                            <TituloHinoIngles>{titulo_ingles}</TituloHinoIngles>
                        </BotaoTitulo>
                        <FavoritoAutor>
                            <TextoBiblico>{texto_biblico}</TextoBiblico>
                            <Autores>
                                <FlatListUp 
                                    data={autores}
                                    keyExtractor={(item) => item.nome}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={HinosGetAutores}>
                                </FlatListUp>
                            </Autores>   
                            
                        </FavoritoAutor>
                    </HinoRigth>
                </Hino>
            </HinoContainerUp>
        )
    }
    function HinosGetAutores(item){
        const {nome}=item.item;
        return(
                <Autor>{nome}</Autor>
            )
    }
}