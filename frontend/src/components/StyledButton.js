import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StyledButton ( props ) {
    console.log(props.type)
    const navigate = useNavigation();
    
    switch(props.type){
        case "sign in":
            return (
                <Pressable style={styles.button} onPress={() => navigate.navigate('login')}>
                    <Text style={styles.buttonText}>
                        Sign In
                    </Text>
                </Pressable>
            )
        case "create":
            return (
                <Pressable style={styles.button} onPress={() => navigate.navigate('cadastro')}>
                    <Text style={styles.buttonText}>
                        Create Account
                    </Text>
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
    buttonText: {
        color: "#fcfcfc",
        fontSize: 16,
        fontWeight: '700',
        padding: 12,
        textAlign: 'center'
    }
})