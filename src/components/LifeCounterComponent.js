import React from "react"
import { StyleSheet, View } from "react-native"
import Button from "../librarycomponents/Button"
import Label from "../librarycomponents/Label"


const LifeCounterComponent = ({ activeCounter, editCounter, index, data }) => {

  return (
    <View style={styles.lifeCounterContainer}>
      <Button onPress={() => editCounter(index, activeCounter, data.counters[activeCounter] - 1)}>
        <Label style={styles.lifeLabelStyles}>
          -
        </Label>
      </Button>
      <View style={styles.lifeContainerStyles}>
        <Label style={styles.lifeLabelStyles}>
          {data.counters[activeCounter]}
        </Label>      
      </View>
      <Button onPress={() => editCounter(index, activeCounter, data.counters[activeCounter] + 1)}>
        <Label style={styles.lifeLabelStyles}>+</Label>
      </Button>
    </View>
  )
}

export default LifeCounterComponent;

const styles = StyleSheet.create({
  lifeCounterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%"
  },
  lifeContainerStyles: {
    
  },
  lifeLabelStyles: {
    fontSize: 20,
    fontWeight: "bold"
  }
})