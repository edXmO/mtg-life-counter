import React from "react"
import { FlatList, Dimensions } from "react-native";
import ScrollViewContainer from "../utils/ScrollViewContainer";
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

const HistoryGrid = ({ data = mockData, theme, isDragging, setIsDragging }) => {

  return (
    <FlatList
      contentContainerStyle={{...ScrollViewContainer}}
      data={data}
      renderItem={({item, index}) => <HistoryItem key={`${index}-${item?.key}`} label={item?.key} index={index} isDragging={isDragging} setIsDragging={setIsDragging} />}
      numColumns={NUM_COLUMNS}
    />
)}

export default HistoryGrid;
