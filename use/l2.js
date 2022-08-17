import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';



const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.des}> Welcome to mSmachar<br></br>    Login to continu..
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>  Enter Your Name-</Text>
        <TextInput 
              style={styles.nameContainer}
              autoCapatilize='none' />

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>  Enter Your password-</Text>
        <TextInput 
              style={styles.nameContainer}
              secureTextEntry={true}
              autoCapatilize='none'
              autoCorrect={false}
              />

      </View>
      <Button 
       onPress={()=> navigation.navigate('Home') }
       title='click-Login'
       ></Button>
    </View>
  );
 };
   
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      //justifyContent: 'center', 
      backgroundColor: '#FFFCCF', 
  },  
  loginText:
  {   
    fontSize:30,
    color:'#FF0000',
    textAlign:'center',
  },
  des: {  //description
    fontSize: 30,
    color: '#008000'
  },
  inputContainer:{
    marginTop:10,
  },
  lable:{
    fontSize: 20,
    marginTop:10,
    marginBottom:5,
  },
  log1:{
        flex:1,
        position:'relative',
        marginTop:50,
        paddingTop:20,
    //   bottom: '100%',
    //  // right:'20%',
    //  // color:'#008000',
    //  backgroundColor:'#008000',
  },
 nameContainer:{
    borderWidth:1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:1,
    backgroundColor:'#FFF',
 },
}
)

export default Login;