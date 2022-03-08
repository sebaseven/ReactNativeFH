import React, { useContext } from 'react'
import { View ,Text} from 'react-native';
import { Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
    const { logOut ,authState} = useContext(AuthContext);
    const {isLoggedIn} = authState;
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Albums Screen</Text>
            {isLoggedIn && <Button onPress={logOut} title="LogOut"></Button>}

           
        </View>
    )
}
