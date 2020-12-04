import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconBike, ILBike, ILBikeBlack} from '../../assets';
import {Gap, Header, ListItem} from '../../components';
import {colors, fonts} from '../../utils';

const HistoryDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="History Detail" onPress={() => navigation.goBack()} />
      <View style={styles.iconWrapper}>
        <Image source={ILBikeBlack} style={styles.image} />
      </View>
      <View style={styles.sectionContent}>
        <View style={styles.textWrapper}>
          <Text style={styles.name}>Honda Beat</Text>
          <Text style={styles.nopol}>D 2145 KER</Text>
        </View>
        <ListItem desc="Tanggal" value="24/12/2020" />
        <Gap height={12} />
        <ListItem desc="Nominal" value="Rp. 72.000" />
        <Gap height={12} />
        <ListItem desc="Kepada" value="Kuro Takhasomi" />
        <Gap height={12} />
        <ListItem desc="Nomor Handphone" value="081920554321" />
        <Gap height={12} />
        <ListItem desc="Lokasi" value="Metro Indah Mall" />
      </View>
    </View>
  );
};

export default HistoryDetail;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  image: {height: 80, width: 80},
  sectionContent: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  textWrapper: {alignItems: 'center', paddingVertical: 16},
  name: {fontFamily: fonts.primary[600], fontSize: 18, marginBottom: 6},
  nopol: {fontFamily: fonts.primary.normal, fontSize: 16},
});
