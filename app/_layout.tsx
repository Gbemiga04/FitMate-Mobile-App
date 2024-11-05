import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'

import "../global.css";

const _layout = () => {
    const [fontsLoaded, error] = useFonts({
      "Onest-Black": require("../assets/fonts/Onest-Black.ttf"),
      "Onest-Bold": require("../assets/fonts/Onest-Bold.ttf"),
      "Onest-ExtraBold": require("../assets/fonts/Onest-ExtraBold.ttf"),
      "Onest-ExtraLight": require("../assets/fonts/Onest-ExtraLight.ttf"),
      "Onest-Light": require("../assets/fonts/Onest-Light.ttf"),
      "Onest-Medium": require("../assets/fonts/Onest-Medium.ttf"),
      "Onest-Regular": require("../assets/fonts/Onest-Regular.ttf"),
      "Onest-SemiBold": require("../assets/fonts/Onest-SemiBold.ttf"),
      "Onest-Thin": require("../assets/fonts/Onest-Thin.ttf"),
    });
    
    useEffect(() => {
      if (error) throw error;
    
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded, error]);
    
    if (!fontsLoaded && !error) {
      return null;
    }
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
    </Stack>
  )
}
<StatusBar backgroundColor='#161622' style='dark' animated/>
export default _layout