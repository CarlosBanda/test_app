import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Platform } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { Home } from '../views/Home';
import { Character } from '../components/Character';

const BottomTabIos = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();



const MyTabs = () =>{
  return Platform.OS === 'ios'
          ? <TabsIos/>
          : <TabsIos/>
}

const color = '#000';

const TabsIos = () => {
  return (
        <BottomTabIos.Navigator screenOptions={({route}) => ({ 
      tabBarIcon: ({}) =>{
        let iconName = ''
        switch (route.name) {
          case 'Ubicacion':
            iconName = 'location'         
            break;
          case 'Personajes':
            iconName = 'person'
            break;
        }
      return <Icon color={color} name={iconName} size={20}  />
      },
      
    })}>
      <BottomTabIos.Screen  name="Ubicacion" options={{title:'Ubicación'}} component={Home} />
      <Tab.Screen name="Personajes"  options={{title:'Rick And Morti'}} component={Character} />
    </BottomTabIos.Navigator>
  );
}

export default MyTabs