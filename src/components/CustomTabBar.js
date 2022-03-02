import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TabArea = styled.View`
  height: 60px;
  flex-direction: row;
  elevation: 1;
  background-color: ${(props) => props.theme.container}; ;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemHome = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #29c17e;
  border-radius: 25px;
  margin-top: 5px;
  elevation: 2;
`;

export default ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Search')}>
        <Ionicons
          size={24}
          name="search"
          color={state.index === 0 ? '#29C17E' : '#8890A6'}
        />
      </TabItem>
      <TabItem onPress={() => goTo('Categories')}>
        <AntDesign
          name="appstore1"
          size={22}
          color={state.index === 1 ? '#29C17E' : '#8890A6'}
        />
      </TabItem>
      <TabItemHome onPress={() => goTo('Home')}>
        <Ionicons name="home" color="#fff" size={22} />
      </TabItemHome>
      <TabItem onPress={() => goTo('Favorites')}>
        <Icon
          size={24}
          name="heart"
          color={state.index === 3 ? '#29C17E' : '#8890A6'}
        />
      </TabItem>
      <TabItem onPress={() => goTo('Configurations')}>
        <Icon
          size={24}
          name="cog"
          color={state.index === 4 ? '#29C17E' : '#8890A6'}
        />
      </TabItem>
    </TabArea>
  );
};
