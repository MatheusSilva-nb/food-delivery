import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const addressStyle = StyleSheet.create({
    marginHorizontal: {
        marginHorizontal: 10,
    },
    buttonIconAdd:{
        position: "absolute",
        right: -10,
        top: 2,
    },
    buttonIconAddLabelStyle:{
        fontSize: 30
    },
    confirmButtonStyle:{
        margin:10,
        marginTop: 80,
        height: 50,
        paddingVertical: 3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 10, height:40 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
        elevation: 15,
    },
    confirmButtonLabelStyle:{
        fontSize: 18
    },
    buttonIconRemove:{
        color: theme.colors.primary,
        opacity: 0.7,
    }
})