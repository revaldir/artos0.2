import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAdd, IconCar, ILBike, ILCar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const VehicleCard = ({type, onPress}) => {
  const Icon = () => {
    if (type === 'car') {
      return <ILCar />;
    }
    if (type === 'bike') {
      return <ILBike />;
    }
    return <IconAdd />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.vehicle}>
        <Icon />
      </View>
      <View style={styles.txtWrapper}>
        <Text style={styles.name}>Honda Beat</Text>
        <Text style={styles.nopol}>D 5312 KPA</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  vehicle: {
    backgroundColor: colors.primary,
    paddingHorizontal: 36,
    paddingVertical: 21,
    borderRadius: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtWrapper: {padding: 24},
  name: {fontFamily: fonts.primary[500], fontSize: 20, marginBottom: 2},
  nopol: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
  },
});
