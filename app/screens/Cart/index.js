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
import {appColors, cartCardTop,popularProducts} from '../../utils/appColors';
 

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
        <View style={{  marginTop: scale(40), marginBottom: scale(20)}}>
          <FlatList
            data={popularProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <CartItemCard key={index} item={item} />}
          />
        </View>


        
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
});
