/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DummyUser} from '../../assets';
import {Transaction} from '../../components/macro';
import {Gap, MenuItem} from '../../components/micro';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Saldo Anda:</Text>
            <Text style={styles.text}>Rp. 650.000</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={DummyUser} style={styles.avatar} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperMenu}>
          <View style={styles.wrapperMenuItem}>
            <MenuItem
              type="TopUp"
              label="Top Up"
              onPress={() => navigation.navigate('TopUp')}
            />
          </View>
          <View style={styles.wrapperMenuItem}>
            <MenuItem
              type="QRPay"
              label="QR Pay"
              onPress={() => navigation.navigate('ChooseVehicle')}
            />
          </View>
          <View style={styles.wrapperMenuItem}>
            <MenuItem
              type="Withdraw"
              label="Withdraw"
              onPress={() => navigation.navigate('Withdraw')}
            />
          </View>
        </View>
        <Gap height={24} />
        <Text style={styles.subText}>Recent Transactions</Text>
        <Gap height={16} />
        <ScrollView style={styles.wrapperTrans}>
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
            onPress={() => navigation.navigate('HistoryDetail')}
          />
          <Transaction
            icon="topup"
            desc="Top Up"
            amount="Rp. 24.000"
            date="21/12/2020"
          />
        </ScrollView>
        <Gap height={30} />
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
    backgroundColor: colors.secondary,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    paddingHorizontal: 32,
    paddingVertical: 40,
    height: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderBottomRightRadius: 80,
    marginBottom: -50,
  },
  avatar: {height: 110, width: 110},
  text: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
  subText: {fontFamily: fonts.primary[600], fontSize: 14, marginLeft: 24},
  wrapperSection: {paddingHorizontal: 16},
  wrapperTrans: {paddingHorizontal: 20},
  wrapperMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  wrapperMenuItem: {
    backgroundColor: colors.white,
    height: 100,
    width: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.border,
  },
});
