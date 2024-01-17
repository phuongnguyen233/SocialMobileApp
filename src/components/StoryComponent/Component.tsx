import { FlatList, StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-ui-lib";
import { faker } from "@faker-js/faker";
import { BadgePosition } from "react-native-ui-lib/src/components/avatar";
import DefaultImage from "../../modules/DefaultImage";
import AvatarWithName from "../UserAvatarWithName/Component";
import { getData } from "../../../Until/user";

interface Data {
  key: string;
  name: string;
  avatar: string;
}

const data: Data[] = new Array(20).fill(0).map(
  () =>
  ({
    name: faker.internet.userName(),
    avatar: faker.image.avatar(),
    key: faker.string.uuid(),
  } as Data)
);

interface Props {
  isShowMyStories: boolean;
}
const StoriesComponent = (props: Props) => {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getData();
        setUserData(user.userData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 3,
      }}
    >
      {props.isShowMyStories && (
        <View
          style={{
            marginRight: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            source={{ uri: DefaultImage.avatar }}
            size={70}
            badgePosition={BadgePosition.BOTTOM_RIGHT}
          />
          <Text
            style={{ width: 80, textAlign: "center", marginTop: 10 }}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {userData?.username}
          </Text>
        </View>
      )}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AvatarWithName avatarUrl={item.avatar} name={item.name} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default StoriesComponent;

const styles = StyleSheet.create({});
