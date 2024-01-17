import React, {useCallback, useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Container from "../../common/Container";
import Colors from "../../modules/Colors";
import HeaderComponent from "./HeaderComponent";
import StoriesComponent from "../StoryComponent/Component";
import PostComponent from "../PostComponent/Component";
import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";
import AsyncStorage from '@react-native-async-storage/async-storage';

type MainScreenProps = {
    navigation: NavigationProp<any>;
};

const MainScreen: React.FC<MainScreenProps> = () => {
    const navigation = useNavigation<any>();
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        AsyncStorage.getItem('user')
            .then((user) => {
                if (user) {
                    setCurrentUser(JSON.parse(user));
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
    return (
        <Container paddingHorizontal={false}>
            <HeaderComponent navigation={navigation}/>
            <View>
                <StoriesComponent isShowMyStories={true}/>
                <View style={styles.tagHr}/>
                <PostComponent/>
            </View>
        </Container>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    tagHr: {
        borderBottomColor: Colors.white1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 5
    }
})
