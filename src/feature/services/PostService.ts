import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { URL_SERVER, URL_SERVER_POST } from '../../helpers/UrlServer'
import Toast from 'react-native-toast-message'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const createPost = async (post: any) => {
    const userData: string | null = await AsyncStorage.getItem('user')
    if (userData) {
        const accessToken = JSON.parse(userData).accessToken
        const idUser = JSON.parse(userData).userData._id

        const parameters = {
            idUser,
            post
        }

        const response = await axios.post(URL_SERVER_POST + '/create', {
            parameters
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        })

        if (response.data.message === 'success') {
            Toast.show({
                type: 'success',
                text1: 'Notification',
                text2: 'Create Post Success',
            })
        }

        return response.data.message
    }
    Toast.show({
        type: 'error',
        text1: 'Notification',
        text2: 'Create Post Fail',
    })
    return 'Create Post Fail'
}

const getPost = async () => {
    const userData: string | null = await AsyncStorage.getItem('user')
    if (userData) {
        const accessToken = JSON.parse(userData).accessToken

        const response = await axios.get(URL_SERVER_POST + '/get-all', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        })

        if (response.data.message === 'success') {
            return response.data.postData
        }
        return []
    }
}

const getIsMyPost = async () => {
    const userData: string | null = await AsyncStorage.getItem('user')
    if (userData) {
        const accessToken = JSON.parse(userData).accessToken
        const idUser = JSON.parse(userData).userData._id

        const response = await axios.get(URL_SERVER_POST + '/get-by-id?userId=' + idUser, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        })

        if (response.data.message === 'success') {
            return response.data.postData
        }
        return []
    }
    return []
}

const postService = {
    createPost,
    getPost,
    getIsMyPost
}

export default postService
