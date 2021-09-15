import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { registerStyle } from './register.style';
import * as svAnim from './anim.json';
import Lottie  from 'lottie-react-native';


export const RegisterScreen = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title="Cadastro" />
                <View style={registerStyle.content}>
                    
                    <TextInput label="Nome" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Senha" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color} />} />
                    <TextInput label="Confirme sua senha" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color} />} />
                    <TextInput label="Telefone" keyboardType="phone-pad" />
                    <Button mode="contained" style={registerStyle.button}>Cadastrar</Button>
                    <Lottie autoSize style={registerStyle.anim}  source={svAnim}  autoPlay loop/>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    );

}