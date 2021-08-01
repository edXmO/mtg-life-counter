import React from "react"
import { TouchableOpacity } from "react-native"
import Label from "../librarycomponents/Label"

const CustomTitle = ({title, onPress}) => {	 
  return (
    <TouchableOpacity onPress={onPress}>
      <Label>{title}</Label>
    </TouchableOpacity>
  )
}

export default CustomTitle;