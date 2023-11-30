import { View, StyleSheet, Pressable, Image, Text, ScrollView } from "react-native"
import { GlobalStyles } from "../../Styles"
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import PoemCard from "../components/PoemCard";
import Footer from "../components/Footer";
import StoryService from "../Services/Story";
import { useCallback, useState } from "react";

export default function EditPoemsListPage(props) {
    const [content, setContent] = useState([]);
    const navigator = useNavigation();

    useFocusEffect(
        useCallback(() => {
            loadContent()
        }, [])
    );

    async function loadContent() {
        const res = await StoryService.getByUser();

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
                <ScrollView contentContainerStyle={styles.scrollViewContent} centerContent={true}>
                    {
                        content.map((content, key) => {
                            return (
                                <PoemCard personal={true} key={key} title={content.title} text={content.text}
                                    owner={content.idOwner == null ? "username" : content.idOwner.name}
                                    updatedAt={new Date(content.updatedAt).toLocaleDateString("pt-br")}></PoemCard>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <Footer page="pencil"></Footer>
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