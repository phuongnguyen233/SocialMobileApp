import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-ui-lib";
import React from "react";

interface AvatarComponentProps {
    avatarUrl: any;
    width: number;
    height: number;
    size: number;
}

export default function AvatarComponent({ avatarUrl, width, height, size }: AvatarComponentProps) {
    const styles = StyleSheet.create({
        gradientContainer: {
            borderRadius: 100,
            width: width,
            height: height,
            alignItems: 'center',
            justifyContent: 'center',
        },
        borderContainer: {
            borderWidth: 3,
            borderColor: 'white',
            borderRadius: 100,
        },
    });

    return (
        <TouchableOpacity style={{ marginHorizontal: 6 }}>
            <LinearGradient colors={['#C913B9', '#F9373F', '#FECD00']} style={styles.gradientContainer}>
                <View style={styles.borderContainer}>
                    <Avatar source={{ uri: avatarUrl }} size={size} animate={true} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}
