import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ListEditItem} from '../../components';
import {colors} from '../../utils';

const EditVehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Vehicle" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View>
          <Gap height={32} />
          <ListEditItem desc="Jenis Kendaraan" />
          <Gap height={12} />
          <ListEditItem desc="Nama Kendaraan" />
          <Gap height={12} />
          <ListEditItem desc="Nomor Plat" />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            title="Update"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default EditVehicle;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1, justifyContent: 'space-between'},
  btnWrapper: {padding: 40},
});
