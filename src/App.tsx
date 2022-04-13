import React from 'react';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Login from './presentation/pages/login/login';

export function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <Login />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default registerRootComponent(App);
