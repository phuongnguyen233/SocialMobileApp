import {TypeRouter} from "../types/Types";
import LoginScreen from "../components/LoginScreen/Component";
import RegisterScreen from "../components/RegiserScreen/Component";
import ForgotPasswordScreen from "../components/ForgotPasswordScreen/Component";
import OTPVerification from "../components/OTPVerification/Component";
import CreatedNewPassword from "../components/ForgotPasswordScreen/CreateNewPassword/Component";
import PasswordChangeSuccess from "../components/ForgotPasswordScreen/CreateNewPassword/PasswordChangeSuccess";
import WelComeScreen from "../components/WelcomeScreen/Component";
import ButtonTabNavigation from "../navigations/ButtonTabNavigation";
import CreatePostScreen from "../components/CreatePostScreen/Component";

export const Screens = {
    welcomeScreen: "welcome-screen",
    loginScreen: "login-screen",
    RegisterScreen: "register-screen",
    ForgotPasswordScreen: "forgot-password-screen",
    OTPVerification: "otp-verification-screen",
    CreatedNewPassword: "create-new-password-screen",
    PasswordChangeSuccess: "password-change-success-screen",
    MainScreen: "main-screen",
    CreatePostScreen: "create-post-screen",
    ProfileScreen: "profile-screen",

}

export const Routes = <TypeRouter[]>[
    {
        component: WelComeScreen,
        name: Screens.welcomeScreen,
        auth: false,
        options: {
            headerShown: false
        },
    },
    {
        component: LoginScreen,
        name: Screens.loginScreen,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: RegisterScreen,
        name: Screens.RegisterScreen,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: ForgotPasswordScreen,
        name: Screens.ForgotPasswordScreen,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: OTPVerification,
        name: Screens.OTPVerification,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: CreatedNewPassword,
        name: Screens.CreatedNewPassword,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: PasswordChangeSuccess,
        name: Screens.PasswordChangeSuccess,
        auth: false,
        options: {
            headerShown: false
        }
    },
    {
        component: CreatePostScreen,
        name: Screens.CreatePostScreen,
        auth: true,
        options: {
            headerShown: false
        }
    },
    {
        component: ButtonTabNavigation,
        name: 'button-tab-navigation',
        auth: true,
        options: {
            headerShown: false
        }
    }

];
