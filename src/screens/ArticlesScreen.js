import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../actions/articlesActions';
import { Spinner, ArticleItem } from "../components";

const ArticlesScreen = ({ route: { params } }) => {

  const {
    errMessageStyle,
    container,
    mainView,
    title,
    listView
  } = styles;

  const { src } = params;
  const {
    errorMessage,
    loading,
    data
  } = useSelector(({ articles }) => articles);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles(src));
  }, []);

  const _keyExtractor = ({ id }) => id;

  const _renderRow = ({ item }) => <ArticleItem item={item} />;

  loading && <Spinner size="large" />;

  if (errorMessage) {
    return <Text style={errMessageStyle}>
      {errorMessage}
    </Text>;
  } else {
    return <SafeAreaView style={container}>
      <View style={mainView}>
        <Text style={title}>
          Articles from {src}
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

export default ArticlesScreen;