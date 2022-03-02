import React,{useState} from 'react'
import {Modal,Linking, Text, TouchableOpacity,ActivityIndicator, View, StyleSheet} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function ModalView({loading, active, setActive, v}) {

  const onSite=()=>{
    setActive(false)
    Linking.openURL('https://hinario-adventista.vercel.app/')
  }
  
  return (
    
      <Modal
        animationType="fade"
        transparent={true}
        visible={active}
        onRequestClose={()=>setActive(false)}
      >

        <View style={style.modal}>
          <View style={style.corpo}>
            <View>
                {loading===0 ? 
                <>
                  <Text style={style.texto}>Procurando nova actualização</Text>
                  <ActivityIndicator size="large" color="#29c17e"/>
                </>:loading===1 ?
                <>
                  <View style={style.versao}>
                    <Text style={style.textoV}>Existe uma nova versão:</Text>
                    <Text style={style.textoV1}>{v}</Text>
                  </View>
                  <View style={style.botoes}>
                    <TouchableOpacity style={style.download} onPress={onSite}>
                      <Text style={style.downtext}>Abrir o site</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setActive(false)}>
                      <Text style={style.textoV}>Cancelar</Text>
                    </TouchableOpacity>
                  </View>
                </>:loading===2 ? 
                <>
                <View style={style.versao}>
                    <Text style={style.textoV}>Você possui a versão mais recente</Text>
                  </View>
                  <View style={style.botoes}>
                    <TouchableOpacity style={style.voltar} onPress={()=>setActive(false)}>
                      <FontAwesome5 style={style.icon} size={18} name="caret-left" color="#000" />
                      <Text style={style.textoV}>Voltar</Text>
                    </TouchableOpacity>
                  </View>
                  
                </> :<>
                  <View style={style.versao}>
                    <Text style={style.textoV}>Existe algum problema com a Internet 😭</Text>
                  </View>
                  <View style={style.botoes}>
                    <TouchableOpacity style={style.voltar} onPress={()=>setActive(false)}>
                      <FontAwesome5 style={style.icon} size={18} name="caret-left" color="#000" />
                      <Text style={style.textoV}>Voltar</Text>
                    </TouchableOpacity>
                  </View>
                  </>
              }
            </View>
          </View>
        </View>

      </Modal>
  )
}

const style = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modal:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  corpo:{
    backgroundColor:'white',
    borderRadius:18,
    padding:20,
    width:300,
    alignItems:'center'
  },
  texto:{
    fontSize:16,
    marginBottom:10
  },
  versao:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textoV:{
    fontSize:18,
    textAlign:'center'
  },
  textoV1:{
    fontWeight:'bold',
    fontSize:18,
    marginLeft:10
  }

  ,
  botoes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
    alignItems:'center'
  },
  download:{
    backgroundColor:'#29c17e',
    paddingVertical:6,
    paddingHorizontal:10,
    borderRadius:4
  },
  downtext:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  voltar:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    marginRight:5
  }

})

export default ModalView