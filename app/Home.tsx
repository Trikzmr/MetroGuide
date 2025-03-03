import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { stations } from './Functions/Lists';
import { src, dest, setSrc, setDest, placemap } from './Functions/Variables';
import { Dropdown } from 'react-native-element-dropdown';
import { useState, useEffect } from 'react';
import { Link } from 'expo-router'; 
import PlaceList from './PlaceList'
import { place } from "./Functions/PlacesList.js";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dev from './Dev'




export default function HomeScreen() {
  let n = place.length;
  const[near, setnear] = useState([]);
  const nearbyplace: any[] = [];
    const formattedStations = stations.map(station => ({
        label: station,
        value: station,
    }));
    const placemappush =(src:any) =>
    {
      // console.log("push function");
      // nearbyplace.length=0;
      for(let i = 0; i< n; i++)
      {
        console.log(place[i].nearto + " "+ src);
        if(place[i].nearto === src)
        {
          nearbyplace.push(i);
        }
      }
      console.log(nearbyplace);
    };
    
    const handleSrcChange = (item:any) => {
        setSrc(item.value);
        placemappush(item.value);
        setnear(nearbyplace);
    };
    
    const handleDestChange = (item:any) => {
    setDest(item.value);
    placemappush(item.value);
    setnear(nearbyplace);
    };
    
    
  return (
    <>
      <View style={styles.top}>
        <View style={styles.topleft}>
          <MaterialIcons name="train" size={40} color="#fff" />
        </View>
        <View style={styles.topmid}>
          <Text style={styles.toptxt}>MetroGuide</Text>
        </View>
        <View style={styles.topright}></View>
        
      </View>
      <View style={styles.container}>
        <Text style={styles.txt}>Source Station</Text>
        <View style={styles.selector}>
          <View style={styles.selectorLeft}>
            <MaterialIcons name="place" size={24} color="#22C55E" />

          </View>
          <View style={styles.selectorRight}>
            <Dropdown
              data={formattedStations}
              maxHeight={300}
              style={styles.dropdown}
              labelField="label"
              valueField="value"
              placeholder="Select station"
              value={src}
              onChange={handleSrcChange}
            />
          </View>
          
        </View>
        <Text style={styles.txt}>Destination Station</Text>
        <View style={styles.selector}>
          <View style={styles.selectorLeft}>
          <MaterialIcons name="flag" size={24} color="#22C55E" />

          </View>
          <View style={styles.selectorRight}>
            <Dropdown
            data={formattedStations}
            maxHeight={300}
            style={styles.dropdown}
            labelField="label"
            valueField="value"
            placeholder="Select station"
            value={dest}
            onChange={handleDestChange}
            />
          </View>
        </View>
        
        
        <Link href="/Route" style={styles.btn}>
          <View style={styles.content}>
          <MaterialIcons name="navigation" size={24} color="#fff" />
            <Text style={styles.btntxt}>Find Route</Text>
          </View>
        </Link>
      </View>
      {
        near.length > 0 && (
          <ScrollView style={styles.location}>
            <Text style={styles.nearbytxt}>Nearby Places</Text>
            <PlaceList list={near}></PlaceList>
          </ScrollView>
        )
      }
      {
        near.length===0 && (
          <Dev/>
        )
      }
      
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#DCFCE7',
        borderRadius:16,
        paddingTop:0,
      },
      dropdown: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop:6,
        marginBottom: 6,
        fontWeight: 'bold',
        letterSpacing: 2
      },
      btn: {
        marginTop:16,
        height: 48,
        width: '100%',
        backgroundColor: '#22C55E',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center', // Center everything horizontally
        alignItems: 'center', // Center everything vertically
        
        paddingLeft:'20%',
        paddingRight:'20%',
      },
      content: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Align icon and text within the button
        height:48
        
      },
      icon: {
        fontSize: 18, // Adjust as per icon size
        color: '#FFFFFF',
        marginRight: 8, // Space between icon and text
      },
      btntxt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
      },
      txt: {
        color: '#166534',
        fontWeight: 'bold',
        lineHeight:28,
        fontSize:18,
        marginTop:8,
        marginBottom: 8
      },
      placelist: {
        marginBottom: 500
      },
      selector: {
        backgroundColor: '#fff',
        height:56,
        borderRadius:12,
        paddingLeft:8,
        paddingRight:8,
        gap:8,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
      } ,
      selectorLeft:{
        flex:1,
      },
      selectorRight:{
        flex:9,
      },
      
      location:{
        backgroundColor: '#DCFCE7',
        padding:16,
      },
      nearbytxt:{
        color: '#166534',
        fontWeight: 'bold',
        lineHeight:32,
        fontSize:24,
      },
      top:{
        height:50,
        backgroundColor:'#22C55E',
        paddingLeft:16,
        paddingRight:16,
        fontSize:24,
        flexDirection:'row',
      },
      topleft:{
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
      },
      topmid:{

      },
      topright:{

      },
      toptxt:{
        fontSize:24,
        lineHeight:50,
        fontWeight:'bold',
        color:'#fff'
      }
});
