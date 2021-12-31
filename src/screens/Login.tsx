import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../modules/auth/context/AuthContext";

export const LoginScreen = ({ navigation }) => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={login} />
      <Button
        title="Create account"
        onPress={() => navigation.navigate("Signup")}
      />
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
