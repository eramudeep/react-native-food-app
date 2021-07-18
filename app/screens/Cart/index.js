import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Header from '../../components/Header';
import TopCard from '../../components/CartCards/TopCard';
import CartItemCard from '../../components/CartCards/CartItemCard';
import {
  appColors,
  cartCardTop,
  popularProducts,
  shadow,
} from '../../utils/appColors';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
export default function index() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          hideSearch
          hideIcons
          containerStyle={{
            flexDirection: 'row',
            padding: scale(20),
            justifyContent: 'center',
          }}
        />
      </SafeAreaView>
      <ScrollView nestedScrollEnabled style={styles.scrollContainer}>
        <View style={{marginTop: scale(40), marginBottom: scale(20)}}>
          <FlatList
            data={cartCardTop}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <TopCard key={index} item={item} />}
          />
        </View>
        <View style={{marginTop: scale(40), marginBottom: scale(20)}}>
          <FlatList
            data={popularProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <CartItemCard key={index} item={item} />
            )}
          />
        </View>

        <View style={styles.cartTotal}>
          <View style={styles.totalItemCon}>
            <Label
              text="SubTotal"
              style={{fontWeight: '300', color: appColors.primary}}
            />
            <Label
              text="$85.00 usd"
              style={{fontWeight: '300', color: appColors.primary}}
            />
          </View>
          {popularProducts?.map((item, key) => {
            const {price,label}=item
            return (
              <View style={styles.totalItemCon}>
                <Label
                  text={label}
                  style={{fontWeight: '300', color: appColors.primary}}
                />
                <Label
                  text={price}
                  style={{fontWeight: '300', color: appColors.primary}}
                />
              </View>
            );
          })}

          <View style={styles.totalItemCon}>
            <Label
              text="Total"
              style={{
                fontWeight: '800',
                color: appColors.primary,
                fontSize: scale(17),
              }}
            />
            <Label
              text="$85.00 usd"
              style={{
                fontWeight: '800',
                color: appColors.primary,
                fontSize: scale(17),
              }}
            />
          </View>
        </View>
        <CustomButton  style={{borderRadius:scale(15), height:scale(70)}} labelStyle={{fontWeight:'800', fontSize:scale(18) }} label={"Realizer Compra"} withGradiant/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.bgLight,
    marginBottom: scale(100),
  },
  header: {
    backgroundColor: appColors.primary,
    alignItems: 'center',
    borderBottomWidth: 12,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    padding: 20,
    margin: 20,
    textAlign: 'center',
  },
  TitleText: {
    fontSize: 25,
    // padding: 20,
    marginVertical: 20,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cartTotal: {
    marginTop: scale(40),
    marginBottom: scale(20),
    backgroundColor: appColors.bgLight,

    padding: scale(20),
    borderRadius: scale(15),
    ...shadow,
  },
  totalItemCon: {
    paddingBottom: scale(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
