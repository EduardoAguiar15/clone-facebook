
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
        container: {
                marginTop: 15,
                height: 'auto',
                width: '100%',
        },
        row: {
                alignItems: 'center',
                flexDirection: 'row',
                marginLeft: 15,
        },
        userContainer: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                marginLeft: 8,
        },
        userText: {
                fontSize: 17,
                fontWeight: 'bold',
                color: '#222121',
        },
        horaContainer: {
                flexDirection: 'row',
                alignItems: 'center',
        },
        hora: {
                fontSize: 13,
                color: '#747476',
        },
        dotsIcon: {
                position: "absolute",
                top: 5,
                left: 240,
        },
        exitIcon: {
                position: "absolute",
                left: 290,
        },
        post: {
                fontSize: 13,
                color: "#222121",
                lineHeight: 16,
                paddingTop: 10,
                paddingBottom: 0,
                paddingRight: 15,
                paddingLeft: 15,
                width: "100%"

        },
        foto: {
                marginTop: 9,
                width: "100%",
                height: 400,
        },
        footer: {
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 15
        },
        footer2: {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
        },
        like: {
                backgroundColor: "#1878f3",
                width: 20,
                height: 20,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 6
        },
        textFooter: {
                fontSize: 13,
                color: "#424040"
        },
        options: {
                width: 100,
                height: 1,
                backgroundColor: "#F9F9F9"
        },
        menuFooter: {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
                paddingBottom: 0,
                paddingRight: 15,
                paddingLeft: 15,
        },
        button: {
                flexDirection: "row",
        },
        icon: {
                marginRight: 6
        },
        text: {
                fontSize: 12,
                color: "#424040",
        }
});
