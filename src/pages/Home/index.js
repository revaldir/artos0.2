import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Transaction} from '../../components/macro';
import {Balance, Gap, MenuItem} from '../../components/micro';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <Balance />
            <Gap height={36} />
            <View style={styles.wrapperMenu}>
              <MenuItem
                type="TopUp"
                label="Top Up"
                onPress={() => navigation.navigate('TopUp')}
              />
              <MenuItem
                type="QRPay"
                label="QR Pay"
                onPress={() => navigation.navigate('QRScan')}
              />
              <MenuItem
                type="Transfer"
                label="Transfer"
                onPress={() => navigation.navigate('Transfer')}
              />
            </View>
            <Gap height={40} />
            <Text style={styles.text}>5 Transaksi Terakhir</Text>
            <Gap height={16} />
          </View>
          <View style={styles.wrapperTrans}>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.background,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  wrapperSection: {paddingHorizontal: 16},
  wrapperTrans: {paddingHorizontal: 20},
  wrapperMenu: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
});
