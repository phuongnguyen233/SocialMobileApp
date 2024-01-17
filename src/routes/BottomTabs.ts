import {TypeRouterTabButton} from "../types/Types";
import MainScreen from "../components/MainScreen/Component";
import ProfileScreen from "../components/ProfileScreen/Component";

export const Screens = {
    MainScreen: "main-screen",
    ProfileScreen: "profile-screen",
}
export const RoutesButtonTab = <TypeRouterTabButton[]>[
    {
        component: MainScreen,
        name: Screens.MainScreen,
        auth: true,
        icon: 'home',
        badge: false,
    },
    {
        component: ProfileScreen,
        name: Screens.ProfileScreen,
        auth: true,
        icon: 'user-secret',
        badge: false,
    }
];
