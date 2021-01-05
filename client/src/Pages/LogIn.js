import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';

import Header from '../Components/Header';
import Button from '../Components/Button';
import Input from '../Components/Input';

export default function LogIn({navigation}) {
  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView style={{flex: 1}}>
      <KeyboardAvoidingView>
        <SafeAreaView>
          <ImageBackground
            style={{height: screenHeight, width: screenWidth}}
            source={{
              uri:
                'https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80',
            }}>
            <ContentWrapper>
              <Header text="Habits Tracker" mt="20%" color="white" />
              <LoginWrapper>
                <Input inputValue="User name" />
                <Input inputValue="Password" />
                <Button
                  navigation={navigation}
                  page="Navigation"
                  text="Log in"
                  margin="3%"
                />
                <Button
                  navigation={navigation}
                  page="SignUp"
                  text="Sign up"
                  margin="0%"
                />
              </LoginWrapper>
            </ContentWrapper>
          </ImageBackground>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const ContentWrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LoginWrapper = styled.View`
  height: 67%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
