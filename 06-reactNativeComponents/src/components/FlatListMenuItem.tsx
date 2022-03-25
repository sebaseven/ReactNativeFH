import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { Spacer } from './Spacer';
interface Props {
    menuItem: MenuItem
}
export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate(menuItem.component as any)}
            activeOpacity={0.8}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={23} color="#5856d6" />
                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>
                <Spacer />
                <Icon name="chevron-forward-outline" size={23} color="#5856d6" />
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 5,
        fontSize: 19,
    }
});
