import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde} />

            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center'
        height:400,
        width:400,
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: '#fff',
        position: 'absolute',
        top: 0,
        right: 0,

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        position: 'absolute',
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: '#fff',
        bottom:0,
        right:0
    },
    cajaVerde: {
  
        // position: 'absolute',
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: '#fff',
        // bottom:0,
        // right:0,
        // left:0,
        // top:0
        ...StyleSheet.absoluteFillObject
    }
});