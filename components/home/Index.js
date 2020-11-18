import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { globalStyles } from "../../styles";
import { AuthContext } from "../../context/AuthContext";
import CheeseBurger from "../../images/cheese-burger.jpg";
import LargePizza from "../../images/large-pizza.jpg";
import GrilledTurkey from "../../images/grilled-turkey.jpg";
import PepperSoup from "../../images/peppersoup.jpg";
import Item from "./Item";
import Recommended from "./Recommended";

const DATA = [
  {
    id: "1",
    image: CheeseBurger,
    name: "Cheese Burger",
    ingredient: "Beef, Veggies, Chilli",
    price: 2000,
  },
  {
    id: "2",
    image: GrilledTurkey,
    name: "Lazza Pizza",
    ingredient: "Beef, Veggies, Chilli",
    price: 2070,
  },
  {
    id: "3",
    image: LargePizza,
    name: "Lazza Pizza",
    ingredient: "Beef, Veggies, Chilli",
    price: 2070,
  },
  {
    id: "4",
    image: PepperSoup,
    name: "Lazza Pizza",
    ingredient: "Beef, Veggies, Chilli",
    price: 2070,
  },
];

const RECOMMEND = [
  {
    id: "1",
    image: CheeseBurger,
  },
  {
    id: "2",
    image: GrilledTurkey,
  },
  {
    id: "3",
    image: LargePizza,
  },
  {
    id: "4",
    image: PepperSoup,
  },
];

const Index = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const { logout, state } = useContext(AuthContext)
  console.log(state);;
  return (
    <SafeAreaView style={globalStyles.main}>
      <FlatList
        style={globalStyles.container}
        ListHeaderComponent={() => {
          return (
            <>
              <Text style={styles.title}>Hello, John</Text>
              <Text style={styles.greetingText}>
                Select your meal for the day
              </Text>
              <View style={styles.search}>
                <SearchBar
                  placeholder="search for meals, dishes"
                  value={searchText}
                  onChangeText={(textValue) => setSearchText(textValue)}
                  lightTheme={true}
                  placeholderTextColor="#4A4A4A"
                />
              </View>
            </>
          );
        }}
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => {
          return (
            <>
              <View style={[styles.Recommend, styles.border]}>
                <Text style={styles.Recommended}>Recommended</Text>
                <Text style={styles.ViewAll}>View all</Text>
              </View>
              <View style={styles.Recommend}>
                {RECOMMEND.map((recommendItem, index) => (
                  <Recommended key={index} item={recommendItem} />
                ))}
              </View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    color: "#4A4A4A",
  },
  cart: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 20,
  },
  title: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: "700",
    marginBottom: 8,
    color: "#4A4A4A",
  },
  greetingText: {
    fontSize: 15,
    color: "#4A4A4A",
  },
  search: {
    marginVertical: 25,
  },
  searchInput: {
    color: "#000",
  },
  searchContainer: {
    // backgroundColor: ''
  },
  Recommend: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  border: {
    borderColor: "gray",
    borderTopWidth: 0.3,
    justifyContent: "space-between",
  },
  Recommended: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4A4A4A",
  },
  ViewAll: {
    fontSize: 15,
    fontWeight: "300",
    color: "#4A4A4A",
  },
  ms: {
    backgroundColor: "#ccc",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3,
    fontSize: 18,
  },
  msIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    flexBasis: "10%",
  },
  input: {
    flexBasis: "80%",
    flexGrow: 1,
    height: 50,
    fontSize: 18,
    color: "#4A4A4A",
  },
});
