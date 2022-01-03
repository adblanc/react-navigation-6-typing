import { RootStackParamsList } from "./src/navigation/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
    // provides default typing for useNavigation etc...
    // https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
  }
}
