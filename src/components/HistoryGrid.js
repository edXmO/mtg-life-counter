import React from "react"
import { FlatList, StyleSheet, Dimensions } from "react-native";
import HistoryItem from "./HistoryItem";

const mockData = [
  {key: 'A'},
  {key: 'B'},
  {key: 'C'},
  {key: 'D'},
  {key: 'E'},
  {key: 'F'},
  {key: 'G'},
  {key: 'H'},
  {key: 'I'},
  {key: 'J'},
  {key: 'K'},
  {key: 'L'},
  {key: 'M'},
  {key: 'N'},
  {key: 'O'},
  {key: 'P'},
  {key: 'Q'},
  {key: 'R'},
  {key: 'S'},
]

const NUM_COLUMNS = 3;

const HistoryGrid = ({data = mockData}) => {
  return (
    <FlatList 
      data={data}
      style={styles.flatlistContainer}
      renderItem={({item, index}) => <HistoryItem key={`${index}-${item?.key}`} label={item?.key} />}
      numColumns={NUM_COLUMNS}
    />
  )
	}

export default HistoryGrid;

const styles = StyleSheet.create({
  flatlistContainer: {
    flex: 1,
    paddingVertical: 10
  }
})  