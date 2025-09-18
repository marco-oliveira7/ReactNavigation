import { NavigationContainer } from '@react-navigation/native';
import UsuariosContextProvider from './ContextAPI/UsuariosContext';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login'
import Home from './pages/Home'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <UsuariosContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen  options={{ headerShown: false }} name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsuariosContextProvider>
  );
}
