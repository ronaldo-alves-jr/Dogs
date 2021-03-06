import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Feed from './src/pages/Feed';
import Cadastro from "./src/pages/Cadastro";

const Stack = createStackNavigator();

function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ gestureEnabled: false }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Feed"
                    component={Feed}
                    initialParams={{ user: 'me' }}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    initialParams={{ user: 'me' }}
                    options={{ title: 'Cadastro' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;