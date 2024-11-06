import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const JoinButton = ({title}) => {
  return (
    <TouchableOpacity className='bg-primary px-[40px] items-center py-6 rounded-[100px]' activeOpacity={0.7}>
        <Text className='font-osemibold text-[17px] text-white'>{title}</Text>
    </TouchableOpacity>
  )
}

export default JoinButton
