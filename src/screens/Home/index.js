import React,{useState,useEffect} from 'react';
import { 
    Container,
    Scroler,
    Favoritos
} from './styles';

import TextContTitulo from '../../components/TextContTitulo';
import TabTop from '../../components/TabTopHome';
import CategoriaHol from '../../components/CategoriaHol';
import {useStateValueFavorite} from '../../state/ContextProviderFavoritos';
import HinoContainerHorizontal from '../../components/HinoContainerHorizontal';
import HinosFavoritosHorizontal from '../../components/HinosFavoritosHorizontal';
import {useStateValueHino} from '../../state/ContextProviderHinos';
import {useStateValueCategoria} from '../../state/ContextProviderCategorias';
import PartilharContainer from '../../components/PartilharContainer';
import getRealm from '../../api/realm/realm';

export default () => {
    const [state, dispatch]=useStateValueFavorite();
    const [categorias, setCategoria]=useStateValueCategoria();
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
            <TabTop titulo={"Favoritos"}></TabTop>
            <Scroler>
            
            <TextContTitulo  nome={"Hinos"}></TextContTitulo>
            <HinoContainerHorizontal  hinos={hinos.hinos} favoritos={data} ></HinoContainerHorizontal>

            <TextContTitulo nome={"Secções"} ></TextContTitulo>
            <CategoriaHol categoria={categorias.categorias} ></CategoriaHol>
            
            <Favoritos>
            {data != '' && <TextContTitulo nome={"Favoritos"}></TextContTitulo>}
            <HinosFavoritosHorizontal ></HinosFavoritosHorizontal>
                </Favoritos>
                <PartilharContainer></PartilharContainer>
                {/* <Brevemente></Brevemente> */}
            </Scroler>
        
        </Container>
    );
}