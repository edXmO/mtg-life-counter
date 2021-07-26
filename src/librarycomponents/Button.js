import React from "react"
import { TouchableOpacity } from "react-native"
import Label from "../librarycomponents/Label";

const Button = ({ label, onPress, btnStyles = {}, labelStyles = {} }) => {	 
  return (
    <TouchableOpacity style={btnStyles} onPress={onPress}>
      <Label style={labelStyles}>{label}</Label>
    </TouchableOpacity>
  )
}

export default Button;