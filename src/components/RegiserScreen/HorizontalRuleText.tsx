import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from "../../modules/Colors";
import Colors from "../../modules/Colors";

const HorizontalRuleText = (props: {text: string}) => {
    return (
        <View style={styles.container}>
            <View style={styles.divider} />
            <View style={styles.textContainer}>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.white1,
    },
    textContainer: {
        alignItems: 'center',
        marginHorizontal: 12
    },
});

export default HorizontalRuleText;
