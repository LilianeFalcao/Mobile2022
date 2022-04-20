import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import { text } from 'stream/consumers';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",

      backgroundColor:  colors.fundo
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.white,
        marginBottom: 20,
  },
  formRow: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 5,
  },
  icon: {
    fontSize: 20,
    color: colors.white,
    padding: 10
  },
  input: {
    fontSize: 18,
    color: colors.white,
    padding: 10,
    width: "80%"
  },
  text:{
    alignItems: 'center',
    fontSize: 13,
    color: colors.white,
  }
})

export default styles;