import { View, StyleSheet, Pressable, Image, Text, ScrollView } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import StoryCard from "../components/StoryCard";

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
                    <Pressable onPress={() => navigator.navigate("home")}>
                        <Text style={styles.option}>Create</Text>
                    </Pressable>
                    <View style={styles.verticleLine}></View>
                    <Pressable>
                        <Text style={[styles.option, styles.selected]}>Explore</Text>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    <StoryCard></StoryCard>
                    <StoryCard></StoryCard>
                    <StoryCard></StoryCard>
                    <StoryCard></StoryCard>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Pressable>
                    <Image source={require("../../assets/pencil icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/heart icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/home icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/search icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/user icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
            </View>
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
        width: "100%",
    }, 
    scrollViewContent: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
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
    footer: {
        width: "100%",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        height: 55,
    },
    footerIcon: {
        width: 30,
        height: 30,
    }
})