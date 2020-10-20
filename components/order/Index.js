import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, Button, FlatList} from 'react-native'
import CheeseBurger from '../../images/cheese-burger.jpg'
import LargePizza from '../../images/large-pizza.jpg'
import GrilledTurkey from '../../images/grilled-turkey.jpg'
import PepperSoup from '../../images/peppersoup.jpg'

import OrderItem from './OrderItem'

const DATA = [
    {
        id: "1",
        image: CheeseBurger,
        name: "Cheese Burger",
        ingredient: 'Beef, Veggies, Chilli',
        price: 2000
    },
    {
        id: "2",
        image: LargePizza,
        name: "Lazza Pizza",
        ingredient: 'Beef, Veggies, Chilli',
        price: 2070
    },
    {
        id: "3",
        image: GrilledTurkey,
        name: "Grilled Turkey",
        ingredient: 'Beef, Veggies, Chilli',
        price: 3500
    },
    {
        id: "4",
        image: PepperSoup,
        name: "PeeperSoup",
        ingredient: 'Beef, Veggies, Chilli',
        price: 4000
    },
]

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Text style={styles.title}>My Orders</Text>
            <Text style={styles.greetingText}>Welcome to your cart, preview items below.</Text>
            <FlatList data={DATA}
            renderItem={({item}) => <OrderItem item={item} />}
             keyExtractor={item => item.id}
            />
            <View style={styles.total}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.titlePrice}>NGN 20,000</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
    flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    color: '#4A4A4A'
    },
    title: {
        marginTop: 30,
        fontSize: 35,
        fontWeight: '700',
        marginBottom: 8,
        color: '#4A4A4A'
    },
    greetingText: {
        fontSize: 15,
        color: '#4A4A4A'
    },
    total: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    titleText: {
        color: '#4A4A4A',
        fontWeight: '400',
        fontSize: 15,
    },
    titlePrice: {
        color: '#4A4A4A',
        fontSize: 30,
        fontWeight: '600'
    },
    btn: {
        backgroundColor: '#E25F38', 
        padding: 10,
        borderRadius: 5,
        marginVertical: 50
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    }
});

