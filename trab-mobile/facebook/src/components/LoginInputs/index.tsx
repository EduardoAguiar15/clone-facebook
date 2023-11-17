import { styles } from "./styles";
import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";


export default function Input() {
    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <TextInput style={styles.user} placeholder="Número do celular ou email" />
                <TextInput style={styles.user} placeholder="Senha" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={{ color: 'black' }}>Esqueceu a senha?</Text>
        </View>
    )
}