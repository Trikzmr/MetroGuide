import React from 'react'
import { View,StyleSheet, Text} from 'react-native'

const Box = (props) => {
  let redi = 0;
    if(props.flag ===1)
    {
      redi = 50;
    }
  return (
    <>
        <View style={[styles.track, { backgroundColor: props.color,  borderTopRightRadius: redi, borderTopLeftRadius: redi,}]}>
            <View style={styles.dot}></View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    
    track: {
      width:15,
      height:'100%',
      marginRight: '10%',
      marginLeft: '10%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dot:{
        width: 10,
        height: 10,
        backgroundColor: '#000',
        borderRadius: 50,

    }
  });

export default Box
