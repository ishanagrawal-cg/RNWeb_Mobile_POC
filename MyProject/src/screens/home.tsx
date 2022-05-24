import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParamList} from '../screens/rootStackParams';
import {useNavigation} from '@react-navigation/native';
import Category from '../components/category';

type homeScreenProp = NativeStackNavigationProp<rootStackParamList>;

function HomeScreen() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Home Screen</Text>
    //   <Button title="Login" onPress={() => navigation.goBack()} />
    // </View>\
    // <View>
    //   <Text
    //     style={{
    //       fontSize: 20,
    //       fontWeight: 'bold',
    //       textAlign: 'center',
    //       paddingBottom: 20,
    //     }}>
    //     Home screen
    //   </Text>
    //   <TouchableOpacity
    //     style={{
    //       borderRadius: 17,
    //       padding: 20,
    //       backgroundColor: '#6B86D4',
    //       borderColor: '#97ADB6',
    //       borderWidth: 1,
    //       paddingTop: 20,
    //     }}
    //     onPress={() => {
    //       navigation.goBack();
    //     }}>
    //     <Text
    //       style={{
    //         alignSelf: 'center',
    //         color: '#97ADB6',
    //         fontSize: 18,
    //         fontWeight: 'bold',
    //       }}>
    //       Goback to Login
    //     </Text>
    //   </TouchableOpacity>
    // </View>
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <View
        style={{
          backgroundColor: '#1c313a',
          height: '28%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View style={{width: '50%'}}>
            <Text style={{fontSize: 28, color: '#fff', fontWeight: 'bold'}}>
              Hi User
            </Text>
          </View>
        </View>
      </View>
      <View style={{width: '50%'}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, padding: 20}}>
          Recommended
        </Text>
      </View>
      <ScrollView scrollEventThrottle={16}>
        <View style={{height: 130, marginTop: 20}}>
          <ScrollView horizontal={true}>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </ScrollView>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: 300,
          backgroundColor: '#1c313a',
          borderRadius: 25,
          marginVertical: 10,
          paddingVertical: 13,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#fff',
            textAlign: 'center',
          }}>
          LogOut
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
