import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderItem = ({item}) => {
    console.log(item);
    const {image, name, ingredient, price} = item


    return (
        <View style={styles.ListItemView}>
            <Image source={image} style={styles.ImgStyle} />
            <View style={styles.ItemInfo}>
                <Text style={styles.ItemName}>{name}</Text>
                <Text style={styles.ItemIngrdient}>{ingredient}</Text>
            </View>
            <Text style={styles.Price}>NGN {price}</Text>
            <TouchableOpacity style={styles.IconContainer}>
               <Icon
               style={styles.Icon}
               size={15}
               name="trash"
               />
            </TouchableOpacity>
        </View>
    )
}

export default OrderItem


const styles = StyleSheet.create({
    ListItemView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 20
    },
    ImgStyle: {
        width: "100%",
        height: 60,
        resizeMode: "cover",
        borderRadius: 10,
        flexBasis: "15%"
    },
    ItemInfo: {
        flexBasis: "50%"
    },
    ItemName: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8,
        color: '#4A4A4A'
    },
    ItemIngrdient: {
        fontSize: 14,
        color: '#4A4A4A'
    },
    Price: {
        color: '#4A4A4A',
        fontSize: 15,
        fontWeight: '500',
        flexBasis: "20%"
    },
    IconContainer: {
        backgroundColor: '#F9E1DA',
        height: 30,
        width: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Icon: {
        // textAlign: 'center',
    }
})