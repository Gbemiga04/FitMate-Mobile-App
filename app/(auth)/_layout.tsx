import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name='welcome' options={{headerShown:false}}/>
        <Stack.Screen name='signin' options={{headerShown:false}}/>
        <Stack.Screen name='Index' options={{headerShown:false}}/>
    </Stack>
  )
  
}
<StatusBar backgroundColor='#161622' style='dark' animated/>
export default _layout