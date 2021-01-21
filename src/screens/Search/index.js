import React,{useState,useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useStateValue} from '../../state/ContextProvider';
import { 
    Container,
    Scroller,
    HinoPesq,
    PesquisarConp,
    PesquisarConpLeft,
    PesquisarConpMiddle,
    PesquisarCompMiddleBotao,
    TextImput,
    EscolhaPesquisaContainer,
    EscolhaPesquisa,
    TextoPesquisa
    
} from './styles';
import HinoContainerUp from '../../components/HinoContainerUp';
import TabTopCustom from '../../components/TabTopCustom';
import {useStateValueHino} from '../../state/ContextProviderHinos';
export default ()=>{
    const {hinario, favoritos}=useStateValueHino();
    const [data, setData]=useState();
    const [state,]=useStateValue();
    const [ativo, setAtivo]=useState(true);
    const [loading, setLoading]=useState(true);
    useEffect(() => {
        setLoading(true);
        setData(hinario.hinos);
        setLoading(false);
    }, [])

    filterItem = query => {
        if (query == '') {
            setData(hinario.hinos);
        } 
        else {
            var dataObj = [];
            query = query.toLowerCase();
            if(ativo==true){
                dataObj = data.filter(l => l.numero.toString().toLowerCase().match(query));
            }
            else{
                dataObj = dataObj.filter(l => l.title.toLowerCase().match(query));
            }
            setData(dataObj);
        }

        
    };

    filtrar = query => {
        if (query == '') {
            return setData(hinario.hinos);
        }
        else{
            const ob=hinario.hinos;
            var newData=[];
            if(ativo==true){
                newData = ob.filter(item => {
                    return item.numero==query;
                });
            }
            else{
                query=query.toLowerCase();
                newData = ob.filter(l => l.title.toLowerCase().match(query));
            }
        }
        setData(newData);
    };


        return(
            <Container>
                <TabTopCustom titulo={"Pesquisar"}></TabTopCustom>
                <Scroller>
                <HinoPesq>
                <EscolhaPesquisaContainer>
                    <EscolhaPesquisa onPress={()=>setAtivo(true)} style={ativo==true ? {backgroundColor:'#29C17E'}:{backgroundColor:state.theme.container}}>
                        <TextoPesquisa style={ativo==true ? {color:'#fff'}:{color:state.theme.title}}>
                            Pesquisar por Número
                        </TextoPesquisa>
                    </EscolhaPesquisa>
                    <EscolhaPesquisa 
                    onPress={()=>setAtivo(false)}
                    style={ativo==false ? {backgroundColor:'#29C17E'}:{backgroundColor:state.theme.container}}
                    >
                        <TextoPesquisa
                        style={ativo==false ? {color:'#fff'}:{color:state.theme.title}}>
                            Pesquisar por Titulo
                        </TextoPesquisa>
                    </EscolhaPesquisa>
                </EscolhaPesquisaContainer>
                <PesquisarConp>
                        <PesquisarConpMiddle>
                            <PesquisarCompMiddleBotao>
                                <Ionicons name="search" size={18} color="#8890A6"/>
                            </PesquisarCompMiddleBotao>
                        </PesquisarConpMiddle>
                        <PesquisarConpLeft>
                            {ativo==true ?
                            <TextImput 
                            placeholderTextColor="#aaa" 
                            placeholder="Introduza o número do hino"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={query=>this.filtrar(query)}
                            ></TextImput>
                            :
                            <TextImput 
                            placeholderTextColor="#aaa" 
                            placeholder="Introduza o titulo do hino"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={query=>this.filtrar(query)}
                            ></TextImput>
                            }
                        </PesquisarConpLeft>
                        
                    </PesquisarConp>
                    </HinoPesq>
            
                    {
                        loading==true ?
                        <ActivityIndicator size="large" color="#29C17E"/>
                        :
                        <HinoContainerUp hinos={data} favoritos={favoritos}></HinoContainerUp>
                    }
                </Scroller>
            </Container>
        );
}