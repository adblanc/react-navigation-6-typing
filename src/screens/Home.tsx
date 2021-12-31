import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../modules/auth/context/AuthContext";
import { HomeScreensProps } from "../navigation/types";

export const HomeScreen = ({ navigation }: HomeScreensProps<"Home">) => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user?.name}</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
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
