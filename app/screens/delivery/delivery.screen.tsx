import React from "react";
import { SafeAreaView,Text,View } from "react-native";
import MapView from "react-native-maps";
import { Avatar, Card, List, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import { deliveryStyles } from "./delivery.style";


const DeliveryScreen = () => {

    return (
        <SafeAreaView style={deliveryStyles.flex}>
            <HeaderComponent title={'Detalhes da entrega'} hasBackButton={true}/>
            <View style={deliveryStyles.flex}>
                <MapView
                    initialRegion={{
                        latitude: -3.722,
                        longitude: -38.515,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04,
                        
                    }}
                    style={deliveryStyles.flex}>
                </MapView>
            </View>
            <Card>
                <Card.Title
                    title={"99/99/9999"}
                    titleStyle={deliveryStyles.cardTitle}
                    right={() => 
                        <Text
                            style={deliveryStyles.price}>R$ 30,00</Text>
                    }
                ></Card.Title>
                <Card.Content>
                    <List.Item 
                        title={"Matheus Silva"}
                        description={"50 Entregas"}
                        left={() => 
                            <Avatar.Image
                                size={52}
                                source={{uri:"https://avatars.githubusercontent.com/u/83290182?v=4"}} />
                            }/>
                    <List.Item 
                        title="Origem"
                        description="Rua lanchonete, 40"
                        left={() => 
                            <List.Icon icon="flag-outline" />
                            }/>  
                    <List.Item 
                        title="Destino"
                        description="Rua street, 36"
                        left={() => 
                            <List.Icon icon="flag-checkered" />
                            }/>   
               </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default DeliveryScreen;