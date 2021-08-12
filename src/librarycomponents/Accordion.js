import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Label from '../librarycomponents/Label';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Easing, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import Shadow from "../utils/Shadow";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const Accordion = ({ children, label }) => {

    const styles = StyleSheet.create({
        mainContainer: {
            width: "90%",
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "white",
        },
        bodyContainer: {
            width: "100%",
            marginBottom: 5,
            borderRadius: 10,
            backgroundColor: "white",

        },
        bodyBackground: {
            width: "90%",
            marginTop: 10,
            marginBottom: 5
        }
    });

    const [ open, setOpen ] = useState(false);
    const progress = useSharedValue(0);
    const [ bodySectionHeight, setBodySectionHeight ] = useState(0);
    const [ toggleSectionHeight, setToggleSectionHeight] = useState(0);

    const animatedCaretStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${interpolate(progress.value, [0, 1], [180, 0])}deg`}],
            color: interpolateColor(progress.value, [0, 1], ['royalblue', '#000000'])
        }
    }, []);

    const animatedAccordionStyles = useAnimatedStyle(() => {
        return {
            opacity: interpolate(progress.value, [0, 1], [1, 0]),
        }
    }, []);

    const animatedBodyContainerStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: interpolate(progress.value, [0, 1], [0, bodySectionHeight])}]
        }
    }, [])

    return (
        <>  
        {/* <Animated.View 
            onLayout={({nativeEvent}) => { 
                setToggleSectionHeight(nativeEvent.layout.height)
            }}
            style={[animatedAccordionStyles, { height: toggleSectionHeight * 2 }]}> */}
            <TouchableOpacity
                onLayout={({nativeEvent}) => { 
                    setToggleSectionHeight(nativeEvent.layout.height)
                }}            
                onPress={async () => {
                    await new Promise(resolve => {
                        return resolve(setOpen(!open))
                    })
                    .then(() => {
                        if(open){
                            progress.value = withSpring(0);
                        } else {
                            progress.value = withSpring(1);
                        }
                    });
                }}
                style={[styles.mainContainer, Shadow ]}>
                <View style={{
                    flex: 1,
                    paddingHorizontal: 15
                }}>
                    <Label>{label}</Label>
                </View>
                <View style ={{
                    paddingHorizontal: 15,
                }}>
                    <AnimatedIcon
                        name="md-caret-up-circle-outline" 
                        size={30}
                        style={animatedCaretStyles} 
                        />
                </View>
            </TouchableOpacity>
            {/* </Animated.View> */}
            <Animated.View
                style={[styles.bodyBackground, animatedAccordionStyles]}>
                <Animated.View
                    style={[styles.bodyContainer, animatedBodyContainerStyles]}
                    onLayout={({ nativeEvent }) => {
                        setBodySectionHeight(-nativeEvent.layout.height);
                    }}>
                    {children}
                </Animated.View>
            </Animated.View>
        </>
    )
}

export default Accordion;