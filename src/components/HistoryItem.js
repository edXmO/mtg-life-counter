import React, { useEffect } from "react"
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring } from "react-native-reanimated";
import Label from "../librarycomponents/Label";
import Shadow from "../utils/Shadow";

const SQUARE_SZ = 100;

const HistoryItem = ({label, theme, index}) => {

  const progress = useSharedValue(0);
  const scale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [{ scale: scale.value }, { rotate: `${progress.value * 2 * Math.PI}rad`}],
    }
  }, []);

  useEffect(() => {
    progress.value = withSpring(1, { duration: 1200 });
    scale.value = withSpring(1, { duration: 2500});
  }, []);

  return (
    <Animated.View
    style={[{
      width: SQUARE_SZ,
      height: SQUARE_SZ,
      borderRadius: 7,
      backgroundColor: theme ?? "white",
      alignItems: "center",
      justifyContent: "center",
      margin: 10,
    }, Shadow, animatedStyle]}
    >
      <Label>{label}</Label>
    </Animated.View>
  )
	}


export default HistoryItem;