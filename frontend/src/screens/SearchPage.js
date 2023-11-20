import { View, StyleSheet, Pressable, Image, Text, ScrollView, TextInput } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import StoryCard from "../components/StoryCard";

export default function SearchPage(props) {

    const navigator = useNavigation();

    return (
        <View style={GlobalStyles.centralize}>
            <Image source={require("../../assets/Talescape Simple Logo.png")} style={styles.imageHeader} />
            <Pressable style={styles.menuHeader}>
                <Image source={require("../../assets/menu icon.png")} style={styles.menuHeader} />
            </Pressable>
            <View style={styles.content}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.searchInput}></TextInput>
                    <Pressable>
                        <Image source={require("../../assets/search button.png")} style={styles.search}></Image>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    <StoryCard loved={true} expanded={false}></StoryCard>
                    <StoryCard></StoryCard>
                    <StoryCard></StoryCard>
                    <StoryCard></StoryCard>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Pressable>
                    <Image source={require("../../assets/pencil icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable onPress={() => navigator.navigate('loved')}>
                    <Image source={require("../../assets/heart icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable onPress={() => navigator.navigate('home')}>
                    <Image source={require("../../assets/home icon.png")} style={styles.footerIcon}></Image>
                </Pressable>
                <Pressable>
                    <Image source={require("../../assets/search selected icon.png")} style={styles.footerIcon}></Image>
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
    searchBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 10,
        gap: 10,
    },
    searchInput: {
        borderWidth: 0,
        borderBottomWidth: 3,
        borderColor: "#2A0C5F",
    },
    search: {
        width: 30,
        height: 30,
    },
    scrollViewContent: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
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