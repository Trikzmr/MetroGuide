import React from 'react'
import { View, StyleSheet, Text} from 'react-native'


const RouteHeader = (props) => {
  return (
    <>
        <View style = {styles.view}>
            <View style = {styles.box}>
                <Text style={styles.head}>{props.src}</Text>
                <Text style={styles.sub}>Source Station</Text>
            </View>
            <View style = {styles.box}>
                <Text style={styles.head}>{props.dest}</Text>
                <Text style={styles.sub}>Destination Station</Text>
            </View>
            
            
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    view: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f0eb',
      width: '100%',
      padding:'4%',
      paddingTop:'4%',
      paddingBottom:'4%',       
      marginBottom: 15,
      borderRadius: 20,
      shadowColor: '#000000',  // Color of the shadow
      shadowOffset: { width: 0, height: 5},  // Offset of the shadow
      shadowOpacity: 1,  // Opacity of the shadow
    shadowRadius: 0,  // Blur radius of the shadow
    elevation: 5, 
    },
    box: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: '5%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#fff',
        marginBottom: '3%',
        marginTop: '3%',
        shadowColor: '#000000',  // Color of the shadow
        shadowOffset: { width: 0, height: 5},  // Offset of the shadow
        shadowOpacity: 1,  // Opacity of the shadow
        shadowRadius: 100,  // Blur radius of the shadow
        elevation: 5,
        borderRadius:15
    },
    head:{
        fontWeight: 'bold',
        fontSize: 18,
        color:'#333',
        letterSpacing: 2.5
    },
    sub:
    {
        fontSize: 9,
        color:'#999',
        letterSpacing: 1.5
    }
    
});

export default RouteHeader
