import React, { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import PostUserInfo from "./PostUserInfo";
import PostImage from "./PostImage";
import { PostActions } from "./PostActions";
import { PostLikes } from "./PostLikes";
import { PostDescription } from "./PostDescription";
import { faker } from "@faker-js/faker";
import Colors from "../../modules/Colors";
import { AppDispatch } from "../../../reducers/store";
import { useDispatch } from "react-redux";
import { getPost } from "../../feature/PostSlice";

interface User {
    userId: string;
    username: string;
    avatar: string;
}

interface Posts {
    _id: string;
    createdAt: string;
    desc: string;
    img: string[];
    likes: any[];
    updatedAt: string;
    userId: User;
}

const PostComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const ref = React.useRef<FlatList>(null);
    const [index, setIndex] = React.useState<number>(0);
    const [posts, setPosts] = React.useState<Posts[]>([]);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY === 0) {
            //alert('top')
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resultAction = await dispatch(getPost())
                const result = resultAction.payload
                if (result) {
                    let formattedPosts: Posts[] = result.map((post: any) => ({
                        _id: post._id,
                        createdAt: post.createdAt,
                        desc: post.desc,
                        img: post.img,
                        likes: Math.floor(Math.random() * 1000),
                        updatedAt: post.updatedAt,
                        userId: post.userId,
                    }));
                    console.log("🚀 ~ file: Component.tsx:58 ~ letformattedPosts:Posts[]=result.map ~ formattedPosts:", formattedPosts)
                    setPosts(formattedPosts);
                }

            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchData()
    }, [])

    return (
        <View>
            {posts.length === 0 ? (
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text>No Data!</Text>
                </View>
            ) : (
                <FlatList
                    ref={ref}
                    initialScrollIndex={index}
                    style={{ height: '80.0%' }}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={posts}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <>
                            <PostUserInfo urlAvatar={item.userId.avatar} username={item.userId.username} />
                            <PostImage urlImagePost={item.img} key={item._id} />
                            <PostActions />
                            <PostLikes randomLikes={item.likes} />
                            <PostDescription username={item.userId.username} description={item.desc} />
                        </>
                    )}
                    onScroll={handleScroll}
                />
            )}
        </View>
    )
}

export default PostComponent
