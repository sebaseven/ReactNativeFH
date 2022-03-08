import React, { useContext, useReducer } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { styles, colores } from '../theme/appTheme';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const { authState } = useContext(AuthContext);


    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top + 20
        }}>
            <Text style={styles.title}>Settings Screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>
            {authState.favouriteIcon && <Icon color={colores.primary} name={authState.favouriteIcon} size={150} />}
            <Text>{authState.userName}</Text>
        </View>
    )
}
