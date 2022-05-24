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

function Category() {
  return (
    <View
      style={{
        height: 130,
        width: 150,
        //height: Platform.OS === 'android' ? 150 : 300,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#ddd',
      }}>
      <View style={{flex: 2}}>
        <Image
          source={{
            uri: 'https://static.toiimg.com/photo/83007695.cms',
          }}
          style={{flex: 1, resizeMode: 'cover'}}
        />
      </View>
      <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
        <Text>Burger</Text>
      </View>
    </View>
  );
}

export default Category;
