import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../modules/auth/context/AuthContext";

export const HomeScreen = ({ navigation }) => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome {user?.name}</Text>
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
