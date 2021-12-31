import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
