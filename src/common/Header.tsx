import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

type Props = {
    title: string
}
const Header = ({ title }: Props) => {
    const navigate = useNavigation()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity onPress={() => navigate.goBack()}>
                <Icon name='chevron-back-outline' size={25} />
            </TouchableOpacity>
            <View
                style={{
                    flex: 1,
                    width: '50%',
                }}
            >
                <Text
                    numberOfLines={1}
                    style={{
                        textTransform: 'uppercase',
                        fontWeight: '500',
                        fontSize: 16,
                        textAlign: 'center',
                    }}
                >
                    {title}
                </Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
