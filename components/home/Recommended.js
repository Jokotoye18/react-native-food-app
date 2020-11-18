import React from 'react'
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native'


const Recommended = ({item}) => {
    const {image} = item
    const { width } = Dimensions.get('window')

    return <Image source={image} style={styles.Img} />

}

export default Recommended

const styles = StyleSheet.create({
    RecommendListView: {
    },
    Img: {
        width: "20%",
        height: 50,
        resizeMode: 'cover',
        borderRadius: 10,
        marginHorizontal: "2.5%",
        marginBottom: 30
    }
})
