import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing';
import Route from './Route';
import StnList from './StnList';

const Stack = createStackNavigator();


const Navigitor = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="METROGUIDE">
        <Stack.Screen name="METROGUIDE" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="PATH" component={Route} options={{ headerShown: false }}/>
        <Stack.Screen name = "Stations" component={StnList} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigitor
