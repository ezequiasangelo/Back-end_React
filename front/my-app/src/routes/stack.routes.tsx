import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';

import { ScreenA } from "../screens/ScreenA";
import { ScreenB } from "../screens/ScreenB";
import { ScreenC } from "../screens/ScreenC";


const { Screen, Navigator } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name="ScreenA"
                component={ScreenA}
                options={{
                    headerShown: false,
                }}
            />
            <Screen
                name="ScreenB"
                component={ScreenB}
                options={{
                    title: 'Cadastrar  Mamífero',
                    headerTitleAlign:  'center',
                    headerStyle: {
                        backgroundColor: 'navy',
                    },
                    headerTintColor: '#fff'
                }}
            />    
            <Screen
                name="ScreenC"
                component={ScreenC}
                options={{
                    title: 'Buscar Animal',
                    headerTitleAlign:  'center',
                    headerStyle: {
                        backgroundColor: 'navy',
                    },
                    headerTintColor: '#fff'
                }}
            />    
        </Navigator>
    )
}
