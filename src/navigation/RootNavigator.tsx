import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../modules/auth/context/AuthContext";
import { LoginScreen } from "../screens/Login";
import { LogoutConfirmationModalScreen } from "../screens/modals/LogoutConfirmation";
import { SignupScreen } from "../screens/Signup";
import { TabbarNavigator } from "./TabbarNavigator";
import { RootStackParamsList } from "./types";

const Stack = createStackNavigator<RootStackParamsList>();

export const RootNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? ( // theses screens are protected and cannot be navigated to if user is not signed in
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tabbar"
            component={TabbarNavigator}
          />
          <Stack.Screen
            options={{ presentation: "modal", headerLeftLabelVisible: false }}
            name="LogoutConfirmation"
            component={LogoutConfirmationModalScreen}
          />
        </>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
