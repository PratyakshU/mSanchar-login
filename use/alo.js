import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
//import HomeScreen from "./scr/Hscr";
import RegisterScreen from "./use/Register";

const MyScreen = () => {
  return (
    <View>
        <Text>
            {/* //<HomeScreen/> */} 
            <RegisterScreen/>
        </Text>
    </View>
   
  );
};
// const styles = StyleSheet.create({
//     main:
//     {
//         backgroundColor:"pink",
//     },
// })
export default MyScreen;