import { View, TextInput } from 'react-native';
import { styles } from './styles';
import Avatar from '../Avatar';
import { Divisor } from '../Divisor';

export default function AppText() {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Avatar source={require('../../assets/foto-perfil.jpg')} />
                <TextInput style={styles.input}
                placeholderTextColor='black'
				placeholder="No que você está pensando?"/>
            </View>
                <Divisor/>
        </View>
    );
}
