import { TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";

export default function StyledInput(props) {
    console.log(props)

    return (
        <View style={styles.inputContainer}>
            {
                props.icon == "user" && <Image source={require("../../assets/user2 icon.png")} style={styles.userIcon} alt={"user icon"} />
            }
            {
                props.icon == "email" && <Image source={require("../../assets/email icon.png")} style={styles.emailIcon} alt={"email icon"} />
            }
            {
                props.icon == "key" && <Image source={require("../../assets/key icon.png")} style={styles.keyIcon} alt={"key icon"} />
            }
            {
                props.icon == "lockpad" && <Image source={require("../../assets/lockpad icon.png")} style={styles.lockpadIcon} alt={"lockpad icon"} />
            }

            <TextInput
                style={styles.input}
                placeholder={props.name}
                value={props.value}
                onChangeText={props.set}
                keyboardType={props.type ? props.type : "default"}
                secureTextEntry={props.isSecure ? true : false}
            // multiline = {props.isTextArea ? true : false}
            // numberOfLines = {props.isTextArea ? 4 : 0}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    userIcon: {
        width: 35,
        height: 35,
        marginTop: 3
    },
    emailIcon: {
        width: 30,
        height: 30,
        marginTop: 6
    },
    keyIcon: {
        width: 30,
        height: 15,
        marginTop: 3
    },
    lockpadIcon: {
        width: 20,
        height: 26,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 9,
        borderWidth: 2,
        borderRadius: 90,
        borderColor: "#fcfcfc",
        width: 300,
        gap: 10
    },
    input: {
        fontSize: 20,
        color: '#fcfcfc',
        outlineStyle: 'none'
    }
})