import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import AuthService from "../Services/Auth";
import { useNavigation } from "@react-navigation/native";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigator = useNavigation();

    // async function ToLogin() {
    //     const body = {
    //         email,
    //         password
    //     }
    //     const res = await AuthService.login(body);

    //     if(res.status === 200){
    //         if(res.data.valid){
    //             sessionStorage.setItem('token', res.data.token)
    //             navigator.navigate("home");
    //             return;
    //         }
    //         if(!res.data.valid){
    //             const tokenBody= {
    //                 jwtUser: res.data.token
    //             }
    //             await AuthService.sendToken(tokenBody);
    //             navigator.navigate("confirm", { jwt: res.data.token });
    //         }

    //         // props.navigation.navigate("home");
    //     }
    // }

    // useEffect(() => {
    //     const jwt = sessionStorage.getItem("token") ?? "";
    //     if(jwt != "")
    //         navigator.navigate("home");
    // })

    return (
        <View style={styles.center}>
            <Image source={require('../../assets/Talescape Logo.png')} style={styles.image}/>
            {/* <View style={styles.form}>
                <StyledInput name={"Email"} type={"email-address"} value={email} set={setEmail} />
                <StyledInput isSecure={true} name={"Password"} value={password} set={setPassword} />
            </View>
            <View style={styles.alignLink}>
                <Text style={styles.link} onPress={() => props.navigation.navigate('recover')}>Forgot your password?</Text>
            </View>
            <TouchableOpacity style={styles.primaryButton} onPress={() => ToLogin()}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => navigator.navigate('cadastro')}><Text style={styles.buttonText}>Sign Up</Text></TouchableOpacity> */}
        </View >
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',        
    },
    image: {
        marginTop: 50,
        width: 250,
        height: 200,
    },

})