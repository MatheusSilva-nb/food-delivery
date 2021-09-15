import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './App.style';
import HomeScreen from './app/screens/home/home.screen';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/register/register.screen';
import AddressScreen  from './app/screens/address/address.screen';
import DeliveryScreen from './app/screens/delivery/delivery.screen';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <DeliveryScreen />
    </PaperProvider>
  );
};

export default App;