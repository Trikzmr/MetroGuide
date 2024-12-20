import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Box from './Box';
import Stations from './Stations';

const StnBox = (props) => {
  let flag =0;
  if(props.stations === props.src)
  {
    flag = 1;
  }
  return (
    <>
        <View style={styles.container}>
            <Box style = {styles.Box}color={props.color} flag={flag}></Box>
            <Stations style = {styles.stn} key={props.key} stations={props.stations} color={props.color}></Stations>
        </View> 
        
    </>


  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        height:70,
    },
    Box:{
        flex: 4,
    },
    stn:{
        flex:1
    }
  });

export default StnBox
