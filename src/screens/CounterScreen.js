import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const INCREMENT_VALUE = 1;

const reducer = ( state, action ) => {
  // state === { counter : number }
  // action === { type: 'increase_counter' || 'decrease_counter' , payload: 1 }
  switch( action.type ) {
    case 'increase_counter' :
      return { ...state, counter : state.counter + action.payload };
    case 'decrease_counter' :
      return { ...state, counter : state.counter - action.payload };
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter : 0});
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase_counter', payload : INCREMENT_VALUE});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease_counter', payload : INCREMENT_VALUE});
        }}
      />
      <Text>Current count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
