import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/home/HomePage';
import QuizPage from '../screens/quiz/QuizPage';
import ResultPage from '../screens/result/ResultPage';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={ResultPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
