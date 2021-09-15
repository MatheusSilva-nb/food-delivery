import React from 'react';
import { View } from 'react-native';
import { Button, Card, IconButton, List } from 'react-native-paper';
import { confirmDeliveryCardStyle } from './confirm-delivery-card.style';

export const ConfirmDeliveryCardComponent = () => {

    return (
        <Card>
            <Card.Content>
                <List.Item
                    title="R$ 15,00"
                    description="Preço total da entrega"
                    left={() => 
                        <IconButton
                            icon="bike"
                            size={30}
                            style={confirmDeliveryCardStyle.icon}
                            color={confirmDeliveryCardStyle.icon.color}/>
                    }
                    right={() => 
                        <View>
                            <Button
                                style={confirmDeliveryCardStyle.cancelButton}>Cancelar</Button>
                            <Button mode="contained">Confirmar</Button>   
                        </View>
                    }/>
            </Card.Content>
        </Card>
    )

}