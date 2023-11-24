import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthService from "../Services/Auth";

export default function StyledButton(props) {
    console.log(props.type)
    const navigate = useNavigation();

    function validateData() {
        if (props.password === props.confirmPassword)
            return true
    }

    async function Register() {
        if (!validateData())
            return;

        const username = props.username
        const email = props.email
        const password = props.password

        const body = {
            username,
            email,
            password
        }

        const res = await AuthService.register(body);
        console.log(res);

        if (res.status === 200) {
            navigate.navigate("login");
        }
    }

    async function Login() {
        const email = props.email
        const password = props.password

        const body = {
            email,
            password
        }

        const res = await AuthService.login(body);

        console.log(res);

        if (res.data == "Usuário não encontrado")
            return;

        if (res.data == "Senha incorreta")
            return;

        if (res.data) {
            // if(res.data.valid){
            sessionStorage.setItem('token', res.data.token)
            navigate.navigate("home");
            //     return;
            // }

            // if(!res.data.valid){
            //     const tokenBody= {
            //         jwtUser: res.data.token
            //     }
            //     await AuthService.sendToken(tokenBody);
            //     navigate.navigate("confirm", { jwt: res.data.token });
            // }
        }
    }

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
                <Pressable style={styles.button} onPress={() => Register()}>
                    <Text style={styles.buttonText}>
                        Create
                    </Text>
                </Pressable>
            )
        case "login":
            return (
                <Pressable style={styles.button} onPress={() => Login()}>
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
            return (
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