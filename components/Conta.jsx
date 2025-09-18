import { Pressable, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../assets/css/styleprofile";
import { UsuariosContext } from "../ContextAPI/UsuariosContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "../Login";

const Drawer = createDrawerNavigator();

export function DrawerComponent() {
  return (
    <Drawer.Navigator initialRouteName="Conta">
      <Drawer.Screen name="Conta" component={Conta} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

export default function Conta() {
  const { userEmail, userName } = useContext(UsuariosContext);

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/img/profile-icon-png-898.png")}
        />
      </View>

      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Email:</Text>
        <Text style={styles.detailText}>{userEmail}</Text>
      </View>
      <View style={styles.detailsSection}>
      <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailText}>{userName}</Text>
      </View>
    </View>
  );
}
