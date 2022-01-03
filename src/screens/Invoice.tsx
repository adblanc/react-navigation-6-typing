import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { TabbarScreenProps } from "../navigation/types";

export const InvoiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Invoice</Text>
      <InvoiceNavButton />
    </View>
  );
};

const InvoiceNavButton = () => {
  const navigation =
    useNavigation<TabbarScreenProps<"Invoice">["navigation"]>();
  // here we use specific types but we could choose to not type it and navigate as if from root navigation
  // however we'd loose some type informations, ex : jumpTo fn that is available bc we are in a tabbar navigator screen

  return (
    <Button
      onPress={() => navigation.jumpTo("Services")}
      title="Go to services from component"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
