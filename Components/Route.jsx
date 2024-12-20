import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { src, dest, setSrc, setDest } from '../Functions/Variables';
import { solvee } from '../Functions/deja';
import{fillclr} from '../Functions/color'
import {color} from '../Functions/Lists'
import Stations from  './Stations'
import RouteHeader from './RouteHeader';
import Box from './Box';
import StnBox from './StnBox';


const Route = () => {
  const path = solvee(src, dest);
  fillclr(path);

  return (
    <View style={styles.container}>
      <RouteHeader src ={src} dest = {dest}/>
      <ScrollView style={styles.scroll}>
      
      {path.map((station, index) => {
        return (
          <>
            <StnBox key={index} stations={station} color={color[index]} src={src} dest={dest}></StnBox>
          </>
          
        );
      })}
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff6f4',
    padding:'2%',
    paddingTop:50
  },
  scroll: {
    width: '100%',
  },
  track: {
    width:15,
    height:'100%',
    backgroundColor:'red'
  }
});

export default Route;
