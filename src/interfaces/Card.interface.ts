import { Image } from "react-native"

export interface cardAnimeProps {
    children: JSX.Element
  }

  export interface CardProps {
    data: {
      id: number,
      nome: string,
      data: Date,
      avaliacao: string,
      consideracoes: string,
      imagem: Image
      topico: {
        id: number,
        item: string
      }[]
    }
  }