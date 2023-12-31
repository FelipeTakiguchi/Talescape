import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../Styles";
import StyledButton from "../components/StyledButton";

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
                <Text style={[GlobalStyles.h1, styles.centralizeText]}>Welcome to Talescape!</Text>
                <View style={styles.buttonsContainer}>
                    <StyledButton type={"sign in"}></StyledButton>
                    <StyledButton type={"create account"}></StyledButton>
                </View>
                <View style={styles.copyrightContainer}>
                    <Image style={styles.copyright} source={require('../../assets/copyright.png')} alt={'Copyright icon'}/>
                    <Text style={styles.copyrightText}>All Rights Reserved</Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 80,
        width: 220,
        height: 180,
        marginBottom: 50,
    },
    centralizeText: {
        textAlign: 'center',
        marginTop: 40,
    },
    buttonsContainer: {
        gap: 20,
        marginTop: 40
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