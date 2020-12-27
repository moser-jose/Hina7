import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StateProvider} from "./state/ContextProvider";
import {StateProviderFavorite } from "./state/ContextProviderFavoritos";
import {useColorScheme} from 'react-native';
import App from '../App'
import Themes from './assets/themes/themes';
import getRealm from './api/realm/realm';
import hinario from './api/hinario.json';
export default function index(){
    const device=useColorScheme();
    const initialState = {theme:Themes.light};
    const [list, setList] = useState([]);
    let initialStateFavorite = []

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
        setList(ad.hinos) ;
    }
    useEffect(() => {
        handlerActClickf();
    }, []);
    
    const reducerFavorites =(state)=>{
        switch('hinos'){
            case 'hinos':
                return{
                    ...state,
                    list
                };
            default:
                return{
                    ...state,
                    list
                };
        }
    }
    
    return(
        <StateProvider initialState={initialState} reducer={reducer}>
             <StateProviderFavorite initialState={initialStateFavorite} reducer={reducerFavorites}>
            <App/>
        </StateProviderFavorite>
        </StateProvider>
    );

}