import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity, Touchable } from "react-native";
import Label from '../librarycomponents/Label';
import { MaterialIcons } from '@expo/vector-icons';

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
            backgroundColor: "transparent"

        }
    });

    const [ open, setOpen ] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [ bodySectionHeight, setBodySectionHeight ] = useState(0);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });

    const bodyCollapsed = useRef(null);

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.8, 1),
                useNativeDriver: false,
            }).start();
        }
        setOpen(!open);
    }

    return (
        <>
            <View style={{ width: "100%", flexDirection: "row", justifyContent: "center",}}>
                {label}
                <TouchableOpacity onPress={() => toggleListItem()}>
                    <Label>Collapse!</Label>
                </TouchableOpacity>
            </View>
            <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
                <View
                    ref={bodyCollapsed}
                    style={styles.bodyContainer}
                    onLayout={({nativeEvent}) => {
                        setBodySectionHeight(nativeEvent.layout.height);
                    }}>
                    {children}
                </View>
            </Animated.View>
        </>
    )
}

export default Accordion;