import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    center: {
        alignItems: 'center',        
    },
    container: {
        backgroundColor: "#fcfcfc",
        height: 500,
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignContent: 'center',
    },
    h1: {
        fontSize: 27,
        color: "#C395A6",
        fontWeight: '700',
    }
});

export { GlobalStyles };