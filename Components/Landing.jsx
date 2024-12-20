import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { stations } from '../Functions/Lists';
import { Dropdown } from 'react-native-element-dropdown';
import { src, dest, setSrc, setDest, placemap } from '../Functions/Variables';
import PlaceList from './PlaceList';
import { useState } from 'react';

const Landing = ({ navigation }) => {

  const[near, setnear] = useState(placemap);


  const formattedStations = stations.map(station => ({
    label: station,
    value: station,
  }));

  const setsrcdst = () => {
    navigation.navigate('PATH');
  };

  const gostnlist = () => 
  {
    console.log("test");
    navigation.navigate('Stations');
  }

  
  //setnear("test");

  const handleSrcChange = (item) => {
    
    setSrc(item.value);
    setnear([...placemap]); 
    
  };

  const handleDestChange = (item) => {
    
    setDest(item.value);
    setnear([...placemap]); 
    
  };

  function funnt()
  {
    setnear([...placemap]); 
    console.log(placemap);
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txt}>Source</Text>
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
        <Text style={styles.txt}>Destination</Text>
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
        <TouchableOpacity onPress={setsrcdst} style={styles.btn}>
          <Text style={styles.btnText}>Find Path</Text>
        </TouchableOpacity>
      </View>
      <View >
        <Text onPress={funnt}>Get Nearby Location</Text>
        <PlaceList list = {near}></PlaceList>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius:16,
    marginTop:50
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
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  txt: {
    color: '#444',
    fontWeight: 'bold',
    letterSpacing: 2
  },
  placelist: {
    marginBottom: 500
  }

});

export default Landing;
