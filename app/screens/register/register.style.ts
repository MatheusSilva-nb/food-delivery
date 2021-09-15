import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const registerStyle = StyleSheet.create({
    content : {
        padding: 15,
        paddingTop: 0
    },
    icon: {
        color: theme.colors.primary
    },
    button: {
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 10, height:40 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
        elevation: 15,
    },
    anim:{
        width: 200,
        height: 200,
        marginHorizontal: 20,
        padding: 35,
 
    }
})