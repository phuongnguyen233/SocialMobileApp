import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from "react-native";
import Container from "../../common/Container";
import HeaderProfile from "./HeaderProfile";
import UserProfileData from "../MainScreen/UserProfileData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../../modules/Colors";
import { Avatar } from "react-native-ui-lib/src/components/avatar";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import StoryComponent from "../StoryComponent/Component";
import DefaultImage from "../../modules/DefaultImage";
import { getData } from "../../../Until/user";
import { faker } from "@faker-js/faker";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../reducers/store";
import { getIsMyPost } from "../../feature/PostSlice";

// const imagesPost: Array<string> = new Array(20).fill(0).map(
//   () => (
//     faker.image.urlLoremFlickr({ width: 130, height: 130, category: 'abstract' }) as string
//   )
// );

const { width, height } = Dimensions.get("screen");
console.log("🚀 ~ file: Component.tsx:23 ~ height:", height)
console.log("🚀 ~ file: Component.tsx:24 ~ width:", width)

// const onLayout=(event)=> {
//   const {x, y, height, width} = event.nativeEvent.layout;

// }

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [myPosts, setMyPosts] = React.useState<any>(null);
  const [imagesPost, setImagesPost] = React.useState<any>(null);
  const [userData, setUserData] = React.useState<any>(null);

  const filterImagesFromPosts = (posts: any) => {
    return posts.reduce((accumulator: any, post: any) => {
      return accumulator.concat(post.img);
    }, []);
  }

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(getIsMyPost());
        const result = resultAction.payload;
        if (result) {
          setMyPosts(result.data);
          setImagesPost(filterImagesFromPosts(result));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  const listAvatar: Array<string> = [
    "https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3373716/pexels-photo-3373716.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1778821/pexels-photo-1778821.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <Container>
      <HeaderProfile user={userData} />
      <UserProfileData
        avatarUrl={DefaultImage.avatar}
        fullname={userData?.fullname}
        biography={userData?.biography}
      />
      <View style={styles.follower}>
        <View style={styles.avatarFollower}>
          {listAvatar.map((item, index) => {
            return (
              <View key={index} style={styles.avatarContainer}>
                <Avatar
                  imageStyle={{ borderColor: Colors.white, borderWidth: 2 }}
                  size={34}
                  source={{ uri: item }}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.namefollower}>
          <Text numberOfLines={2} ellipsizeMode="tail">
            Followed by username, username and 100 others
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity style={styles.buttonEditProfile}>
          <Text style={{ fontWeight: "bold" }}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAddFrient}>
          <Ionicons
            name="ios-person-add-outline"
            size={17}
            color={Colors.dark}
          />
        </TouchableOpacity>
      </View>
      <StoryComponent isShowMyStories={false} />
      <View style={styles.buttonOption}>
        <TouchableOpacity style={styles.toButtonOption} onPress={() => { }}>
          <Ionicons name="grid-outline" size={24} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toButtonOption} onPress={() => { }}>
          <Entypo name="video" size={24} color={Colors.dark} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toButtonOption} onPress={() => { }}>
          <FontAwesome5 name="user" size={24} color={Colors.dark} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{ height: height - 560 }}
          horizontal={false}
          numColumns={3}
          data={imagesPost}
          scrollEnabled={true}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity>
                  <Image source={{ uri: item }}
                    style={{ width: 130, height: 130 }} />
                </TouchableOpacity>
              </View>
            )
          }}>
        </FlatList>
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  follower: {
    marginTop: 12,
    width: "100%",
    height: 32,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatarFollower: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },
  avatarContainer: {
    borderColor: "rgb(255, 255, 255)",
    overflow: "hidden",
    marginLeft: -10,
  },
  namefollower: {
    marginLeft: 12,
    width: "56%",
    justifyContent: "center",
  },
  buttonEditProfile: {
    backgroundColor: Colors.white1,
    borderRadius: 4,
    width: "90%",
    height: 32,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAddFrient: {
    backgroundColor: Colors.white1,
    borderRadius: 4,
    width: "9%",
    height: 32,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOption: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    width: "100%",
    height: 50,
  },
  toButtonOption: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
