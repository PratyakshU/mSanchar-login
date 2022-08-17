import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './use/s1.js'
import Screen2 from './use/s2.js'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="s1"
          component={Screen1}
          options={{ title: 'Pratyaksh' }}
        />
        <Stack.Screen name="s2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;