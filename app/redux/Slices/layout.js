import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import BuyerLogin from './Screens/BuyerLogin';
import SellerLogin from './Screens/SellerLogin';

import { persistor, store } from './redux/store';

const Stack = createNativeStackNavigator();


const SellerStack = () => (
  <Stack.Navigator initialRouteName="SellerLogin">
    <Stack.Screen name="SellerLogin" component={SellerLogin} />

  </Stack.Navigator>
);

const BuyerStack = () => (
  <Stack.Navigator initialRouteName="BuyerLogin">
    <Stack.Screen name="BuyerLogin" component={BuyerLogin} />
  </Stack.Navigator>
);



const App = () => {


  // Choose stack based on role
  const RenderStack = () => {
    const userRole = useSelector((state) => state.home.role);
    switch (userRole) {
      case 'seller':
        return <SellerStack />;
      case 'buyer':
        return <BuyerStack />;
      default:
        return (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={BuyerLogin} />
          </Stack.Navigator>
        );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <RenderStack />
        </Provider>
      </PersistGate>
    </SafeAreaView>
  );
};

export default App;