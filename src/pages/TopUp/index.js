/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ILTopUp} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const TopUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Top Up" type="dark" onPress={() => navigation.goBack()} />
      <Gap height={40} />
      <View style={styles.imageWrapper}>
        <Image source={ILTopUp} style={styles.image} />
      </View>
      <Gap height={50} />
      <View style={styles.content}>
        <Input placeholder="Nominal Top Up" />
        <Gap height={40} />
        <Button
          title="SUBMIT"
          onPress={() => navigation.replace('TopUpSuccess')}
        />
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  imageWrapper: {alignItems: 'center'},
  image: {height: 160, width: 160},
  content: {paddingHorizontal: 40},
});
