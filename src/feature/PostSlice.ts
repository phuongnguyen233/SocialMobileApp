import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import postService from "./services/PostService";

const initialState = {
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const createPost = createAsyncThunk('post/create_post', async (post: any) => {
    try {
        return await postService.createPost(post)
    } catch (error: any) {
        const status = error.response.status
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return {
            status,
            message
        }
    }
})

export const getPost = createAsyncThunk('post/get_post', async () => {
    try {
        return await postService.getPost()
    } catch (error: any) {
        const status = error.response.status
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return {
            status,
            message
        }
    }
})

export const getIsMyPost = createAsyncThunk('post/get_is_my_post', async () => {
    try {
        return await postService.getIsMyPost()
    } catch (error: any) {
        const status = error.response.status
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return {
            status,
            message
        }
    }
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: (state: any) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        // createPost
        builder.addCase(createPost.pending, (state: any) => {
            //console.log("🚀 ~ file: PostSlice.ts:38 ~ builder.addCase ~ state:", state)
            state.isLoading = true
        })
        builder.addCase(createPost.fulfilled, (state: any, action: any) => {
            //console.log("🚀 ~ file: PostSlice.ts:42 ~ builder.addCase ~ state:", state)
            state.isLoading = false
            state.isSuccess = true
            state.message = action.payload
        })
        builder.addCase(createPost.rejected, (state: any, action: any) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // getPost
        builder.addCase(getPost.pending, (state: any) => {
            state.isLoading = true
        })
        builder.addCase(getPost.fulfilled, (state: any, action: any) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload
        })
        builder.addCase(getPost.rejected, (state: any, action: any) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        // getIsMyPost
        builder.addCase(getIsMyPost.pending, (state: any) => {
            state.isLoading = true
        })
        builder.addCase(getIsMyPost.fulfilled, (state: any, action: any) => {
            state.isLoading = false
            state.isSuccess = true
            state.posts = action.payload
        })
        builder.addCase(getIsMyPost.rejected, (state: any, action: any) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = postSlice.actions
export default postSlice.reducer
