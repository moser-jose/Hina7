import React,{useState,useMemo} from 'react';
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
    const [state,]=useStateValue();
    const [ativo, setAtivo]=useState(true);
    const [query, setQuery]=useState('');

    const filtrarHino = useMemo(()=> {
        if (!query) {
            return hinario.hinos;
        }
        if(ativo==true)
        return hinario.hinos.filter(item => {
            return item.numero==query;
        })
        else
            return hinario.hinos.filter(l => l.title.toLowerCase().match(query))
    },[query, hinario.hinos]);

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
                            value={query}
                            onChangeText={(query)=>setQuery(query)}
                            ></TextImput>
                            :
                            <TextImput 
                            placeholderTextColor="#aaa" 
                            placeholder="Introduza o titulo do hino"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={query}
                            onChangeText={(query)=>setQuery(query)}
                            ></TextImput>
                            }
                        </PesquisarConpLeft>
                        
                    </PesquisarConp>
                    </HinoPesq>
            
                    <HinoContainerUp hinos={filtrarHino} favoritos={favoritos}></HinoContainerUp>
                </Scroller>
            </Container>
        );
}