import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import AvatarComponent from "../UserAvatarWithName/AvatarComponent";
import React from "react";
import Colors from "./../../modules/Colors";

type UserProfileDataProps = {
  avatarUrl: string;
  fullname: string;
  biography: string;
};

export default function UserProfileData({
  avatarUrl,
  fullname,
  biography,
}: UserProfileDataProps) {
  const handleClick = (url: string) => async () => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    } catch (error) {
      console.error("Error opening URL:", error);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{ flex: 40, flexDirection: "column" }}>
          <AvatarComponent
            avatarUrl={avatarUrl}
            width={90}
            height={90}
            size={80}
          />
        </View>
        <View
          style={{
            flex: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
            >
              1,234
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Posts
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
            >
              9,234
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Followers
            </Text>
          </View>
          <View>
            <Text
              style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
            >
              234
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Following
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "left" }}>
          {fullname == "" ? "update infomation fullname..." : fullname}
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: 15, textAlign: "left" }}>
          {biography == "" ? "update infomation biography..." : biography}
        </Text>
        <Text style={{ fontWeight: "normal", fontSize: 15, textAlign: "left" }}>
          https://bit.ly/rose2024sgkr
        </Text>
        <TouchableOpacity
          onPress={handleClick("https://www.youtube.com/@roses_are_rosie")}
        >
          <View>
            <Text style={styles.text}>youtube.com/@roses_are_rosie</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.offNavyBlue,
  },
});
