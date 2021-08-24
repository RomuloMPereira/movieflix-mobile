import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Catalog, MovieDetails } from '../pages';
import { colors } from '../styles';
import { HeaderText, NavBar } from '../components';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>
    );
}

export default Routes;