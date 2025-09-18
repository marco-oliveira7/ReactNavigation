import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LayoutUsuarios from "./components/Usuarios/_Layout";
import { DrawerComponent } from "./components/Conta";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Tela Welcome estilizada
function Welcome() {
  return (
    <LinearGradient colors={["#000000", "#0d1521", "#0c1522ff"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>👋 Welcome to the Users Management</Text>
        <Text style={styles.subtitle}>
          Gerencie usuários, permissões e equipes de forma rápida e segura.
        </Text>
        <Text style={styles.counter}>
          Usuários no sistema: <Text style={styles.highlight}>5</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Welcome") {
            iconName = "home";
          } else if (route.name === "Conta") {
            iconName = "user-circle";
          } else {
            iconName = "users";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        // Cores dos ícones
        tabBarActiveTintColor: "#007AFF", // Azul iOS
        tabBarInactiveTintColor: "#8e8e93", // Cinza suave
        // Estilo da barra inferior
        tabBarStyle: {
          backgroundColor: "#ffffffff",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          height: 70,
          paddingBottom: 8,
          paddingTop: 5,
          borderTopWidth: 0,
          elevation: 10, // sombra Android
          shadowColor: "#000", // sombra iOS
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        // Estilo do label
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginBottom: 5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Usuarios" component={LayoutUsuarios} />
      <Tab.Screen name="Conta" component={DrawerComponent} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e3c72",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  counter: {
    fontSize: 16,
    color: "#333",
  },
  highlight: {
    fontWeight: "bold",
    color: "#007AFF",
  },
});
