import { StyleSheet, Text, View } from "react-native";

export const InvoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Invoice</Text>
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
