import { View, StyleSheet, Pressable, Image, Text, ScrollView, TextInput } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useNavigation } from "@react-navigation/native";
import StoryCard from "../components/StoryCard";
import Footer from "../components/Footer";

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
                    <TextInput style={styles.searchInput} keyboardType={"web-search"}></TextInput>
                    <Pressable>
                        <Image source={require("../../assets/search button.png")} style={styles.search}></Image>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    <StoryCard viewed={true} loved={true} expanded={false}></StoryCard>
                    <StoryCard viewed={true}></StoryCard>
                    <StoryCard></StoryCard>
                    <StoryCard></StoryCard>
                </ScrollView>
            </View>
            <Footer page="search"></Footer>
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
        height: '90vh',
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
        padding: 4,
        outlineStyle: 'none'
    },
    search: {
        width: 30,
        height: 30,
    },
    scrollViewContent: {
        marginTop: 15,
        alignItems: 'center',
        marginBottom: 40
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
    },
})