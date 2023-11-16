import { Image, View } from 'react-native';
import { styles } from './styles';

export default function Avatar({ source }) {
    return (
        <View style={styles.container}>
            <Image source={source} style={styles.user} />
        </View>
    );
}
