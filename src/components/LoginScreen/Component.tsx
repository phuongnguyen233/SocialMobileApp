import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import ButtonLogin from "../WelcomeScreen/ButtonLogin";
import Container from "../../common/Container";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { ChipsInput } from "react-native-ui-lib";
import HorizontalRuleText from "../RegiserScreen/HorizontalRuleText";
import Colors from "../../modules/Colors";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core/src/types";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../reducers/store";
import { login } from "../../feature/AuthSlice";

const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>()
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [isShowPassword, setIsShowPassword] = useState<boolean>(true)
    const dispatch = useDispatch<AppDispatch>()

    const handleLogin = () => {
        if (email === '' || password === '')
            return Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Error',
                text2: 'Email and Password cannot be empty!'
            })
        const params = {
            email: email,
            password: password
        }
        dispatch(login(params))
            .then((resultAction) => {
                if (resultAction.payload.status == 200) {
                    setEmail('');
                    setPassword('');
                    navigation.navigate('button-tab-navigation')
                } else if (resultAction.payload.status == 401) {
                    Toast.show({
                        type: 'error',
                        position: 'top',
                        text1: 'Error',
                        text2: resultAction.payload.message
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const handleForgotPassword = () => {
        navigation.navigate('forgot-password-screen')
    }

    return (
        <Container>
            <View style={styles.containerItem}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.textTile}>
                    Welcome back! Glad{'\n'}to see you, Again
                </Text>
                <ChipsInput
                    style={styles.input}
                    placeholder={"Enter your email"}
                    value={email}
                    onChangeText={(valueEmail: string) => setEmail(valueEmail)}
                />
                <View>
                    <ChipsInput
                        style={styles.input}
                        placeholder={"Enter your password"}
                        secureTextEntry={isShowPassword}
                        value={password}
                        onChangeText={(valuePassword: string) => setPassword(valuePassword)}
                    />
                    {isShowPassword ? <TouchableOpacity style={styles.hidePassword}
                        onPress={
                            () => setIsShowPassword(!isShowPassword)
                        }>
                        <FontAwesome name={'eye-slash'} size={20} color={Colors.gray} />
                    </TouchableOpacity> : <TouchableOpacity style={styles.hidePassword}
                        onPress={
                            () => setIsShowPassword(!isShowPassword)
                        }>
                        <FontAwesome name={'eye'} size={20} color={Colors.gray} />
                    </TouchableOpacity>}
                </View>
                <View style={styles.forgotPassword}>
                    <TouchableOpacity onPress={() => handleForgotPassword()}>
                        <Text style={{ color: Colors.gray }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 10 }} />
                <ButtonLogin colorButton={'dark'} colorText={'white'} title={'Login'}
                    onPress={handleLogin}></ButtonLogin>
                <View style={{ marginVertical: 30 }} />
                <HorizontalRuleText text={'Or Login With'} />
                <View style={{ marginHorizontal: 22, marginTop: 22 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.buttonSocialLogin}>
                            <FontAwesome name="facebook" size={26} color={Colors.facebook} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSocialLogin}>
                            <FontAwesome name="google" size={26} color={Colors.red} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSocialLogin}>
                            <FontAwesome name="apple" size={26} color={Colors.dark} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 61, flexDirection: 'row', marginTop: 54 }}>
                    <Text style={styles.footerText}>Don't have an account?</Text>
                    <TouchableOpacity style={{ marginHorizontal: 3 }}
                        onPress={() => navigation.navigate('register-screen')}>
                        <Text style={styles.footerText1}>Register Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    containerItem: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',

    },
    buttonBack: {
        height: 50,
        width: 50,
        borderColor: Colors.white1,
        borderWidth: 0.5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    textTile: {
        fontSize: 35,
        fontWeight: "bold",
        marginTop: 28,
        marginBottom: 32
    },
    input: {
        backgroundColor: Colors.white1,
        height: 56,
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 18
    },
    buttonSocialLogin: {
        height: 56,
        width: 105,
        paddingVertical: 15,
        paddingHorizontal: 37,
        borderColor: Colors.white1,
        borderWidth: 0.5,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 8
    },
    footerText: {
        color: Colors.dark,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30
    },
    footerText1: {
        color: Colors.blueGradiant,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30
    },
    forgotPassword: {
        alignItems: 'flex-end',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10
    },
    hidePassword: {
        position: 'absolute',
        right: 20,
        top: 20
    }
})
