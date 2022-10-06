import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Modal,  Pressable } from 'react-native';


export default function MyModal({ modalVisible, selectedRow, dismissModal }) {

   
   
  return  <View style={styles.centeredView}>
  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      
        dismissModal();
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
       
      <Image
        style={{width: 300, height: 400}}
        source={{uri: selectedRow.thumbnailUrl}}
        />

        <Pressable
            style={{marginTop: 20}}
          onPress={() => dismissModal()}
        >
          <Text >Close</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
</View>
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
      margin: 20,
      backgroundColor: "white",
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
   
  });