import { View, StyleSheet, Pressable, Image, TextInput } from "react-native"
import { GlobalStyles } from "../../Styles"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import StyledButton from "../components/StyledButton";

export default function CreatePoemPage(props) {

    const navigator = useNavigation();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    return (
        <View style={GlobalStyles.centralize}>
            <View style={styles.header}>
                <Pressable onPress={() => navigator.navigate('home')}>
                <Image source={require("../../assets/back button.png")} style={styles.back}></Image>
                </Pressable>
                <StyledButton type={"save"} title={title} text={text}></StyledButton>
            </View>
            <View style={styles.content}>
                <View style={styles.centralize}>
                <TextInput placeholder="Título" style={styles.titulo} value={title} onChangeText={setTitle}></TextInput>
                </View>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={20}
                    value={text}
                    onChangeText={setText}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    back: {
        width: 20,
        height: 30
    },
    content: {
        marginTop: 10,
        backgroundColor: "#EFEFEF",
        height: '89vh',
        width: "100%",
    },
    label: {
        color: "#2A0C5F",
        fontSize: 14,
        marginLeft: "10%",
        fontWeight: '600',
        marginBottom: 5,
    },
    centralize: {
        justifyContent: 'center',
        width: "100%",
        flexDirection: 'row'
    },
    titulo: {
        margin: 10,
        fontSize: 24,
        outlineStyle: 'none',
        textAlign: 'center'
    },
    textArea: {
        padding: 10,
        color: "#2A0C5F",
        borderColor: "#2A0C5F",
        borderRadius: 15,
        borderWidth: 2,
        width: "80%",
        alignSelf: 'center',
        marginBottom: 13,
        fontSize: 18
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    footer: {
        width: "100%",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 55,
    },
    footerIcon: {
        width: 30,
        height: 30,
    }
})