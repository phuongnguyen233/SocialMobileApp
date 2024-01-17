import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async () => {
  try {
    const userData = await AsyncStorage.getItem('user');
    
    if (userData) {
      const user = JSON.parse(userData);
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user data:", error);
  }
};