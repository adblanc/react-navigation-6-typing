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
  HomeStack: NavigatorScreenParams<HomeParamsList>;
  BankStack: NavigatorScreenParams<BankParamsList>;
  Invoice: undefined;
  Services: undefined;
};

export type HomeParamsList = {
  Home: undefined;
  Settings: undefined;
};

export type BankParamsList = {
  BankHome: undefined;
  BankSettings: undefined;
};

export type RootScreenProps<RouteName extends keyof RootStackParamsList> =
  StackScreenProps<RootStackParamsList, RouteName>;

export type TabbarScreenProps<RouteName extends keyof TabbarParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabbarParamsList, RouteName>,
    RootScreenProps<"Tabbar">
  >;

export type HomeScreensProps<RouteName extends keyof HomeParamsList> =
  CompositeScreenProps<
    StackScreenProps<HomeParamsList, RouteName>,
    TabbarScreenProps<"HomeStack">
  >;

export type BankScreensProps<RouteName extends keyof BankParamsList> =
  CompositeScreenProps<
    StackScreenProps<BankParamsList, RouteName>,
    TabbarScreenProps<"BankStack">
  >;
