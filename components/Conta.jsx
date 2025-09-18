import { Pressable, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../assets/css/styleprofile';
import { UsuariosContext } from '../ContextAPI/UsuariosContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login'
import Home from './Home'

const Drawer = createDrawerNavigator();

export default function Conta() {
  const { userName, userEmail, isAdmin, setIsAdmin } =
    useContext(UsuariosContext);
  const navigation = useNavigation();

  function logout() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>

        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Login} />
        </Drawer.Navigator>

        <Text style={styles.userName}>{userName}</Text>
        <TouchableOpacity>
          <MaterialIcons
            name="logout"
            size={24}
            color="white"
            onPress={logout}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require('../assets/img/profile-icon-png-898.png')}
        />
      </View>

      <View>
        <Pressable
          style={styles.adminButton}
          onPress={() => (isAdmin ? setIsAdmin(false) : setIsAdmin(true))}>
          <Text style={styles.adminButtonText}>
            {isAdmin ? 'Sair do modo administrador' : 'Tornar administrador'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.detailsSection}>
        <Text style={styles.detailLabel}>Email:</Text>
        <Text style={styles.detailText}>{userEmail}</Text>
      </View>
    </View>
  );
}
