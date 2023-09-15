import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';

import { BlogProvider } from './src/context/BlogContext';

export default function App() {
  const Stack = createNativeStackNavigator() //การเรียกใช้หน้าถัดไป
  return (
    <BlogProvider>
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name = "Index" component={IndexScreen} options={{ 
          title: 'Memo 🗒️' ,
          headerStyle:{backgroundColor:"#E25E3E"},
          headerTintColor:"#fff",
          }} />
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});