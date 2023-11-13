import { View, Image, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { usersContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native";
import StyledInput from "../components/StyledInput";
import { GlobalStyles } from "../../Styles";
import StyledButton from "../components/StyledButton";

export default function Cadastro(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function ToLogin() {
        const navigator = useNavigation();
        navigator.navigate('login');
    }

    // useEffect(() => {
    //     const jwt = sessionStorage.getItem("token") ?? "";
    //     if(jwt != "")
    //         navigator.navigate("home");
    // })

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
            <View style={GlobalStyles.center}>
                <Image source={require('../../assets/Talescape Logo.png')} style={styles.image} />
                <View style={GlobalStyles.container}>
                    <Text style={[GlobalStyles.h1, styles.centralizeText]}>Create Account</Text>
                    <View style={styles.buttonsContainer}>
                        <StyledInput value={username} set={setUsername} name={"Username"} icon={"user"}></StyledInput>
                        <StyledInput value={email} set={setEmail} name={"Email"} icon={"email"}></StyledInput>
                        <StyledInput value={password} set={setPassword} name={"Password"} icon={"key"} isSecure={true}></StyledInput>
                        <StyledInput value={confirmPassword} set={setConfirmPassword} name={"Confirm Password"} icon={"lockpad"} isSecure={true}></StyledInput>
                    </View>
                    <StyledButton type={"create"} />
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
        marginTop: 20,
        width: 220,
        height: 180,
    },
    centralizeText: {
        textAlign: 'center',
        marginTop: 20,
    },
    buttonsContainer: {
        gap: 10,
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