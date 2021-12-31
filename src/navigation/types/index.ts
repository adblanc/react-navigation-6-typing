import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamsList = {
  Tabbar: NavigatorScreenParams<TabbarParamsList>;
  LogoutConfirmation: undefined;

  // Auth group
  Login: undefined;
  Signup: undefined;
};

export type TabbarParamsList = {
  Home: undefined;
  Bank: undefined;
  Invoice: undefined;
  Services: undefined;
};

export type RootScreenProps<RouteName extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, RouteName>;

export type TabbarScreenProps<RouteName extends keyof TabbarParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabbarParamsList, RouteName>,
    StackScreenProps<RootStackParamsList>
  >;
