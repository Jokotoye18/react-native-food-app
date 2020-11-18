import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {hp, wp} from '../utils/responsive-design'
import PropTypes from 'prop-types';

const Button = ({title, handlePress, bgColor, style}) => {
    return (
        <TouchableOpacity onPress={handlePress} style={[styles.btn, {backgroundColor: bgColor}, style]} activeOpacity={0.4}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    handlePress: PropTypes.func,
    bgColor: PropTypes.string,
    style: PropTypes.object
}

Button.defaultProps = {
    bgColor: "#E25F38",
    style: null
}

export default Button


const styles = StyleSheet.create({
    btn: {
        height: hp(50),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: hp(10),
      },
      btnText: {
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: hp(14),
        color: "#ffffff",
      },
})
