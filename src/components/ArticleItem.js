import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ArticleItem = ({ item }) => {

  const {
    container,
    titleStyle,
    image,
    textContent,
    authorContainer,
    authorLegend,
    authorName,
    publicationDate
  } = styles;

  const { author, content, title, urlToImage } = item;
  const pubDate = new Date(item.publishedAt);

  return <View style={container}>
    <Text style={titleStyle}>
      {title}
    </Text>
    <View style={{ alignItems: 'stretch' }}>
      <Image
        source={{ uri: urlToImage }}
        style={image} />
      <Text style={textContent}>
        {content}
      </Text>
      <View style={authorContainer}>
        <Text style={authorLegend}>
          Author: 
        </Text>
        <Text style={authorName}>
          {author}
        </Text>
      </View>
      <Text style={publicationDate}>
        {pubDate.toLocaleDateString()}
      </Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  titleStyle: { fontSize: 17, fontWeight: '600', marginHorizontal: 15, marginTop: 15 },
  image: { height: 250, width: '92%', margin: 15 },
  textContent: { fontSize: 12, marginHorizontal: 15 },
  authorContainer: { flexDirection: 'row', margin: 15 },
  authorLegend: { fontSize: 12, fontWeight: '500' },
  authorName: { fontSize: 12, color: 'blue', marginHorizontal: 10 },
  publicationDate: { fontSize: 12, color: 'darkgreen', margin: 15, alignSelf: 'flex-end' }
})

export { ArticleItem };