import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNav from "./screens/auth-navigation-screen/Index";
import MainNav from "./screens/main-navigation-screen/Index";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [appLoading, setAppLoading] = useState(true);

  const { user, isAuth, isError, isLoading } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 5000);
  }, []);

  if (appLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Am Loading...</Text>
      </View>
    );
  }

  return (
    <AuthProvider>
      <StatusBar animated={true} barStyle="light-content" />
      <NavigationContainer>
        {isAuth ? <MainNav /> : <AuthNav />}
      </NavigationContainer>
    </AuthProvider>
  );
}
