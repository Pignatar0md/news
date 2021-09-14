import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, updatePage } from '../actions/articlesActions';
import { Spinner, ArticleItem } from '../components';

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
    data,
    totalResults,
    page
  } = useSelector(({ articles }) => articles);

  const [dispayResults, setDisplayResults] = useState(5);

  const dispatch = useDispatch();
  const pageSize = 5;
  let auxPage = 1;

  useEffect(() => {
    dispatch(getArticles({ pageSize, src, auxPage }));
  }, []);

  const _keyExtractor = ({ title }) => title;

  const _renderRow = ({ item }) => <ArticleItem item={item} />;

  const onLoadMorePress = dir => {
    auxPage = dir === 'next' ? page + 1 : page - 1;
    dispatch(getArticles({ pageSize, src, auxPage }));
    dispatch(updatePage(auxPage));
    setDisplayResults(pageSize * auxPage);
  };

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
        <Text>
          ({dispayResults} /{totalResults})
        </Text>
      </View>
      <View style={listView}>
        <FlatList
          data={data}
          keyExtractor={_keyExtractor}
          renderItem={_renderRow} />
      </View>
      <View style={{ flexDirection: 'row'}}>
        <Button
          disabled={dispayResults !== totalResults}
          onPress={() => onLoadMorePress('prev')}
          title="Prev Page" />
        <Button
          disabled={dispayResults === totalResults}
          onPress={() => onLoadMorePress('next')}
          title="Next Page" />
      </View>
    </SafeAreaView>;
  }
};

const styles = StyleSheet.create({
  errMessageStyle: { color: 'red' },
  container: { flex: 1 },
  mainView: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, color: 'green' },
  listView: { flex: 5 }
});

export default ArticlesScreen;