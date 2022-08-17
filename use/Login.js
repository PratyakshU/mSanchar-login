import React  from 'react';
import { Text, View, StyleSheet ,Button} from 'react-native';
import { TextInput } from 'react-native';



const Login = ({navigation}) => {
  return (
    <View style={styles.Main} >
      <Text style={styles.MainText}> 
          Welcome to mSanchar.
      </Text>
      <Text style={styles.loginText}> Login-Screen 
      </Text>
      <View style={styles.input}>
        <Text style={styles.user}> Enter User Name</Text>
        {/* <FontAwesome 
                    //name="user-o"
                    color={colors.text}
                    size={20}
                /> */}
        <TextInput 
            style={styles.inputBox}
            placeholder="user name"
            placeholderTextColor="#666666"
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
      <Button onPress={()=>navigation.navigate('RegisterScreen')} title='Register'></Button>
      <Button onPress={()=>navigation.navigate('HomeScreen')} title='Login'></Button>
      <Button onPress={()=>navigation.navigate('GeustScreen')} title='Gest'></Button>
    </View>
  );
 }

const styles = StyleSheet.create({

  Main:{
      height: "100%",
      width:'100%',
      flex: 1,  
      //justifyContent: 'center', 
      backgroundColor: '#f8eae0',
       },
  MainText:{
    fontSize:20,
    color:'#FF0000',
    textAlign:"center",
  },
  loginText:
  {   
    fontSize:30,
    //color:'#FFF',
    textAlign:'center',
  },
  input:{
    // flexDirection: 'row',
    marginTop: 10,
   // borderBottomWidth: 10,
    borderLeftWidth:50,
    borderRightWidth:200,
    borderLeftColor:'#f8eae0',
    borderRightColor:'#f8eae0',
    // borderBottomColor: '#f2f2f2',
    paddingBottom: 5,

  },
  user:{
    fontSize:20,

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
    backgroundColor:'grey',
    color:'red',
    heigth: 10,
    width: "30%",
    left:'35%',
    top:'100%',

  },
})

export default Login;