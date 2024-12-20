import React from 'react'
import { ScrollView, View } from 'react-native'
import { blue, red, green, pink, orange, purple } from '../Functions/Lists'
import Stations from './Stations'
import StnBox from './StnBox'

const StnList = () => {
  return (
    <ScrollView >
        {blue.map(station => {
            return(<StnBox stations  = {station}/>)
        })}
    </ScrollView>
  )
}

export default StnList
