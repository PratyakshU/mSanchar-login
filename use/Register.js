import React  from 'react';
import { Text, View, StyleSheet ,Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';



const Register = () => {
  return (
    // <View style={styles.MainCon}>
    <View style={styles.Main} >
      <Text style={styles.MainText}> 
          Welcome to mSmachar.
      </Text>
      <Text style={styles.regText}> Register-Screen
      </Text><Text>  </Text>
      <View style={styles.input}>
        <Text style={styles.user}> Enter User Name</Text>
        <TextInput 
            style={styles.inputBox}
              />
      </View>
      <View style={styles.input}>
        <Text style={styles.user}> Enter Your E-mail</Text>
        <TextInput 
            style={styles.inputBox}
              />
      </View>
      <View style={styles.input}>
        <Text style={styles.user}> Enter Your Age</Text>
        <TextInput 
            style={styles.inputBox}
              />
      </View>
      <View style={styles.input}>
        <Text style={styles.user}> Enter Your Number</Text>
        <TextInput 
            style={styles.inputBox}
              />
      </View>
      <View style={styles.input}>
        <Text style={styles.user}> Enter Your Date of Birth</Text>
        <TextInput 
            style={styles.inputBox}
              />
      </View>
      <View style={styles.input}>
        <Text style={styles.user}> Enter Password</Text>
        <TextInput 
            style={styles.inputBox}
            secureTextEntry={true}
            autoCorrect={false}
              />
      </View>
      <View style={styles.input}>
        <Text style={styles.user}> Confirm Password</Text>
        <TextInput 
            style={styles.inputBox}
            secureTextEntry={true}
            autoCorrect={false}
              /><Text>   </Text>
      </View>
      <Button onPress={(console.log('clicked'))} title='Register'></Button>
    </View>
    // {/* </View> */}
  );
 }

const styles = StyleSheet.create({
  // MainText:
  // {
  //   backgroundColor:'pink',
  //   textAlign:'center',
  // },
  Main:{
      height: "100%",
      width:'100%',
      flex: 1,  
      textAlign:'center',
      //justifyContent: 'center', 
      backgroundColor: '#f8eae0',
       },
  MainText:{
    fontSize:20,
    color:'#FF0000',
    textAlign:"center",
  },
  regText:
  {   
    fontSize:30,  
    //color:'#FFF',
    textAlign:'center',
  },
  input:{
    // flex:1,
    //left:'10%',
    marginTop: 10,
    // borderBottomWidth: 10,
     borderLeftWidth:150,
     borderRightWidth:150,
     borderLeftColor:'#f8eae0',
     borderRightColor:'#f8eae0',
     // borderBottomColor: '#f2f2f2',
     paddingBottom: 5,
  },
  user:{
    textDecorationColor:'green',
    color:'green',


  },
  inputBox:{
    borderWidth:1,
    borderColor: "rgba(0,0,0,0.3)",
    // paddingHorizontal:15,
    // paddingVertical:7,
    // borderRadius:1,
    //color:'white',
    paddingVertical:6,
    paddingHorizontal:17,
    borderRadius:30,
    flex:1,

    backgroundColor:'white',

    
  },
  button:{
    textAlign: 'center',
    backgroundColor:'pink',
    color:'blue',
    heigth: 10,
    width: "30%",
    left:'35%',
    top:'100%',

  },
})

export default Register;