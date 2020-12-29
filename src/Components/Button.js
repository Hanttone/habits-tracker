import React from 'react';
import {Pressable, View, Text} from 'react-native';
import styled from 'styled-components';

export default function Button({navigation}) {
  return (
    <ButtonContainer>
      <Pressable onPress={() => navigation.navigate('Native')}>
        <ButtonStyled>Start</ButtonStyled>
      </Pressable>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.View`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonStyled = styled.Text`
  background-color: #aa7a78;
  color: white;
  width: 183px;
  font-size: 25px;
  font-family: Helvetica;
  font-weight: 700;
  border-radius: 18px;
  height: 43px;
  text-align: center;


  shadow-color: #000;
shadow-offset: {
	width: 0,
	height: 6,
};
shadow-opacity: 0.37;
shadow-radius: 7.49;

elevation: 12;
`;
