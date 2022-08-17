import React from "react";
import {View ,Text,Button} from 'react-native';

const Screen1 =({navigation}) =>{
    return(
        <View>
            <Text>
                Screen 1..
            </Text>
            <Button onPress={()=>navigation.navigate('s2')} title='Next' >

            </Button>
        </View>
    );
};

export default Screen1;