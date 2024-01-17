import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './services/AuthService'

// Get user from localStorage

type ValuesRegister = {
    username: string
    email: string
    password: string
}
const initialState = {
    user: undefined,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const checkLogin = createAsyncThunk('auth/check_login', async () => {
    try {
        return await authService.getData()
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return message
    }
})
export const register = createAsyncThunk('auth/register', async (user: ValuesRegister, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error: any) {
        const status = error.response.status
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return {
            status,
            message
        }
    }
})
export const login = createAsyncThunk('auth/login', async (user: any) => {
    try {
        return await authService.login(user)
    } catch (error: any) {
        const status = error.response.status
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return {
            status,
            message
        }
    }
})
export const authentication = createAsyncThunk('auth/authorization', async (accessToken: any) => {
    try {
        return await authService.authentication(accessToken)
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return message
    }
})
export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        return authService.logout()
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return message
    }
})

export const authSlice = createSlice({
    name: 'auth',
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
        builder
            // Register
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state: any, action: any) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state: any, action: any) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            // Check Login
            .addCase(checkLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(checkLogin.fulfilled, (state: any, action: any) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(checkLogin.rejected, (state: any, action: any) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            // Login
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state: any, action: any) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state: any, action: any) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            // Logout
            .addCase(logout.fulfilled, (state: any) => {
                state.user = null
            })
            // authentication
            .addCase(authentication.pending, (state) => {
                state.isLoading = true
            })
            .addCase(authentication.fulfilled, (state: any, action: any) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(authentication.rejected, (state: any, action: any) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
