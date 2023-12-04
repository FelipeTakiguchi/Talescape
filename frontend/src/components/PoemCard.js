import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import StoryService from "../Services/Story";

export default function PoemCard(props) {
    const [liked, setLiked] = useState(false);
    const [lines, setLines] = useState(4)
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        loadLikes();
    }, []);

    async function loadLikes() {
        if (props.likes != null) {
            console.log(props.likes);
            let users = [];

            props.likes.forEach(like => {
                users.push(like.id);
            });
            console.log(users);
            const res = await StoryService.hasLike(users);
            setLiked(res.data);
            setTotalLikes(props.likes.length);
        }
    }

    async function deletePoem() {
        const res = await StoryService.delete(props.id);
        props.remove(props.index);
    }

    function breakLimit() {
        setLines(null)
    }

    function hide() {
        setLines(4)
    }

    async function giveLike() {
        const res = await StoryService.like(props.id);
        setLiked(!liked)
        if(liked)
            setTotalLikes(totalLikes - 1);
        else
            setTotalLikes(totalLikes + 1);
    }

    if (props.personal) {
        return (
            <View style={styles.relative}>
                <View style={[styles.floatingTag, styles.topLeft, props.viewed ? styles.white : styles.purple]}>
                    <Text style={[styles.tagText, props.viewed ? styles.darkFont : styles.lightFont]}>História</Text>
                </View>
                <View style={[styles.personalCard, props.viewed ? styles.lightPurple : styles.darkPurple]}>
                    <View style={styles.cardContent}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.datePosition}>{props.updatedAt}</Text>
                        <Text style={styles.text} numberOfLines={lines}>{props.text}</Text>
                    </View>
                    <Pressable style={styles.positionDelete} onPress={deletePoem}>
                        <Image source={require("../../assets/trash icon.png")} style={styles.deleteButton}></Image>
                    </Pressable>
                </View>
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
                <Text style={styles.text} numberOfLines={lines}>{props.text}</Text>
                {lines == 4 && <Pressable onPress={breakLimit}>
                    <Image source={require("../../assets/arrowDown icon.png")} style={styles.showMore}></Image>
                </Pressable>}
                {lines != 4 && <Pressable onPress={hide}>
                    <Image source={require("../../assets/arrowUp icon.png")} style={styles.showMore}></Image>
                </Pressable>}
            </View>
            <View style={[styles.horizontalLine, props.viewed ? styles.white : styles.pink]}></View>
            <View style={styles.bottomCard}>
                <Text style={styles.totalLikes}>{totalLikes}</Text>
                <Pressable onPress={giveLike}>
                    <Image source={liked ? require("../../assets/heart button.png") : require("../../assets/heart icon.png")} style={styles.loveIcon}></Image>
                </Pressable>
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
    relative: {
        position: 'relative',
        width: "80%",
    },
    personalCard: {
        borderRadius: 15,
        marginBottom: 30,
        paddingBottom: 30,
        zIndex: 2,
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
        marginRight: 20,
        marginBottom: 10,
    },
    showMore: {
        width: 18,
        height: 12,
        marginBottom: 10,
        alignSelf: 'center'
    },
    bottomCard: {
        paddingLeft: 17,
        padding: 7,
        flexDirection: 'row',
        gap: 8
    },
    totalLikes: {
        color: "#fcfcfc",
        fontSize: 22,
        fontWeight: '600'
    },
    loveIcon: {
        width: 22,
        height: 23,
        marginTop: 4.5,
        marginRight: 8
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
        shadowOpacity: .3,
        zIndex: 1
    },
    right: {
        bottom: -15,
        right: -18,
    },
    topLeft: {
        top: -32,
        left: 12,
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
    deleteButton: {
        width: 20,
        height: 25,
    },
    positionDelete: {
        position: "absolute",
        right: 14,
        bottom: 5
    }
})