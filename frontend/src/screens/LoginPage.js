import { View, Image, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../Styles";
import StyledButton from "../components/StyledButton";
import StyledInput from "../components/StyledInput";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigation();

    useEffect(() => {
        const jwt = sessionStorage.getItem("token") ?? "";
        if (jwt != "")
            navigator.navigate("home");
    })

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
            <View style={GlobalStyles.center}>
                <Image source={require('../../assets/Talescape Logo.png')} style={styles.image} />
                <View style={GlobalStyles.container}>
                    <Text style={[GlobalStyles.h1, styles.centralizeText]}>Sign Up</Text>
                    <View style={styles.buttonsContainer}>
                        <StyledInput value={email} set={setEmail} name={"Email"} icon={"email"}></StyledInput>
                        <StyledInput value={password} set={setPassword} name={"Password"} icon={"key"} isSecure={true}></StyledInput>
                    </View>
                    <StyledButton type={"login"} email={email} password={password}/>
                    <View style={styles.copyrightContainer}>
                        <Image style={styles.copyright} source={require('../../assets/copyright.png')} alt={'Copyright icon'} />
                        <Text style={styles.copyrightText}>All Rights Reserved</Text>
                    </View>
                </View>
            </View >
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 50,
        width: 220,
        height: 180,
    },
    centralizeText: {
        textAlign: 'center',
        marginTop: 40,
    },
    buttonsContainer: {
        gap: 20,
        marginTop: 40,
        marginBottom: 30,
    },
    copyright: {
        width: 13,
        height: 13
    },
    copyrightContainer: {
        flexDirection: 'row',
        gap: 5,
        width: '100vw',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 30,
        marginBottom: 20,
    },
    copyrightText: {
        color: '#fcfcfc',
        fontSize: 10,
    }
})