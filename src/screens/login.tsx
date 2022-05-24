import * as React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParamList} from '../screens/rootStackParams';
import {useNavigation} from '@react-navigation/native';
import Logo from '../components/logo';
import Form from '../components/form';

type homeScreenProp = NativeStackNavigationProp<rootStackParamList>;

function LoginScreen() {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#1c313a'} barStyle="light-content" />
      <Logo />
      <Form />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
