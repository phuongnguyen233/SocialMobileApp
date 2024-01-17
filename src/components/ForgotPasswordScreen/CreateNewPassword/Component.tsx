import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import ButtonLogin from "../../WelcomeScreen/ButtonLogin";
import Container from "../../../common/Container";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {ChipsInput} from "react-native-ui-lib";
import Colors from "../../../modules/Colors";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";

const CreatedNewPassword = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const handleResetPassword = () => {
        navigation.navigate('password-change-success-screen')
    }

    return (
        <Container>
            <View style={styles.containerItem}>
                <View style={{marginTop: 40}}/>
                <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.textTile}>
                    Create new password
                </Text>
                <Text style={styles.textDescription}>
                    Your new password must be unique from those{'\n'}
                    previously used.
                </Text>
                <ChipsInput
                    style={styles.input}
                    placeholder={"New password"}
                    // onChangeText={(value: string) => setValueUsername(value)}
                />
                <ChipsInput
                    style={styles.input}
                    placeholder={"Confirm password"}
                    // onChangeText={(value: string) => setValueUsername(value)}
                />
                <View style={{marginVertical: 18}}/>
                <ButtonLogin colorButton={'dark'} colorText={'white'} title={'Reset Password'} onPress={handleResetPassword}></ButtonLogin>
            </View>
        </Container>
    )
}

export default CreatedNewPassword;

const styles = StyleSheet.create({
    containerItem: {
        width: '100%',
        height:'100%',
        justifyContent: 'flex-start',
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
    }
})
