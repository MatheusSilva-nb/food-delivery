import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const deliveriesStyle = StyleSheet.create({
    card: {
        margin: 10
    },
    cardStatus: {
        borderTopWidth: 3,
        borderTopColor: "yellow"
    },
    cardTitle: {
        color: 'rgb(0,255,111)',
    },
    price: {
        color: 'rgb(0,255,111)',
        fontSize: 16,
        fontWeight: "bold",
        marginEnd: 15
    }
})
