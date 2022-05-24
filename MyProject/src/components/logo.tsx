import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Logo() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          //uri: 'https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg',
          //width: 100, height: 100
          uri: 'https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png',
        }}
      />
      <Text style={styles.logoText}>Welcome</Text>
    </View>
  );
}
export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  logoText: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
