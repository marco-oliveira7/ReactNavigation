import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },

  topBar: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#2C2C2C',
  },

  adminButton: {
    backgroundColor: '#4dabf7',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  adminButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  detailsSection: {
    backgroundColor: '#2C2C2C',
    padding: 16,
    borderRadius: 8,
    marginTop: 8
  },

  detailLabel: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },

  detailText: {
    color: '#ffffff',
    fontSize: 16,
  },

  marginTop: {
    marginTop: 12,
  }
});

export default styles;
