import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#2c2c2c',
    color: '#eee',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxLabel: {
    color: '#bbb',
    marginLeft: 8,
    fontSize: 15,
  },
  button: {
    marginTop: 28,
    backgroundColor: '#4dabf7',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#4dabf7',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: '700',
  },
  modalContainer: {
    backgroundColor: '#2c2c2c',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  modalText: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#4dabf7',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 5,
    top: 9,
  }
});
