import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./Navigations/MainNavigation";
import COLORS from "./Constants/Colors";
import SignUpScreen from "./Screens/AuthScreen/SignUpScreen";

export default function App() {
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
