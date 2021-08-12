import React from "react"
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = ({ size = 25, fillColor="white", unfillColor="#FFFFFF", label, onPress, iconColor }) => {
  return (
    <BouncyCheckbox 
      size={size}
      fillColor={`${fillColor}`}
      unfillColor={`${unfillColor}`}
      text={`${label}`}
      iconStyle={{ borderColor: `${iconColor}` }}
      onPress={onPress}
    />)
	}

export default Checkbox;