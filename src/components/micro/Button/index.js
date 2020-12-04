import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress}) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.wrapper(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: (type) => ({
    backgroundColor:
      type === 'Secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 12,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'Secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
});
