import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../modules/auth/context/AuthContext";
import { RootScreenProps } from "../../navigation/types";

export const LogoutConfirmationModalScreen = ({
  navigation,
}: RootScreenProps<"LogoutConfirmation">) => {
  const { logout } = useAuth();

  // navigation.navigate("Tabbar", {
  //   screen: "HomeStack",
  //   params: {
  //     screen: "Home",
  //   },
  // });

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
