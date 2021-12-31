import { Button, StyleSheet, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => {}} />
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
