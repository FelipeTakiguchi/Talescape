import { useState } from "react";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StoryCard(props) {
    const navigateion = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const setVisible = () => {
        setModalVisible(!modalVisible);
    }

    const navigate = (screen) => {
        navigateion.navigate(screen);
    }

    return (
        <View style={styles.card}>
            <View style={styles.topCard}>
                <Image source={require('../../assets/user icon.png')} style={styles.userIcon}></Image>
                <Text style={styles.userName}>User Name</Text>
                <Text style={styles.datePosition}>02/12/2002</Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.cardContent}>
                <Text style={styles.title}>Uma Linda História</Text>
                <Text style={styles.text}>Calor ao nascer do Sol, dia e noite na subida da colina por onde se passaram os embriões, correntes a emergir por entre suas mãos...</Text>
                <Image source={require("../../assets/arrowDown icon.png")} style={styles.showMore}></Image>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.bottomCard}>

            </View>
            <View style={styles.floatingTag}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#7B5BBF",
        width: 360,
        height: 200,
        borderRadius: 15
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
        backgroundColor: "#fcfcfc",
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

    },
    floatingTag: {

    }
})