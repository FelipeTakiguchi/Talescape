import { View, StyleSheet, Pressable, Image, Text, ScrollView } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import StoryCard from "../components/StoryCard";

export default function LovedPage(props) {

    const navigator = useNavigation();

    return (
        <View style={GlobalStyles.centralize}>
            <Image source={require("../../assets/Talescape Simple Logo.png")} style={styles.imageHeader} />
            <Pressable style={styles.menuHeader}>
                <Image source={require("../../assets/menu icon.png")} style={styles.menuHeader} />
            </Pressable>
            <View style={styles.content}>
                <View style={styles.centralize}>
                    <Image source={require("../../assets/heart button.png")} style={styles.heartIcon}></Image>
                    <View style={styles.baseLine}></View>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    <StoryCard loved={true} expanded={false}></StoryCard>
                    <StoryCard loved={true} expanded={false}></StoryCard>
                    <StoryCard loved={true} expanded={false}></StoryCard>
                    <StoryCard loved={true} expanded={false}></StoryCard>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Pressable>
                    <Image source={require("../../assets/pencil icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable onPress={() => navigator.navigate('loved')}>
                    <Image source={require("../../assets/heart selected icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable onPress={() => navigator.navigate('home')}>
                    <Image source={require("../../assets/home icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable onPress={() => navigator.navigate('search')}>
                    <Image source={require("../../assets/search icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable onPress={() => navigator.navigate('editProfile')}>
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
        minHeight: '80vh',
        width: "100%",
    }, 
    centralize: {
        alignItems: 'center',
        gap: 5,
        marginTop: 10
    },
    heartIcon: {
        width: 33,
        height: 30,
    },
    baseLine: {
        borderColor: "#2A0C5F",
        borderWidth: 0,
        borderTopWidth: 2,
        width: 100,
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