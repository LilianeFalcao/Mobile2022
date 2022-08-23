import { StackNavigationProp } from "@react-navigation/stack";

export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Map:undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

//Post

export type PostStackParamList = {
  Post: undefined,
  EnviarMensagem: undefined
}
type PostScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type PostTypes = {
  navigation: PostScreenNavigationProp
}