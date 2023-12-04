import { View, StyleSheet, Pressable, Image, Text, ScrollView, TextInput, Dimensions } from "react-native"
import { GlobalStyles } from "../../Styles"
import StyledButton from "../components/StyledButton"
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import PoemCard from "../components/PoemCard";
import Footer from "../components/Footer";
import { useCallback, useState } from "react";
import StoryService from "../Services/Story";

export default function SearchPage(props) {

    const [content, setContent] = useState([]);
    const navigator = useNavigation();

    useFocusEffect(
        useCallback(() => {
            loadContent()
        }, [])
    );

    async function loadContent() {
        const res = await StoryService.getAll();

        if (res.status != 200) {
            navigator.navigate("home");
        }
        if (res.data) {
            setContent(res.data)
        }
    }

    return (    
        <View style={GlobalStyles.centralize}>
            <View style={styles.content}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.searchInput} keyboardType={"web-search"}></TextInput>
                    <Pressable>
                        <Image source={require("../../assets/search button.png")} style={styles.search}></Image>
                    </Pressable>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    {
                        content.map((content, key) => {
                            return (
                                <PoemCard key={key} id={content.id} title={content.title} text={content.text}
                                    owner={content.idOwner == null ? "username" : content.idOwner.name}
                                    likes={content.likes}
                                    createdAt={new Date(content.createdAt).toLocaleDateString("pt-br")}
                                    updatedAt={new Date(content.updatedAt).toLocaleDateString("pt-br")}></PoemCard>
                            )
                        })
                    }
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
        height: '90vh',
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