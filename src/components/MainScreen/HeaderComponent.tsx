import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Colors from "../../modules/Colors";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

type HeaderComponentProps = {
  navigation: NavigationProp<any>;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ navigation }) => {
  console.log("loading component header....");
  const createPost = async (camera: boolean) => {
    const result = camera
      ? await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      })
      : await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection: true,
      });

    if (AsyncStorage.getItem("images") != null) {
      AsyncStorage.removeItem("images");
    }

    if (!result.canceled) {
      const images = result.assets.map((item: any) => {
        return item.uri;
      });
      await AsyncStorage.setItem("images", JSON.stringify(images));

      navigation.navigate("create-post-screen", {
        navigation: navigation,
      });
    }
  };

  return (
    <View style={styles.flexHeader}>
      <Text style={styles.colorTextHeader}>Bluewhale</Text>
      <View style={styles.optionHeader}>
        <TouchableOpacity
          style={{ marginRight: 24 }}
          onPress={() => {
            alert("notification ...");
          }}
        >
          <AntDesign name={"hearto"} size={24} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginRight: 24 }}
          onPress={() => {
            alert("message ...");
          }}
        >
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Post Status", "", [
              { text: "Camera", onPress: () => createPost(true) },
              { text: "Library", onPress: () => createPost(false) },
              { text: "Cancel", style: "cancel" },
            ]);
          }}
        >
          <Feather name="plus-square" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  flexHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  colorTextHeader: {
    color: Colors.dark,
    fontSize: 27,
    fontWeight: "normal",
    fontFamily: "Grandista-Normal",
  },
  optionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
