/*import React from 'react';
import { place} from './Functions/PlacesList';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import PlaceCard from './PlaceCard';

const PlaceList = (props) => {
  const arr =props.list;

  return (
    <ScrollView style={styles.scroll}>
      {arr.map((id) => (
        <PlaceCard key={id} id={id}></PlaceCard>
      ))}
      
    </ScrollView>
  );
}


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
      backgroundColor:'red',
      
    }
  });


export default PlaceList;
*/


import React from 'react';
import { place} from './Functions/PlacesList';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import PlaceCard from './PlaceCard';

const PlaceList = (props) => {
  const arr =props.list;

  return (
    <ScrollView style={styles.scroll}>
      {arr.map((id) => (
        <PlaceCard key={id} id={id}></PlaceCard>
      ))}
      
    </ScrollView>
  );
}


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
      backgroundColor: '#fff',
      borderRadius:20,
    },
    track: {
      width:15,
      height:'100%',
      backgroundColor:'red',
      
    }
  });

  

export default PlaceList;

