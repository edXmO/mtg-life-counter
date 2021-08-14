import React from "react"
import { TouchableWithoutFeedback, View } from "react-native"

const ModalComponent = ({ children, closeCallback}) => {	 
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.05)"}}
      >
      <TouchableWithoutFeedback
        onPress={closeCallback}
        style={{flex: 1, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }} >                 
      {children}
      </TouchableWithoutFeedback>
    </View>
  )
}


export default ModalComponent;