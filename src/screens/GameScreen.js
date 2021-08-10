import React, { useRef, createRef, useEffect, useState } from "react"
import { View, PanResponder, Animated, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

const GameScreen = ({}) => {

  const pan = useRef(new Animated.ValueXY()).current;
  
  const [squareRefs, setSquareRefs] = useState([]);
  
  const cards = [
    {name: 1, color: "royalblue"},
    {name: 2, color: "green"},
    {name: 3, color: "red"},
    {name: 4, color: "black"},
  ]
  
  useEffect(() => {
    setSquareRefs(squareRefs => Array(cards?.length).fill().map((_,i) => squareRefs[i] || createRef(new Animated.ValueXY()).current))
  }, [cards?.length]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // El gesto ha comenzado. Muestra feedback visual
        // gestureState.d{x, y} seteado a {0, 0}
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },  
      // El movimiento mas recientes es
      // gestureState.move{X, Y}
      // El acumulado desde que comenzo el
      // movimiento es
      // gestureState.d{x, y}
      onPanResponderMove: Animated.event(
          [
            null,
            {dx: pan.x, dy: pan.y}
          ],
          { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current

  return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        {cards.map((item, index) => {
          return <Animated.View
              ref={squareRefs[index]}
              key={`${index}-${item?.name}`}
              {...panResponder.panHandlers}
              style={{
                height: 100,
                width: 100,
                backgroundColor: item?.color,
                borderRadius: 10,
                transform: [
                  {translateX: pan.x},
                  {translateY: pan.y},
                  {rotate: pan.y.interpolate({ inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH], outputRange: ['-120deg', '0deg', '120deg']})},
                ]
              }}>
            </Animated.View>
        })}
      </View>
    )
}


export default GameScreen;