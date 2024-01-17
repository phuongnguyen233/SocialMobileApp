import React, {useCallback, useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    TextInput
} from 'react-native';
import ButtonLogin from "../WelcomeScreen/ButtonLogin";
import Container from "../../common/Container";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import Colors from "../../modules/Colors";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";

const OTPVerification = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const handleVerify = () => {
        navigation.navigate('create-new-password-screen')
    }
    const handleResend = () => {
        alert('Resend code here')
    }

    return (
        <Container>
            <View style={styles.containerItem}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.textTile}>
                    OTP Verification
                </Text>
                <Text style={styles.textDescription}>
                    Enter the verification code we just sent on your{'\n'}
                    email address.
                </Text>
                <View style={styles.containerInput}>
                        <View style={{width: '22%'}}>
                            <TextInput
                                style={styles.input}
                                placeholder={"5"}
                                keyboardType={'numeric'}
                                maxLength={1}
                                // onChangeText={(value: string) => setValueUsername(value)}
                            />
                        </View>
                        <View style={{width: '22%'}}>
                            <TextInput
                                style={styles.input}
                                placeholder={"1"}
                                keyboardType={'numeric'}
                                maxLength={1}
                                // onChangeText={(value: string) => setValueUsername(value)}
                            />
                        </View>
                        <View style={{width: '22%'}}>
                            <TextInput
                                style={styles.input}
                                placeholder={"3"}
                                keyboardType={'numeric'}
                                maxLength={1}
                                // onChangeText={(value: string) => setValueUsername(value)}
                            />
                        </View>
                        <View style={{width: '22%'}}>
                            <TextInput
                                style={styles.input}
                                placeholder={"0"}
                                keyboardType={'numeric'}
                                maxLength={1}
                                // onChangeText={(value: string) => setValueUsername(value)}
                            />
                        </View>
                </View>
                <View style={{marginVertical: 10}}/>
                <ButtonLogin colorButton={'dark'} colorText={'white'} title={'Verify'} onPress={handleVerify}></ButtonLogin>
                <View style={{marginHorizontal: 61, flexDirection: 'row', marginTop: 361, justifyContent: 'center'}}>
                    <Text style={styles.footerText}>Didn't received code?</Text>
                    <TouchableOpacity style={{marginHorizontal: 3}} onPress={() => handleResend()}>
                        <Text style={styles.footerText1}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default OTPVerification;

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
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        backgroundColor: Colors.white1,
        paddingVertical: 10,
        paddingHorizontal: 35,
        height: 60,
        borderWidth: 0.7,
        borderRadius: 8,
        borderColor: Colors.blueGradiant,
        marginBottom: 12,
        fontSize: 22,
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
