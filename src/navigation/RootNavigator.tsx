import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
