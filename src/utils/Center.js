import React from "react"
import { View } from "react-native"

const Center = ({ children, theme, style = {}}) => {	 
  return (
    <View style={[style, {
        flex: 1,
        backgroundColor: theme ?? "white",
        alignItems: "center",
        justifyContent: "center"
    }]}>
      {children}
    </View>
  )
}


export default Center;