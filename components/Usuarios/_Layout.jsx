import { createStackNavigator } from '@react-navigation/stack';
import Lista from "./Lista.jsx"
import HomeUsuarios from "./HomeUsuarios"
import Cadastrar from "./Cadastrar"


export default function UsuariosStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeUsuarios" component={HomeUsuarios} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="Lista" component={Lista} />
    </Stack.Navigator>
  );
}
