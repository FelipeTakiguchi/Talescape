import { useState } from "react";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PoemCard(props) {
    const navigateion = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const setVisible = () => {
        setModalVisible(!modalVisible);
    }

    const navigate = (screen) => {
        navigateion.navigate(screen);
    }

    if (props.personal) {
        return (
            <View style={[styles.personalCard, props.viewed ? styles.lightPurple : styles.darkPurple]}>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.datePosition}>{props.updatedAt}</Text>
                    <Text style={styles.text}>{props.text}</Text>
                </View>
                <View style={[styles.floatingTag, styles.middle, props.viewed ? styles.white : styles.purple]}>
                    <Text style={[styles.tagText, props.viewed ? styles.darkFont : styles.lightFont]}>História</Text>
                </View>
                <Pressable style={[styles.floatingTag, styles.right, props.viewed ? styles.white : styles.purple]}>
                    <Image source={require("../../assets/trash icon.png")} style={styles.floatingDeleteButton}></Image>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={[styles.card, props.viewed ? styles.lightPurple : styles.darkPurple]}>
            <View style={styles.topCard}>
                <Image source={require('../../assets/user icon.png')} style={styles.userIcon}></Image>
                <Text style={styles.userName}>{props.owner}</Text>
                <Text style={styles.datePosition}>{props.updatedAt}</Text>
            </View>
            <View style={[styles.horizontalLine, props.viewed ? styles.white : styles.pink]}></View>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
                <Image source={require("../../assets/arrowDown icon.png")} style={styles.showMore}></Image>
            </View>
            <View style={[styles.horizontalLine, props.viewed ? styles.white : styles.pink]}></View>
            <View style={styles.bottomCard}>
                <Image source={props.loved ? require("../../assets/heart button.png") : require("../../assets/heart icon.png")} style={styles.loveIcon}></Image>
                <Text style={styles.categoryFont}>Categoria 1</Text>
                <Text style={styles.categoryFont}>Categoria 2</Text>
            </View>
            <View style={[styles.floatingTag, styles.right, props.viewed ? styles.white : styles.purple]}>
                <Text style={[styles.tagText, props.viewed ? styles.darkFont : styles.lightFont]}>História</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    personalCard: {
        width: "80%",
        borderRadius: 15,
        marginBottom: 30,
        paddingBottom: 30,
    },
    card: {
        width: "80%",
        borderRadius: 15,
        marginBottom: 30,
    },
    lightPurple: {
        backgroundColor: "#7B5BBF",
    },
    darkPurple: {
        backgroundColor: "#170536",
    },
    purple: {
        backgroundColor: "#763FEA",
    },
    pink: {
        backgroundColor: "#C395A6",
    },
    white: {
        backgroundColor: "#fcfcfc",
    },
    topCard: {
        margin: 14,
        flexDirection: 'row',
        alignItems: "center"
    },
    userIcon: {
        width: 30,
        height: 30,
    },
    userName: {
        fontSize: 16,
        color: "#fcfcfc",
        fontWeight: '600',
        marginLeft: 8
    },
    datePosition: {
        fontSize: 16,
        color: "#fcfcfc",
        fontWeight: '600',
        position: 'absolute',
        right: 10
    },
    horizontalLine: {
        width: '94%',
        marginLeft: '3%',
        height: 1
    },
    cardContent: {

    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fcfcfc',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 8,
        marginBottom: 4
    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fcfcfc',
        marginLeft: 30,
        marginRight: 20
    },
    showMore: {
        width: 18,
        height: 12,
        margin: 10,
        alignSelf: 'center'
    },
    bottomCard: {
        paddingLeft: 17,
        padding: 7,
        flexDirection: 'row',
        gap: 8
    },
    loveIcon: {
        width: 22,
        height: 23,
    },
    categoryFont: {
        marginTop: "1%",
        color: "#fcfcfc",
        fontSize: 12
    },
    floatingTag: {
        position: 'absolute',
        padding: 8,
        borderRadius: 5,
        shadowColor: "gray",
        shadowOffset: {
            width: 0.8,
            height: 6,
        },
        shadowRadius: 5,
        shadowOpacity: .3
    },
    right: {
        bottom: -15,
        right: -18,
    },
    middle: {
        bottom: -15,
        left: "36%"
    },
    tagText: {
        fontSize: 18,
        fontWeight: '700'
    },
    lightFont: {
        color: "#fcfcfc",
    },
    darkFont: {
        color: "#170536",
    },
    floatingDeleteButton: {
        width: 20,
        height: 25,
    }
})