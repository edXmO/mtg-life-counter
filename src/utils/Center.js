import React from "react"
import { View } from "react-native"

const Center = ({ children, theme}) => {	 
  return (
    <View style={{
        backgroundColor: theme ?? "white",
        alignItems: "center",
        justifyContent: "center"
    }}>
      {children}
    </View>
  )
}


export default Center;