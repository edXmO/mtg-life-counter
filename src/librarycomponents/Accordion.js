import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Label from '../librarycomponents/Label';
import { Ionicons } from '@expo/vector-icons';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";
import Shadow from "../utils/Shadow";

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const Accordion = ({ children, label }) => {

    const styles = StyleSheet.create({
        mainContainer: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "center"
        },
        bodyContainer: {
            width: "100%",
            position: 'absolute',
            bottom: 0,
            paddingVertical: 20,
            marginBottom: 5
        },
        bodyBackground: {
            overflow: "hidden",
            backgroundColor: "blue"
        }
    });

    const [ open, setOpen ] = useState(false);
    const progress = useSharedValue(1);
    const [ bodySectionHeight, setBodySectionHeight ] = useState(0);

    const toggleItem = () => {
        'worklet'
        progress.value = withSpring(1);
    }

    const animatedCaretStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${interpolate(progress.value, [0, 1], [0, 180])}deg`}]
        }
    }, []);

    return (
        <>
            <TouchableOpacity 
                onPress={() => {
                    return new Promise(resolve => {
                        return resolve(setOpen(!open))
                    })
                    .then(() => {
                        toggleItem();
                    });
                }}
                style={[{
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                paddingVertical: 15,
                borderRadius: 7
                }, Shadow ]}>
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
                        color="black"
                        style={animatedCaretStyles} 
                        />
                </View>
            </TouchableOpacity>
            <Animated.View
                style={[styles.bodyBackground, { height: bodySectionHeight }]}>
                <View
                    style={styles.bodyContainer}
                    onLayout={({ nativeEvent }) => {
                        setBodySectionHeight(nativeEvent.layout.height);
                    }}>
                    {children}
                </View>
            </Animated.View>
        </>
    )
}

export default Accordion;