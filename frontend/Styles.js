import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    center: {
        alignItems: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    centralize: {
        alignItems: 'center',
    },
    container: {
        backgroundColor: "#763FEA",
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    h1: {
        fontSize: 27,
        color: "#fcfcfc",
        fontWeight: '700',
    },
});

export { GlobalStyles };