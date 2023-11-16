import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"
import AppText from '../../components/AppBar/index';
import Icons from '../../components/Icones';
import Story from '../../components/Story/index'
import Publicacao from '../../components/Publicacoes';

export default function Feed() {
  return (
    <>
  <View style={styles.container}>
    <Text style={styles.text}>facebook</Text>
    <View style={styles.icons}>
      <TouchableOpacity style={styles.button}>
        <Ionicons
          name='ios-add'
          size={29}
          color='black'>
        </Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Feather
          name='search'
          size={29}
          color='black'>
        </Feather>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name='facebook-messenger'
          size={29}>
        </MaterialCommunityIcons>
      </TouchableOpacity>
    </View>
  </View>
    <Icons/>
    <ScrollView style={{ flex: 1 }}>
    <AppText/>
    <Story/>
    <Publicacao/>
    </ScrollView>
    </>
  )
}