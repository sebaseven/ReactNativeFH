import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { opacity, fadeIn, fadeOut, position, startMovingPosition } = useAnimation();
    return (
        <View style={styles.container} >
            <Animated.View
                style={
                    {
                        ...styles.purpleBox,
                        opacity: opacity,
                        transform: [{ translateY: position }]
                    }
                }
            >

            </Animated.View>
            <Button
                title='fade in'
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-100);
                }
                }
            />
            <Button
                title='fade out'
                onPress={fadeOut}
            />
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: "purple",
        width: 150,
        height: 150,
        marginBottom: 20
    }
});