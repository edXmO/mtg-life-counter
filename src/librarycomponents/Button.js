import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import Label from "../librarycomponents/Label";

const Button = ({ children, onPress, theme, primary = true }) => {	 

  const styles = StyleSheet.create({
    primary: {
      backgroundColor: `${theme === 'light' ? '#fff' : '#000'}`,
      paddingHorizontal: 20,
      paddingVertical: 5,
      borderRadius: 7,
    },
    secondary: {
      backgroundColor: `${theme === 'light' ? '#fff' : '#000'}`,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 7,
    },
    labelStyles: {
      fontSize: 16,
      paddingHorizontal: 20,
      paddingVertical: 5,
      color: `${theme === 'light' ? '#000' : '#fff'}`
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
    <TouchableOpacity style={primary ? {...styles.primary, ...styles.shadows} : {...styles.secondary, ...styles.shadows}} onPress={onPress}>
      <Label style={styles.labelStyles}>{children}</Label>
    </TouchableOpacity>
  )
}



export default Button;