import React from "react"
import { Dimensions, StyleSheet, View } from "react-native";
import { useState } from "react/cjs/react.development";
import Shadow from "../utils/Shadow";
import CounterSliderComponent from "./CounterSliderComponent";
import SwitchCountersComponent from "./SwitchCountersComponent";

const  { width } = Dimensions.get("screen");

const Board = ({ editCounter, index, data }) => {

  const [activeCounter, setActiveCounter ] = useState('life');

  return (
    <View style={[styles.gameBoard, Shadow ]}> 
      <SwitchCountersComponent setActiveCounter={setActiveCounter} counters={data.counters} activeCounter={activeCounter} />
      <CounterSliderComponent activeCounter={activeCounter} editCounter={editCounter} index={index} data={data} />
    </View>
  )
}

export default Board;

const styles = StyleSheet.create({
  gameBoard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: width,
    height: "40%",
    margin: 10
  }
})