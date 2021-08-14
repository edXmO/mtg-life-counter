import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react"
import { Dimensions, StyleSheet, View } from "react-native";
import Button from "../librarycomponents/Button";
import Label from "../librarycomponents/Label";
import ModalComponent from "../librarycomponents/ModalComponent";
import Shadow from "../utils/Shadow";

const { width, height } = Dimensions.get("screen");

const NewGame = ({ setNewGame }) => {	 

  const navigation = useNavigation();

  const [gameData, setGameData ]= useState({
    numPlayers: 2,
    playerData: []
  });

  return (
    <ModalComponent>
      <View style={[styles.modalContainerStyles, Shadow, { backgroundColor: "white", height: height / 2, width: width - 20}]}>
        <Button
          style={{justifyContent: "flex-end"}}
          onPress={() => setNewGame(false)}>
          <Label style={{color: "#fff", paddingHorizontal: 10, fontSize: 16}}>Cerrar</Label>
          <Ionicons name="close-circle-outline" size={30} color="#fff"/>
        </Button>

        <Button 
          style={{marginTop: "auto", justifyContent: "center"}}
          onPress={() => navigation.navigate("HomeStack", {screen: "GameScreen", params: { numPlayers: gameData?.numPlayers }})}>
          <Label style={{color: "white"}}>Nueva Partida</Label>
        </Button>
      </View>
    </ModalComponent>
  )
}

export default NewGame;

const styles = StyleSheet.create({
  modalContainerStyles: {
    borderRadius: 7
  }
})