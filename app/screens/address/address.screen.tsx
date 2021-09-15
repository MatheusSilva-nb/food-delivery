import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import { HeaderComponent } from '../../components/header/header.component';
import { addressStyle } from './address.style';

const AddressScreen = () => {
    //array que simula dois destinos 
    const destinos: number[] = [1,2];

    return(
        <SafeAreaView>
           <HeaderComponent title="Address" hasBackButton={true} />
           <View style={addressStyle.marginHorizontal}>
                <TextInput 
                    label="Origem" />
                {
                    destinos.map((destino: number, index: number) =>
                        <TextInput 
                            key={`destino${index}`}
                            label="Destino" 
                            right={
                                destinos.length > 1 ? 
                                <TextInput.Icon
                                    name='close'
                                    color={addressStyle.buttonIconRemove.color}
                                    style={addressStyle.buttonIconRemove} />
                                : null

                            }/>
                    )
                }

            </View>
            <View>
                <Button 
                    icon="plus"
                    style={addressStyle.buttonIconAdd}
                    labelStyle={addressStyle.buttonIconAddLabelStyle}></Button>
            </View>
            <Button
                mode='contained'
                uppercase={false}
                style={addressStyle.confirmButtonStyle}
                labelStyle={addressStyle.confirmButtonLabelStyle}>
                Confirmar
            </Button>
        </SafeAreaView>
    )
}

export default AddressScreen;