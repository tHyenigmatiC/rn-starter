import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const data = [
        { name: 'David ', age: 23 },
        { name: 'Jeevan ', age: 24 },
        { name: 'Jiwan ', age: 25 },
        { name: 'Milan ', age: 26 },
        { name: 'Sameer ', age: 27 },
        { name: 'Paras ', age: 28 },
        { name: 'Sagar ', age: 29 },
        { name: 'Budo ', age: 30 },
        { name: 'Bj Budo ', age: 31 },
        { name: 'Rajrishi ', age: 32 },
        { name: 'Lutfullah ', age: 33 },
    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={data}
            renderItem = { ( {item} ) => { //destructuring the item. else it would be like { item: {ourobject}, index: 0 }
                return <Text style={styles.textStyle}>{item.name} - Age {item.age} </Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 30,
    }
});

export default ListScreen;