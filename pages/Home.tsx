import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './components/Welcome';
import LayoutUsuarios from './components/Usuarios/_Layout';
import Conta from './components/Conta';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Conta') {
            iconName = 'user-circle';
          } else {
            iconName = 'users';
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Usuarios"
        component={LayoutUsuarios}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Conta"
        component={Conta}
      />
    </Tab.Navigator>
  );
}


