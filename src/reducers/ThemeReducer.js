import React from "react";

const ThemeReducer = (state, action) => {

  switch(action.type){
    case 'UPDATE_APP': 
      return {...state, theme: action.payload.theme}
    default:
      return;
  }
}

export default ThemeReducer;