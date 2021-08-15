import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, View, TextInput, ScrollView, FlatList, TouchableOpacity } from "react-native";
import Button from "../librarycomponents/Button";
import Label from "../librarycomponents/Label";
import ModalComponent from "../librarycomponents/ModalComponent";
import Shadow from "../utils/Shadow";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = 45;
const DEFAULT_PLAYERS = 2;

const PLAYER_DATA = {
  name: ""
}

const NewGame = ({ setNewGame }) => {	 

  const navigation = useNavigation();

  const [gameData, setGameData ]= useState({
    numPlayers: DEFAULT_PLAYERS,
    playerData: []
  });
  
  const editForm = (key, value) => {
    let newData = { ...gameData };

    newData[key] = value;

    console.log(newData);

    setGameData({ ...newData });
  }

  const editPlayerData = (index, key, value) => {
    let newPlayerData = [...gameData.playerData];

    newPlayerData[index][key] = value;

    setGameData({...gameData, playerData: newPlayerData});
  }


  const renderItem = ({ item }) => {

    const isSelected = parseInt(item?.value) === parseInt(gameData?.numPlayers);

    return (
      <TouchableOpacity
        style={{width: ITEM_WIDTH, height: ITEM_WIDTH, borderRadius: ITEM_WIDTH / 2, backgroundColor: isSelected ? "black" : "transparent", alignItems: "center", justifyContent: "center"}}
        onPress={() => {
          let playerData = Array.from(Array(item?.value), () => PLAYER_DATA);
          // FIX ORDER OF MODIFICATION OF THE GAMEDATA STATE
          // FIRST numPlayers, then the array of playerData
          editForm('playerData', playerData);
          editForm('numPlayers', parseInt(item?.value));
        }}>
        <Label style={{color: isSelected ? "white" : "black", fontWeight: isSelected ? "bold" : undefined, fontSize: isSelected ? 18 : 10}}>{item?.value}</Label>
      </TouchableOpacity>
    )
  }

  const onNewGameSubmit = () => {
    const params = {
      numberOfPlayers: gameData?.numPlayers,
      ...Array.from(Array(gameData?.numPlayers), (v, i) => gameData?.playerData[i].name )
    }

    console.log("params: ", params)
    // navigation.navigate("HomeStack", { screen: "GameScreen", params: { numberOfPlayers: gameData?.numPlayers, playerOneGame: gameData?.player }})
  }

  return (
    <ModalComponent>
      <View style={[styles.modalContainerStyles, Shadow, { backgroundColor: "white", height: height / 1.5, width: width - 20 }]}>
        <Button
          style={{justifyContent: "flex-end"}}
          onPress={() => setNewGame(false)}>
          <Label style={{color: "#fff", paddingHorizontal: 10, fontSize: 16}}>Cerrar</Label>
          <Ionicons name="close-circle-outline" size={30} color="#fff"/>
        </Button>
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 15,
            paddingHorizontal: 15
            }}>
            <Label style={styles.inputLabelStyles}>Selecciona el numero de jugadores</Label>
            <FlatList 
              horizontal={true}
              data={Array.from(Array(6), (_, i) => {return { value: i + 1, index: 1 }}).slice(1)}
              renderItem={renderItem}
              snapToAlignment={"center"}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              keyExtractor={({value, index}) => `${value}-${index}`}
            />
          </View>
          {gameData?.numPlayers ? 
              <ScrollView 
              contentContainerStyle={{ width: "100%", paddingHorizontal: 15, paddingVertical: 10 }}
              showsVerticalScrollIndicator={false}>
              { Array.from(Array(parseInt(gameData?.numPlayers))).map((item, i) => {
                return (
                  <View 
                  style={{width: "100%", alignItems: "center"}}
                  key={`${Math.random()}-${i}`}>
                  <Label
                  style={styles.inputLabelStyles}
                    >
                      {`Introduce el nombre del jugador ${i + 1}`}
                  </Label>
                  <TextInput
                    style={[styles.inputTextStyles, Shadow]}
                    onChangeText={(val) => {                    
                      editPlayerData(i, 'name', val)
                    }}
                    placeholder="Escribe tu nombre"
                    editable={true}
                    allowFontScaling={false}
                    />
                  </View>
                ) 
              }) }
            </ScrollView>
          : null}
        <Button 
          style={{marginTop: "auto", justifyContent: "center"}}
          onPress={() => onNewGameSubmit()}>
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
    paddingVertical: 10,
  }, 
  inputTextStyles: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingVertical: 10, 
    paddingHorizontal: 20,
  }
})