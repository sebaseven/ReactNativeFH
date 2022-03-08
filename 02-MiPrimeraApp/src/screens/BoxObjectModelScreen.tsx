import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (<View style={styles.container}>
        <Text style={styles.title}>
            Box Object Model
        </Text>
    </View>);
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        borderWidth: 10,
        padding: 10,
    },
    container:{
        flex:1,
        backgroundColor:'red'
    }
});