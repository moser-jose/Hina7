import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/img/home.svg';
import SearchIcon from '../assets/img/search.svg';
import CategoriesIcon from '../assets/img/categories.svg';
import FavoritesIcon from '../assets/img/favorites.svg';
import ConfigurationsIcon from '../assets/img/configurations.svg';

const TabArea = styled.View`
    height:60px;
    flex-direction: row;
    elevation:2;
    background-color: #fff;
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
    
    
`;

const TabItemHome = styled.TouchableOpacity`
    width:50px;
    height:50px;
    justify-content:center;
    align-items:center;
    background: #29C17E;
    border-radius:25px;
    margin-top:5px;
    elevation:2;
`;


export default ({state, navigation}) => {

    const goTo=(screenName) => {
        navigation.navigate(screenName);
    }

    return(
        <TabArea>
            <TabItem onPress={() =>goTo('Search')}>
                <SearchIcon  fill={state.index===0? "#29C17E" : "#8890A6"}  width="24" height="24"  />
            </TabItem>
            <TabItem onPress={() =>goTo('Categories')}>
                <CategoriesIcon fill={state.index===1? "#29C17E" : "#8890A6"} width="24" height="24" />
            </TabItem>
            <TabItemHome  onPress={() =>goTo('Home')}>
            <HomeIcon fill="#fff" width="24" height="24" />
                
            </TabItemHome>
            <TabItem onPress={() =>goTo('Favorites')} >
                <FavoritesIcon fill={state.index===3? "#29C17E" : "#8890A6"} width="24" height="24" />
            </TabItem>
            <TabItem onPress={() =>goTo('Configurations')}>
                <ConfigurationsIcon fill={state.index===4? "#29C17E" : "#8890A6"} width="24" height="24" />
            </TabItem>
        </TabArea>
    );
}
