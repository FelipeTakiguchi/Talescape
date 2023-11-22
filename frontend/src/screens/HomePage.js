import { View, StyleSheet, Pressable, Image, Text } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

export default function HomePage(props) {
    const navigator = useNavigation();

    return (
        <View style={GlobalStyles.centralize}>
            <Image source={require("../../assets/Talescape Simple Logo.png")} style={styles.imageHeader} />
            <Pressable style={styles.menuHeader}>
                <Image source={require("../../assets/menu icon.png")} style={styles.menuHeader} />
            </Pressable>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Pressable>
                        <Text style={[styles.option, styles.selected]}>Create</Text>
                    </Pressable>
                    <View style={styles.verticleLine}></View> 
                    <Pressable onPress={() => navigator.navigate("explore")}>
                        <Text style={styles.option}>Explore</Text>
                    </Pressable>
                </View>
                <View style={styles.message}>
                    <Image source={require("../../assets/smile icon.png")} style={styles.smile}></Image>
                    <Text style={styles.primaryMessage}>Hello Felipe,</Text>
                    <Text style={styles.secondaryMessage}>Good to see you again</Text>
                </View>
                <StyledButton type={"story"} />
            </View>
            <Footer page="home"></Footer>
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
        height: '90vh',
        width: "100%",
    },
    section: {
        backgroundColor: "#763FEA",
        width: "100%",
        gap: "17%",
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    option: {
        color: "#fcfcfc",
        fontSize: 17,
        fontWeight: '600'
    },
    selected: {
        color: "#C395A6"  
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
    message: {
        flexDirection: 'column',
        marginLeft: 30,
        marginTop: 55,
    },
    smile: {
        width: 87,
        height: 87,
        marginBottom: 10
    },
    primaryMessage: {
        fontSize: 24,
        color: "#C395A6",
        fontWeight: '700',
    },
    secondaryMessage: {
        fontSize: 24,
        color: "#D4CDCF",
        fontWeight: '700',
    },
    footer: {
        width: "100%",
        justifyContent: 'space-around',
        marginTop: '4%',
        flexDirection: 'row',
    },
    footerIcon: {
        width: 30,
        height: 30,
    }
})