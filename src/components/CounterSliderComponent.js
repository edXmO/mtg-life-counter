import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react"
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native"
import Button from "../librarycomponents/Button"
import Label from "../librarycomponents/Label"


const ITEM_WIDTH = 45;

const CounterSliderComponent = ({ activeCounter, editCounter, index, data }) => {

  console.log(data);

  // console.log("index", index, data.counters[activeCounter])

  const flatListRef = useRef(null);

  const scrollToIndex = (index) => {
    flatListRef?.current?.scrollToIndex({ animated: true, index: index, viewPosition: 0.5 })
  }

  const onItemSelect = ( itemIndex ) => {
    editCounter(index, activeCounter, itemIndex + 1);
    // scrollToIndex(itemIndex);
  }

  const renderItem = ({item, itemIndex}) => {

    const isSelected = item?.value === data.counters[activeCounter];

    return (
      <TouchableOpacity
        style={{ 
          width: ITEM_WIDTH,
          height: ITEM_WIDTH,
          borderRadius: ITEM_WIDTH / 2,
          backgroundColor: isSelected ? "black" : "white",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 10
        }}
        onPress={() => onItemSelect(index, activeCounter, itemIndex)}>
        <Label style={{color: isSelected ? "white" : "black", fontSize: isSelected ? 20 : 12, fontWeight: isSelected ? "bold" : undefined}}>{item?.value}</Label>
      </TouchableOpacity >
      )
    }
    
    return (
      <View style={styles.lifeCounterContainer}>
        <Button
          disabled={parseInt(data.counters[activeCounter]) === 1}
          style={{width: "10%", backgroundColor: "white"}}
          onPress={() => {
            editCounter(index, activeCounter, data.counters[activeCounter] - 1);
            // scrollToIndex(data.counters[activeCounter] - 1);
            }}>
          <Label style={{ fontSize: 22, color: "black"}}>
            -
          </Label>
        </Button>
        <View style={{flex: 1}}>
        {data ? 
          <FlatList 
            getItemLayout={(_, index) => (
              {length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index}
            )}
            ref={flatListRef}
            horizontal
            bounces={false}
            // onScrollToIndexFailed={({index, highestMeasuredFrameIndex, averageItemLength = ITEM_WIDTH}) => scrollToIndex(0)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({item, index}) => `${item?.value}-${Math.random()}`}
            data={Array.from(Array(20), (_, i) =>  { return {value: i + 1, index: i} })}
            renderItem={renderItem}
            initialScrollIndex={data.counters[activeCounter] - 1}
            snapToInterval={ITEM_WIDTH}
            snapToAlignment={"center"}
            scrollToOverflowEnabled={true}
            decelerationRate="fast"
          />
          : null}
        </View>
        <Button
          disabled={parseInt(data.counters[activeCounter]) === 20}
          style={ { width: "10%", backgroundColor: "white" }}
          onPress={() => {
            editCounter(index, activeCounter, data.counters[activeCounter] + 1);
            // scrollToIndex(data.counters[activeCounter]);
          }}>
          <Label style={{ fontSize: 22, color: "black"}}>+</Label>
        </Button>
    </View>
  )
}

export default CounterSliderComponent;

const styles = StyleSheet.create({
  lifeCounterContainer: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%"
  },
})