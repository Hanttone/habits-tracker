import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Header from '../Components/Header';

export default function HabitsPage() {
  let screenWidth = Dimensions.get('window').width;
  console.log(screenWidth);
  return (
    <HabitsWrapper>
      <ImageBackground
        style={{
          height: 120,
          width: screenWidth,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        source={{
          uri:
            'https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80',
        }}>
        <Filter />
        <Header text="Habits Streak" mt="5%" color="#6E473F" />
      </ImageBackground>
      <ContentWrapper></ContentWrapper>
    </HabitsWrapper>
  );
}

const HabitsWrapper = styled.View`
  height: 100%;
  width: 100%;
  background-color: #aa7a78;
`;

const Filter = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #f2e4e8;
  opacity: 0.7;
`;

const ContentWrapper = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
  elevation: 3;
`;
