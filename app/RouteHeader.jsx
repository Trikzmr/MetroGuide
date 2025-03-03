import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function RouteHeader(props) {
  return (
        <View style = {styles.view}>
            <Text style={styles.sub}>Source Station</Text>
            <View style = {styles.box}>
                <View style={styles.selectorLeft}>
                    <MaterialIcons name="place" size={24} color="#22C55E" />
                </View>
                <Text style={styles.head}>{props.src}</Text>  
            </View>
            <Text style={styles.sub}>Destination Station</Text>
            <View style = {styles.box}>
                <View style={styles.selectorLeft}>
                    <MaterialIcons name="flag" size={24} color="#22C55E" />
                </View>
                <Text style={styles.head}>{props.dest}</Text>
            </View>
            
            
        </View>
  );
}

const styles = StyleSheet.create({
    view: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding:'4%',
      paddingTop:'4%',
      paddingBottom:'4%',       
      marginBottom: 15,
    },
    box: {
        backgroundColor: '#fff',
        height:46,
        borderRadius:8,
        paddingLeft:8,
        paddingRight:8,
        gap:8,
        flexDirection: 'row', 
        width:'100%'
    },
    head:{
        fontWeight: 'bold',
        lineHeight:46,
        letterSpacing: 2.5
    },
    sub:
    {
        width:'100%',
        color: '#166534',
        fontWeight: 'bold',
        lineHeight:28,
        fontSize:18,
        marginTop:8,
        marginBottom: 8
    },
    selectorLeft:{
        width:'10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});