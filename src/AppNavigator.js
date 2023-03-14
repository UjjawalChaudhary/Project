// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import Welcome from './src/Welcome';
// import PartnerLogin from './PartnerLogin';
// import CustomerLogin from './CustomerLogin';
// import Registration from './Home';
// import EmployeeLogin from './EmployeeLogin';
// import Entry from './Entry';
// //import Main from './drawer/Main';
// import DrawerNavigator from './drawer/DrawerNavigator';


// const Stack = createStackNavigator();

// const AppNavigator = () => {

//   const [isLogged, setIsLogged]= useState(true);
//   const _retriveData = async () => {
//     try {
//       const data = await AsyncStorage.getItem('keepLoggedIn');
//       console.log(data);

//       setIsLogged(data);
//     } catch (error) {}
//   };
//   useEffect(() => {
//     _retriveData();
//   }, []);
//     return (
//         <NavigationContainer> 
//                 <Stack.Navigator
//                 screenOptions={{
//             headerShown: false
//           }}>


//                   <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
//                   <Stack.Screen name="PartnerLogin" component={PartnerLogin} />
//                   <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} />
//                   <Stack.Screen name="Entry" component={Entry} />

        
//                 </Stack.Navigator>
//         </NavigationContainer>
//             )
//         }

// export default AppNavigator

// const styles = StyleSheet.create({})



import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Welcome from './src/Welcome';
import PartnerLogin from './PartnerLogin';
import CustomerLogin from './CustomerLogin';
import Registration from './Home';
import EmployeeLogin from './EmployeeLogin';
import Entry from './Entry';
//import Main from './drawer/Main';
import DrawerNavigator from './drawer/DrawerNavigator';


const Stack = createStackNavigator();

const AppNavigator = () => {

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
  }, []);
    return (
        <NavigationContainer> 
                <Stack.Navigator
                screenOptions={{
            headerShown: false
          }}>


                  <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
                  <Stack.Screen name="PartnerLogin" component={PartnerLogin} />
                  <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} />
                  <Stack.Screen name="Entry" component={Entry} />

        
                </Stack.Navigator>
        </NavigationContainer>
            )
        }

export default AppNavigator

const styles = StyleSheet.create({})