import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../actions/newsSrcActions';
import { Spinner, NewsSrcItem } from '../components';

const NewsSrcScreen = ({ navigation: { navigate } }) => {

  const {
    errMessageStyle,
    container,
    mainView,
    title,
    listView
  } = styles;

  const {
    errorMessage,
    loading,
    data
  } = useSelector(({ newsSources }) => newsSources);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const _keyExtractor = ({ id }) => id;

  const onPressSrc = ({ id }) => navigate('Articles', { src: id });
  
  const _renderRow = ({ item }) => <NewsSrcItem item={item} onClick={() => onPressSrc(item)} />;

  loading && <Spinner size="large" />;

  if (errorMessage) {
    return <Text style={errMessageStyle}>{errorMessage}</Text>;
  } else {
    return <SafeAreaView style={container}>
      <View style={mainView}>
        <Text style={title}>
          You can pick a source here
        </Text>
      </View>
      <View style={listView}>
        <FlatList
          data={data}
          keyExtractor={_keyExtractor}
          renderItem={_renderRow} />
      </View>
    </SafeAreaView>;
  }
};

const styles = StyleSheet.create({
  errMessageStyle: { color: 'red' },
  container: { flex: 1 },
  mainView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, color: 'green' },
  listView: { flex: 13 }
});

export default NewsSrcScreen;