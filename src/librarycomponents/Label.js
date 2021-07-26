import React from "react"
import { Text } from "react-native";

const Label = ({ children, style = {} }) => {	
  return <Text allowFontScaling={false} style={{...style}}>{children}</Text>
}

export default Label;