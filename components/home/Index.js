import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, Button, FlatList, Dimensions} from 'react-native'
import { SearchBar } from 'react-native-elements';

import CheeseBurger from '../../images/cheese-burger.jpg'
import LargePizza from '../../images/large-pizza.jpg'
import GrilledTurkey from '../../images/grilled-turkey.jpg'
import PepperSoup from '../../images/peppersoup.jpg'
import Item from './Item'
import Recommended from './Recommended'


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
      image: GrilledTurkey,
      name: "Lazza Pizza",
      ingredient: 'Beef, Veggies, Chilli',
      price: 2070
  },
]

const RECOMMEND = [
  {
    id: '1',
    image: CheeseBurger
  },
  {
    id: '2',
    image: GrilledTurkey
  },
  {
    id: '3',
    image: LargePizza
  },
  {
    id: '4',
    image: PepperSoup
  },
]


const Index = ({navigation}) => {
    const [searchText, setSearchText] = useState('')
    const { width } = Dimensions.get('window')
    const size = width / 6


    return (
        <View style={styles.container}>
          <Button title="Go to Order" onPress={() => navigation.navigate('Order')} />
          <Text style={styles.title}>Hello, John</Text>
          <Text style={styles.greetingText}>Select your meal for the day</Text>
          <View style={styles.search}>
            <SearchBar
              placeholder="search for meals, dishes"
              value={searchText}
              onChangeText={textValue => setSearchText(textValue)}
              lightTheme={true}
              showLoading={true}
              placeholderTextColor='#4A4A4A'
            />
          </View>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
          <View style={styles.Recommend}>
            <Text style={styles.Recommended}>Recommended</Text>
            <Text style={styles.ViewAll}>View all</Text>
          </View>
          <FlatList style={{marginBottom: 30}}
            data={RECOMMEND}
            renderItem={({item}) => <Recommended item={item} style={styles.Img} />}
            keyExtractor={item => item.id}
            numColumns={4}
          />
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
    search: {
      marginVertical: 25,
    },
    searchInput: {
      color: '#000',
    },
    searchContainer: {
      // backgroundColor: ''
    },
    Recommend: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 30
    },
    Recommended: {
      fontSize: 20,
      fontWeight: '600',
      color: '#4A4A4A',
    },
    ViewAll: {
      fontSize: 15,
      fontWeight: '300',
      color: '#4A4A4A',
    },
    
    Img: {
      resizeMode: 'cover',
      borderRadius: 10,
      marginVertical: 40,
      marginHorizontal: "2.5%"
    },
  });
