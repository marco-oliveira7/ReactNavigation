import { Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { UsuariosContext } from "../../ContextAPI/UsuariosContext";
import { Modal } from "react-native-paper";
import { styles } from "../../assets/css/styleuser";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Cadastrar from "./Cadastrar";
import Lista from "./Lista";

const Tab = createMaterialTopTabNavigator();

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

  return (
    <SafeAreaView style={styles.containerHomeUsuarios}>
      <Tab.Navigator>
        <Tab.Screen name="Cadastrar" component={Cadastrar} />
        <Tab.Screen name="Lista" component={Lista} />
      </Tab.Navigator>

      {visibleModalSaved && (
        <Modal
          visible={visibleModalSaved}
          onDismiss={onDismissSaved}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.modalText}>O Usuário foi salvo.</Text>
        </Modal>
      )}

      {visibleModalPermission && (
        <Modal
          visible={visibleModalPermission}
          onDismiss={onDismissPermission}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.modalText}>
            Você não tem permissão para acessar esta página.
          </Text>
        </Modal>
      )}
    </SafeAreaView>
  );
}
