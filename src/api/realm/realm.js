import Realm from 'realm';
import FavoritosTable from './tabelas/FavoritosTable';


export default function getRealm(){
    return Realm.open({
        schema: [FavoritosTable]
    })
}