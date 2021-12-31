import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/Home";
import { HomeSettingsScreen } from "../screens/HomeSettings";

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={HomeSettingsScreen} />
    </Stack.Navigator>
  );
};
