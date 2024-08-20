import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  header: {
    width: "100%",
    flexDirection: "row",
  },
  back: {
    backgroundColor: "#F2F2F2",
    height: 42,
    width: 42,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    gap: 7,
  },
})
