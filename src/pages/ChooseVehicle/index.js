import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap, Header, VehicleCard} from '../../components';
import {colors} from '../../utils';

const ChooseVehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Choose Vehicle" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Gap height={32} />
        <VehicleCard type="car" onPress={() => navigation.navigate('QRScan')} />
        <Gap height={16} />
        <VehicleCard type="car" />
        <Gap height={16} />
        <VehicleCard type="bike" />
      </View>
    </View>
  );
};

export default ChooseVehicle;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
});
