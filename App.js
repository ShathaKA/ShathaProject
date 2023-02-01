
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Insert from './src/screens/Insert';



const Stack = createNativeStackNavigator();


export default function App() {
  
return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      options={{
        title: 'Home',
      }}
       name="home" component={Home} />
      <Stack.Screen 
      options={{
        title: 'Insert Question',
      }}
      name="insert" component={Insert} />

    </Stack.Navigator>
   </NavigationContainer>
  );
}

