/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
 
  StatusBar,
  
  
  
  View,
} from 'react-native';
import HomeScreen from './src/Homescreen';




const App: () => React$Node = () =>  {
  

  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} 
      
      />
      
      <HomeScreen/>
      
    </SafeAreaView>
  );
};



export default App;
