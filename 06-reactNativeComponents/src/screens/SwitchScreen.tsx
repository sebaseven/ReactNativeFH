import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    })

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    const { isActive, isHungry, isHappy } = state

    return (

        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Switches' />
            <View style={styles.switchRow}>
                <Text>isActive</Text>
                <CustomSwitch isOn={isActive} onChange={(valor) => onChange(valor, 'isActive')} />
            </View>
            <View style={styles.switchRow}>
                <Text>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(valor) => onChange(valor, 'isHungry')} />
            </View>
            <View style={styles.switchRow}>
                <Text>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(valor) => onChange(valor, 'isHappy')} />
            </View>
            <Text style={styles.switchText}>
                {
                    JSON.stringify(state, null, 7)
                }
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10
    }
});
