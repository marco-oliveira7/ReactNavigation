import { createStackNavigator } from '@react-navigation/stack';
import Lista from "./Lista.jsx";
import HomeUsuarios from "./HomeUsuarios";
import Cadastrar from "./Cadastrar";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function UsuariosStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ route, options, navigation, back }) => {
          // Captura o título da tela
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : route.name;

          return (
            <LinearGradient
              colors={["#000000", "#0d1521", "#070e18"]}
              style={{
                paddingTop: 40,
                paddingBottom: 15,
                alignItems: "center",
                justifyContent: "center",
                elevation: 4,
                shadowColor: "#000",
                shadowOpacity: 0.2,
                shadowRadius: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {title}
              </Text>
            </LinearGradient>
          );
        },
      }}
    >
      <Stack.Screen
        name="HomeUsuarios"
        component={HomeUsuarios}
        options={{ title: "Usuários", }}
      />
      <Stack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ title: "Cadastrar Usuário" }}
      />
      <Stack.Screen
        name="Lista"
        component={Lista}
        options={{ title: "Lista de Usuários" }}
      />
    </Stack.Navigator>
  );
}
