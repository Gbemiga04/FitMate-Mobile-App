import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import JoinButton from './JoinButton'
import { useWindowDimensions } from 'react-native'
import { useEffect, useRef, useState } from 'react'

const DATA = [
    {
        id:'1',
        title:'football',
        image: require('../assets/images/football.png'),
    },{
        id:'2',
        title:'gaming',
        image: require('../assets/images/gaming.png'),
    },{
        id:'3',
        title:'workout',
        image: require('../assets/images/workout.png'),
    },{
        id:'4',
        title:'tennis',
        image: require('../assets/images/tennis.png'),
    },{
        id:'5',
        title:'hooping',
        image: require('../assets/images/basketball.png'),
    },
    {
        id:'6',
        title:'soccer',
        image: require('../assets/images/soccer.png'),
    }
]

const JoinPage = () => {
    const flatListRef = useRef(null); // Ref to control FlatList
    const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current index
  
    useEffect(() => {
    const interval = setInterval(() => {
        // Calculate next index (looping back to 0 if at the end)
        const nextIndex = currentIndex < DATA.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);

        // Scroll to the next item
        flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
        });
      }, 1500); // Scroll every 2 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }, [currentIndex]);
const {width} = useWindowDimensions()

  return (<SafeAreaView style={{ width }} className='h-full'>
  <View className='h-full justify-center  flex-1'>
    <View style={{ width }} className='items-center justify-center mt-[20%]'><FlatList className='bg-transparent' 
    ref={flatListRef}
    data={DATA}
    renderItem={({item}) => <Image style={{ width }} className="h-[200px]" source={item.image} resizeMode='contain'
    />
}
    keyExtractor={(item) => item.id}
    horizontal
    pagingEnabled
    bounces={false}
    showsHorizontalScrollIndicator={false}

    /></View>


    <View className='items-end justify-center flex-[0.7] pr-[10px]'>
        <Text className='text-[50px] text-right font-oregular'>Meet your {"\n"}<Text className="font-obold">{DATA[currentIndex].title}</Text> buddy {"\n"} on <Text className='text-primary font-oblack'>FitMate!</Text></Text>  
    </View>
    <View className=' flex-[0.3] w-full items-center justify-center mb-[10%]'><JoinButton title = "Join the FitMate Community!"/>
    <Text className='py-3 font-osemibold text-[15px]'>Already a member? <Text className='font-oblack text-primary'>Login</Text>
    </Text>
    </View>

    </View>
    </SafeAreaView>
  )
}

export default JoinPage