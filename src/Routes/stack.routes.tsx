import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../Screens/Home';
import { Register } from '../Screens/Register';
import { Details } from '../Screens/Details';


const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
            <Screen name='Home' component={Home} />
            <Screen name='Register' component={Register} />
            <Screen name='Details' component={Details} />
        </Navigator>
    );
}