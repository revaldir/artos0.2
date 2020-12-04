/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Image,StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
     <Image source={ILLogo} style={styles.image} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {marginTop:70},
});
