import { Pressable, Text, SafeAreaView, View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useEffect, useContext, useState } from 'react';
import { UsuariosContext } from '../../ContextAPI/UsuariosContext';
import { Modal } from 'react-native-paper';
import { styles } from '../../assets/css/styleuser';

export default function Cadastrar() {
  const navigation = useNavigation();
  const { register, setValue, handleSubmit } = useForm();
  const { users, setUsers, setVisibleModalSaved, userName, setRecentActions } = useContext(UsuariosContext);
  const [visibleModal, setVisibleModal] = useState(false);

  useEffect(() => {
    register('name');
    register('email');
    register('password');
  }, [register]);

  function onSubmit(data) {
    const existentUser = users.find((u) => u.email === data.email);
    if (
      existentUser ||
      data.name === undefined ||
      data.email === undefined ||
      data.password === undefined
    ) {
      setVisibleModal(true);
    } else {
      setVisibleModal(false);
      const newUser = {
        name: data.name,
        email: data.email,
        password: data.password,
        id: users.length + 1,
      };
      setUsers((u) => [...u, newUser]);
      navigation.navigate('HomeUsuarios');
      setVisibleModalSaved(true);
      setRecentActions((r) => [`${userName} criou um novo usuario `, ...r]);
    }
  }

  const hideModal = () => setVisibleModal(false);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('HomeUsuarios')}>
        <AntDesign name="back" size={24} color="#fff" />
      </Pressable>
      <View style={styles.card}>
        <Text style={styles.title}>Preencha os campos abaixo</Text>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('name', text)}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('email', text)}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setValue('password', text)}
        />
        <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.buttonText}>Salvar Dados</Text>
        </Pressable>
      </View>
      {visibleModal && (
        <Modal
          visible={visibleModal}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}>
          <Text style={styles.modalText}>
            Não foi possível salvar o usuário.
          </Text>
        </Modal>
      )}
    </SafeAreaView>
  );
}
