import React  from 'react';
import { Image, SafeAreaView, View} from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import * as svgDelivery from './deliverySVG.json';
import Lottie  from 'lottie-react-native';
import { loginStyle } from './login.style';


export const LoginScreen = () => {

    return (
        <SafeAreaView style={loginStyle.content}>
            <View style={loginStyle.view}>
                <Lottie style={loginStyle.anim} resizeMode="contain" source={svgDelivery}  autoPlay loop/>
                <Card style={loginStyle.card}>
                    <Card.Title title="FOOD Delivery" titleStyle={loginStyle.cardTitle}></Card.Title>
                    <Card.Content>
                        <TextInput label="Email" keyboardType="email-address"></TextInput>
                        <TextInput label="Senha" secureTextEntry={true}></TextInput>
                        <Button uppercase={false} style={loginStyle.cardButton}>Recuperar conta</Button>
                        <Button mode="contained" style={loginStyle.cardButton}>Entrar</Button>
                        <Button style={loginStyle.cardButton}>Registrar</Button>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );

}