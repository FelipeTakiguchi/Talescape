import { View, StyleSheet, Pressable, Image, Text, ScrollView } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import PoemCard from "../components/PoemCard";
import Footer from "../components/Footer";

export default function ExplorePage(props) {

    const navigator = useNavigation();

    return (
        <View style={GlobalStyles.centralize}>
            <Image source={require("../../assets/Talescape Simple Logo.png")} style={styles.imageHeader} />
            <Pressable style={styles.menuHeader}>
                <Image source={require("../../assets/menu icon.png")} style={styles.menuHeader} />
            </Pressable>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Pressable onPress={() => navigator.navigate("home")}>
                        <Text style={styles.option}>Create</Text>
                    </Pressable>
                    <View style={styles.verticleLine}></View>
                    <Pressable>
                        <Text style={[styles.option, styles.selected]}>Explore</Text>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    <PoemCard viewed={true}></PoemCard>
                    <PoemCard></PoemCard>
                    <PoemCard></PoemCard>
                    <PoemCard viewed={true}></PoemCard>
                </ScrollView>
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
    scrollViewContent: {
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 40
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
})