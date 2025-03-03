import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
const Dev = () => {
  return (
    <>
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>MetroGuide</Text>
                <Text style={styles.sub}>MetroGuide is your ultimate travel companion in Kolkata, designed to help you find the most optimal route between metro stations with ease. Simply select your source and destination, and let the app work its magic, providing you with the quickest and most convenient path to your destination. Enjoy stress-free metro travel with MetroGuide!</Text>
                <Text style={styles.copy}>© 2025 MetroGuide. All rights reserved</Text>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex:1,
        backgroundColor: '#DCFCE7',
        // borderRadius:16,
        // borderWidth: 1,        // Width of the border
        // borderColor: 'red',    // Color of the border
        // borderStyle: 'solid',  // Optional: 'solid', 'dashed', or 'dotted'
        // padding: 16,           // Content padding inside the border
        // margin: 16,            // Spacing outside the box
      },
      box:{
        flex:1,
        borderRadius:16,
        borderWidth: 2,        // Width of the border
        borderColor: '#2db05b',    // Color of the border
        borderStyle: 'solid',  // Optional: 'solid', 'dashed', or 'dotted'
        padding: 16,           // Content padding inside the border
        margin: 16,            // Spacing outside the box
        justifyContent:'center',
        alignItems:'center',
        gap:20,
      },
      title:{
        fontSize:24,
        fontWeight:'bold',
        letterSpacing:3,
        color: '#166534',
      },
      sub:{
        textAlign:'center',
        color: '#16A34A',
      },
      copy:{
        color: '#166534',
      }
});
export default Dev
