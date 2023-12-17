import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './src/Dashboard';
import NoteAdd from './src/NoteAdd';
import Header from './src/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  // const MyStack = () => {
  //   return(
  //     <Stack.Navigator>
  //       <Stack.Screen name="Home" component={Home}/>
  //       <Stack.Screen name="Add Notes" component={NoteAdd}/>
  //     </Stack.Navigator>
  //   )
  // }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={Dashboard} 
        options={{
          headerTitle: () => <Header name="Notes List" />,
          headerStyle:{
            backgroundColor: '#4c00b0',
            height: 120
          }
        }}/>
        <Stack.Screen name="Add Notes" component={NoteAdd}
         options={{
          headerTitle: () => <Header name="Add Notes" />,
          headerStyle:{
            backgroundColor: '#4c00b0',
            height: 120
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
