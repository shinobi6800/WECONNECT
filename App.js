import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./Navigations/MainNavigation";
import COLORS from "./Constants/Colors";
import SignUpScreen from "./Screens/AuthScreen/SignUpScreen";
import LoginScreen from "./Screens/AuthScreen/LoginScreen";

export default function App() {
  const logged =false;
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainNavigation />
      </View>
      {/* <SignUpScreen/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARYBG,
  },
});
