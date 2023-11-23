import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StyledButton(props) {
    console.log(props.type)
    const navigate = useNavigation();

    switch (props.type) {
        case "sign in":
            return (
                <Pressable style={styles.button} onPress={() => navigate.navigate('login')}>
                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
            )
        case "create account":
            return (
                <Pressable style={styles.button} onPress={() => navigate.navigate('cadastro')}>
                    <Text style={styles.buttonText}>
                        Create Account
                    </Text>
                </Pressable>
            )
        case "create":
            return (
                <Pressable style={styles.button} onPress={() => navigate.navigate('menu')}>
                    <Text style={styles.buttonText}>
                        Create
                    </Text>
                </Pressable>
            )
        case "login":
            return (
                <Pressable style={styles.button} onPress={() => navigate.navigate('home')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </Pressable>
            )
        case "story":
            return (
                <Pressable style={styles.buttonPink} onPress={() => navigate.navigate('createPoem')}>
                    <Text style={styles.buttonPinkText}>
                        Create a Story
                    </Text>
                </Pressable>
            )
        case "save":
            return(  
                <Pressable style={styles.filledButton} onPress={() => navigate.navigate('home')}>
                    <Text style={styles.filledButtonText}>Salvar</Text>
                </Pressable>
            )
    }
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 3,
        borderColor: "#fcfcfc",
        borderRadius: 15,
        width: 300,
    },
    buttonPink: {
        borderWidth: 3,
        borderColor: "#CCA6B4",
        borderRadius: 15,
        width: 300,
        alignSelf: 'center',
        marginTop: "20vh",
    },
    buttonText: {
        color: "#fcfcfc",
        fontSize: 16,
        fontWeight: '700',
        padding: 12,
        textAlign: 'center'
    },
    buttonPinkText: {
        color: "#CCA6B4",
        fontSize: 16,
        fontWeight: '700',
        padding: 12,
        textAlign: 'center'
    },
    filledButton: {
        backgroundColor: "#7B5BBF",
        padding: 10,
        borderRadius: 15,
    },
    filledButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: "#fcfcfc",
    },
})