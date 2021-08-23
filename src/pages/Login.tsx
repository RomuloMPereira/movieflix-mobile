import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { isAuthenticated, login } from '../services/auth';
import { theme, text } from '../styles/index';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    });
    const [userFetchData, setUserFetchData] = useState({});

    async function handleLogin() {
        const data = await login(userInfo);
        setUserFetchData(userInfo);
        isAuthenticated() ? navigation.navigate("Catalog") : navigation.navigate("Login");
    }

    return (
        <View style={theme.container}>
            <View style={theme.loginCard}>
                <Text style={text.loginTitle}>
                    Login
                </Text>
                <View>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={
                            (e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.username = e;
                                setUserInfo(newUserInfo);
                            }
                        }
                    />
                    <TextInput
                        placeholder="Senha"
                        autoCapitalize="none"
                        style={theme.textInput}
                        value={userInfo.password}
                        secureTextEntry={true}
                        onChangeText={
                            (e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.password = e;
                                setUserInfo(newUserInfo);
                            }
                        }
                    />
                    <TouchableOpacity
                        style={theme.primaryButton}
                        activeOpacity={0.8}
                        onPress={() => handleLogin()}
                    >
                        <View>
                            <Text style={text.loginBtnText}>Fazer login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;