import React from 'react'
import { place, placeid } from '../Functions/PlacesList';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';


const PlaceCard = (props) => {
    id = props.id;
  return (
    <View style={styles.card}>
    <Image
        source={{ uri: place[id].imageurl }}
        style={styles.image}
      />
        <Text style={styles.headText}>{place[id].name}</Text>
        <Text style={styles.subText}>{place[id].tags}</Text>
        
    </View>
    
  )
}

const styles = StyleSheet.create({
    image: {
      width: '90%',
      height: 190,
      borderRadius: 20,
    },
    card:
     {
        width:'90%',
        marginLeft: '5%',
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'3%',
        paddingBottom: '3%',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        shadowColor: '#222',  // Color of the shadow
        shadowOffset: { width: 0, height: 5},  // Offset of the shadow
        shadowOpacity: 1,  // Opacity of the shadow
        shadowRadius: 0,  // Blur radius of the shadow
        elevation: 5, 
    },
    headText: {
        fontSize: 20,
        textAlign: 'left',
        width: '80%',
        letterSpacing: 2,
        fontWeight: 'bold',
        color: '#444',
        marginTop: 4,
        marginBottom: 2,
    }, 
    subText: {
        fontSize: 10,
        textAlign: 'left',
        width: '80%',
        letterSpacing: .6,
        color: '#999',
        marginTop: 2,
        marginBottom: 4,
    }
  });

export default PlaceCard