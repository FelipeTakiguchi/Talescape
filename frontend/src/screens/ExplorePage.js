import { View, StyleSheet, Pressable, Image, Text, ScrollView } from "react-native"
import { GlobalStyles } from "../../Styles"
import { useNavigation } from "@react-navigation/native";
import PoemCard from "../components/PoemCard";
import Footer from "../components/Footer";
import StoryService from "../Services/Story";
import { useEffect, useReducer, useState } from "react";

export default function ExplorePage(props) {
    const [content, setContent] = useState([]);
    const navigator = useNavigation();

    useEffect(() => {
        loadContent()
    }, [])

    async function loadContent() {
        const res = await StoryService.getAll();

        if (res.status != 200) {
            navigator.navigate("home");
        }
        if (res.data) {
            setContent(res.data)
            console.log(res.data);
        }
    }

    return (
        <View style={GlobalStyles.centralize}>
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
                    {
                        content.map((content, key) => {
                            console.log(content);
                            return(
                                <PoemCard key={key} title={content.title} text={content.text} owner={content.idOwner.name} updatedAt={content.updatedAt}></PoemCard>
                            )
                        })
                    }
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