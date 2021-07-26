import React, { useReducer } from 'react';
import { useFonts } from "expo-font";
import MainNavigation from './src/navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeContext from './src/context/ThemeContext';
import ThemeReducer from "./src/reducers/ThemeReducer";

export default function App() {

  const [theme, dispatchTheme] = useReducer(ThemeReducer, {theme: 'dark'});

  // let [fonts] = useFonts({

  // })

  // if(!fonts){
  //   return "Couldnt load fonts, using default ones";
  // }

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, dispatchTheme }}>
        <MainNavigation />
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}


