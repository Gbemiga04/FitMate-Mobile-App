import { View, Text, Image, useWindowDimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const OnboardingItem = ({item}) => {
    const {width} = useWindowDimensions()
    return (
        <SafeAreaView style={{ width }}>
            <View style={{ width }} className={` h-full flex-[1] justify-center items-center`}>
            <Image
            source={item.image} className={`flex-[0.6]`} resizeMode='contain'
            />
            <View style={{ width }} className={`flex-[0.4] items- px-7 items-start `}>
                <Text style={{ width }} className={`font-osemibold text-[37px]`}>{item.title}</Text>
                </View>
                </View>
        </SafeAreaView>
    )
    }

export default OnboardingItem