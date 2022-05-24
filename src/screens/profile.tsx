import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootDrawerParamList} from '../screens/rootDrawerParams';
import {useNavigation} from '@react-navigation/native';

type homeScreenProp = NativeStackNavigationProp<rootDrawerParamList>;

function ProfileScreen() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Profile Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ProfileScreen;
