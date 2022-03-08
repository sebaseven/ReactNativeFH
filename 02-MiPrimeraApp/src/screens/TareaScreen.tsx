import React from 'react'
import { View, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28425B',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: 100,
        width: 100,
        borderColor: 'white',
        borderWidth: 10,
    },
    cajaNaranja: {
        backgroundColor: 'orange',
        height: 100,
        width: 100,
        borderColor: 'white',
        borderWidth: 10,
        top:50
    },
    cajaAzul: {
        backgroundColor: 'blue',
        height: 100,
        width: 100,
        borderColor: 'white',
        borderWidth: 10,
    }
});
