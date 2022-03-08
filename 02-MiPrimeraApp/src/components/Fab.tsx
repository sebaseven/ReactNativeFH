import React from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string;
    position?: 'left' | 'right';
    onPress: () => void;
}
export const Fab = ({ title, onPress, position = 'right' }: Props) => {

    const ios = () => {
        return (<TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.75}
            style={[
            styles.fabLocationBtn,
            (position === 'left') ? styles.left : styles.right
        ]}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
        </TouchableOpacity>
        )
    }
    const android = () => {
        return (<View style={[
            styles.fabLocationBtn,
            (position === 'left') ? styles.left : styles.right
        ]}>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('black', false, 30)}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        )
    }
    return ( (Platform.OS === 'ios') ? ios() : android() )
};

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#5858D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 2,
    },
    fabText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    fabLocationBtn: {
        position: 'absolute',
        bottom: 20,
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    }
})