import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/routes/BottomNavigation';
import { Login } from './src/views/Login';
import auth from '@react-native-firebase/auth';


function App(): React.JSX.Element {
const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();


function onAuthStateChanged(user:any) {
  setUser(user);
  if (initializing) setInitializing(false);
}

useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, []);

if (initializing) return null;

if (!user) {
  return (
    <Login></Login>
  );
}
  return (
     <NavigationContainer>
        <MyTabs></MyTabs>
     </NavigationContainer>
  );
}

export default App;
