import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import FavoritesIcon from '../assets/img/favorites.svg';
import hinario from '../api/hinario.json';
import FavoritosIconWhite from '../assets/img/favorite_icon_white.svg';
import {useNavigation} from '@react-navigation/native';
import FilterIcon from '../assets/img/filter.svg';
import SearchIcon from '../assets/img/search.svg';
import ModalPesquisa from '../components/ModalPesquisa';
import IconDown from '../assets/img/Icon_down.svg';
import IconCheck from '../assets/img/Icon_check.svg';
import IconUnCheck from '../assets/img/Icon_uncheck.svg';
const HinoPesq = styled.SafeAreaView`

`;
const HinoContainerUp = styled.View`
    flex-direction:row;
    margin-top:10px;
    height:90px;
`;

const Hino = styled.View`
    flex-direction:row;
    width:100%;
    elevation:2;
    padding:4px;
    background-color:${props=>props.theme.container};
    overflow:hidden;
    `;
const HinoLeft = styled.View`
    justify-content: center;
    align-items:center;
`;
const HinoRigth = styled.View`
    width:85%;
`;
const HinoBotao = styled.TouchableOpacity`
    
`; 
const NumeroHino = styled.Text`
    color:${props=>props.theme.title};
    font-size:25px;
    font-weight:700;
    padding-right:10px;
`; 
const BotaoTitulo = styled.TouchableOpacity`
    width:100%;
`; 
const TituloHino = styled.Text`
    color:${props=>props.theme.title};
    font-size:16px;
    letter-spacing: 1px;
    font-family:"Poppins-SemiBold";
`; 
const TituloHinoIngles = styled.Text`
    color:${props=>props.theme.title};
    font-size:12px;
    font-family:"Poppins-LightItalic";
    letter-spacing: 1px;
    margin-top:-5px;

`; 
const FavoritoAutor = styled.View`
    flex-direction:row;
    margin-top:2px;
    padding:5px;
    justify-content:space-between;
    flex:1;
`; 
const Favoritos = styled.View`
    align-self:center;
`; 
const FavoritosBotao = styled.TouchableOpacity`
    
`; 


const Autores = styled.View`
`; 
    
const Autor = styled.Text`
    font-size:10px;
    text-align:right;
    margin-top:2px;
    color:${props=>props.theme.title};
`;
const FlatListUp = styled.FlatList`
    
`;

const TextoBiblico = styled.Text`
    font-size:10px;
    margin-top:2px;
    align-self:center;
    font-family:"Poppins-Italic";
    color:${props=>props.theme.title};

`;

const IconLoading = styled.ActivityIndicator`
    margin: 10px 0;
`;

const Div = styled.View`
   
`;




const PesquisarConp = styled.View`
    background-color:${props=>props.theme.container};
    flex-direction:row;
    height: 50px;
    elevation:2;
    margin:10px .5px;
    justify-content:space-between;
    padding:0 5px;
    border-radius:2px;
`;

const PesquisarConpLeft = styled.View`
    flex:8;
`;

const PesquisarConpMiddle = styled.View`
    flex-direction:row;
    align-self:center;
    justify-content:center;
    
`;
const PesquisarCompMiddleBotao = styled.View`
    
`;


const PesquisarConpRight = styled.View`
    flex-direction:row;
    justify-content:center;
    align-self:center;
    flex:1;
    
`;
const PesquisarConpRightBotao = styled.TouchableOpacity`
    
`;
const TextImput = styled.TextInput`
    flex:1;
    align-items:center;
    font-size:16px;
    color:${props=>props.theme.title};
    background-color:${props=>props.theme.container};
`;
const Modal = styled.Modal`


`;

const ModalArea = styled.View`

    flex:1;
    background-color:rgba(0,0,0,.8);
    justify-content:flex-end;
`;
const ModalBody =styled.View`
    background-color:${props=>props.theme.container};
    min-height:210px;
    border-top-left-radius:30px;
    border-top-right-radius:30px;
    padding:10px 20px;
    position:relative;

`;

const ModalBodyOpcao =styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:14px 0;

`;
const ModalBodyOpcaoTexto =styled.Text`
    font-size:17px;
    letter-spacing:1px;
    color:${props=>props.theme.title};

`;

const Line =styled.View`
    background-color:#ccc;
    width:100%;
    height:1px;
`; 
const BotaoCancelar =styled.TouchableOpacity`
    align-items:center;
    flex-direction:row;
    padding:0 0 10px;
   

`; 
const BotaoCancelarTexto =styled.Text`
    padding-left:10px;
    font-size:16px;
    letter-spacing:1px;
    color:${props=>props.theme.title};
`; 



const ModalBodyOpcaoF =styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:5px;
    border: 2px solid #ccc;
    border-radius:2px;
    width:50%;

`;
const ModalBodyOpcaoTextoF =styled.Text`
    font-size:16px;
    letter-spacing:1px;
    text-align:center;
    color:${props=>props.theme.title};
    

`;
const ModalFec =styled.View`
    justify-content:center;
    margin-top:20px;
    flex-direction:row;

`;

