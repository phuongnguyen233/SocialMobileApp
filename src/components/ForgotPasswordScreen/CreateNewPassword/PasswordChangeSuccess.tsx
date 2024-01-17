import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import ButtonLogin from "../../WelcomeScreen/ButtonLogin";
import Container from "../../../common/Container";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {ChipsInput} from "react-native-ui-lib";
import Colors from "../../../modules/Colors";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";

const PasswordChangeSuccess = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <Container>
            <View style={styles.containerItem}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../../assets/images/Successmark.png')} style={{width: 100, height: 100}}/>
                    <Text style={styles.textTile}>
                        Password Changed!
                    </Text>
                    <Text style={styles.textDescription}>
                        Your password has been changed{'\n'}
                        successfully
                    </Text>
                </View>
                <View style={{marginVertical: 18}}/>
                <ButtonLogin colorButton={'dark'} colorText={'white'} title={'Back to Login'} onPress={() => navigation.navigate('login-screen')}></ButtonLogin>
            </View>
        </Container>
    )
}

export default PasswordChangeSuccess;

const styles = StyleSheet.create({
    containerItem: {
        width: '100%',
        height:'100%',
        justifyContent: 'center'
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
        marginBottom: 10,
        textAlign: 'center'
    },
    textDescription: {
        color: Colors.gray,
        marginBottom: 32,
        fontSize: 16,
        textAlign: 'center'
    },
    input: {
        backgroundColor: Colors.white1,
        height: 56,
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 18
    }
})
