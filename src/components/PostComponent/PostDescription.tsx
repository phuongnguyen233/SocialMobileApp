import { Text, View } from "react-native";
import React from "react";

interface Description {
    username: string;
    description: string;
}

export function PostDescription({ username, description }: Description) {
    return (
        <View style={{ marginHorizontal: 12, marginVertical: 3, flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                {username}
            </Text>
            <Text>{' '}</Text>
            <Text style={{ fontWeight: 'normal', fontSize: 14 }}>
                {description}
            </Text>
        </View>
    )
}
