import { createStackNavigator } from "@react-navigation/stack";
import { BankScreen } from "../screens/Bank";
import { BankSettingsScreen } from "../screens/BankSettings";

const Stack = createStackNavigator();

export const BankStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BankHome" component={BankScreen} />
      <Stack.Screen name="BankSettings" component={BankSettingsScreen} />
    </Stack.Navigator>
  );
};
