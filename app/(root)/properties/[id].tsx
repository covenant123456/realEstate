//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useLocalSearchParams} from 'expo-router';

// create a component
const Property = () => {
    const {id} = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text>Property{id}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Property;
