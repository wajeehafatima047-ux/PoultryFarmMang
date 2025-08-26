import { Ionicons } from '@expo/vector-icons'; // Using Ionicons
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

import Categories from '../pages/Categories';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (

        <Tab.Navigator>
            <Tab.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name="Home" size={24} color={color} /> }} name="Home" component={Home} />

             <Tab.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name="Home" size={24} color={color} /> }} name="Categories" component={Categories} />

               <Tab.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name="Home" size={24} color={color} /> }} name="Cart" component={Cart} />

              <Tab.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name="Home" size={24} color={color} /> }} name="Profile" component={Profile} />

             

               {/* <Tab.Screen options={{ tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> }} name="Categories" component={Categories} /> */}


        </Tab.Navigator>

    );
}