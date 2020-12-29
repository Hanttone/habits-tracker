import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

export default function Button({navigation, page, text, margin}) {
  return (
    <ButtonContainer margin={margin}>
      <Pressable onPress={() => navigation.navigate(page)}>
        <ButtonStyled>{text}</ButtonStyled>
      </Pressable>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.View`
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${(props) => props.margin};
`;

const ButtonStyled = styled.Text`
  background-color: #aa7a78;
  color: white;
  width: 184px;
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
