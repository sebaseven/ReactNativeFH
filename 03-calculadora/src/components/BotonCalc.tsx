import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';



export const BotonCalc = ({ texto, color = '#2d2d2d', ancho = false ,accion}: Props) => {
    return (
        <TouchableOpacity onPress={()=>
            accion(texto)
            }>
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9b9b9b' ? 'black' : 'white'),

                }}>{texto}</Text>
            </View>
        </TouchableOpacity>

    )
}
