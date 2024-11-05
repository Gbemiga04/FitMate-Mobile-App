import { View, Text, FlatList } from 'react-native'
import React from 'react'

import slides from '@/slides';
import OnboardingItem from './OnboardingItem';

const Onboarding =() => {
  return (
    <FlatList 
    data={slides}
    renderItem={({item}) => <OnboardingItem item = {item} otherStyles="max-h-[10px]"/>}
    />
  )
}

export default Onboarding