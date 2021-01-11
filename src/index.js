import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StateProvider} from "./state/ContextProvider";
import {StateProviderFavorite } from "./state/ContextProviderFavoritos";
import {StateProviderHino } from "./state/ContextProviderHinos";
import {StateProviderCategoria } from "./state/ContextProviderCategorias";
import {useColorScheme} from 'react-native';
import App from '../App'
import Themes from './assets/themes/themes';
import getRealm from './api/realm/realm';
import hinario from './api/hinario.json';
export default function index(){
    const device=useColorScheme();
    const initialState = {theme:Themes.light};
    const [list, setList] = useState([]);
    const [hinos, setHino] = useState([]);
    const [categorias, setCategoria] = useState([]);
    let initialStateFavorite = [];
    let initialStateHinos = {hinos:hinario.hinos};
    let initialStateCategorias = {categorias:hinario.categorias};

    async function updateStorage(state){
        try{
            await AsyncStorage.setItem("Theme", state.toString())
        }
        catch(err){
            console.log("Houve um erro "+err);
        }
    }

    const reducer =(state, action)=>{
        switch(action.type){
            case 'lighTheme':
                updateStorage("1");
                return{
                    ...state,
                    theme:Themes.light
                };
            case 'darkTheme':
                updateStorage("2");
                return{
                    ...state,
                    theme:Themes.dark
                };
                case 'deviceTheme':
                    updateStorage("3");
                return{
                    ...state,
                    theme:Themes[device]
                };
            default:
                return state;
        }
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
        setHino(hinario.hinos);
        setCategoria(hinario.categorias)
        initialStateFavorite=ad.hinos;
    }
    useEffect(() => {
        handlerActClickf();
    }, []);
    
    const reducerFavorites =()=>{
                handlerActClickf();
                return{
                    list
                };
    }
    const reducerHinos =(state)=>{
       
                return{
                    hinos
                };
    }

    const reducerCategorias=(state)=>{
        return{
            categorias
        };
    }
   /*  console.log(hino) */
    return(
        <StateProvider initialState={initialState} reducer={reducer}>
            <StateProviderHino initialState={initialStateHinos} reducer={reducerHinos}>
            <StateProviderCategoria initialState={initialStateCategorias} reducer={reducerCategorias}>
                <StateProviderFavorite initialState={initialStateFavorite} reducer={reducerFavorites}>
               
                    <App/>
                
                </StateProviderFavorite>
                </StateProviderCategoria>
            </StateProviderHino>
        </StateProvider>
    );

}