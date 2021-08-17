import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Catalog } from '../pages';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Catalog" component={Catalog} />
        </Stack.Navigator>
    );
}

export default Routes;