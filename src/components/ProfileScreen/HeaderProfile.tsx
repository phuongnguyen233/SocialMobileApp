import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Feather, Ionicons, Entypo } from "@expo/vector-icons";
import Colors from "../../modules/Colors";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../reducers/store";
import { logout } from "../../feature/AuthSlice";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/core/src/types";

export default function HeaderProfile({ user }: { user: any }) {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp<any>>()

  const handleLogout = () => {
    dispatch(logout())
      .then((resultAction) => {
        navigation.reset({
          index: 0,
          routes: [{ name: "welcome-screen" }],
        })
      })
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {user?.username ?? "test username"}
        </Text>
        <Text> </Text>
        <TouchableOpacity>
          <AntDesign name={"down"} size={20} color={Colors.dark} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Feather name="plus-square" size={24} color="black" />
        </TouchableOpacity>
        <Text> </Text>
        <TouchableOpacity onPress={() => {
          handleLogout()
        }}>
          <Entypo name="log-out" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
