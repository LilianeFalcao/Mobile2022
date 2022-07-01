import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: colors.perfil
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.Card,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: "80%",
    height: 45,
    padding: 5
  },
  input: {
    width: "95%"
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color: colors.white
  }
})

export default styles;