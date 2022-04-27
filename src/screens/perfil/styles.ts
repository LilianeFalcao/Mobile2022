import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fundo:{
    backgroundColor:Colors.perfil
  },
  textoPerfil:{
    width: 93,
    height: 24,
    left: 50,
  },
  imagem:{
    width: 100,
    height: 100
  }
})

export default styles;