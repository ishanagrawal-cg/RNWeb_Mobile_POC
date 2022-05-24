import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParamList} from '../screens/rootStackParams';
import {useNavigation} from '@react-navigation/native';

type homeScreenProp = NativeStackNavigationProp<rootStackParamList>;
function Form() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        placeholderTextColor={'#fff'}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
    height: Platform.OS === 'web' ? 50 : 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
});
