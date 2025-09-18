import {
  Text,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';
import { styles } from '../assets/css/stylewelcome';
import { useContext } from 'react';
import { UsuariosContext } from '../ContextAPI/UsuariosContext';

export default function Welcome() {
  const { users, recentActions } = useContext(UsuariosContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.welcomeText}>Welcome to the Users Management</Text>

      <View style={styles.mainContainer}>
        <Text style={styles.introductionText}>
          Gerencie usuários, permissões e equipes de forma rápida e segura.
        </Text>

        <Text style={styles.qtdUsersText}>
          Usuários no sistema: {users.length}
        </Text>

        <FlatList
          data={recentActions}
          renderItem={({ item }) => (
            <Text style={styles.recentActionsItemText}>{item}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
