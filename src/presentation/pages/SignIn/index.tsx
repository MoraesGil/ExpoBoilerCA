import React, { useState } from 'react';
import { Alert, View, Text, LayoutAnimation, UIManager } from 'react-native';
import { Button, Icon } from '@rneui/themed';

import { Input } from '@rneui/base';
import styles from './styles';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const SignIn: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setEmailValid] = useState<boolean | void>(true);
    const [password, setPassword] = useState<string>('');
    const [isPasswordValid, setPasswordValid] = useState<boolean | void>(true);

    const validateEmail = (testEmail: string) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(testEmail);
    };

    const login = () => {
        setLoading(true);
        // Simulate an API call
        setTimeout(() => {
            const isEmailValidFlag = validateEmail(email);
            const isPasswordValidFlag = password.length >= 8;

            LayoutAnimation.easeInEaseOut();
            setLoading(false);
            setEmailValid(isEmailValidFlag);
            setPasswordValid(isPasswordValidFlag);
            if (isEmailValidFlag && isPasswordValidFlag) {
                Alert.alert('🔥', 'Successfully Logged In');
            }
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.titleText}>ProAgilLogo</Text>
                    </View>
                </View>

                <View style={styles.formContainer}>
                    <Input
                        shake={() => null}
                        leftIcon={
                            <Icon
                                name="envelope-o"
                                type="font-awesome"
                                color="rgba(0, 0, 0, 0.38)"
                                size={25}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        }
                        value={email}
                        keyboardAppearance="light"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        inputStyle={{ marginLeft: 10, color: 'grey' }}
                        placeholder="Email"
                        containerStyle={{
                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                        }}
                        onChangeText={text => setEmail(text)}
                        errorMessage={isEmailValid ? '' : 'Please enter a valid email address'}
                    />

                    <Input
                        shake={() => null}
                        leftIcon={
                            <Icon
                                name="lock"
                                type="simple-line-icon"
                                color="rgba(0, 0, 0, 0.38)"
                                size={25}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        }
                        value={password}
                        keyboardAppearance="light"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        returnKeyType="done"
                        blurOnSubmit
                        containerStyle={{
                            marginTop: 16,
                            borderBottomColor: 'rgba(0, 0, 0, 0.38)',
                        }}
                        inputStyle={{ marginLeft: 10, color: 'grey' }}
                        placeholder="Password"
                        onSubmitEditing={() => {
                            login();
                        }}
                        onChangeText={text => setPassword(text)}
                        errorMessage={isPasswordValid ? '' : 'Please enter at least 8 characters'}
                    />

                    <Button
                        buttonStyle={styles.loginButton}
                        containerStyle={{ marginTop: 32, flex: 0 }}
                        activeOpacity={0.8}
                        title="Entrar"
                        onPress={login}
                        titleStyle={styles.loginTextButton}
                        loading={isLoading}
                        disabled={isLoading}
                    />
                </View>
                <View style={styles.helpContainer}>
                    <Button
                        title="Ajuda ?"
                        titleStyle={{ color: 'white' }}
                        buttonStyle={{ backgroundColor: 'transparent' }}
                        onPress={() => Alert.alert('🤔', 'Forgot Password Route')}
                    />
                </View>
            </View>
        </View>
    );
};

export default SignIn;
