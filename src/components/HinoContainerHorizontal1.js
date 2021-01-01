import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import hinario from '../api/hinario.json';
import HinosH from '../components/HinosH';

const ListArea = styled.ScrollView``;

export default() =>{
    const [list, setList]=useState([]);
    
    useEffect(()=> {
        setList(hinario.hinos);
    }, []);
    return(
        <ListArea horizontal showsHorizontalScrollIndicator={false}>
            { list.map((item, k)=>(
                <HinosH data={item} key={k}></HinosH>
            ))}
        </ListArea>
    );

}
                