import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Button, Title } from 'react-native-paper';
import { searchingDeliveryStyle } from './searching-delivery.style';

export const SearchingDeliveryComponent = () => {

    return (
        <View
            style={searchingDeliveryStyle.flexCenterColumn}>
            <ActivityIndicator
                color={searchingDeliveryStyle.icon.color}
                animating={true} />
            <Title
                style={searchingDeliveryStyle.title}>Procurando entregadores nas proximidades</Title>
            <Button
                style={searchingDeliveryStyle.cancelDeliveryButton}
                mode="contained">
                Cancelar
            </Button>
        </View>
    )

}