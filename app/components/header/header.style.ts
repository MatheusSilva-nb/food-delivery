import { StyleSheet } from "react-native";

export const headerStyle = StyleSheet.create({
    menu: {
        color: "white",
        
    },
    bar: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 10, height:40 },
        shadowOpacity: 0.9,
        shadowRadius: 0,
        elevation: 15,
        height: 40,
    }
});