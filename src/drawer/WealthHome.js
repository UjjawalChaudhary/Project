// import React from 'react';
// import header from './Header.jpeg';
// import middle from './Middle1.jpeg';
// import CCR from './CreditPage.jpeg';


// import {
//   StyleSheet,
//   Text,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Image,
//   View,
//   Button
// } from 'react-native';

// const App = ({navigation}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//       <View>
//       <Image
//   source={header}
//   style={{width: "100%", height: "5%", alignSelf:'center'}}
// />
// <Text style={styles.text2}>
//     Identify your financial health gap and start planning for early financial freedom
// </Text>
//      <Image
//   source={middle}
//   style={{width: "100%", height: "15%", alignSelf:'center'}}
// />
// <Text style={styles.text2}>
//    - Know your fiancial helth  {"\n"} {"\n"}
//    - Get certified recomandation for {"\n"}   your financial planning {"\n"} {"\n"}
//    - Take action based on {"\n"} recomandation
// </Text>
//  <View style={styles.btn}>
//         <Button 
//              onPress={() => navigation.navigate("CustomerLogin")}
//         title="Start" 
//         color="green">
//         </Button>
//       </View>
      
//       <View style={styles.btn2}>
//         <Button 
//              onPress={() => navigation.navigate("CustomerLogin")}
//         title="Check CR" 
//         color="blue">
//         </Button>

//       </View>
//       <Image
//   source={CCR}
//   style={{width: "100%", height: "32%", alignSelf:'center'}}
// />
// <Text style={styles.txt}>
// {"\n"} {"\n"} PLANING YOUR FINANCIAL {"\n"} HEALTH AND INDIPADANCE {"\n"}                    EARLY
// {"\n"}</Text>

// <Text style={styles.text3}>
// - Identify your financial gap {"\n"} {"\n"}
// - Get a detailed financial health {"\n"}  report {"\n"} {"\n"}
// - Get a recommendation from {"\n"} certified financial expert {"\n"} {"\n"}
// - Get transparency and all expert {"\n"}  around you {"\n"}{"\n"}
// </Text>
//         <Button 
//              onPress={() => navigation.navigate("CustomerLogin")}
//         title="Let's Start" 
//         color="green">
//         </Button>
      
// </View>

//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>


//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: '#F37DAB',
//     marginHorizontal: 20,
//     flex:1
//   },
//   text: {
//     fontSize: 38,
//   },
//   text3: {
//     fontSize: 23,
//   },
//   txt: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#E40E61",
//     alignSelf:'center',

//   },
//   text2: {
//     fontSize: 22,
//     backgroundColor: '#04247D',
//     alignItems:'center',
//     color: 'white'
//   },
//   btn: {
//     alignSelf: "center",
//     height: 60,
//     paddingVertical: 8,
//     paddingHorizontal: 145,
//     backgroundColor: "#04247D"
//   },
//   btn2: {
//     alignSelf: "flex-end",
//     textAlign:"right",
//     height: 60,
//     paddingVertical: 8,
//     paddingHorizontal: 145,
//     backgroundColor: "#38B6FF"
//   },
// });

// export default App;


import React from 'react';
import {Image, ScrollView, Text, View, Button} from 'react-native';
import header from './Wealth/Header.jpeg';
import middle from './Wealth/Middle1.jpeg';
import CCR from './Wealth/CreditPage.jpeg';
import BottomNavigator from '../bottom/BottomNavigator';



const App = ({navigation}) => {
  return (

    
 <View>

  <ScrollView>
   <Image
   source={header}
   style={{width: "100%", height: "6%", alignSelf:'center'}} />
  
<View style={{backgroundColor:'#04247D'}}>
 <Text style={{fontSize: 22, alignSelf:'center', color:'white'}}>
 Identify your financial health gap and {"\n"}    start planning for early financial {"\n"}                         freedom
 </Text>
 </View>

    <Image
  source={middle}
  style={{width: "100%", height: "13%", alignSelf:'center'}}
/>

<View style={{backgroundColor:'#04247D'}}>
 <Text style={{fontSize: 19, alignSelf:'center', color:'white'}}>
    - Know your fiancial helth  {"\n"} {"\n"}
    - Get certified recomandation for {"\n"}   your financial planning {"\n"} {"\n"}
    - Take action based on {"\n"} recomandation
 </Text>
</View>

<View style={{backgroundColor:'#04247D', height: 60, paddingVertical: 10, paddingHorizontal: 145,}}>
       <Button 
             onPress={() => navigation.navigate("Main")}
        title="Start" 
        color="green">
        </Button>
      </View>

      <View style={{backgroundColor:'#38B6FF', height: 60, paddingVertical: 10, paddingHorizontal: 10, flexDirection: "row"}}>
     <Button 
            onPress={() => navigation.navigate("CustomerLogin")}
       title="Check Credit Report" 
       color="blue"
       >
        </Button>
      </View>

       <Image
   source={CCR}
   style={{width: "100%", height: "33%", alignSelf:'center'}}
 />

<View style={{backgroundColor:'#F37DAB'}}>
 <Text style={{fontSize: 25, alignSelf:'center', color:'#E40E61',fontWeight: "bold"}}>
  {"\n"} {"\n"} PLANING YOUR FINANCIAL {"\n"} HEALTH AND INDIPADANCE {"\n"}                    EARLY
 {"\n"} </Text>

 <Text style={{fontSize: 20, alignSelf:'center', color:'black'}}>
 - Identify your financial gap {"\n"} {"\n"}
 - Get a detailed financial health {"\n"}  report {"\n"} {"\n"}
 - Get a recommendation from {"\n"} certified financial expert {"\n"} {"\n"}
 - Get transparency and all expert {"\n"}  around you {"\n"}{"\n"}
 </Text>
 <View style={{backgroundColor:'#F37DAB', height: 60, paddingVertical: 10, paddingHorizontal: 95,}}>
     <Button 
            onPress={() => navigation.navigate("CustomerLogin")}
       title="Let's Start" 
       color="#1CD65C">
        </Button>
      </View>
      <View style={{backgroundColor:'#F37DAB', height: 1050, paddingVertical: 10, paddingHorizontal: 95,}}>
      </View>
     
    
 </View>
  </ScrollView>
  </View>
);
  }


export default App;
