import { StyleSheet } from 'react-native';
import  colors  from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.perfil,
  },
  fundo:{
    backgroundColor:colors.perfil
  },
  textoPerfil:{
    width: 93,
    height: 24,
    left: 50,
  },
  imagem:{
    alignItems: "center",
    justifyContent: "center"
  }
})

export default styles;