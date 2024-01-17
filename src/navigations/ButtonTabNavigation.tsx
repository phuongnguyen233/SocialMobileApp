import React, {useRef} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {RoutesButtonTab} from "../routes/BottomTabs"
import {TypeRouterTabButton} from "../types/Types";
import {Animated, Dimensions} from "react-native";
import Colors from '../modules/Colors';
import {Fontisto} from "@expo/vector-icons";

const Tab = createBottomTabNavigator()

const ButtonTabNavigation = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current

    function getWidth() {
        let width = Dimensions.get('window').width

        width = width - 20
        return width / 4
    }

    return (
        <Tab.Navigator>
            {RoutesButtonTab?.map((tab: TypeRouterTabButton, index: number) =>
                <Tab.Screen
                    key={index}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: {backgroundColor: Colors.white, height: 55, paddingBottom: 5},
                        tabBarIcon: ({focused}: any) =>
                            <Fontisto name={tab.icon} size={26} color={focused ?? Colors.dark}/>

                    }}
                    listeners={({navigation, route}: any) => ({
                        tabPress: (e: any) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true
                            }).start()
                        },
                    })}
                />
            )}
        </Tab.Navigator>
    );
};

export default ButtonTabNavigation
