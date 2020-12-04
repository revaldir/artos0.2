import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ListEditItem} from '../../components';
import {colors} from '../../utils';

const AddVehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Add Vehicle" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View>
          <Gap height={32} />
          <ListEditItem desc="Jenis Kendaraan" placeholder="Jenis Kendaraan" />
          <Gap height={12} />
          <ListEditItem desc="Nama Kendaraan" placeholder="Nama Kendaraan" />
          <Gap height={12} />
          <ListEditItem desc="Nomor Plat" placeholder="Nomor Plat" />
        </View>
        <View style={styles.btnWrapper}>
          <Button title="Add" onPress={() => navigation.replace('MainApp')} />
        </View>
      </View>
    </View>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {justifyContent: 'space-between', flex: 1},
  btnWrapper: {padding: 40},
});
