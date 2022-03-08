import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}
export const TouchableIcon = ({ iconName }: Props) => {

    const { changeIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity onPress={
            () => changeIcon(iconName)
        }>
            <Icon
                name={iconName}
                size={80}
                color={colores.primary} />
        </TouchableOpacity>
    )
}
