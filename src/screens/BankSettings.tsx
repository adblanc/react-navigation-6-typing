import { Button, StyleSheet, Text, View } from "react-native";
import { HomeScreensProps, TabbarScreenProps } from "../navigation/types";

export const BankSettingsScreen = ({
  navigation,
}: HomeScreensProps<"Settings">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank settings</Text>
      <Button
        title="Navigate deep"
        onPress={() =>
          navigation.navigate("HomeStack", {
            screen: "Settings",
          })
        }
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
  title: {
    fontSize: 32,
    fontWeight: "500",
  },
});
