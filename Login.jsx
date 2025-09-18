import React, { useEffect, useContext, useState } from 'react';
import {
  Pressable,
  TextInput,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { UsuariosContext } from './ContextAPI/UsuariosContext';
import { Modal, Portal, Provider } from 'react-native-paper';
import { styles } from './assets/css/style';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Checkbox from 'expo-checkbox';

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
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Login Page</Text>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            onChangeText={(text) => setValue('name', text)}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setValue('email', text)}
          />

          <Text style={styles.label}>Password</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#888"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setValue('password', text)}
            />
            <FontAwesome5
              name={showPassword ? 'eye-slash' : 'eye'}
              size={24}
              color="#aaa"
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelected}
              onValueChange={setIsSelected}
              tintColors={{ true: '#4dabf7', false: '#888' }}
            />
            <Text style={styles.checkboxLabel}>Check if you are an admin</Text>
          </View>

          <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>

        <Portal>
          <Modal
            visible={visibleModal}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}>
            <Text style={styles.modalText}>{textModal}</Text>
            <Pressable style={styles.modalButton} onPress={hideModal}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </Modal>
        </Portal>
      </SafeAreaView>
    </Provider>
  );
}
