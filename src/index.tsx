/**
 * This is the entry point of our project.
 * Here, it's defined the main stack for the app
 * and also it's where its screens are configured.
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import InitialScreen from './screens/InitialScreen';
import {RootStackParamList} from './types';
import SearchScreen from './screens/SearchScreen';
import {Provider} from 'react-redux';
import {store} from './redux';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="InitialScreen" component={InitialScreen} />

          <RootStack.Screen name="SearchScreen" component={SearchScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
