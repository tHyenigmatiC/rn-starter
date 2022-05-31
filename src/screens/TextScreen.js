import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
		onChangeText={ (newValue) => setName(newValue)}
      />
	  {/* <Text>My name is {name}</Text> */}
	  { name && name.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderColor: "green",
    borderWidth: 1,
  },
});

export default TextScreen;
