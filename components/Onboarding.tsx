import { View, Text, FlatList, Animated, Touchable} from 'react-native'
import React from 'react'
import { useState, useRef } from 'react';
import slides from '../slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import { TouchableOpacity } from 'react-native';

const Onboarding =() => {

  const [CurrentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (<View className='h-full'>
      <FlatList 
      data={slides}
      renderItem={({item}) => <OnboardingItem item = {item}/>}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
      onScroll = {Animated.event([{nativeEvent:{contentOffset: { x: scrollX }}}],
        {
          useNativeDriver:false,
        }
      )}
      scrollEventThrottle={0.1}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewConfig}
      ref={slidesRef}
      />
      <Paginator data = {slides} scrollX={scrollX} /><TouchableOpacity className='justify-center items-center'
      activeOpacity={0.5}
      >
      <Text className='font-osemibold justify-center items-center mb-20 text-2xl'>Skip</Text></TouchableOpacity>
      </View>
  )
}

export default Onboarding