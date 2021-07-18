/**
 * @author Amusoftech <er.amudeep@gmail.com>
 */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setError} from '../../redux/actions';
import {} from 'react-native-gesture-handler';
import {features, starterIntro} from '../../utils/MockData';
import {AlertHelper} from '../../utils/AlertHelper';
import {
  appColors,
  explorerCategories,
  popularProducts,
  recommeandedProducts,
} from '../../utils/appColors';
import CustomInput from '../../components/CustomInput';
import Label from '../../components/Label';
import CustomButton from '../../components/CustomButton';
import AvatarImage from '../../components/AvatarImage';
import Divider from '../../components/Divider';
import Header from '../../components/Header';
import CatCard from '../../components/category-cards';
import Popular from '../../components/popular';
import Recomanded from '../../components/recomanded';
import {scale} from 'react-native-size-matters';

export default function Home() {
  const [isError, setIsError] = useState({});
  const [text, setText] = useState('hello');
  let error = useSelector((state) => state.error); // getting from reducer.
  const dispatch = useDispatch();
  const hasError = (error) => {
    dispatch(setError({error})); //here we can call a action to set an error in reducer.
  };
  console.log('error is =>', isError);
  useEffect(() => {
    setIsError(error);
  }, [error]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <ScrollView nestedScrollEnabled style={styles.scrollContainer}>
        <View style={{marginTop: scale(50)}}>
          <Label
            text={'Explorar Categories'}
            style={{
              fontWeight: '700',
              fontSize: scale(23),
              marginBottom: scale(20),
            }}
          />
          <FlatList
            horizontal
            data={explorerCategories}
            renderItem={({item, index}) => <CatCard key={index} item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginTop: scale(50)}}>
          <Label
            text={'Productos populares'}
            style={{
              fontWeight: '700',
              fontSize: scale(23),
              marginBottom: scale(20),
            }}
          />

          <FlatList
            style={{paddingTop: scale(10), paddingBottom: scale(10)}}
            horizontal
            data={popularProducts}
            renderItem={({item, index}) => <Popular key={index} item={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={{marginTop: scale(50)}}>
          <Label
            text={'Recomandados'}
            style={{
              fontWeight: '700',
              fontSize: scale(23),
              marginBottom: scale(20),
            }}
          />

          <FlatList
            style={{paddingTop: scale(10), paddingBottom: scale(30)}}
            horizontal
            data={recommeandedProducts}
            renderItem={({item, index}) => (
              <Recomanded key={index} item={item} />
            )}
            showsHorizontalScrollIndicator={false}
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
