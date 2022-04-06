import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    butttonCinza:{
        backgroundColor:colors.cinza,
        borderRadius: 5,
        margin:10
    },
    butttonPurple:{
        backgroundColor:colors.purple,
        borderRadius: 5,
        margin:10
    },
    butttonOrange:{
        backgroundColor:colors.orange,
        borderRadius: 5,
        margin:10
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        fontSize: 18
      }
})

export default styles