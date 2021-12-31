import { Button, StyleSheet, View } from "react-native";

export const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Signup" onPress={() => {}} />
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
