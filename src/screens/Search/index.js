import React,{useState,useEffect} from 'react';
import { 
    Container,
    Scroller
} from './styles';

import HinoContainerUp from '../../components/HinoContainerUp';
import TabTopCustom from '../../components/TabTopCustom';
import {useStateValueFavorite} from '../../state/ContextProviderFavoritos';
import {useStateValueHino} from '../../state/ContextProviderHinos';
import getRealm from '../../api/realm/realm';
export default ()=>{
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
        setHinos();
        handlerActClickf();
    }, [state])
        return(
            <Container>
                <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
                <Scroller>
                    <HinoContainerUp hinos={hinos.hinos} favoritos={data}></HinoContainerUp>
                </Scroller>
            </Container>
        );
}