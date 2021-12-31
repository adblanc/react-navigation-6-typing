import { Button, StyleSheet, View } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => {}} />
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
