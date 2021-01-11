import React,{useState,useEffect} from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
import { 
    Container,
    Scroller
} from './styles';
import TabTopConf from '../../../components/TabTopConf';
import HinosFavoritos from '../../../components/HinosFavoritos';
import {useStateValueFavorite} from '../../../state/ContextProviderFavoritos';
import {useStateValueHino} from '../../../state/ContextProviderHinos';
import getRealm from '../../../api/realm/realm';
export default () => {
    const [state, dispatch]=useStateValueFavorite();
    const [hinos, setHinos]=useStateValueHino();
    const [data, setData]=useState([]);
    async function handlerActClickf(){
        const realm =await getRealm();
        const d = realm.objects('Favoritos').filtered('favorito=true');
        var dataObj = hinos.hinos;
        
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
    }

    useEffect(() => {
        handlerActClickf();
    }, [state])
    return(
        
        <Container>
            <TabTopConf Texto={"Hinos Favoritos"}></TabTopConf>
            <Scroller 
                showsVerticalScrollIndicator={false}
            >
                <HinosFavoritos hinos={data}></HinosFavoritos>
            </Scroller>
        </Container>
        
    );
}