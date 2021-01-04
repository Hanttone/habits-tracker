import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

export default function Button({
  navigation,
  page,
  text,
  margin,
  width = '184px',
}) {
  return (
    <ButtonContainer>
      <Pressable onPress={() => navigation.navigate(page)}>
        <ButtonStyled width={width} margin={margin}>
          {text}
        </ButtonStyled>
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
  width: ${(props) => props.width};
  font-size: 25px;
  font-family: Helvetica;
  font-weight: 700;
  border-radius: 18px;
  height: 43px;
  text-align: center;
  padding: 0.7%;
  margin-bottom: ${(props) => props.margin};

  elevation: 12;
`;
