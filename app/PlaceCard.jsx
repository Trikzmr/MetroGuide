/*import React from 'react'
import { place, placeid } from './Functions/PlacesList';
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
      height: 170,
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
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5, 
    },
    headText: {
        fontSize: 20,
        textAlign: 'left',
        width: '80%',
        letterSpacing: 2,
        fontWeight: 'bold',
        color: '#166534',
        marginTop: 4,
        marginBottom: 2,
    }, 
    subText: {
        fontSize: 10,
        textAlign: 'left',
        width: '80%',
        letterSpacing: .6,
        color: '#16A34A',
        marginTop: 2,
        marginBottom: 4,
    }
  });

export default PlaceCard
*/


import React from 'react'
import { place, placeid } from './Functions/PlacesList';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Alert, Linking  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PlaceCard = (props) => {
    id = props.id;
    const url = place[id].locationurl;

    async function openlnk(){
      try {
        const supported = await Linking.canOpenURL(url);
        console.log('Supported:', supported);
        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert("Error", `The URL is not supported: ${url}`);
        }
      } catch (error) {
        console.error('Error opening link:', error);
        Alert.alert("Error", "Failed to open link. See console for details.");
      }
    }
  return (
    <View style={styles.card}>
      <View style={styles.cardleft}>
        <Image
            source={{ uri: place[id].imageurl }}
            style={styles.image}
        />
      </View>
      <View style={styles.cardright}>
        <Text style={styles.headText}>{place[id].name}</Text>
        <Text style={styles.subText}>{place[id].tags}</Text>
        <Text style={styles.btn} onPress={openlnk}>
          <MaterialIcons name="star" size={10} color="#fff" />
          {" "}Map
        </Text>
      </View>      
    </View>
    
  )
}

const styles = StyleSheet.create({
    image: {
      width: '90%',
      borderRadius: 5,
      height:90,
    },
    cardleft:{
      width: '35%',
    },
    cardright:{
      width: '65%',
    },
    card:
     {
        width:'90%',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'3%',
        paddingBottom: '3%',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        flexDirection:'row',
    },
    headText: {
        fontSize: 14,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#166534',
        marginBottom: 2,
    }, 
    subText: {
        fontSize: 10,
        textAlign: 'left',
        width: '80%',
        color: '#16A34A',
        marginTop: 2,
        marginBottom: 4,
    },
    btn:{
      backgroundColor:'#22C55E',
      width:65,
      textAlign: 'center',
      lineHeight: 32,
      fontWeight: 'bold',
      color: '#fff',
      borderRadius: 4
    }
  });

export default PlaceCard


