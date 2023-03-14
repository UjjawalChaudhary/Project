import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppNavigator from './src/AppNavigator';
import Main from './src/drawer/Main';
import { NavigationContainer } from '@react-navigation/native';
//import PartnerLogin from './src/PartnerLogin';


const App = () => {
  const [isLogged, setIsLogged]= useState(true);
  const _retriveData = async () => {
    try {
      const data = await AsyncStorage.getItem('keepLoggedIn');
      console.log(data);

      setIsLogged(data);
    } catch (error) {}
  };
  useEffect(() => {
    _retriveData();
  }, [isLogged]);

  return (
    <NavigationContainer>
    {isLogged?<Main/>:<CustomerLogin/>}

    </NavigationContainer>



  )
}

export default App;

