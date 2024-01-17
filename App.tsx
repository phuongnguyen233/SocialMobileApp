import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthTrack from "./src/navigations/AuthTrack";
import { Provider } from 'react-redux'
import { store } from "./reducers/store";
import Toast from 'react-native-toast-message'

export default function App() {
  return (
      <NavigationContainer>
          <Provider store={store}>
              <AuthTrack />
              <Toast/>
          </Provider>
      </NavigationContainer>
  );
}
