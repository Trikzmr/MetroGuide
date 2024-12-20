import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stations = (props) => {
  return (
    <>
        <View style={styles.container}>
          <View style={styles.cont}>
            <Text style={styles.txt}>{props.stations}</Text>
          </View>
            
            
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent: 'start',
    alignItems: 'center',
    width:250,
    padding:5,
  },
  cont:{
    flexDirection:'row',
    backgroundColor: '#fff',
    justifyContent: 'start',
    alignItems: 'center',
    width:'100%',
    height: '100%',
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    shadowColor: '#000000',  // Color of the shadow
    shadowOffset: { width: 0, height: 5},  // Offset of the shadow
    shadowOpacity: 1,  // Opacity of the shadow
    shadowRadius: 0.7,  // Blur radius of the shadow
    elevation: 5,
  },
  txt:{
    marginLeft:20,
    letterSpacing:2,
    fontWeight:'bold'
  }
});

export default Stations
