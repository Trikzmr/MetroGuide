import { Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Import the useRouter hook
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();  // Get the router instance

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/Home');  // Navigate to the Home screen after 2 seconds
    }, 2000);  // Delay of 2 seconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <MaterialIcons name="train" size={120} color="#22C55E" />
      <Text style={styles.text}>MetroGuide</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCFCE7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#22C55E',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
