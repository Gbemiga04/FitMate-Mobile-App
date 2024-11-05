import { Text, View } from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Onboarding from "../components/Onboarding"

import slides from "../slides"

export default function Index() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000)
  return (

        <Onboarding />

  );
}
