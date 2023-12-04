import { View, StyleSheet, Pressable, Image, Text, ScrollView, TextInput } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Footer from "../components/Footer";

export default function EditProfilePage(props) {

    const navigator = useNavigation();
    const [bio, setBio] = useState("");

    return (
        <View style={GlobalStyles.centralize}>
            <View style={styles.content}>
                <Text style={styles.label}>Biografia</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={4}
                    placeholder="Digite sua biografia aqui..."
                    value={bio}
                    onChangeText={setBio}
                />
                <Text style={styles.label}>Data de Nascimento</Text>
            </View>
            <Footer page="user"></Footer>
        </View>
    )
}

const styles = StyleSheet.create({
    imageHeader: {
        width: 175,
        height: 48,
        marginTop: 15,
    },
    menuHeader: {
        width: 33,
        height: 18,
        position: 'absolute',
        right: 11,
        top: 16
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
    textArea: {
        padding: 10,
        color: "#2A0C5F",
        borderColor: "#2A0C5F",
        borderRadius: 15,
        borderWidth: 2,
        width: "80%",
        alignSelf: 'center',
        marginBottom: 13
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