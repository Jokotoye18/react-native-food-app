import React, { useState, useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../../styles";
import { hp, wp } from "../../utils/responsive-design";
import Burger from "../../images/cheese-burger.jpg";
import { AuthContext } from "../../context/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from "../Button";
import Footer from "../Footer";

const Index = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch, isAuth } = useContext(AuthContext);
  console.log(state);

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      const x = value !== null ? JSON.parse(value) : null;
      return x;
    } catch (error) {
      Alert.alert(
        "Error",
        `Your account could not be found! You may proceed to create an account.`,
        [
          {
            text: "PROCEED",
            onPress: () => navigation.navigate("Sign Up"),
          },
        ],
        { cancelable: true }
      );
    }
  };

  const handleLogin = async () => {
    if ((!username, !password)) {
      return alert("Username or Password cannot be empty.");
    }
    const user = await getUser();
    if (user === null) {
      return alert("Unexpected error occur!");
    }
    if (user.username == username && user.password == password) {
      dispatch({
        type: "LOGIN",
        payload: user,
      });
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid credential.");
    }
  };

  return (
    <SafeAreaView style={[globalStyles.main]}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View style={styles.titles}>
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subTitle}>Log in to your account</Text>
        </View>
        <View>
          <View style={styles.control}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={[
                styles.input,
                {
                  borderBottomColor: isFocused
                    ? "#E25F38"
                    : "rgba(0, 0, 0, .2)",
                },
              ]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.control}>
            <Text style={styles.label}>Password</Text>
            <View style={[styles.passwordInputDiv]}>
              <TextInput
                style={[
                  styles.input,
                  {
                    borderBottomColor: isFocused
                      ? "#E25F38"
                      : "rgba(0, 0, 0, .2)",
                  },
                ]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={secure}
              />

              {password ? (
                <Icon
                  name={secure ? "eye" : "eye-slash"}
                  size={20}
                  color="rgba(0, 0, 0, .5)"
                  onPress={() => setSecure(!secure)}
                  style={styles.icon}
                />
              ) : null}
            </View>
          </View>
          <View style={[globalStyles.rowBetween, styles.password]}>
            <View
              style={[globalStyles.rowCenter, { justifyContent: "flex-start" }]}
            >
              <Text>+</Text>
              <Text style={styles.remember}>Remember me</Text>
            </View>
            <Text style={styles.forget}>Forget Password</Text>
          </View>
        </View>
        <Button title="login" handlePress={handleLogin} />
        <View style={globalStyles.rowCenter}>
          <Text style={[styles.ask, { marginRight: wp(5) }]}>New user?</Text>
          <Text
            onPress={() => navigation.navigate("Sign Up")}
            style={[{ color: "#E25F38" }, styles.ask]}
          >
            Signup
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Index;

export const styles = StyleSheet.create({
  img: {
    marginLeft: wp(176),
    marginTop: hp(40),
    width: wp(220),
    height: hp(220),
  },
  titles: {
    marginTop: hp(200),
    marginBottom: hp(8),
  },
  title: {
    fontSize: hp(26),
    fontWeight: "700",
    fontStyle: "normal",
  },
  subTitle: {
    marginTop: hp(8),
    fontSize: hp(14),
    fontWeight: "400",
  },
  control: {
    marginTop: hp(45),
  },
  label: {
    fontWeight: "400",
    fontSize: hp(14),
    marginBottom: hp(2),
  },
  input: {
    fontSize: hp(18),
    fontWeight: "500",
    borderBottomWidth: hp(1),
    // borderWidth: hp(1),
    height: hp(23),
    // paddingBottom: hp(9),
    // paddingVertical: 30
  },
  passwordInputDiv: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    right: 0,
    top: hp(-5),
  },
  ask: {
    marginTop: hp(20),
  },
  remember: {
    color: "#4A4A4A",
  },
  forget: {
    color: "#E25F38",
  },
  password: {
    marginTop: hp(24),
    marginBottom: hp(63),
  },
});
