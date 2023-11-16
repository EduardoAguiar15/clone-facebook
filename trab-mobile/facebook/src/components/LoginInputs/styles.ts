import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        gap: 15,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    inputs:{
        width: "92%",
        height: 'auto',
        gap: 15,
    },
    button: {
        justifyContent: "center",
        backgroundColor: '#1976F2',
        width: "92%",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText: {
        color: "#E8F0FE",
        fontSize: 17,
    },
    user:{      
        fontSize: 17,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 10,
        padding: 13,
        backgroundColor: "#FFFFFF",
    },
     text:{
        color: "#FFFFFF",
    }
});
