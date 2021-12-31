import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";
import { TabbarNavigator } from "./TabbarNavigator";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} /> */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tabbar"
        component={TabbarNavigator}
      />
    </Stack.Navigator>
  );
};
