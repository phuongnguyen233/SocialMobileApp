import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import AvatarComponent from "../UserAvatarWithName/AvatarComponent";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../modules/Colors";
import PostComponent from "./Component";
import DefaultImage from "../../modules/DefaultImage";

const PostUserInfo = ({ urlAvatar, username }: { urlAvatar: string, username: string }) => {
    const avatarSource = urlAvatar ? { uri: urlAvatar } : DefaultImage.avatar;
    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <AvatarComponent width={40} height={40} size={30} avatarUrl={avatarSource} />
                <Text style={styles.usernameText} ellipsizeMode="tail" numberOfLines={1}>
                    {username}
                </Text>
            </View>
            <TouchableOpacity>
                <SimpleLineIcons name="options-vertical" size={17} color={Colors.dark} />
            </TouchableOpacity>
        </View>
    )
}

export default PostUserInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 10
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    usernameText: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 15,
    }
})
