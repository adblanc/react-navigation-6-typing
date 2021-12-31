import { Button, StyleSheet, Text, View } from "react-native";
import { HomeScreensProps, TabbarScreenProps } from "../navigation/types";

export const HomeSettingsScreen = ({
  navigation,
}: HomeScreensProps<"Settings">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate("LogoutConfirmation")}
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
