import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    cardAnime: {
    backgroundColor: colors.pop,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 45,
  },
  img:{
    width: 100,
    height: 100,
  },
})

export default styles