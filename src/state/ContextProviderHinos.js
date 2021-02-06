import React, {createContext, useEffect, useState, useContext} from 'react';
import hinario from '../api/hinario.json';
import getRealm from '../api/realm/realm';
export const StateContext = createContext();

export const StateProviderHino = ({children}) => {
  const [favoritos, setFavoritos] = useState([]);
  const [tamanho, setTamanho] = useState(20);
  const [clickFav, setClickFav] = useState(false);
  async function handlerActClickf() {
    const realm = await getRealm();
    const d = realm.objects('Favoritos').filtered('favorito=true');
    var dataObj = hinario.hinos;
    var dataObj2 = [];
    var datad = '{"hinos":[';
    var dataf = '';
    for (let p = 0; p < d.length; p++) {
      dataObj2 = dataObj.filter((item, key) => item.id == d[p].id);
      const vb = JSON.stringify(dataObj2);
      const lo = vb.slice(1, -1);
      if (d.length - 1 == p) {
        dataf += lo;
      } else {
        dataf += lo + ',';
      }
    }
    var go = datad + dataf + ']}';
    var ad = JSON.parse(go);
    setFavoritos(ad.hinos);
  }
  useEffect(() => {
    handlerActClickf();
  }, []);

  if (clickFav == true) {
    handlerActClickf();
    setClickFav(false);
  }

  return (
    <StateContext.Provider
      value={{hinario, favoritos, setClickFav, setTamanho, tamanho}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValueHino = () => useContext(StateContext);
