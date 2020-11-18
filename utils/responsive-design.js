import {widthPercentageToDP as wdp, heightPercentageToDP as hdp} from 'react-native-responsive-screen'


export const wp = value => {
    const dimension = (value / 375) * 100
    return wdp(`${dimension}%`)
}

export const hp = value => {
    const dimension = (value / 812) * 100
    return hdp(`${dimension}%`)
}