// Publicacao.tsx
import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles';
import Avatar from '../Avatar/index';
import { Entypo, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Publicacao() {
  return (
      <View style={styles.container}>
          <View style={styles.row}>
            <Avatar source={require('../../assets/user5.jpg')} />
            <View style={styles.userContainer}>
            <Entypo name="dots-three-horizontal" size={22} color={'#222121'} style={styles.dotsIcon} />
            <Ionicons name="close" size={28}  color={'#222121'}  style={styles.exitIcon}/>
              <Text style={styles.userText}>João Rocha</Text>
              <View style={styles.horaContainer}>
                <Text style={styles.hora}>11 h</Text>
                <Entypo name="dot-single" size={12} color={'#222121'} />
                <Entypo name="globe" size={12} color={'#747476'} />
              </View>
            </View>
          </View>
          <Text style={styles.post}>VASCO DA GAMA! 💢🏎️ Max Verstappen, tricampeão da Formula 1, contou que acha o Brasileirão muito disputado e acompanha o campeonato. O piloto ainda revelou gostar muito do Vascão. Créditos: scuderiafemboy/twitter</Text>
          <Image  source={require('../../assets/feed1.jpeg')} style={styles.foto} />
            <View style={styles.footer}>
                <View style={styles.footer2}>
                    <View style={styles.row}>
                       <View style={styles.like}>
                        <AntDesign
                        name='like1'
                        size={12}
                        color={"#FFFFFF"}
                        />
                       </View> 
                     <Text style={styles.textFooter}>35</Text>
                    </View>                    
                    <Text style={styles.textFooter}>20 comentários</Text>
                </View>
                <View style={styles.options}/>
                <View style={styles.menuFooter}>
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <AntDesign 
                      name="like2"
                      size={20}
                      color={'#424040'}
                      >
                      </AntDesign>
                    </View>
                    <Text style={styles.text}>Curtir</Text>
                  </View>
                </View>
            </View>
      </View>
  );
}
