import { View, Animated, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const Paginator = ({data, scrollX}) => {
  const{width} = useWindowDimensions();

  return (
    <View className='flex-row h-[64px] justify-center items-center'>
      {data.map((_,i) => {
        const inputRange = [(i-1) * width,i * width, (i+1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10,20,10],
          extrapolate: "clamp",

        })
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3,1,0.3],
          extrapolate: "clamp",

        })

        return <Animated.View style={{
          width: 70, // Fixed width
          height: dotWidth, // Animated height
          borderRadius: 50, // Rounded for circular dots
          backgroundColor: '#7C63EF', // Replace 'blue' with the actual color code
          marginHorizontal: 8,
          opacity,
        }}
         key={i.toString()} />;
      })}
    </View>
  )
}

export default Paginator