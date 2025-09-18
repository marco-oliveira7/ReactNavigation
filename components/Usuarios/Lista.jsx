import { UsuariosContext } from '../../ContextAPI/UsuariosContext';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Modal } from 'react-native-paper';
import { styles } from '../../assets/css/styleuser';

export default function Lista() {
  const {
    setVisibleModalPermission,
    visibleModalPermission,
    isAdmin,
    users,
    setUsers,
    setRecentActions,
    userName,
  } = useContext(UsuariosContext);
  const [editingUser, setEditingUser] = useState(false);
  const navigation = useNavigation();
  const [id, setId] = useState(0);

  const { register, setValue, handleSubmit, getValues } = useForm();

  useEffect(() => {
    register('name');
    register('email');
    register('password');
  }, [register]);

  const onDismissPermission = () => setVisibleModalPermission(false);

  const deleteUser = (id, name) => {
    if (isAdmin) {
      const newUsers = users.filter((u) => u.id !== id);
      setUsers(newUsers);
      setRecentActions((r) => [`${userName} deletou o usuario ${name}`, ...r]);
    } else {
      setVisibleModalPermission(true);
    }
  };

  const editUser = (name, email, password, id) => {
    if (isAdmin) {
      setEditingUser(true);
      setId(id);
      setValue('name', name);
      setValue('email', email);
      setValue('password', password);
    } else {
      setVisibleModalPermission(true);
    }
  };

  const onSubmit = () => {
    setEditingUser(false);
    const user = users.find((u) => u.id === id);
    user.name = getValues('name');
    user.email = getValues('email');
    user.password = getValues('password');
    setRecentActions((r) => [`${userName} editou o usuario ${user.name}`, ...r]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Pressable onPress={() => navigation.navigate('HomeUsuarios')}>
          <AntDesign name="back" size={24} color="#fff" />
        </Pressable>
        <ScrollView>
          {editingUser ? (
            <View style={styles.card}>
              <TextInput
                style={styles.input}
                {...register('name')}
                onChangeText={(text) => setValue('name', text)}
              />
              <TextInput
                style={styles.input}
                {...register('email')}
                onChangeText={(text) => setValue('email', text)}
              />
              <TextInput
                style={styles.input}
                {...register('password')}
                onChangeText={(text) => setValue('password', text)}
              />
              <Pressable onPress={handleSubmit(onSubmit)} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
              </Pressable>
            </View>
          ) : users.length !== 0 ? (
            <FlatList
              data={users}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.text}>{item.email}</Text>
                  <View style={styles.iconRow}>
                    <FontAwesome5
                      name="trash"
                      onPress={() => deleteUser(item.id, item.name)}
                      size={20}
                      color="#fff"
                    />
                    <FontAwesome5
                      name="edit"
                      onPress={() =>
                        editUser(item.name, item.email, item.password, item.id)
                      }
                      size={20}
                      color="#fff"
                    />
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Não tem ninguém aqui</Text>
              <Image
                source={require('../../assets/img/image-removebg-preview.png')}
              />
            </View>
          )}
        </ScrollView>
        {visibleModalPermission && (
          <Modal
            visible={visibleModalPermission}
            onDismiss={onDismissPermission}
            contentContainerStyle={styles.modal}>
            <Text style={styles.modalText}>
              You dont have permission to access this page.
            </Text>
          </Modal>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
