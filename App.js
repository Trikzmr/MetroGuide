import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Components/Landing';
import Route from './Components/Route';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigitor from './Components/Navigitor';
import { ScrollView } from 'react-native-web';

const Stack = createStackNavigator();

export default function App() {
  return (
      
      <Navigitor/>
    
     

   
    
  );
}