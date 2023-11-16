import React from "react";
import { styles } from './styles';
import { View, TouchableOpacity,Text,Image } from "react-native";

export default function Footer() {  
return(
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Criar nova conta</Text>
</TouchableOpacity>
<View style={styles.meta}>
    <Image style={styles.imagem} source={require('../../assets/meta.png')}></Image>
    <Text style={styles.text}>Meta</Text>
    </View>
</View>
)
};