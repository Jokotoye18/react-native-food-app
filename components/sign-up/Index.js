import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from "../Button";
import Footer from "../Footer";
import { globalStyles } from "../../styles";
import { styles as shareStyles } from "../login/Index";
import { hp, wp } from "../../utils/responsive-design";
import Icon from "react-native-vector-icons/FontAwesome5";

const Index = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const storeUser = async (userInfo) => {
    try {
      const jsonValue = JSON.stringify(userInfo)
      await AsyncStorage.setItem('user', jsonValue)
    } catch (error) {
      // handle error here
      console.error(error);
    }
  }



  const handleSignup = () => {
    if(!username, !email, !password) {
      return alert('Username, Email and Password cannot be empty.')
    }
    const user = {
      username,
      email,
      password
    }
    setUsername('')
    setPassword('')
    setEmail('')
    storeUser(user)
    Alert.alert(
      'Success',
      `Your account has been created successfully`,
      [
        {
          text: 'PROCEED',
          onPress: () => navigation.navigate('Login')
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <SafeAreaView style={globalStyles.main}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View style={shareStyles.titles}>
          <Text style={shareStyles.title}>Create your Account</Text>
          <Text style={shareStyles.subTitle}>It's free and easy to setup</Text>
        </View>
        <View>
          <View style={shareStyles.control}>
            <Text style={shareStyles.label}>Username</Text>
            <TextInput
              style={[
                shareStyles.input,
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
          <View style={shareStyles.control}>
            <Text style={shareStyles.label}>Email</Text>
            <TextInput
              style={[
                shareStyles.input,
                {
                  borderBottomColor: isFocused
                    ? "#E25F38"
                    : "rgba(0, 0, 0, .2)",
                },
              ]}
              keyboardType="email-address"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={shareStyles.control}>
            <Text style={shareStyles.label}>Password</Text>
            <View style={[shareStyles.passwordInputDiv]}>
              <TextInput
                style={[
                  shareStyles.input,
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
                  style={shareStyles.icon}
                />
              ) : null}
            </View>
          </View>
        </View>
        <Button title="signup" style={styles.btn} handlePress={handleSignup} />
        <View style={globalStyles.rowCenter}>
          <Text style={[shareStyles.ask, { marginRight: wp(5) }]}>
            Existing user?
          </Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={[{ color: "#E25F38" }, shareStyles.ask]}
          >
            Signin
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  btn: {
    marginTop: hp(63),
  },
});
