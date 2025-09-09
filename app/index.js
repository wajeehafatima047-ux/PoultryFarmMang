import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Adjust the path as necessary

import Signup from "./pages/Signup";
import PlaceOrder from "./pages/PlaceOrder";
import Categories from "./pages/Categories";
import VerificationOtp from "./pages/VerificationOtp";
import FeedBack from './pages/FeedBack'

import Cart from "./pages/Cart";
import OTP from './pages/OTP'

import Profile from "./pages/Profile";
import BottomTab from "./Tabs/BottomTab";

import {persistor,store} from './redux/store';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="Categories" component={Categories} />

      <Stack.Screen name="OTP" component={OTP} />

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Cart" component={Cart} />
       <Stack.Screen name="VerificationOtp" component={VerificationOtp} />
       <Stack.Screen name="FeedBack" component={FeedBack} />

          <Stack.Screen name="BottomTab" component={BottomTab} />

      {/* <Stack.Screen name="Registration" component={Registration} /> */}


    </Stack.Navigator>





  );
}
 





