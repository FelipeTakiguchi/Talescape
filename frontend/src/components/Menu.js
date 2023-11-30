import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, FlatList, Image, Dimensions, Pressable } from 'react-native';
import "./styles.css"

const windowHeight = Dimensions.get('window').height;
const PopupMenu = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const data = ['Opção 1', 'Opção 2', 'Sair'];
    const navigator = useNavigation();

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        toggleModal();
        if (option == 'Sair') {
            sessionStorage.clear();
            navigator.navigate('menu')
        }
    };
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={toggleModal} style={styles.menuHeader}>
                <Image source={require("../../assets/menu icon.png")} style={styles.menuHeader} />
            </TouchableOpacity>

            <Modal
                transparent='true'
                animationType="slide"
                visible={isModalVisible}
                onRequestClose={toggleModal}
                presentationStyle="overFullScreen"
            >
                    {isModalVisible && <Pressable onPress={toggleModal} id='blurBackground' style={{
                        // position: "fixed",
                        // top: 0,
                        // left: 0,
                        // width: "100%",
                        // height: "100%",
                        // zIndex: 0,
                        // backgroundColor: "rgba(255, 255, 255, .2)",
                    }}>
                    </Pressable>}
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleOptionSelect(item)}>
                                    <Text style={styles.optionText}>{item}</Text>
                                    <View style={styles.line}></View>
                                </TouchableOpacity>
                            )}
                        />

                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.cancelText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    menuHeader: {
        width: 33,
        height: 18,
        marginTop: -10,
        marginLeft: 30
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Para posicionar o conteúdo no final da tela
    },
    modalContainer: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100vw',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    line: {
        width: '60vw',
        height: 1,
        backgroundColor: 'gray',

    },
    optionText: {
        fontSize: 18,
        marginVertical: 10,
        color: 'black',
        textAlign: 'center',
        fontWeight: '700'
    },
    cancelText: {
        fontSize: 18,
        marginVertical: 10,
        color: 'red',
    },
});

export default PopupMenu;