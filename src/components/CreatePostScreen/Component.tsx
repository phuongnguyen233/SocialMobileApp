import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import Container from "../../common/Container";
import Colors from "../../modules/Colors";
import { AntDesign } from "@expo/vector-icons";
import AvatarComponent from "../UserAvatarWithName/AvatarComponent";
import { ChipsInput, Button, Carousel } from "react-native-ui-lib";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../reducers/store";
import { createPost } from "../../feature/PostSlice";
import FirebaseUtils from "../../modules/FirebaseUtils";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DefaultImage from "../../modules/DefaultImage";
import { getData } from "../../../Until/user";

interface Props {
  route: any;
}

const PostCreate = ({ route }: Props) => {
  const navigation = route.params.navigation;
  const [userData, setUserData] = useState<any>(null);
  const [images, setImages] = useState<Array<string>>([]);
  const [triggerLoadUrlImage, setTriggerLoadUrlImage] =
    useState<boolean>(false);
  const [urlImages, setUrlImages] = useState<Array<string>>([]);
  const [description, setDescription] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = React.useState(0);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
    const imageFromAsyncStorage = async () => {
      try {
        const value = await AsyncStorage.getItem("images");
        if (value !== null) {
          const valueArray = JSON.parse(value);
          setImages(valueArray);
        }
        await AsyncStorage.removeItem("images");
      } catch (e) {
        console.log("Error Handle Images: ", e);
      }
    };
    imageFromAsyncStorage();
    setTriggerLoadUrlImage(true);
  }, []);

  useEffect(() => {
    const fetchImageUrls = async () => {
      let tempUrlImages: Array<string> = [];

      for (const image of images) {
        const uri = await FileSystem.getInfoAsync(image);
        tempUrlImages.push(uri.uri);
      }

      console.log("// Sau khi lặp xong, cập nhật state một lần");
      setUrlImages(tempUrlImages);
    };

    if (triggerLoadUrlImage) {
      fetchImageUrls();
    }
  }, [triggerLoadUrlImage, images]);

  const createPostHandle = async () => {
    setUploading(true);
    const fileName = urlImages.map((image) => {
      return image.split("/").pop();
    });

    const pathInStorage = `/posts/userid/${userData?._id}`;
    const param = {
      fileName: fileName,
      fileUrl: urlImages,
      path: pathInStorage,
    };

    const imageUrl = await FirebaseUtils.uploadFile(param);
    setUploading(false);

    const Params = {
      description: description,
      image: imageUrl,
    };

    // const Params = {
    //   description: "Dev Test first post",
    //   image: [
    //     "https://firebasestorage.googleapis.com/v0/b/social-media-apps-rn.appspot.com/o/posts%2Fuserid%2F65753bc459249488cb3ae591%2F1ec77c35-49f5-46a0-9bfc-3cbe6093cb93.jpeg?alt=media&token=cac84075-9160-4b80-bd7e-213ce35ced1b",
    //     "https://firebasestorage.googleapis.com/v0/b/social-media-apps-rn.appspot.com/o/posts%2Fuserid%2F65753bc459249488cb3ae591%2Fe2b92179-a70d-47e2-92a7-b0957592dea7.jpeg?alt=media&token=28411bd5-3828-4134-adfe-57b0e523035d",
    //     "https://firebasestorage.googleapis.com/v0/b/social-media-apps-rn.appspot.com/o/posts%2Fuserid%2F65753bc459249488cb3ae591%2Fe5f9572e-0c03-4576-8913-668ca94a2caf.jpeg?alt=media&token=b33e268c-68b0-43d6-9d10-50deff48ab55",
    //   ],
    // };

    dispatch(createPost(Params))
      .then((resultAction) => {
        if (createPost.fulfilled.match(resultAction)) {
          setDescription("");
          navigation.navigate("main-screen");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <Container>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name={"left"} size={24} color={Colors.dark} />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Create Post</Text>
          <View style={{ marginRight: 10 }}></View>
        </View>
        <View style={{ marginTop: 25 }}>
          <View style={styles.container}>
            {images.length == 1 ? (
              <ImageBackground
                blurRadius={30}
                style={styles.imageContainer}
                source={{ uri: images[0] }}
                borderRadius={20}
              >
                <View style={styles.overlayTop} />
                <Image source={{ uri: images[0] }} style={styles.image} />
                <View style={styles.overlayBottom} />
              </ImageBackground>
            ) : (
              <Carousel
                onChangePage={handlePageChange}
                initialPage={0}
                showCounter={true}
                horizontal={true}
                pageControlPosition={Carousel.pageControlPositions.UNDER}
                allowAccessibleLayout={true}
                containerStyle={styles.imageContainer}
                loop={true}
              >
                {images.map((image, index) => {
                  return (
                    <ImageBackground
                      key={index}
                      blurRadius={30}
                      style={styles.imageContainer}
                      source={{ uri: image }}
                      borderRadius={20}
                    >
                      <View style={styles.overlayTop} />
                      <Image source={{ uri: image }} style={styles.image} />
                      <View style={styles.overlayBottom} />
                    </ImageBackground>
                  );
                })}
              </Carousel>
            )}
            <View style={styles.avatarContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AvatarComponent
                  avatarUrl={DefaultImage.avatar}
                  width={60}
                  height={60}
                  size={50}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: Colors.white,
                    fontSize: 15,
                  }}
                >
                  {userData?.username}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{ fontWeight: "bold", color: Colors.dark, fontSize: 15 }}
          >
            {userData?.username}
          </Text>
          <ChipsInput
            placeholder={"Write a caption"}
            multiline={true}
            numberOfLines={3}
            value={description}
            onChangeText={(valueDescription: string) =>
              setDescription(valueDescription)
            }
            style={styles.descriptionText}
          />
        </View>
        <Button
          label={"Post"}
          size={Button.sizes.large}
          backgroundColor={Colors.facebook}
          onPress={createPostHandle}
        />
      </Container>
      {uploading && <ActivityIndicator size={"large"} style={styles.overlay} />}
    </View>
  );
};

export default PostCreate;

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    backgroundColor: Colors.white,
  },
  imageContainer: {
    flex: 1,
  },
  overlayTop: {
    flex: 12,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    flex: 76,
    //resizeMode: 'contain',
  },
  overlayBottom: {
    flex: 12,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  avatarContainer: {
    marginTop: 5,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  descriptionText: {
    marginTop: 5,
    backgroundColor: Colors.white1,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderRadius: 20,
    width: "100%",
    height: 120,
    textAlignVertical: "top",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: 0.8,
    justifyContent: "center",
  },
});
