import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../modules/auth/context/AuthContext";

export const LogoutConfirmationModalScreen = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Are you sure you want to logout ?</Text>
      <Button title="Yes log me out" onPress={logout} />
      <Button title="No" onPress={navigation.goBack} />
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
