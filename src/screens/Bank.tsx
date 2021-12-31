import { StyleSheet, Text, View } from "react-native";

export const BankScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bank</Text>
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
