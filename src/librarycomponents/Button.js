import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import Label from "../librarycomponents/Label";

const Button = ({ children, onPress, theme, primary = true, style = {}, disabled = false }) => {	 

  const styles = StyleSheet.create({
    primary: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: `${theme === 'light' ? '#fff' : '#000'}`,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 7,
    },
    secondary: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: `${theme === 'light' ? '#fff' : '#000'}`,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 7,
    },
    shadows: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5.81
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 7
    }
  })

  return (
    <TouchableOpacity disabled={disabled} style={primary ? [styles.primary, styles.shadows, style ] : [styles.secondary, styles.shadows, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}



export default Button;