import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { deliveriesStyle } from './deliveries.style';

const DeliveriesScreen = () => {

    const deliveries: number[] = [1, 2, 3];

    return (
        <SafeAreaView>
            <HeaderComponent
                title="Histórico de Pedidos" 
                hasBackButton={true} />
            <FlatList
                data={deliveries}
                keyExtractor={(item, index) => `deliveries${index}`}
                renderItem={({item, index}) =>
                    <Card
                        style={{...deliveriesStyle.card, ...deliveriesStyle.cardStatus}}>
                        <Card.Cover
                            source={{uri: "https://snazzy-maps-cdn.azureedge.net/assets/74-becomeadinosaur.png?v=20170626082939"}}
                        />
                        <Card.Title
                            titleStyle={deliveriesStyle.cardTitle}
                            title="99/99/9999"
                            subtitle="Delivery person name"
                            right={() =>
                                <Text
                                    style={deliveriesStyle.price}>R$ 30,00</Text>
                            }/>
                    </Card>
                }/>
        </SafeAreaView>
    )

}

export default DeliveriesScreen;