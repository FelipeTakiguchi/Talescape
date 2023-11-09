import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import AuthService from "../Services/Auth";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../Styles";

export default function Menu(props) {
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
        <View style={GlobalStyles.center}>
            <Image source={require('../../assets/Talescape Logo.png')} style={styles.image}/>
            <View style={GlobalStyles.container}>
                <Text style={[GlobalStyles.h1, styles.centralizeText]}>Welcome to Talescape</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 80,
        width: 220,
        height: 180,
        marginBottom: 80,
    },
    centralizeText: {
        textAlign: 'center',
        marginTop: 50,
    }
})