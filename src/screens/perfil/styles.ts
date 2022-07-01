import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.perfil,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    padding: 5
  },
  title: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    padding: 5,
    width: "80%"
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    }
})

export default styles