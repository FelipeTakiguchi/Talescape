import { View, StyleSheet, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import PopupMenu from "../components/Menu";
import { GlobalStyles } from "../../Styles";

export default function HeaderComponent(props) {
    const navigator = useNavigation();

    return (
        <View style={GlobalStyles.centralize}>
            <View style={styles.alignHeader}>
                <Image source={require("../../assets/Talescape Simple Logo.png")} style={styles.imageHeader} />
                <PopupMenu></PopupMenu>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    alignHeader: {
        flexDirection: 'row',
    },
    imageHeader: {
        width: 175,
        height: 48,
        marginTop: 15,
    },
})