import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../modules/auth/context/AuthContext";

export const SignupScreen = () => {
  const { signup } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Signup" onPress={signup} />
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
