import { Button, StyleSheet, Text, View } from "react-native";
import { BankScreensProps } from "../navigation/types";

export const BankScreen = ({ navigation }: BankScreensProps<"BankHome">) => {
  return (
    <View style={styles.container}>
      <Text>Bank</Text>
      <Button
        title="Go to bank settings"
        onPress={() => navigation.navigate("BankSettings")}
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
