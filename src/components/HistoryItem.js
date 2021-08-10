import React, { useRef } from "react"
import { PanResponder, Animated } from "react-native"
import Label from "../librarycomponents/Label"
import Shadow from "../utils/Shadow"

const HistoryItem = ({label, theme}) => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      console.log("dragging")
      pan.setOffset({x: pan.x._value, y: pan.y._value})
    },
    onPanResponderMove: Animated.event(
      [
        null,
        {dx: pan.x, dy: pan.y}
      ], 
      { useNativeDriver: false }
    ),
    // onPanResponderRelease: () => {
    //   pan.flattenOffset();
    // }
  }))

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[{
      width: 100,
      height: 100,
      borderRadius: 7,
      backgroundColor: theme ?? "white",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
      transform: [{ translateX: pan.x }, { translateY: pan.y }]
    }, {...Shadow}]}>
      <Label>{label}</Label>
    </Animated.View>
  )
	}


export default HistoryItem;