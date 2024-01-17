import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../modules/Colors'

const { width, height } = Dimensions.get('screen')

interface ButtonLoginProps {
    colorButton: string;
    colorText: string;
    title: string;
    onPress: () => void;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ colorButton, colorText, title, onPress }) => {
    const buttonStyle = {
        backgroundColor: Colors[colorButton],
        ...styles.button
    }
    const textStyle = {
        color: Colors[colorText],
        ...styles.buttonText
    }
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonLogin

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderColor: Colors.dark,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
