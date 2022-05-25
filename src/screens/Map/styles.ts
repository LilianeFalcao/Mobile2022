import {StyleSheet, Dimensions} from "react-native";
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    }
})

export default styles;