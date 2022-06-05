import React, { useState } from 'react';
import { Alert, View, Text, LayoutAnimation, UIManager } from 'react-native';
import { Button, Icon } from '@rneui/themed';

import { Input } from '@rneui/base';
import styles from './styles';
import { Authentication } from '@/domain/usecases';

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

type Props = {
    authentication: Authentication;
};

const SignIn: React.FC<Props> = ({ authentication }) => {
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

    const handleSubmit = async (): Promise<void> => {
        try {
            if (isLoading) {
                return;
            }

            const isEmailValidFlag = validateEmail(email);
            const isPasswordValidFlag = password.length >= 8;

            LayoutAnimation.easeInEaseOut();

            setEmailValid(isEmailValidFlag);
            setPasswordValid(isPasswordValidFlag);

            setLoading(true);
            const user = await authentication.auth({
                email: '',
                password: '',
            });

            if (user) {
                Alert.alert('🔥', 'Successfully Logged In');
            }
        } catch (error) {
            Alert.alert('x', error.message);
        } finally {
            setLoading(false);
        }
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
                                style={styles.bgTransparent}
                            />
                        }
                        value={email}
                        keyboardAppearance="light"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        inputStyle={styles.input}
                        placeholder="Email"
                        containerStyle={styles.emailContainer}
                        onChangeText={(text) => setEmail(text)}
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
                                style={styles.bgTransparent}
                            />
                        }
                        value={password}
                        keyboardAppearance="light"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry
                        returnKeyType="done"
                        blurOnSubmit
                        containerStyle={styles.passwordContainer}
                        inputStyle={styles.input}
                        placeholder="Password"
                        onSubmitEditing={() => {
                            handleSubmit();
                        }}
                        onChangeText={(text) => setPassword(text)}
                        errorMessage={isPasswordValid ? '' : 'Please enter at least 8 characters'}
                    />

                    <Button
                        buttonStyle={styles.loginButton}
                        containerStyle={{ marginTop: 32, flex: 0 }}
                        activeOpacity={0.8}
                        title="Entrar"
                        onPress={handleSubmit}
                        titleStyle={styles.loginTextButton}
                        loading={isLoading}
                        disabled={isLoading}
                    />
                </View>
                <View style={styles.helpContainer}>
                    <Button
                        title="Ajuda ?"
                        titleStyle={styles.whiteColor}
                        buttonStyle={styles.bgTransparent}
                        onPress={() => Alert.alert('🤔', 'Forgot Password Route')}
                    />
                </View>
            </View>
        </View>
    );
};

export default SignIn;
