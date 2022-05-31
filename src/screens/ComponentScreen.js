// part 1: imports
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

// part 2: component
const ComponentScreen = () => {
    const name = "Kapil";
    return (
        <View>
            <Text style={styles.headerText}>Getting started with React Native</Text>
            <Text style={styles.subHeaderText}>My name is {name}</Text>
        </View>
    );
};

// part 3: styles
const styles = StyleSheet.create({
    headerText:{
        fontSize: 45,
        color: 'grey'
    },
    subHeaderText:{
        fontSize: 20,
        color: 'blue'
    }
});


// part 4: exporting component
export default ComponentScreen;
