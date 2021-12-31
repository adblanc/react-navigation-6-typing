import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../modules/auth/context/AuthContext";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";
import { TabbarNavigator } from "./TabbarNavigator";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabbar"
          component={TabbarNavigator}
        />
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
