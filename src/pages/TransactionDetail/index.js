import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ListItem} from '../../components';
import {colors} from '../../utils';

const TransactionDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Transaction Detail" noPress />
      <View style={styles.content}>
        <View style={styles.sectionWrapper}>
          <ListItem desc="Tanggal" value="24/12/2020" />
          <Gap height={12} />
          <ListItem desc="Nominal" value="Rp. 53.000" />
          <Gap height={12} />
          <ListItem desc="Kepada" value="Kuro Takhasomi" />
          <Gap height={12} />
          <ListItem desc="Nomor Handphone" value="081920345132" />
          <Gap height={12} />
          <ListItem desc="Lokasi" value="Metro Indah Mall" />
        </View>
        <View style={styles.btnWrapper}>
          <Button
            title="Bayar"
            onPress={() => navigation.replace('QRSuccess')}
          />
          <Gap height={12} />
          <Button
            title="Cancel"
            type="Secondary"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {justifyContent: 'space-between', flex: 1},
  sectionWrapper: {paddingTop: 32},
  btnWrapper: {padding: 40},
});
