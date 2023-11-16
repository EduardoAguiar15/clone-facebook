import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:0,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 350,
    },
    button: {
        backgroundColor: '#E8F0FE',
        width: "92%", // Altere '5%' para '80%'
        padding: 10,
        borderRadius: 25,
        borderColor: '#1976F2',
        borderWidth: 1,
        alignItems: "center",
    },
    buttonText: {
        color: "#1976F2",
        fontSize: 20,
    },
    text:{
        fontSize: 16,
        color: "#4B4B4B"
    },
    meta:{
        flexDirection:'row',
        gap: 5,
        marginTop: 5,
    },
    imagem:{
        width: 20,
        height: 20,
    }
});