export default() =>{

    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [query, setQuery]=useState("");
    const [pesquisa, setPesquisa]=useState(true);
    const [showModal, setShowModal]=useState(false);
    const getHinos=()=>{
        setLoading(true);
        setData(hinario.hinos);
        setLoading(false);
    }
    

    const navigation=useNavigation();
    
    filterItem = event => {
        var query = event.nativeEvent.text;
        setQuery(query);
        if (query == '') {
            setData(hinario.hinos);
        } else {
          var dataObj = data;
          query = query.toLowerCase();
          if(pesquisa){
            dataObj = dataObj.filter(l => l.numero.toString().toLowerCase().match(query));
          }
          else{
            dataObj = dataObj.filter(l => l.titulo.toLowerCase().match(query));
          }
          
          setData(dataObj);
        }
    };

    const handleClickShowModal =()=>{
        setShowModal(true);
    }
    const handleClickBack =()=>{
        setShowModal(false);
    }
    const handleClickPesquisaT =()=>{
        setPesquisa(true);
        setShowModal(false);
    }
    const handleClickPesquisaF =()=>{
        setPesquisa(false);
        setShowModal(false);
    }
    useEffect(()=> {
        getHinos()
    }, []);
    return(
        <Div>
            <HinoPesq>
                <PesquisarConp>
                        <PesquisarConpMiddle>
                            <PesquisarCompMiddleBotao>
                                <SearchIcon fill="#8890A6"></SearchIcon>
                            </PesquisarCompMiddleBotao>
                        </PesquisarConpMiddle>
                        <PesquisarConpLeft>
                           {pesquisa ?
                           <TextImput 
                           placeholderTextColor="#aaa" 
                           placeholder="Introduza o número do hino"
                           autoCapitalize="none"
                           autoCorrect={false}
                           value={query}
                           onChange={this.filterItem.bind(this)}
                           ></TextImput>
                           :
                           <TextImput 
                           placeholderTextColor="#aaa" 
                           placeholder="Introduza o titulo do hino"
                           autoCapitalize="none"
                           autoCorrect={false}
                           value={query}
                           onChange={this.filterItem.bind(this)}
                           ></TextImput>
                           }
                        </PesquisarConpLeft>
                        
                        <PesquisarConpRight>
                            <PesquisarConpRightBotao onPress={handleClickShowModal}>
                                <FilterIcon></FilterIcon>
                            </PesquisarConpRightBotao>
                        </PesquisarConpRight>
                    </PesquisarConp>
                    </HinoPesq>
            {loading && <IconLoading size="large"  color="#29c17e"></IconLoading>}
            <FlatListUp 
                data={data}
                keyExtractor={(item) => item.titulo}
                showsVerticalScrollIndicator={false}
                renderItem={HinosGet}>
            </FlatListUp>



            <Modal 
                transparent={true}
                visible={showModal}
                animationType="slide"
            >
                <ModalArea>
                    <ModalBody>
                        
                    <BotaoCancelar onPress={handleClickBack}>
                        <IconDown></IconDown>
                        <BotaoCancelarTexto>Opções de Pesquisa</BotaoCancelarTexto>
                    </BotaoCancelar>
                    <Line></Line>
                        <ModalBodyOpcao onPress={handleClickPesquisaT}>
                            <ModalBodyOpcaoTexto>
                                Pesquisar pelo número
                            </ModalBodyOpcaoTexto>
                            {
                                pesquisa ?
                                <IconCheck></IconCheck>
                                :
                                <IconUnCheck></IconUnCheck>
                            }
                        </ModalBodyOpcao>
                        <Line></Line>
                        <ModalBodyOpcao onPress={handleClickPesquisaF}>
                            <ModalBodyOpcaoTexto >
                                Pesquisar pelo titulo
                            </ModalBodyOpcaoTexto>
                            {
                                pesquisa ?
                                <IconUnCheck></IconUnCheck>
                                :
                                <IconCheck></IconCheck>
                            }
                        </ModalBodyOpcao>
                    <ModalFec>
                        <ModalBodyOpcaoF onPress={handleClickPesquisaF}>
                                <ModalBodyOpcaoTextoF >
                                    Fechar
                                </ModalBodyOpcaoTextoF>
                        </ModalBodyOpcaoF>
                    </ModalFec>
                        
                    </ModalBody>
                </ModalArea>
            
            </Modal>
    
        </Div>
        
    );
    function HinosGet(item){

        const {id,titulo,numero_view,titulo_ingles,autores,texto_biblico,coro,estrofes}=item.item;
        const handleClick = () => {
            navigation.navigate('Hino',{
                id:id,
                titulo:titulo,
                numero_view:numero_view,
                titulo_ingles:titulo_ingles,
                autores:autores,
                texto_biblico:texto_biblico,
                coro:coro,
                estrofes:estrofes
            });
        }
        return(
            <HinoContainerUp>
                <Hino>
                    <HinoLeft>
                        <HinoBotao onPress={handleClick}>
                            <NumeroHino>{numero_view}</NumeroHino>
                        </HinoBotao>
                    </HinoLeft>
                    <HinoRigth>
                        <BotaoTitulo onPress={handleClick}>
                            <TituloHino>{titulo}</TituloHino>
                            <TituloHinoIngles>{titulo_ingles}</TituloHinoIngles>
                        </BotaoTitulo>
                        <FavoritoAutor>
                            <Favoritos>
                                <FavoritosBotao>
                                <FavoritosIconWhite ></FavoritosIconWhite>
                                </FavoritosBotao>
                            </Favoritos>
                            <TextoBiblico>{texto_biblico}</TextoBiblico>
                            <Autores>
                                <FlatListUp 
                                    data={autores}
                                    keyExtractor={(item) => item.nome}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={HinosGetAutores}>
                                </FlatListUp>
                            </Autores>   
                            
                        </FavoritoAutor>
                    </HinoRigth>
                </Hino>
            </HinoContainerUp>
        )
    }
    function HinosGetAutores(item){
        const {nome}=item.item;
        return(
                <Autor>{nome}</Autor>
            )
    }

}