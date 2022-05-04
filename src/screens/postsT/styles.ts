import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  rowSearch: {
    flexDirection: 'row',
    backgroundColor: colors.pop,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    width: "80%",
    height: 45,
  },
  fundo:{
    backgroundColor:colors.perfil
  },
  input: {
    width: "80%"
  },
  icon: {
    fontSize: 24,
    padding: 5
  }
})

export default styles;