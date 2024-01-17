import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ButtonLogin from "../WelcomeScreen/ButtonLogin";
import Colors from "../../modules/Colors";
import {AntDesign, FontAwesome} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";
import {ChipsInput} from "react-native-ui-lib";
import Container from "../../common/Container";
import HorizontalRuleText from "./HorizontalRuleText";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../reducers/store";
import {login, register} from "../../feature/AuthSlice";
import Toast from "react-native-toast-message";

const RegisterScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [username, setUsername] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const handleRegister = () => {
        if (password !== confirmPassword || password === '' || confirmPassword === '')
            return Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Error',
            text2: 'Password and Confirm Password do not match!'
        })
        const Params = {
            username: username,
            email: email,
            password: password,
        }
        dispatch(register(Params))
            .then((resultAction) => {
                if (resultAction.payload.status == 200) {
                    setEmail('');
                    setUsername('');
                    setPassword('');
                    setConfirmPassword('');
                    navigation.navigate('login-screen')
                } else if (resultAction.payload.status == 409 || resultAction.payload.status == 400) {
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

    return (
        <Container>
            <View style={styles.containerItem}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} color="black"/>
                </TouchableOpacity>
                <Text style={styles.textTile}>
                    Hello! Register to get {'\n'} started
                </Text>
                <ChipsInput
                    style={styles.input}
                    placeholder={"Username"}
                    value={username}
                    onChangeText={(valueUsername: string) => setUsername(valueUsername)}
                />
                <ChipsInput
                    style={styles.input}
                    placeholder={"Email"}
                    value={email}
                    onChangeText={(valueEmail: string) => setEmail(valueEmail)}
                />
                <ChipsInput
                    style={styles.input}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(valuePassword: string) => setPassword(valuePassword)}
                />
                <ChipsInput
                    style={styles.input}
                    placeholder={"Confirm password"}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(valueConfirmPassword: string) => setConfirmPassword(valueConfirmPassword)}
                />
                <View style={{marginVertical: 10}}/>
                <ButtonLogin colorButton={'dark'} colorText={'white'} title={'Register'}
                             onPress={handleRegister}></ButtonLogin>
                <View style={{marginVertical: 30}}/>
                <HorizontalRuleText text={'Or Register With'}/>
                <View style={{marginHorizontal: 22, marginTop: 22}}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.buttonSocialLogin}>
                            <FontAwesome name="facebook" size={26} color={Colors.facebook}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSocialLogin}>
                            <FontAwesome name="google" size={26} color={Colors.red}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSocialLogin}>
                            <FontAwesome name="apple" size={26} color={Colors.dark}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal: 61, flexDirection: 'row', marginTop: 54}}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <TouchableOpacity style={{marginHorizontal: 3}} onPress={() => navigation.navigate('login-screen')}>
                        <Text style={styles.footerText1}>Login Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
};

export default RegisterScreen

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
    }
})
