/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import { Login } from './src/views/Login';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './src/views/Home';
import MyTabs from './src/routes/BottomNavigation';


function App(): React.JSX.Element {
  

  return (
    // <SafeAreaView>
    //  <Login></Login>
     <NavigationContainer>
        {/* <Home></Home> */}
        <MyTabs></MyTabs>
     </NavigationContainer>
    // </SafeAreaView>
  );
}

export default App;
