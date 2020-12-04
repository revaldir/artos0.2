import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Transaction} from '../../components/macro';
import {Gap} from '../../components/micro';
import {colors, fonts} from '../../utils';

const History = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Gap height={30} />
        <Text style={styles.text}>History</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Transaction
            icon="car"
            clickable
            desc="Xenia - D 5092 ABS"
            amount="Rp. 24.000"
          />
          <Transaction
            icon="bike"
            clickable
            desc="Vario - BK 2401 KC"
            amount="Rp. 24.000"
          />
          <Transaction
            icon="topup"
            desc="Top Up"
            amount="Rp. 24.000"
            date="21/12/2020"
          />
          <Transaction
            icon="withdraw"
            desc="Withdraw"
            amount="Rp. 24.000"
            date="21/04/2020"
          />
          <Transaction
            icon="qrpay"
            desc="QR Pay"
            amount="Rp. 24.000"
            date="21/06/2020"
          />
          <Transaction
            icon="topup"
            desc="Top Up"
            amount="Rp. 104.000"
            date="21/12/2020"
          />
          <Transaction
            icon="qrpay"
            desc="QR Pay"
            amount="Rp. 95.000"
            date="21/06/2020"
          />
          <Transaction
            icon="bike"
            clickable
            desc="Mio - B 1405 KFC"
            amount="Rp. 24.000"
          />
        </ScrollView>
        <Gap height={30} />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    backgroundColor: colors.secondary,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 30,
  },
  text: {fontFamily: fonts.primary[600], fontSize: 24, marginBottom: 24},
});
