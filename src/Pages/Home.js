import React from 'react';
import {Dimensions, SafeAreaView, ImageBackground, View} from 'react-native';
import Header from '../Components/Header';
import Button from '../Components/Button';

export default function HomePage({navigation}) {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView>
      <ImageBackground
        style={{height: screenHeight, width: screenWidth}}
        source={{
          uri:
            'https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80',
        }}>
        <View>
          <Header text="Habits Tracker" />
        </View>
        <Button navigation={navigation} />
      </ImageBackground>
    </SafeAreaView>
  );
}
