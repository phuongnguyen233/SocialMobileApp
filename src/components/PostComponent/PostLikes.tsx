import React from 'react';
import { Text, View } from 'react-native';

interface Likes {
    randomLikes: number;
}

export function PostLikes({ randomLikes }: Likes) {
    return (
        <View style={{ marginHorizontal: 12, marginVertical: 3 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                {randomLikes} likes
            </Text>
        </View>
    )
}
