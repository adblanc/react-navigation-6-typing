import { StyleSheet, Text, View } from "react-native";

export const ServicesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Services</Text>
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
