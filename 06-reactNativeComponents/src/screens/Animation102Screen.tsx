import React from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { useRef } from 'react';

export const Animation102Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], 
        { useNativeDriver: false }
        ),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
            ).start();
        },
    });
    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.purpleBox]}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    purpleBox: {
        backgroundColor: "blue",
        width: 150,
        height: 150,
        borderRadius: 25,
    },

});