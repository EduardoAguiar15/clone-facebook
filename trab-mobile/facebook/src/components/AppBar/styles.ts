import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        borderColor: "black",
    },
    text: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        width: "100%",
        paddingTop: 5,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 15,
        alignItems: "center",
        marginBottom: 13,
    },
    input: {
        height: 37,
        width: "70%",
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 15,
        fontSize: 14,
        color: "black",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 50,
        marginLeft: 10,
    }
});