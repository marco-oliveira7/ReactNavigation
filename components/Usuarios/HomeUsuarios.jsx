import { Text, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UsuariosContext } from '../../ContextAPI/UsuariosContext';
import { Modal } from 'react-native-paper';
import { styles } from '../../assets/css/styleuser';

export default function Usuarios() {
  const navigation = useNavigation();
  const {
    isAdmin,
    setVisibleModalPermission,
    visibleModalPermission,
    setVisibleModalSaved,
    visibleModalSaved,
  } = useContext(UsuariosContext);

  const onDismissSaved = () => setVisibleModalSaved(false);
  const onDismissPermission = () => setVisibleModalPermission(false);

  const NavigateToCadastrar = () => {
    if (isAdmin) {
      navigation.navigate('Cadastrar');
    } else {
      setVisibleModalPermission(true);
    }
  };

  return (
    <SafeAreaView style={styles.containerHomeUsuarios}>
      <Pressable onPress={NavigateToCadastrar} style={styles.pressable}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Lista')} style={styles.pressable}>
        <Text style={styles.buttonText}>Lista</Text>
      </Pressable>

      {visibleModalSaved && (
        <Modal visible={visibleModalSaved} onDismiss={onDismissSaved} contentContainerStyle={styles.modal}>
          <Text style={styles.modalText}>O Usuário foi salvo.</Text>
        </Modal>
      )}

      {visibleModalPermission && (
        <Modal visible={visibleModalPermission} onDismiss={onDismissPermission} contentContainerStyle={styles.modal}>
          <Text style={styles.modalText}>Você não tem permissão para acessar esta página.</Text>
        </Modal>
      )}
    </SafeAreaView>
  );
}
