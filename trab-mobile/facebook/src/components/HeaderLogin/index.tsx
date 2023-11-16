import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from './styles';

export default function Header() {
  return (
    <View>
        <Text style={styles.idioma}>Português (Brasil)</Text>
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('../../assets/facebook.png')} />
    </View>
    </View>
  );
}