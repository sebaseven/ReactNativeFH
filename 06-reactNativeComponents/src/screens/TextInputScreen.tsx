import React from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    const [form, setForm] = React.useState({
        email: '',
        name: '',
        phone: '',
    });

    // const handleChange = (key: string) => (value: string) => {
    //     setForm({ ...form, [key]: value });
    // }
    const handleChange = (value: string, field: string) => {
        setForm({ ...form, [field]: value })
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Text Inputs' />
                <TextInput
                    style={stylesInput.inputStyle}
                    placeholder="Ingrese su nombre"
                    autoCorrect={false}
                    autoCapitalize="words"
                    onChangeText={(value) => handleChange(value, 'name')}
                />
                <TextInput style={stylesInput.inputStyle}
                    placeholder="Ingrese su email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType='email-address'
                    keyboardAppearance='dark'
                    onChangeText={(value) => handleChange(value, 'email')}
                />
                <TextInput style={stylesInput.inputStyle}
                    placeholder="Ingrese su telefono"
                    keyboardType='phone-pad'
                    onChangeText={(value) => handleChange(value, 'phone')}
                />
                <HeaderTitle title={JSON.stringify(form, null, 3)} />
            </View>
        </KeyboardAvoidingView>

    )
}

const stylesInput = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    }
});