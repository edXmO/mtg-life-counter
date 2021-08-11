import React from "react"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring, useAnimatedGestureHandler } from "react-native-reanimated";
import Label from "../librarycomponents/Label";
import Shadow from "../utils/Shadow";
import { PanGestureHandler } from "react-native-gesture-handler";

const SQUARE_SZ = 100;

const HistoryItem = ({label, theme, index, isDragging, setIsDragging}) => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
      scale.value = withSpring(scale.value + 0.2, { duration: 600});
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;     
    },
    onEnd: () => {
      translateX.value = withSpring(0, { stiffness: 50 });
      translateY.value = withSpring(0 , { stiffness: 50 });
      scale.value = withSpring(1, { duration: 600});
    },
  });

  const translateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value }
      ]
    }
  })

  return (
    <PanGestureHandler 
      onBegan={() => setIsDragging(true)}
      onEnded={() => setIsDragging(false)}
      onGestureEvent={panGestureEvent}>
      <Animated.View
      style={[{
        width: SQUARE_SZ,
        height: SQUARE_SZ,
        borderRadius: 7,
        backgroundColor: theme ?? "white",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
      }, Shadow, translateStyle]}
      >
        <Label>{label}</Label>
      </Animated.View>
    </PanGestureHandler>
  )
	}


export default HistoryItem;