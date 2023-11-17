import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: "100%",
        height: 80,
        paddingTop: 30,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: "#3a86e9",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: -0.3,
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: "#EEEEEE",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 16,
        size: 29,
        color: 'black'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
});
