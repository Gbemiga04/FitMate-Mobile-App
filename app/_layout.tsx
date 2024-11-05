import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import "../global.css";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}/>
    </Stack>
  )
}
<StatusBar backgroundColor='#161622' style='dark' animated/>
export default _layout