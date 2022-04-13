import {StackNavigationProp} from "@react-navigation/stack";

export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}