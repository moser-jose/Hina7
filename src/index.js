import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StateProvider } from "./state/ContextProvider"
import {useColorScheme} from 'react-native';
import App from '../App'
import Themes from './assets/themes/themes';

export default function index(){
    const device=useColorScheme();
    const initialState = {theme:Themes.light};

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

    return(
        <StateProvider initialState={initialState} reducer={reducer}>
            <App/>
        </StateProvider>
    );

}