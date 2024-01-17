import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import ButtonLogin from "../WelcomeScreen/ButtonLogin";
import Container from "../../common/Container";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {ChipsInput} from "react-native-ui-lib";
import Colors from "../../modules/Colors";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";

const ForgotPasswordScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const handleSendCode = () => {
        navigation.navigate('otp-verification-screen')
    }

    return (
        <Container>
            <View style={styles.containerItem}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.textTile}>
                    Forgot Password?
                </Text>
                <Text style={styles.textDescription}>
                    Don't worry!, It occurs, Please enter the email{'\n'}
                    address linked with your account.
                </Text>
                <ChipsInput
                    style={styles.input}
                    placeholder={"Enter your email"}
                    // onChangeText={(value: string) => setValueUsername(value)}
                />
                <View style={{marginVertical: 10}}/>
                <ButtonLogin colorButton={'dark'} colorText={'white'} title={'Send Code'} onPress={handleSendCode}></ButtonLogin>
                <View style={{marginHorizontal: 61, flexDirection: 'row', marginTop: 361, justifyContent: 'center'}}>
                    <Text style={styles.footerText}>Remember Password?</Text>
                    <TouchableOpacity style={{marginHorizontal: 3}} onPress={() => navigation.navigate('login-screen')}>
                        <Text style={styles.footerText1}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    containerItem: {
        width: '100%',
        height:'100%',
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
        marginBottom: 10
    },
    textDescription: {
        color: Colors.gray,
        marginBottom: 32,
        fontSize: 16
    },
    input: {
        backgroundColor: Colors.white1,
        height: 56,
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 18
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
