import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { NFTCards, HomeHeader, FocusedStatusBar} from '../components';
import { COLORS, NFTData} from '../constants'

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar style={{backgroundColor: COLORS.primary}}/>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home