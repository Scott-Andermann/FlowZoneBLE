import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { darkGreen, lightGreen, gunmetal, white, red } from './colors';


import Button from './Button';

const MenuModal = ({ modalVisible, setModalVisible, navigation }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.container}>
                <View style={styles.overlay} />
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Button theme='menu' label='Create Job' onPress={() => navigation.navigate('createJob')} />
                        <Button theme='menu' label='Previous Jobs' onPress={() => navigation.navigate('prevJobs')} />
                        <Button theme='menu' label='Create Nozzle' onPress={() => navigation.navigate('createNozzle')} />
                        <Button theme='menu' label='View Sprayer' onPress={() => navigation.navigate('viewSprayer')} />
                        <Button theme='menu' label='Technician Profile' onPress={() => navigation.navigate('createJob')} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>

    );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: darkGreen,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        marginTop: 8,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: red,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    overlay: {
        flex: 1,
        backgroundColor: '#000',
        opacity: 0.4,
        position: 'absolute',
        height: '100vh',
        width: '100vw'
    },
    container: {
        height: '100%',
        width: '100%',
        position: 'relative'
    }
});

export default MenuModal;