import React from 'react';
import { Image, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FAB } from 'react-native-paper';
import { ConfirmDeliveryCardComponent } from '../../components/confirm-delivery-card/confirm-delivery-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchingDeliveryComponent } from '../../components/searching-delivery/searching-delivery.component';
import { homeStyle } from './home.style';

const HomeScreen = () => {

    const state: number = 2;
    
    return (
        <SafeAreaView style={homeStyle.flex}>
            <HeaderComponent title="FOOD Delivery" />
            <MapView
                style={homeStyle.flex}
                initialRegion={{
                    latitude: -3.722,
                    longitude: -38.515,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}>
                {
                    state == 1 ?
                    <>
                        <Marker
                            description="Delivery person 1"
                            coordinate={{latitude: -3.723, longitude: -38.515}}>
                            <Image
                                style={homeStyle.markerImage}
                                source={require("../../../assets/cyclist-icon.png")} />
                        </Marker>
                        <Marker
                            description="Delivery person 1"
                            coordinate={{latitude: -3.722, longitude: -38.516}}>
                            <Image
                                style={homeStyle.markerImage}
                                source={require("../../../assets/cyclist-icon.png")} />
                        </Marker>
                        <Marker
                            description="Delivery person 1"
                            coordinate={{latitude: -3.725, longitude: -38.513}}>
                            <Image
                                style={homeStyle.markerImage}
                                source={require("../../../assets/cyclist-icon.png")} />
                        </Marker>
                    </>
                    : null
                }
                {
                    state == 2 ?
                    <>
                        <Marker
                            description="Origem"
                            coordinate={{latitude: -3.723, longitude: -38.515}}>
                        </Marker>
                        <Marker
                            description="Destino"
                            coordinate={{latitude: -3.722, longitude: -38.516}}>
                        </Marker>
                    </>
                    : null
                }
            </MapView>
            {
                state == 1 ?
                <FAB
                    style={homeStyle.fab}
                    icon="plus" />
                : null
            }
            {
                state == 2 ?
                <ConfirmDeliveryCardComponent />
                : null
            }
            {
                state == 3 ?
                <SearchingDeliveryComponent />
                : null
            }
        </SafeAreaView>
    )

}

export default HomeScreen;