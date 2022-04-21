import React from 'react';
import { registerRootComponent } from 'expo';
import { ThemeProvider } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SignIn from './presentation/pages/SignIn';

export function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <SignIn />
            </ThemeProvider>
        </SafeAreaProvider>
    );
}

export default registerRootComponent(App);
