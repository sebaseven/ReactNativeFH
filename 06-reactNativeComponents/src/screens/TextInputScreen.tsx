import React from 'react'
import { StyleSheet, TextInput, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, ScrollView, Keyboard, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {

    // const [form, setForm] = React.useState({
    //     email: '',
    //     name: '',
    //     phone: '',
    //     subsribe: false,
    // });

    // const handleChange = (key: string) => (value: string) => {
    //     setForm({ ...form, [key]: value });
    // }
    // const handleChange = (value: string, field: string) => {
    //     setForm({ ...form, [field]: value })
    // }

    const init = {
        email: '',
        name: '',
        phone: '',
        isSuscribed: false,
    }
    const { onChange, form ,isSuscribed} = useForm(init);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Text Inputs' />
                        <TextInput
                            style={stylesInput.inputStyle}
                            placeholder="Ingrese su nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, 'name')}
                        />
                        <TextInput style={stylesInput.inputStyle}
                            placeholder="Ingrese su email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType='email-address'
                            keyboardAppearance='dark'
                            onChangeText={(value) => onChange(value, 'email')}
                        />
                        <View style={stylesInput.switchRow}>
                            <Text>Suscribirme</Text>
                            <CustomSwitch isOn={isSuscribed} onChange={(valor) => onChange(valor, 'isSuscribed')} />
                        </View>

                        <TextInput style={stylesInput.inputStyle}
                            placeholder="Ingrese su telefono"
                            keyboardType='phone-pad'
                            onChangeText={(value) => onChange(value, 'phone')}
                        />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <View style={{ height: 100 }} />
                    </View>

                </TouchableWithoutFeedback>

            </ScrollView>

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
    }, switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10
    }
});