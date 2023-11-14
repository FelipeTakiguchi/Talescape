import { useState } from "react";
import { Image, Pressable, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import NavContent from "./NavContent";
import { useNavigation } from "@react-navigation/native";

export default function Nav ( props ) {
    // const navigateion = useNavigation();   
    // const [modalVisible, setModalVisible] = useState(false);

    // const setVisible = () => {
    //     setModalVisible(!modalVisible);
    // }

    // const navigate = (screen) => {
    //     navigateion.navigate(screen);
    // }

    // return(
    //     <View style={styles.NavContainer}>
    //         <TouchableOpacity onPress={() => navigate('home')}>
    //         </TouchableOpacity>
    //         { !modalVisible && <Pressable style={styles.BurgerButtom} 
    //             onPress={() => setVisible()}>
    //             <View style={styles.BurgerItem}></View>
    //             <View style={styles.BurgerItem}></View>
    //             <View style={styles.BurgerItem}></View>
    //         </Pressable> }
    //         <NavContent visible={modalVisible} set={setModalVisible} />
    //     </View>
    // )
}

const styles = StyleSheet.create({
    
})