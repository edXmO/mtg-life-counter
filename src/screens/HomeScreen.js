import React from "react"
import { ScrollView } from "react-native"
import Label from "../librarycomponents/Label";
import Button from "../librarycomponents/Button";
import ScrollViewContainer from "../utils/ScrollViewContainer";
import { useState } from "react/cjs/react.development";
import NewGame from "../components/NewGame";

const HomeScreen = ({ navigation }) => {	 

  const [newGame, setNewGame ]= useState(false);


  return (
    <>
    <ScrollView 
      contentContainerStyle={{...ScrollViewContainer}}>
      <Button onPress={() => setNewGame(true)}>
        <Label style={{color: "#fff"}}>Nueva Partida</Label>
      </Button>
    </ScrollView>
    {newGame && <NewGame setNewGame={setNewGame}/>}
    </>
  )
}


export default HomeScreen;