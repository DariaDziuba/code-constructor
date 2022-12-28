import React from 'react';

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Start from './../screens/Start';
import Configurator from '../screens/Configurator';
import Output from '../screens/Output';
import Code from '../screens/Code';
import {Colors} from './../components/constants';

const { Navigator, Screen } = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={screenOptions}
                initialRouteName="Start"
            >
                <Screen name="Start" component={Start}/>
                <Screen name="Configurator" options={changeHeaderTintColor(Colors.white)} component={Configurator}/>
                <Screen name="Code" options={changeHeaderTintColor(Colors.white)} component={Code}/>
                <Screen name="Output" options={changeHeaderTintColor(Colors.white)} component={Output}/>
            </Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyled: {
        backgrounfColor: 'transparent'
    },
    headerTintColor: Colors.white,
    headerTransparent: true,
    headerBackTitleStyle: {
        fontSize: 18,
        paddingTop: 20
    },
    headerTitle: '',
    headerLeftContainerStyle: {
        paddingLeft: 100
    }
};

function changeHeaderTintColor(color) {
    return {
        headerTintColor: color
    }
}

export default RootStack;