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
            alignSelf: "center",
            marginBottom: 5,
            borderRadius: 10,
            backgroundColor: "white",
            overflow: "visible",
            position: "relative"
        },
        bodyBackground: {
            position: "absolute",
            zIndex: -1,
            top: 15,
            overflow: "visible",
            width: "90%",
            marginBottom: 5
        }
    });

    const [ open, setOpen ] = useState(false);
    const progress = useSharedValue(0);
    const heightProgress = useSharedValue(0);

    const animatedCaretStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${interpolate(progress.value, [0, 1], [180, 0])}deg`}],
            color: interpolateColor(progress.value, [0, 1], ['royalblue', '#000000']),
        }
    }, []);

    const animatedAccordionStyles = useAnimatedStyle(() => {
        return {
            height: interpolate(heightProgress.value,
                [0, 1],
                [60, 280],
            ),
        }
    }, []);
    
    const animatedBodyContainerStyles = useAnimatedStyle(() => {
        return {
            minHeight: 65,
            opacity: interpolate(progress.value, [0, 1], [0, 1]),
            height: interpolate(progress.value,
                [0, 1],
                [0, 200],
                ),
            transform: [{ translateY: interpolate(progress.value, [0, 1], [0, 100])}]
        }
    }, [])

    return (
        <>  
        <Animated.View 
            style={[animatedAccordionStyles]}>
            <TouchableOpacity
                onPress={async () => {
                    await new Promise(resolve => {
                        return resolve(setOpen(!open))
                    })
                    .then(() => {
                        if(open){
                            heightProgress.value = withSpring(1)
                        }
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
            </Animated.View>
            <Animated.View
                style={[styles.bodyBackground, animatedAccordionStyles]}>
                <Animated.View
                    // onLayout={({nativeEvent}) => setToggleSectionHeight(nativeEvent.layout.height)}
                    style={[styles.bodyContainer, animatedBodyContainerStyles, Shadow]}
                    >
                    {children}
                </Animated.View>
            </Animated.View>
        </>
    )
}

export default Accordion;