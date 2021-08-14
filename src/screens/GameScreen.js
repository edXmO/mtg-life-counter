import React from "react"
import { View, Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from "react/cjs/react.development";
import Board from "../components/Board";

const { height } = Dimensions.get("window");

let BOARD_STATE = {
  uuid: "",
  playerName: "Edu",
  counters: {
    life: 20,
    poison: 0,
    energy: 0  
  },
  time: "",
  date: ""
}

const boardState = {
  counter: {
    life: 20,
    poison: 0,
    energy: 0
  },
  timeElapsed: "",
}

const GAME = {
  playerName: "Edu",
  playerBoard: boardState,
  date: new Date()
}


const GameScreen = ({ route }) => {

  // Numero de jugadores ira en la pantalla de arriba probablemente;
  const [numPlayers, setNumPlayers] = useState(1);
  const [gameBoards, setGameBoards] = useState(Array.from(Array(numPlayers), () =>  { return BOARD_STATE }));

  const editCounter = (index, key, value) => {
    let newBoard = [...gameBoards];

    newBoard[index].counters[key] = value;

    setGameBoards(newBoard);
  }

  // useEffect(() => {
  //   if(route?.params){
  //     setNumPlayers(route?.params?.numPlayers)
  //   }
  // }, [route?.params])

  return (
      <View style={{
          height: height,
          width: "100%",
          alignItems: "center",
        }}>
        {/* GAME BOARDS  */}
          {gameBoards.map((board, i) => <Board key={`${board.playerName}-${i}`} life={board.life} editCounter={editCounter} index={i} data={board} />)}     
      </View>
    )
}

export default GameScreen;

