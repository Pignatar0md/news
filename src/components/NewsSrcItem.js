import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const NewsSrcItem = ({ item, onClick }) => {

  const {
    container,
    sourceName,
    sourceDescription,
    urlStyle
  } = styles;

  const { description, name, url } = item;

  return (
    <TouchableOpacity
      style={container}
      onPress={onClick}
    >
      <Text style={sourceName}>
        {name}
      </Text>
      <Text style={sourceDescription}>
        {description}
      </Text>
      <Text style={urlStyle}>
        url: {url}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  sourceName: {
    fontSize: 18,
    fontWeight: "500",
    margin: 10,
    alignSelf: 'center'
  },
  sourceDescription: {
    fontSize: 12,
    margin: 10
  },
  urlStyle: {
    color: 'blue',
    margin: 10
  }
});

export { NewsSrcItem };