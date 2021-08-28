import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewsSrcScreen from './screens/NewsSrcScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import { SafeAreaView } from 'react-native';

const RouterComponent = () => {

  const { Screen, Navigator } = createNativeStackNavigator();
  return <NavigationContainer>
    <Navigator initialRouteName="NewsSrc">
      <Screen
        name="NewsSrc"
        options={{ title: 'Source of News' }}
        component={NewsSrcScreen} />
      <Screen
        name="Articles"
        options={{ title: 'List of Articles' }}
        component={ArticlesScreen} />
    </Navigator>
  </NavigationContainer>;
};

export default RouterComponent;