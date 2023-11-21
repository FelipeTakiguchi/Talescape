import { View, StyleSheet, Pressable, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";

export default function Footer(props) {
    const navigator = useNavigation();

    return (
        <View style={styles.footer}>
            <Pressable>
                <Image source={props.page == "pencil" ? require("../../assets/pencil icon.png") : require("../../assets/pencil icon.png")} style={styles.footerIcon}></Image>
            </Pressable>
            <Pressable onPress={() => navigator.navigate('loved')}>
                <Image source={props.page == "heart" ? require("../../assets/heart selected icon.png") : require("../../assets/heart icon.png")} style={styles.footerIcon}></Image>
            </Pressable>
            <Pressable onPress={() => navigator.navigate('home')}>
                <Image source={props.page == "home" ? require("../../assets/home selected icon.png") : require("../../assets/home icon.png")} style={styles.footerIcon}></Image>
            </Pressable>
            <Pressable onPress={() => navigator.navigate('search')}>
                <Image source={props.page == "search" ? require("../../assets/search selected icon.png") : require("../../assets/search icon.png")} style={styles.footerIcon}></Image>
            </Pressable>
            <Pressable onPress={() => navigator.navigate('editProfile')}>
                <Image source={props.page == "user" ? require("../../assets/user selected icon.png") : require("../../assets/user icon.png")} style={styles.footerIcon}></Image>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#2A0C5F",
        position: "absolute",
        bottom: 0,
        padding: 10
    },
    footerIcon: {
        width: 30,
        height: 30,
    }
})