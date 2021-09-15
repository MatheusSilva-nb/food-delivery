import { StyleSheet } from "react-native";
import { theme } from "../../../App.style";

export const confirmDeliveryCardStyle = StyleSheet.create({
    icon: {
        color: theme.colors.primary,
        marginTop: 20
    },
    cancelButton: {
        marginBottom: 10
    },
})