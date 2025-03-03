import { Link } from 'expo-router'; 
 import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { src, dest, setSrc, setDest } from './Functions/Variables';
import { solvee } from './Functions/deja';
import{fillclr} from './Functions/color'
import {color} from './Functions/Lists'
import RouteHeader from './RouteHeader';
import StnBox from './StnBox';


export default function Route() {
    const path = solvee(src, dest);
    fillclr(path);
    return (
        <View style={styles.container}>
            <RouteHeader src ={src} dest = {dest}/>
            <ScrollView style={styles.scroll}>
            
            {path.map((station, index) => {
                return (
                    <StnBox key={index} stations={station} color={color[index]} src={src} dest={dest}></StnBox>
                );
            })}
            </ScrollView>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCFCE7',
      paddingTop:0,
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