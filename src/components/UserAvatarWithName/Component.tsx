import React from 'react';
import { View, Text } from 'react-native';
import AvatarComponent from "./AvatarComponent";

interface UserAvatarWithNameProps {
    avatarUrl: string;
    name: string;
}

const AvatarWithName: React.FC<UserAvatarWithNameProps> = ({ avatarUrl, name }) => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <AvatarComponent avatarUrl={avatarUrl} width={82} height={82} size={70}/>
            <Text style={{ width: 80, textAlign: 'center' }} ellipsizeMode='tail' numberOfLines={1}>
                {name}
            </Text>
        </View>
    );
};

export default AvatarWithName;
