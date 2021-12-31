import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { AuthContextProvider } from "./src/modules/auth/context/AuthContext";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
