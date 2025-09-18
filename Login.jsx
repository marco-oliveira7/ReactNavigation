import React, { useEffect, useContext, useState } from 'react';
import {
  Pressable,
  TextInput,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { UsuariosContext } from './ContextAPI/UsuariosContext';
import { Modal, Portal, Provider } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const { register, setValue, handleSubmit } = useForm();
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState(false);
  const { setIsAdmin, setUserName, setUserEmail } = useContext(UsuariosContext);
  const [visibleModal, setVisibleModal] = useState(false);
  const [textModal, setTextModal] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    register('name');
    register('email');
    register('password');
  }, [register]);

  function onSubmit(data) {
    setUserName(data.name);
    setUserEmail(data.email);
    setIsAdmin(isSelected);
    navigation.navigate('Conta');
  }

  const hideModal = () => setVisibleModal(false);

  return (
    <Provider>
      <LinearGradient
        colors={['#000000ff', '#000000ff']}
        style={styles.container}
      >
        <SafeAreaView style={styles.innerContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>🔑 Login</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#aaa"
              onChangeText={(text) => setValue('name', text)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(text) => setValue('email', text)}
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Enter your password"
                placeholderTextColor="#aaa"
                secureTextEntry={!showPassword}
                onChangeText={(text) => setValue('password', text)}
              />
              <FontAwesome5
                name={showPassword ? 'eye-slash' : 'eye'}
                size={20}
                color="#555"
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              />
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isSelected}
                onValueChange={setIsSelected}
                color={isSelected ? '#007AFF' : undefined}
              />
              <Text style={styles.checkboxLabel}>
                Check if you are an admin
              </Text>
            </View>

            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </SafeAreaView>

        <Portal>
          <Modal
            visible={visibleModal}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
          >
            <Text style={styles.modalText}>{textModal}</Text>
            <Pressable style={styles.modalButton} onPress={hideModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </Modal>
        </Portal>
      </LinearGradient>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center',     // Centers vertically
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 40,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    width: '1000px',
       
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000ff',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPassword: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 14,
    backgroundColor: '#f9f9f9',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#333',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#000000ff',
    borderRadius: 10,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    margin: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#444444ff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
