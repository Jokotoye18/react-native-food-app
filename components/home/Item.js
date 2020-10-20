import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import { AirbnbRating, Rating } from 'react-native-elements';


const Item = ({item}) => {
    const {image, name, ingredient} = item
    return (
        <View>
            <Image source={image} style={styles.Img} />
            <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.ingredient}>{ingredient}</Text>
                <AirbnbRating
                count={5}
                reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
                defaultRating={5}
                showRating={false}
                size={10}
                />
            </View>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    ItemView: {
        
    },
    Img: {
        width: '100%',
        height: 140,
        resizeMode: 'cover',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    info: {
        marginVertical: 20,
        marginLeft: 30,
        color: '#4A4A4A',
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#4A4A4A',
    },
    ingredient: {
        marginVertical: 5,
        color: '#4A4A4A',
    }
})
