import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, View, TextInput, ScrollView } from "react-native";
import Button from "../librarycomponents/Button";
import Label from "../librarycomponents/Label";
import ModalComponent from "../librarycomponents/ModalComponent";
import Shadow from "../utils/Shadow";
import Center from "../utils/Center";

const { width, height } = Dimensions.get("screen");

const PLAYER_DATA = {
  name: ""
}

const NewGame = ({ setNewGame }) => {	 

  const navigation = useNavigation();

  const [gameData, setGameData ]= useState({
    numPlayers: 0,
    playerData: []
  });


  useEffect(() => {
    console.log(gameData)
  }, [gameData]);

  
  const editForm = (key, value) => {
    let newData = { ...gameData };

    newData[key] = value;

    setGameData({ ...newData });
  }

  const editPlayerData = (index, key, value) => {
    let newPlayerData = [...gameData?.playerData];

    playerData[index][key] = value;

    setGameData({...gameData, playerData: newPlayerData});
  }

  return (
    <ModalComponent>
      <View style={[styles.modalContainerStyles, Shadow, { backgroundColor: "white", height: height / 2, width: width - 20}]}>
        <Button
          style={{justifyContent: "flex-end"}}
          onPress={() => setNewGame(false)}>
          <Label style={{color: "#fff", paddingHorizontal: 10, fontSize: 16}}>Cerrar</Label>
          <Ionicons name="close-circle-outline" size={30} color="#fff"/>
        </Button>
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15
            }}>
            <Label>Selecciona el numero de jugadores</Label>
            {/* <CounterSliderComponent 
              activeCounter={}
              editCounter={}
              index={}
              data={}
            /> */}
            <TextInput 
              defaultValue={`${1}`}
              onChangeText={(val) => {
                editForm('numPlayers', val);
                editForm('playerData', Array.from(Array(parseInt(val) || 1), () => PLAYER_DATA));
              }}
              placeholder="2"
              editable={true}
              allowFontScaling={false}
              />
          </View>
        {parseInt(gameData?.numPlayers) !== 0 ? 
          <Center style={{ paddingHorizontal: 15 }}>
            { Array.from(Array(parseInt(gameData?.numPlayers))).map((item, i) => {
              return (
                <>
                <Label
                style={styles.inputLabelStyles}
                  >
                    {`Introduce el nombre del jugador ${i + 1}`}
                </Label>
                <TextInput
                  style={[styles.inputTextStyles, Shadow]}
                  onChangeText={(val) => editPlayerData(i, 'name', val)}
                  placeholder="Escribe tu nombre"
                  editable={true}
                  allowFontScaling={false}
                  />
                </>
              ) 
            }) }
          </Center> 
        : null}
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
  },
  inputLabelStyles: {
    fontSize: 16,
    paddingVertical: 10
  }, 
  inputTextStyles: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingVertical: 10, 
    paddingHorizontal: 20,
  }
})