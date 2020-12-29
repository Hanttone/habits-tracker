import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

export default function HabitsPage() {
  return (
    <View>
      <Title>Hello World</Title>
    </View>
  );
}

const Title = styled.Text`
  font-size: 30px;
  color: green;
`;
