import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        ///backgroundColor: theme.colors.primary

        
    },
    view: {
        width: "80%",
       
    },
    cardTitle: {
        color: theme.colors.primary
    },
    cardButton: {
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
        borderRadius: 15,
    },
    card: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
        borderBottomWidth: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height:40 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
        elevation: 15,
    },
    anim:{
        width: 160,
        height: 160,
        marginHorizontal: 100,
    }
})