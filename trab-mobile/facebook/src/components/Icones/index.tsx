import { View, Image } from 'react-native';
import { styles } from "./styles"
import React from "react";

export default function Icons() {

    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../../assets/lar.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/video.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/comercial.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/mercado.png')}
            />
            <Image
                style={styles.icon}
                source={require('../../assets/sino-de-notificacao.png')}
            />
              <Image
                style={styles.icon}
                source={require('../../assets/foto-perfil.jpg')}
            />
        </View>

    )
}
