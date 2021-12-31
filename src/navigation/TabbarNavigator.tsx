import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BankScreen } from "../screens/Bank";
import { InvoiceScreen } from "../screens/Invoice";
import { ServicesScreen } from "../screens/Services";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TabbarParamsList } from "./types";
import { HomeStackNavigator } from "./HomeNavigator";

const Tab = createBottomTabNavigator<TabbarParamsList>();

export const TabbarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <Ionicons name="home-outline" {...props} />,
          headerShown: false,
        }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => <FontAwesome name="bank" {...props} />,
        }}
        name="Bank"
        component={BankScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="document-outline" {...props} />
          ),
        }}
        name="Invoice"
        component={InvoiceScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: (props) => (
            <MaterialIcons name="home-repair-service" {...props} />
          ),
        }}
        name="Services"
        component={ServicesScreen}
      />
    </Tab.Navigator>
  );
};
