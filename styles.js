import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { hp, wp } from "./utils/responsive-design";

export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container: {
    // width: wp(375),
    paddingHorizontal: 25,
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#FDF3F1",
    height: hp(57),
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default globalStyles;
