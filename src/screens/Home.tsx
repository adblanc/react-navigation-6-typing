import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../modules/auth/context/AuthContext";

export const HomeScreen = () => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
