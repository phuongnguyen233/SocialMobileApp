import { TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/Ionicons";
import { TypeRouter } from "../types/Types";
import { Routes } from "../routes/Routes";

const Stack = createNativeStackNavigator();

const AuthTrack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      {Routes.map((item: TypeRouter, index: number) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              headerShown: item.options.headerShown,
              title: item.options.title,
              headerStyle: item.options.headerStyle,
              headerTintColor: item.options.headerTintColor,
              headerTitleStyle: item.options.headerTitleStyle,
              headerRight: () => {
                return (
                  <>
                    {item.options.headerRight && (
                      <TouchableOpacity
                        style={{ marginRight: 20 }}
                        onPress={() => {
                          navigation.dispatch(DrawerActions.toggleDrawer());
                        }}
                      >
                        <Icon name='menu-outline' size={30} />
                      </TouchableOpacity>
                    )}
                  </>
                );
              },
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default AuthTrack;
