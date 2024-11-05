import { View, Text, Image, useWindowDimensions} from 'react-native'
import React from 'react'

const OnboardingItem = ({item, otherStyles}) => {
    const {width} = useWindowDimensions()
    return (
        <View className='w-width'>
            <Image
            source={item.image} className={`${otherStyles} h-[10px]`}
            />
            <View className='flex-[0.3]'><Text className={`${otherStyles}`}>{item.title}</Text></View>
        </View>
    )
    }

export default OnboardingItem