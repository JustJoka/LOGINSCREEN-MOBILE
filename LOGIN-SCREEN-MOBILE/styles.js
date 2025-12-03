import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  logo: {
    width: 100,
    height: 90,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#999',
    padding: 10,
    marginBottom: 5,
    width: '80%',
    backgroundColor: 'white',
    placeholderTextColor: 'gray'
  },
});