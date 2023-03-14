// import { StyleSheet, Text, View, ScrollView, Image, Button } from "react-native";
// import React, { useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from '@react-navigation/native';

// const Main = ({ navigation}) => {
//   const navigate = useNavigation();

//  const logout=()=> {
//     AsyncStorage.clear()
//   //  navigate("/CustomerLogin")
//   }
//   // useEffect(()=>{
//   //   logout();
//   // })
//   return (
//     <View
//       style={{
//         backgroundColor: "#01D0ED",
//         flex: 1,
//       }}
//     >
//       <View
//         style={{
//           alignSelf: "center",
//           marginTop: 250,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 32,
//             textAlign: "center",
//           }}
//         >
//           {" "}
//           Welcome to{"\n"}
//           Customer Home Page
//         </Text>
//       </View>
//       <View style={styles.btn}>
//         <Button 
//             //  onPress={() => this.logout()}
//             onPress={() => logout()}

//         title="Logout" 
//         color="green"></Button>
        

//       </View>
//     </View>
//   );
// };

// export default Main;

// const styles = StyleSheet.create({
//   btn: {
//     alignSelf: "center",
//     borderRadius: 90,
//     height: 60,
//     paddingVertical: 10,
//     paddingHorizontal: 80,
//   },
// });









import { StyleSheet, Text, View, ScrollView, Image, Button } from "react-native";
import React, { useEffect } from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
//import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';

const Main = ({ navigation}) => {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('keeploggedIn');
      Navigation.navigate('CustomerLogin')
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View
      style={{
        backgroundColor: "#01D0ED",
        flex: 1,
      }}
    >
      <View
        style={{
          alignSelf: "center",
          marginTop: 250,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            textAlign: "center",
          }}
        >
          {" "}
          Welcome to{"\n"}
          Customer Home Page
        </Text>
      </View>
      <View style={styles.btn}>
      <Button title="Logout" onPress={logout} />

        

      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    borderRadius: 90,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
});
