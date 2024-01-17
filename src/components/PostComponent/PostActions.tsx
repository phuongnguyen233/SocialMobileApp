import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, Entypo, Feather, FontAwesome5} from "@expo/vector-icons";
export function PostActions() {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 13,
        },
        interactActionLeft: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        marginRightIconAction: {
            marginRight: 12
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.interactActionLeft}>
                <TouchableOpacity style={styles.marginRightIconAction}>
                    <AntDesign name="hearto" size={27} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.marginRightIconAction}>
                    <FontAwesome5 name="comment" size={27} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="paper-plane" size={27} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Feather name="bookmark" size={27} color="black" />
            </TouchableOpacity>
        </View>
    )
}
