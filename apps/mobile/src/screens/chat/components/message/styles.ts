import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../../../utils/styles";

export const styles = StyleSheet.create({
  sent: {
    alignItems: "flex-end",
  },
  received: {
    alignItems: "flex-start",
  },
  sender: {
    color: COLORS.neutral[400],
    marginBottom: 4,
  },
  bubble: {
    maxWidth: "90%",
    marginBottom: 2,
    paddingVertical: 8,
    paddingHorizontal: SPACING.sm,
    borderRadius: 15,
  },
  bubbleSent: {
    backgroundColor: COLORS.neutral[800],
  },
  bubbleReceived: {
    backgroundColor: COLORS.blue[600],
  },
});
