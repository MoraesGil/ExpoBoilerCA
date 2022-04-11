import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export function App(): JSX.Element {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar />
        </View>
    );
}

export default registerRootComponent(App);
