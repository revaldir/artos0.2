/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <Image source={ILLogo} style={styles.image} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 120, height: 120},
  wrapper: {
    height: 150,
    width: 150,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
});
