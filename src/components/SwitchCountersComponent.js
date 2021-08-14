import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Label from "../librarycomponents/Label";

const SwitchCountersComponent = ({ setActiveCounter, counters, activeCounter }) => {	

  return (
    <View style={styles.switchContainerStyles}>
      {Object.entries(counters).map((counter, i) => {
        const isActive = activeCounter === counter[0];
        return (
          <TouchableOpacity 
            key={`${counter[0]}-${i}`}
            style={
              [
                styles.counterSelectorStyle,
                { 
                  backgroundColor: isActive ? "black": "white",
                }
              ]
            }
            onPress={() => setActiveCounter(counter[0])}>
            <Label 
            style={{
              ...styles.labelSelectorStyles,
              color: isActive ? "white": "black",
              fontWeight: isActive ? "bold" : undefined
              }}
            >
              {counter[0]}
            </Label>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default SwitchCountersComponent;

const styles = StyleSheet.create({
  switchContainerStyles: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  counterSelectorStyle: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  labelSelectorStyles: {
    fontSize: 16,
  }
})