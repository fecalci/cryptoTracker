import React from 'react';
import ReactNative from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import CoinsScreen from '../Components/CoinsScreen'
import CoinDetailScreen from '../Components/CoinDetailScreen'
import  Colors  from '../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () =>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: Colors.blackPearl
                    },
                headerTintColor: Colors.white
        }}
        >
            <Stack.Screen 
                name ='Coins' 
                component= {CoinsScreen} 
            />

            <Stack.Screen 
                name ='CoinDetail' 
                component={CoinDetailScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;