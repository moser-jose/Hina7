import React,{useState,useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    Scroler,
    Favoritos
} from './styles';

import TextContTitulo from '../../components/TextContTitulo';
import TabTop from '../../components/TabTopHome';
import CategoriaHol from '../../components/CategoriaHol';
import {useStateValueFavorite} from '../../state/ContextProviderFavoritos';
import hinario from '../../api/hinario.json';
import getRealm from '../../api/realm/realm';
import HinoContainerHorizontal from '../../components/HinoContainerHorizontal';
import HinosFavoritosHorizontal from '../../components/HinosFavoritosHorizontal';

import PartilharContainer from '../../components/PartilharContainer';


export default () => {
    const navigation=useNavigation();
    const [favorited, setFavorited]=useState(false);
    const [list, setList]=useState([]);
    const [data, setData]=useStateValueFavorite();
    const handlerClickFav=() =>{
        setFavorited(!favorited);
    }
    async function handlerActClickf(){
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
        setList(ad.hinos);
    }
       
    useEffect(() => {
        handlerActClickf();
        setList(data);
        
    }, [data])
    console.log(list)
    return(
        <Container>
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroler>
                
            <TextContTitulo  nome={"Hinos"}></TextContTitulo>
            <HinoContainerHorizontal ></HinoContainerHorizontal>

            <TextContTitulo nome={"Secções"} ></TextContTitulo>
            <CategoriaHol></CategoriaHol>

            { list != "" && 
            <Favoritos>
                <TextContTitulo nome={"Favoritos"}></TextContTitulo>
            <HinosFavoritosHorizontal ></HinosFavoritosHorizontal>
                </Favoritos>}
                <PartilharContainer></PartilharContainer>
            </Scroler>
        
        </Container>
    );
}